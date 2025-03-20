import React from 'react'
import { sidebarNavItems } from './data'
import Image from 'next/image'
import Link from 'next/link'

type SidebarProps = { namePage?: string }

const Sidebar = ({ namePage }: SidebarProps) => {
  const messPage = namePage === 'messages'

  return (
    <div
      className={`fixed z-1 bg-[#0a0a0a] md:static left-0 bottom-0 flex w-full ${messPage ? 'md:w-fit' : 'md:w-[300px]'} border-t md:flex-col gap-10 md:h-screen md:border-r border-neutral-700 p-8 md:overflow-y-scroll`}
    >
      <div className='hidden h-[30px] text-3xl md:block'>{messPage ? 'L' : 'Live Chat'}</div>
      <nav className='w-full md:w-fit'>
        <ul className='flex gap-8 justify-between md:flex-col'>
          {
            sidebarNavItems.length && sidebarNavItems.map((link, index) => (
              <li key={index} className='w-fit'>
                <Link className='flex gap-4 items-center' href={link.link}>
                  <Image width={30} height={30} src={link.logo} alt={link.text} />
                  <span className='hidden md:inline'>{messPage ? '' : link.text}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
