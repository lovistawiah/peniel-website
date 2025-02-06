"use client"
import {SIDEBARLIST} from '@/constants/index'
import NavItem from './NavItem'
import Image from 'next/image'
import {useNavigationToggle} from '@/hooks/useNavigationToggle'

const NavBar = () => {
  const { isOpen,handleClick } = useNavigationToggle();
  return (
    <section className='w-full top-0 left-0 right-0 flex flex-col absolute'>
      <section className=' flex justify-between p-2'>
        <Image src='/PHMLogo.png' width={48} height={48} alt='Peniel House Ministries International' />
        <Image onClick={handleClick} src={isOpen ? '/menu_bar.svg': '/close.svg'} alt='menu bar' width={36} height={36} />
      </section>
   {!isOpen && <nav className="text-center h-fit p-[4px] mt-6 w-full rounded-lg shadow-lg bg-zinc-950">
      <ul className=' justify-evenly items-center h-full flex flex-col'>
      {
        SIDEBARLIST.map((navItem) => (
          <NavItem key={navItem.id} id={navItem.id}  title={navItem.title} imgUrl= {navItem.imgUrl} href={navItem.href}/>
        ))
      }
      </ul>
    </nav>
    }
    </section>
  )
}
export default NavBar
