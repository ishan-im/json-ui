import React, { createContext, useState } from 'react';
import { Component } from '../types/component';

type AppContextProps = {
	conditions: {};
	setConditions: (value: {}) => void;
	finalValues: {};
	setFinalValues: (value: {}) => void;
};

export const AppContext = createContext<AppContextProps>({
	conditions: {},
	setConditions(value) {},
	finalValues: {},
	setFinalValues(value) {},
});

export const Provider: React.FC<Component> = ({ children }) => {
	const [conditions, setConditions] = useState({});
	const [finalValues, setFinalValues] = useState({});

	return (
		<AppContext.Provider
			value={{
				conditions,
				setConditions,
				finalValues,
				setFinalValues,
			}}>
			{children}
		</AppContext.Provider>
	);
};
