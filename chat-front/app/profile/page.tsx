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
                <div className='m-8 w-[600px] mx-auto'>
                    <div className='flex justify-between'>
                        <Image className='' width={120} height={120} src={logo} alt='search' />
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 items-center'>
                                <h2 className='text-xl'>jefferson___junior</h2>
                                <Link className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800' href={'/settings'}>Edit profile</Link>
                                <Link className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800' href={'/search'}>Search people</Link>
                            </div>
                            <div>
                                41 <span>contacts</span>
                            </div>
                            <span>Jeffy</span>
                        </div>


                    </div>
                </div>
                <div className='border-b border-neutral-800'></div>
                {/* <span className='w-full h-1/2 flex justify-center items-center text-neutral-700'>You don't have contacts.</span> */}
                <div className='m-4 text-xl'>Your contacts</div>
                <div className='border-b border-neutral-800'></div>
                <div className='overflow-y-scroll w-[100%]'>
                    <div className='relative m-2'>
                        <input className='w-full bg-neutral-700 p-2 pl-10 rounded-xl hover:bg-neutral-800' type='text' placeholder='Search' />
                        <Image className='absolute left-2 top-1/2 translate-y-[-50%]' width={20} height={20} src={logo} alt='search' />
                    </div>
                    <ul className='flex flex-col'>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='flex items-center gap-4 py-4 cursor-pointer'>
                            <div className='flex  items-center gap-4 px-4'>
                                <Image width={40} height={40} src={logo} alt={'logo'} />
                                <div className='w-[600px] flex justify-between items-center'>
                                    <div>
                                        <span>Mur Murova</span>
                                        <div className='text-slate-400 text-sm'>я не знаю кто я, но зовут меня григорий</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Message</button>
                                        <button type='button' className='bg-neutral-700 rounded-md px-4 py-1 hover:bg-neutral-800'>Remove</button>
                                    </div>
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