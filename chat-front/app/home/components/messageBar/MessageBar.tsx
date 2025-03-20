import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/images/sidebar/emoticon.png'
const MessageBar = () => {

    return (
        <div className='flex flex-col w-fit md:w-[300px] h-screen border-r border-neutral-700'>
            <div className='flex justify-between items-center text-xl px-4 py-8 border-b-[1px]'>
                <span className='hidden md:block'>ilnitskii</span>
                <button className='mx-auto md:mx-0' type='button'>
                    <Image width={20} height={20} src={logo} alt={'logo'} />
                </button>
            </div>

            <div className='px-4 mt-4'>Messages</div>

            <ul className='flex flex-col overflow-y-scroll w-[100%]'>
                <li className='flex items-center gap-4 hover:bg-gray-900 py-4 cursor-pointer'>
                    <div className='flex items-center gap-4 px-4 mx-auto md:mx-0'>
                        <Image width={30} height={30} src={logo} alt={'logo'} />
                        <div className='hidden md:block'>
                            <span>Mur Murova</span>
                            <div className='text-slate-400 text-sm'>
                                <span>Hello, Dear!</span>
                                <span > ↔ 1d</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MessageBar