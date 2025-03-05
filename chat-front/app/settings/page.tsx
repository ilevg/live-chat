import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'
import logo from '../../public/images/sidebar/emoticon.png'
import Image from 'next/image'

const Settings = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='m-8 w-full'>
                <div className='flex flex-col gap-8'>
                    <h2 className='text-xl'>Edit profile</h2>
                    <div className='flex justify-between items-center bg-neutral-800 p-4 rounded-2xl'>
                        <div className='flex items-center gap-3'>
                            <div><Image width={50} height={50} src={logo} alt={'text'} /></div>
                            <div className='flex flex-col'>
                                <span>jefferson___junior</span>
                                <span className='text-gray-500'>Jeffy</span>
                            </div>
                        </div>

                        <button className='w-32 h-8 bg-blue-500 rounded-lg' type='button'>Change Photo</button>
                    </div>

                    <form className='flex flex-col gap-8' action="" method="post">
                        <div className='flex flex-col gap-2'>
                            <span>Name</span>
                            <input className='bg-transparent p-4 border rounded-xl' type='text' placeholder='Change Name'></input>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>Nickname</span>
                            <input className='bg-transparent p-4 border rounded-xl' type='text' placeholder='Change Nickname'></input>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span>Bio</span>
                            <input className='bg-transparent p-4 border rounded-xl' type='text' placeholder='Bio' />
                        </div>
                        <button className='w-72 h-12 bg-blue-500 rounded-lg my-0 ml-auto mr-0' type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Settings