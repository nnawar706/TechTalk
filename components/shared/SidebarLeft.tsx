"use client"

import { SignedOut } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Link from "next/link"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"

const SidebarLeft = () => {
  const pathname = usePathname()
  
  return (
    <section className="sticky left-0 top-0 w-60 pt-28 px-6 bg-gray-50 dark:bg-gray-900 
    hidden lg:flex flex-col">
      <nav className="flex flex-col justify-center gap-4">
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
        <SignedOut>
          <Button asChild className="mt-6 bg-orange-400 hover:bg-orange-500">
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </SignedOut>
      </nav>
    </section>
  )
}

export default SidebarLeft