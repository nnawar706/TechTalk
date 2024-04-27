"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Image from "next/image"
import { Menu } from "lucide-react"
import Link from "next/link"

const NavbarMobile = () => {
    const pathname = usePathname()
  
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className="cursor-pointer md:hidden"/>
            </SheetTrigger>
            <SheetContent side="right" className="border-none">
                <Link href="/">
                    <Image
                        src="/assets/images/logo.svg"
                        width={100}
                        height={100}
                        alt="TechTalk"
                    />
                </Link>
            </SheetContent>
        </Sheet>
    )
}

export default NavbarMobile