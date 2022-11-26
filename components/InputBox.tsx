import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/react';

const InputBox = () => {
	const sendPost = (e: React.MouseEvent<HTMLElement>) => {
		console.log(e);
		e.preventDefault();
	};
	const { data: session, status } = useSession();
	return (
		<div className='bg-white p-2 rounded-2xl shadow-md text-gray-500  font-medium mt-6 flex w-[80%]'>
			<div className='flex space-x-4 items-center'>
				<Image
					className='rounded-full'
					src={session?.user?.image!}
					alt=''
					width={40}
					height={40}
				/>
				<form className='flex flex-1 '>
					<input
						type='text'
						className='rounded-full h-12 bg-gray-100 flex-grow px-5   outline-none'
						placeholder={`What's on your mind, ${session?.user?.name!}`}
					/>
					<button type='submit' className='text-black' onClick={sendPost}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default InputBox;
