import { useState, useContext } from 'react';
import './App.css';
import { Form } from './types/form';
import ElementRenderer from './components/ElementRenderer';
import { AppContext } from './context/Provider';
import Toggle from './components/elements/Toggle';
import Modal from 'react-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
	const { finalValues, setFinalValues, conditions, setConditions } =
		useContext(AppContext);

	const [textAreaValue, setTextAreaValue] = useState('');
	const [jsonSyntaxHighlighter, setJsonSyntaxHighlighter] = useState('');
	const [jsonString, setJsonString] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	let _finalValues = finalValues;

	function getInitialValues(values: Form[], groupKey: string = '') {
		values.forEach((e) => {
			let obj = {};

			if (e?.validate?.defaultValue) {
				if (!!groupKey) {
					obj = {
						..._finalValues,

						[groupKey]: {
							// @ts-ignore
							..._finalValues[groupKey],
							[e.jsonKey]: e.validate?.defaultValue,
						},
					};
				} else {
					obj = {
						..._finalValues,

						[e.jsonKey]: e.validate?.defaultValue,
					};
				}

				setFinalValues(obj);
				_finalValues = obj;
			}

			if (e?.subParameters) {
				getInitialValues(
					e.subParameters,
					e.uiType === 'Ignore' ? groupKey : e.jsonKey
				);
			}
		});
	}

	function handleJsonData() {
		let parsedData: Form[];

		try {
			parsedData = JSON.parse(textAreaValue);
			parsedData.sort((a, b) => a.sort - b.sort);
		} catch (error) {
			alert('Invalid Syntax in JSON \n' + error);

			return;
		}

		// Reseting the form
		setFinalValues({});
		_finalValues = {};

		setJsonString(JSON.stringify(parsedData));
		getInitialValues(parsedData);
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		setJsonSyntaxHighlighter(JSON.stringify(finalValues, undefined, 4));

		setIsModalOpen(true);

		console.log('Submitted', finalValues);
	}

	const jsonData: Form[] = jsonString ? JSON.parse(jsonString) : [];

	// @ts-ignore
	const showAdvancedFields = conditions['showFormAdvancedFields'];

	return (
		<div className='grid lg:grid-cols-2 gap-4 lg:gap-0 h-screen p-2'>
			<aside className='p-2 flex flex-col items-start gap-4'>
				<textarea
					rows={20}
					value={textAreaValue}
					placeholder='Enter your UI-Schema'
					className='p-4 border-2 w-full h-full rounded-md'
					onChange={(e) => {
						setTextAreaValue(e.target.value)
					}}
				/>

				<button
					className='py-2 px-4 text-white font-semibold bg-gray-700 rounded-md'
					onClick={handleJsonData}>
					Generate Form
				</button>
			</aside>

			<section className='p-2 lg:overflow-auto'>
				{jsonData.length !== 0 && (
					<form
						onSubmit={handleSubmit}
						className='w-full flex flex-col items-end gap-2 p-2 border border-gray-300 rounded-md '>
						<h2 className='w-full text-lg font-semibold left-2 relative'>
							New {jsonData[0].label.split(' ')[0]}
						</h2>

						<hr className='w-full my-1 border' />

						{jsonData.map((e, index) => (
							<ElementRenderer key={e.jsonKey + index} {...e} />
						))}

						<hr className='w-full my-1 border' />

						<div className='w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8'>
							<Toggle
								label={
									!showAdvancedFields
										? 'Show advanced fields'
										: 'Hide advanced fields'
								}
								name='FormToggle'
								checked={showAdvancedFields || false}
								onChange={(e) => {
									setConditions?.({
										...conditions,
										showFormAdvancedFields: e,
									});
								}}
							/>

							<div className='flex gap-4'>
								<button
									type='reset'
									className='py-2 px-4 font-semibold border-2 rounded-md'>
									Cancel
								</button>

								<button
									type='submit'
									className='py-2 px-4 text-white font-semibold bg-gray-700 rounded-md'>
									Submit
								</button>
							</div>
						</div>
					</form>
				)}
			</section>

			<Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
				<div className='w-full relative h-8'>
					<button
						onClick={() => setIsModalOpen(false)}
						className='p-1 w-6 h-6 grid place-content-center font-bold text-white absolute right-2 bg-red-500 rounded-full'>
						X
					</button>
				</div>

				<SyntaxHighlighter
					customStyle={{
						width: '100%',
						borderRadius: 10,
					}}
					language='json'
					style={vs2015}>
					{jsonSyntaxHighlighter}
				</SyntaxHighlighter>
			</Modal>
		</div>
	);
}

export default App;
