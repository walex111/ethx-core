import React from 'react';

export interface IconImageProps {
	borderColor?: string;
	color?: string;
	iconImage?: string;
}

export const IconImage = ({
	borderColor,
	color,
	iconImage,
}: IconImageProps): JSX.Element => {
	return (
		<div
			className={`rounded-full border-2 border-${borderColor} bg-${color} w-24 h-24`}>
			<img
				src={iconImage}
				alt='black-owned'
				width={60}
				height={60}
				className='m-auto pt-3'
			/>
		</div>
	);
};
