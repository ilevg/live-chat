import React from 'react'
import { sidebarNavItems } from './data'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-10 w-[300px] h-screen border-r border-neutral-700 p-8 hover:overflow-y-scroll'>
      <div className='text-3xl'>Live Chat</div>
      <nav>
        <ul>
          <ul className='flex flex-col gap-8 '>
            {
              sidebarNavItems.length && sidebarNavItems.map((link, index) => (
                <li key={index} className='flex items-center gap-4'>
                  <Image width={30} height={30} src={link.logo} alt={link.text} />
                  <a href={link.link}>{link.text}</a>
                </li>
              ))
            }
          </ul>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
