'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({ item }) {
    console.log(item.url)
    const pathName = usePathname();
  return (
    <Link   className={`rounded p-1 ${pathName == item.url && 'bg-black text-white'}`} href={item.url}>{item.title }</Link>

  )
}

export default NavLink