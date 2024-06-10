import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src="/icons/logo.svg" alt="Logo" className='max-sm:size-10' width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">Stream Sync</p>
      </Link>
      <div className="flex-between gap-5">
        {/* clerk user management */}
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        {/* mobile navigation bar */}
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar;