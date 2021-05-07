import React, { useState } from 'react';

export interface PDPImageProps {
	color?: string;
	pdpImages?: string[];
}

export const PDPImage = ({ color, pdpImages }: PDPImageProps): JSX.Element => {
	const [mainImage, setMainImage] = useState(pdpImages[0]);

	return (
		<div className={`bg-${color} flex flex-row`}>
			<div className='hidden lg:flex flex-col overflow-auto h-4/5 mr-3'>
				{pdpImages
					? pdpImages.map(img => {
							return (
								<button
									type='button'
									onClick={() => setMainImage(img)}
									className='focus:outline-none'
									key={img}>
									<img
										src={img}
										alt='flipped-hero'
										className='rounded-lg mb-3 h-20 w-20'
									/>
								</button>
							);
					  })
					: null}
			</div>

			<div className={`bg-${color}`}>
				<img
					src={mainImage}
					alt='flipped-hero'
					className='lg:rounded-lg max-h-80 w-80 h-80'
				/>
			</div>
		</div>
	);
};
