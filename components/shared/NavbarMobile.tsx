"use client"

import Link from 'next/link'
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"
import { sidebarLinks } from "@/constants"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { Button } from "../ui/button"

const NavbarMobile = () => {
    const pathname = usePathname()
  
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="cursor-pointer md:hidden"/>
            </SheetTrigger>
            <SheetContent side="right" className="border-none">
                <SheetHeader>
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.svg"
                            width={100}
                            height={100}
                            alt="TechTalk"
                        />
                    </Link>
                </SheetHeader>
                <div className="flex h-full flex-col gap-3 pt-10">
                    {sidebarLinks.slice(0, 4).map((item) => {
                        const isActive = pathname === item.route

                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={`flex gap-3 align-items-center py-3 rounded-lg justify-content-start 
                                no-underline ${!isActive ? 'text-primary' : 'text-orange-400'}`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}

                    <SignedIn>
                        {sidebarLinks.slice(4).map((item) => {
                            const isActive = pathname === item.route

                            return (
                                <Link
                                    href={item.route}
                                    key={item.id}
                                    className={`flex gap-3 align-items-center py-3 rounded-lg justify-content-start 
                                    no-underline ${!isActive ? 'text-primary' : 'text-orange-400'}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="mt-6 bg-orange-400 hover:bg-orange-500">
                            <Link href="/sign-in">Get Started</Link>
                        </Button>
                    </SignedOut>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarMobile