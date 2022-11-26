import Image from 'next/image';
import React from 'react';

interface Props {
	name?: any;
	src?: any;
	profile: any;
}
const StoryCard = ({ name, src, profile }: Props) => {
	return (
		<div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 md:hover:scale-[1.1] hover:opacity-80'>
			<Image
				className='absolute opacity-0 lg:opacity-100 rounded-full z-50 bottom-1 right-2'
				src={profile}
				alt=''
				width={40}
				height={40}
				layout='fixed'
				objectFit='cover'
			/>
			<Image
				className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
				src={src}
				alt=''
				layout='fill'
			/>
		</div>
	);
};

export default StoryCard;
