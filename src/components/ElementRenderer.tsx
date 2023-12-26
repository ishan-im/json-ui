import React, { useContext } from 'react';
import { Form } from '../types/form';
import { AppContext } from '../context/Provider';
import { uiComponents } from './UiComponents';

type Props = {
	isGroup?: boolean;
	isIgnore?: boolean;
	groupKey?: string | undefined;
} & Form;

const ElementRenderer: React.FC<Props> = ({
	uiType,
	isGroup = false,
	isIgnore = false,
	...rest
}) => {
	const { conditions, setConditions, finalValues, setFinalValues } =
		useContext(AppContext);

	if (uiComponents[uiType!])
		return uiComponents[uiType!].element(
			{
				uiType,
				isGroup,
				isIgnore,
				...rest,
			},
			{
				conditions,
				setConditions,
				finalValues,
				setFinalValues,
				// @ts-ignore
				showElement: conditions['showFormAdvancedFields'],
			}
		);

	return <p className='text-red-500'>Element not found</p>;
};

export default ElementRenderer;
