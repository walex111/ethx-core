import React from 'react';

export interface SectionTextProps {
	title: string;
	fontColor?: string;
	subtitle: string;
}

export const SectionText = ({
	title,
	fontColor,
	subtitle,
}: SectionTextProps): JSX.Element => {
	return (
		<div className='w-4/5 text-center m-auto lg:ml-0 lg:text-left mt-5'>
			<h2 className='font-regular text-3xl lg:text-4xl text-primary'>
				{title}
			</h2>
			<h4
				className={`font-regular mx-10 lg:mx-0 text-xs lg:text-lg 
				${fontColor ? `text-${fontColor}` : 'text-gray-500'}`}>
				{subtitle}
			</h4>
		</div>
	);
};
