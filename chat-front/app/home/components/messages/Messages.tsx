import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/sidebar/emoticon.png'
const Messages = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-2'>
            <Image width={70} height={70} src={logo} alt='logo' />
            <span className='text-2xl'>Your messages</span>
            <span className='text-gray-400'>Send a message to start a chat.</span>
            <button className='rounded-xl bg-sky-600 p-2' type="button">Send message</button>
        </div>
    )
}

export default Messages