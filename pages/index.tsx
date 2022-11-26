import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import { getSession } from 'next-auth/react';
import Login from '../components/Login';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

interface Props {
	session: any;
}

const Home = ({ session }: Props) => {
	if (!session) return <Login />;

	React.useEffect(() => {
		console.log(session);
	}, []);

	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className='flex'>
				<Sidebar />
				<Feed />
			</main>
		</div>
	);
};

export default Home;

export async function getServerSideProps(context: any) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
