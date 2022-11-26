import Image from 'next/image';
import React from 'react';

interface Props {
	Icon?: any;
	src?: any;
	title: string;
}
const SidebarRow = ({ src, Icon, title }: Props) => {
	return (
		<div className='flex items-center   space-x-2'>
			{src && (
				<Image
					src={src}
					className='rounded-full'
					width={30}
					height={30}
					layout='fixed'
					alt=''
				/>
			)}

			{Icon && <Icon className='h-8 w-7 text-blue-500' />}
			<p className='hidden sm:inline-flex font-medium'>{title}</p>
		</div>
	);
};

export default SidebarRow;
