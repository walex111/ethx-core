import React, { FC } from 'react';

export interface TextInputProps {
	/* Props here */
	placeholder: string;
	onChange?;
	css?;
	required?: boolean;
}

export const TextInput: FC<TextInputProps> = ({
	placeholder,
	onChange,
	css,
	required,
}: TextInputProps) => {
	return (
		<input
			type='text'
			className={`flex w-full focus:outline-none lg:text-lg border-2 
			  text-gray-500 border-primary rounded-full px-7 py-1 
			    bg-gray-50 ${css}`}
			placeholder={placeholder}
			onChange={() => onChange()}
			required={required}
		/>
	);
};
