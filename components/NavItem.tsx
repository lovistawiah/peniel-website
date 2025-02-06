import Image from 'next/image'
import Link from 'next/link'

const NavItem = ({id,title,href,imgUrl}:{id:number,title:string,href:string,imgUrl:string}) => {
return (
    <li className='h-full w-full hover:bg-zinc-800 rounded-lg p-1'>
    <Link id={`${id}`} href={href} passHref className='flex flex-col items-center justify-center gap-1'>
    <Image src={imgUrl} width={36} height={36} alt={title} />
    <div className="text-lg font-normal">{title}</div>
    </Link>
    </li>

)}

export default NavItem