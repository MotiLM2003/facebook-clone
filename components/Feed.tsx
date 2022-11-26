import React from 'react';
import InputBox from './InputBox';
import Stories from './Stories';

const Feed = () => {
	return (
		<div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto max-w-[800px] flex flex-col items-center'>
			<Stories />
			<InputBox />
		</div>
	);
};

export default Feed;
