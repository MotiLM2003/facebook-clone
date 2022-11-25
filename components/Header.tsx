import Image from 'next/image';
import React from 'react';
import {
	BellIcon,
	ChatIcon,
	HomeIcon,
	UserGroupIcon,
	ChevronDownIcon,
	ViewGridIcon,
} from '@heroicons/react/solid';

import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';

const Header = () => {
	return (
		<header className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
			<div className='flex items-center'>
				<Image
					src='https://links.papareact.com/5me'
					width={40}
					height={40}
					alt=''
					layout='fixed'
				/>
				<div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
					<SearchIcon className='h-6 text-gray-600' />
					<input
						className='hidden md:inline-flex  ml-2 flex-shrink items-center bg-transparent outline-none '
						type='text'
						placeholder='Search facebook'
					/>
				</div>
			</div>
			<div className='flex justify-center flex-grow'>
				<div className='flex space-x-6 md:space-x-2'>
					<HeaderIcon Icon={HomeIcon} active={true} />
					<HeaderIcon Icon={FlagIcon} active={false} />
					<HeaderIcon Icon={PlayIcon} active={false} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={HomeIcon} active={false} />
				</div>
			</div>
			<div className='flex items-center sm:space-x-2'>
				{/* <Image  /> */}
				<p className='whitespace-nowrap font-semibold pr-3'>Moti Elmakyes</p>
				<ViewGridIcon className='icon' />
				<ChatIcon className='icon' />
				<BellIcon className='icon' />
				<ChevronDownIcon className='icon' />
			</div>
		</header>
	);
};

export default Header;