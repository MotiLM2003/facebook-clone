import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';
const Login = () => {
	return (
		<div className='grid place-items-center'>
			<Image
				src='https://links.papareact.com/t4i'
				width={400}
				height={400}
				objectFit='contain'
				alt=''
			/>
			<h1
				onClick={() => {
					signIn();
				}}
				className='p-5 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-600 transition duration-500'
			>
				Login with facebook
			</h1>
		</div>
	);
};

export default Login;
