import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server'

 function header() {
  return (
    <div>
        <div className='flex justify-between items-center shadow-md py-4 p-6'>
            <Image src="/logo.svg" alt="logo" width={100} height={100}
            className='w-[50px] md:w-[150px]'
            />
            <ul className='hidden md:flex gap-16'>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Products</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact Us</li>
                <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
            </ul>
            <div className='flex gap-4'>
               <LoginLink> <Button variant="ghost">Login</Button></LoginLink>
               <RegisterLink> <Button variant="default">Join Us</Button></RegisterLink>
            </div>
        </div>
    </div>
  )
}

export default header