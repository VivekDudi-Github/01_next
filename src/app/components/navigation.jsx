"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignIn, SignInButton } from "@clerk/nextjs";

function Navigation() {
    const Pathaname  = usePathname() ;
  return (
    <>
    <Link href="/" className={` mr-4  ${Pathaname === "/" ? "text-white" : "text-cyan-500"}` }>
        Home
    </Link>
    <Link href="/about" className={` mr-4  ${Pathaname === "/about" ? "text-white" : "text-cyan-500"}` }>
        About
    </Link>
    <Link href="/product/1" className={` mr-4  ${Pathaname.startsWith("/product") ? "text-white" : "text-cyan-500"}` }>
        Product 1
    </Link>
    <SignInButton mode="modal"/>
    
    </>
    
  )
}

export default Navigation