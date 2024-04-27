// "use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { SignedIn, UserButton } from '@clerk/nextjs'
import ToggleMode from './ToggleMode'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  return (
    <nav
    className="flex justify-between items-center fixed z-50 w-full 
    gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href="/">
            <Image
                src="/assets/images/logo.svg"
                width={120}
                height={120}
                alt='TechTalk'
            />
        </Link>

        <Search/>

        <div className="flex justify-between items-center gap-2">

            <ToggleMode/>

        {/* <SignedIn>
            <UserButton
                afterSignOutUrl='/'
                appearance={{
                    elements: {
                        avatarBox: 'h-10 w-10'
                    },
                    variables: {
                        colorPrimary: '#ff7000'
                    }
                }}
            />
        </SignedIn> */}

            <NavbarMobile/>

        </div>
    </nav>
  )
}

export default Navbar