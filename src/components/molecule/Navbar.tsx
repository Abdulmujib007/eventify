'use client'

import Image from "next/image"
import NavLink from "../atom/NavLink"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"


function Navbar() {
  const pathname = usePathname()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div className={`px-[5.56rem] flex justify-between items-end h-[4.2rem] bg-tifyPurple text-[#fff] ${pathname === '/login' || pathname === '/signup' ? 'hidden' :'flex' } `}>
        <section className="flex">
            <Image
                src={'/ticket.svg'}
                alt="ticket-img"
                width={65}
                height={45}
            />
            <p className="text-[2.67rem] text-tifyYellow font-bold font-sans">Eventify</p>
        </section>
        <NavLink/>
        <section className="h-full">
          {
            !isLoggedIn && (
              <div className="text-lg font-medium flex h-full gap-7 items-center">
                  <Link href={'/'}>
                   <span className="p-0">Create Event</span>
                  </Link>
                  <button onClick={() => setIsLoggedIn(true)}>
                    Login
                  </button>
                  <div className="h-full flex items-center">
                  <button className="px-5 py-2 bg-tifyYellow rounded-[10px] text-black">
                    Sign up
                  </button>
                  </div>
              </div>
            )
          }
           { isLoggedIn && (
              <div>
                  <span>Logged in</span>
              </div>
            )
          }
          
        </section>
    </div>
  )
}

export default Navbar