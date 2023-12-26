import { useState } from 'react';
import Select from 'react-select';
import clsx from 'clsx';
import { parseLabel } from '../../utils/parse-label';
import ToolTip from '../ToolTip';
import { Form } from '../../types/form';

export type Option = {
	value: string;
	label: string;
};

type Props = {
	isGroup?: boolean;
	name: string;
	id?: string;
	label?: string;
	description?: string;
	required?: boolean;
	defaultValue?: string;
	onChange?: (data: Option) => void;
	options: Option[];
	hide?: boolean;
	validate: Form['validate'];
	readonly?: boolean;
};

const ListInput: React.FC<Props> = ({
	name,
	id = name,
	label,
	options,
	onChange,
	isGroup,
	hide,
	description,
	validate,
	defaultValue = validate?.defaultValue,
	required = validate.required,
	readonly = validate.immutable,
	...rest
}) => {
	const [value, setValue] = useState<Option>({
		value: defaultValue || '',
		label: defaultValue || '',
	});

	const handleSelectionChange = (data: Option) => {
		setValue(data);

		onChange?.(data);
	};

	if (hide) return null;

	return (
		<div
			className={clsx(
				!isGroup && 'card',
				'grid grid-cols-2 gap-1 items-center'
			)}>
			{label && (
				<label htmlFor={name} className='font-semibold'>
					{parseLabel(label)}{' '}
					{required && <span className='text-red-500'>*</span>}
					{description && <ToolTip label={label} description={description} />}
				</label>
			)}

			<Select
				id={id}
				{...rest}
				menuPosition='fixed'
				className='block capitalize w-full text-left font-medium border border-gray-300 rounded-md shadow-sm appearance-none sm:text-sm'
				styles={{
					control: (base) => ({
						...base,
						border: '0',
						backgroundColor: '#f1f7fe',
						boxShadow: '0',
						'&:hover': {
							border: '0',
						},
					}),
				}}
				required={required}
				value={value}
				onChange={(data) => handleSelectionChange(data as Option)}
				options={options}
				isMulti={false}
				isDisabled={readonly}
			/>
		</div>
	);
};

export default ListInput;
