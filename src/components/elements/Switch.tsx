import React, { useState } from 'react';
import { Form } from '../../types/form';
import clsx from 'clsx';
import { parseLabel } from '../../utils/parse-label';
import ToolTip from '../ToolTip';

type Props = {
	isGroup?: boolean;
	label: string;
	name: string;
	description?: string;
	required?: boolean;
	jsonKey: Form['jsonKey'];
	onChange: (value: boolean) => void;
	hide?: boolean;
	validate: Form['validate'];
} & React.InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<Props> = ({
	label,
	jsonKey,
	name = jsonKey,
	onChange,
	checked,
	isGroup,
	hide,
	description,
	validate,
	required = validate.required,
	...rest
}) => {
	const [value, setValue] = useState(checked);

	if (hide) return null;

	return (
		<div className={clsx(!isGroup && 'card', 'flex items-center gap-4')}>
			<input
				{...rest}
				{...{ required }}
				name={name}
				id={name}
				type='checkbox'
				checked={value}
				className='w-4 h-4'
				onChange={() => {
					setValue(!value);
					onChange(!value);
				}}
			/>

			{label && (
				<label htmlFor={name} className='font-semibold'>
					{parseLabel(label)}{' '}
					{/* {required && <span className="text-red-500">*</span>} */}
					{description && <ToolTip label={label} description={description} />}
				</label>
			)}
		</div>
	);
};

export default Switch;
