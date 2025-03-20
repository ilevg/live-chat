import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/sidebar/emoticon.png'
import Link from 'next/link'

const Profile = () => {
    return (
        <div className='flex overflow-hidden'>
            <Sidebar />
            <div className='w-full'>
                <div className='m-4 md:m-8 md:w-[600px] md:mx-auto'>
                    <div className='flex flex-col gap-4 justify-center items-center md:justify-between md:mx-2'>
                        <Image className='w-[80px] h-[80px] xl:w-[120px] xl:h-[120px]' width={120} height={120} src={logo} alt='search' />
                        <div className='flex flex-col items-center gap-2 md:gap-4'>
                            <div className='flex gap-4 items-center'>
                                <h2 className='text-xl'>jefferson___junior</h2>
                            </div>
                            <div>
                                41 <span>contacts</span>
                            </div>
                            <span>Jeffy</span>
                        </div>
                        <div className='mt-1'>
                            <Link className='bg-neutral-700 rounded-md px-4 mr-2 py-2 hover:bg-neutral-800' href={'/settings'}>Edit profile</Link>
                            <Link className='bg-neutral-700 rounded-md px-4 py-2 hover:bg-neutral-800' href={'/search'}>Search people</Link>
                        </div>

                    </div>
                </div>
                <div className='border-b border-neutral-800'></div>
                {/* <span className='w-full h-1/2 flex justify-center items-center text-neutral-700'>You don't have contacts.</span> */}
                <div className='m-4 text-xl'>Your contacts</div>
                <div className='border-b border-neutral-800'></div>
                <div className='overflow-y-scroll w-full '>
                    <div className='relative m-2'>
                        <input className='w-full bg-neutral-700 p-2 pl-10 rounded-xl hover:bg-neutral-800' type='text' placeholder='Search' />
                        <Image className='absolute left-2 top-1/2 translate-y-[-50%]' width={20} height={20} src={logo} alt='search' />
                    </div>

                    <div className='border-b border-neutral-800'></div>

                    <ul className='flex flex-col max-w-[1000px] mx-auto'>
                        <li className='flex justify-between items-center px-4 py-4'>
                            <div className='w-full flex justify-between items-center'>
                                <button type='button' className='flex gap-4 cursor-pointer'>
                                    <Image width={40} height={40} src={logo} alt={'logo'} />
                                    <span className='flex flex-col items-start'>
                                        <span>Mur Murova</span>
                                        <span className='text-slate-400 text-sm'>I dont know who i am</span>
                                    </span>
                                </button>
                                <div className='flex gap-2'>
                                    <button type='button' className='hidden md:block bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                    <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile