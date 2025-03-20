import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import logo from '../../public/images/sidebar/emoticon.png'
import Image from 'next/image'

const Search = () => {
    return (
        <div className='flex overflow-hidden'>
            <Sidebar />
            <div className='w-full'>
                <div className='m-4 md:m-8'>
                    <div className='flex flex-col '>
                        <h2 className='text-xl mb-8'>Search</h2>
                        <div className='relative'>
                            <input className='w-full bg-neutral-700 p-4 pl-10 rounded-xl' type='text' placeholder='Search' />
                            <Image className='absolute left-2 top-1/2 translate-y-[-50%]' width={20} height={20} src={logo} alt='search' />
                        </div>

                    </div>
                </div>
                <div className='border-b border-neutral-800'></div>
                <span className='w-full h-1/2 flex justify-center items-center text-neutral-700'>No results found.</span>
                {/* <ul className='flex flex-col overflow-y-scroll w-[100%]'>
                    <li className='flex items-center gap-4 hover:bg-gray-900 py-4 cursor-pointer'>
                        <div className='flex items-center gap-4 px-4'>
                            <Image width={40} height={40} src={logo} alt={'logo'} />
                            <div>
                                <span>Mur Murova</span>
                                <div className='text-slate-400 text-sm'>
                                    <span>я не знаю кто я, но зовут меня григорий</span>
                                    <span > ↔ 1d</span>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Search