import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function hero() {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <div>
            <div className= 'text-center max-w-3xl'>
                <h1 className='text-[65px] font-bold text-slate-800'>Easy scheduling ahead!</h1>
                <p className='text-xl mt-4 text-muted-foreground text-slate-500'>This is a simple and easy way to schedule appointments with this platform it eliminates the need to call or email for an appointment.</p>
            </div>
            <div className='flex justify-center items-center flex-col mt-20'>
                <h2 className='text-sm font-bold'>sign up free with Google or Facebook</h2>
                <div className='flex justify-center items-center gap-5 mt-5'>
                    <Button className='p-7 flex gap-5 items-center'>
                        <img src="/google.png" alt="Google" className="w-6 h-6" />
                        Sign up with Google
                    </Button>
                    <Button className='p-7 flex gap-5 items-center'>
                        <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
                        Sign up with Facebook
                    </Button>
                </div>
                <hr></hr>
                <h2 className='text-sm mt-5 flex-col mt-5'><Link href="/signup" className='text-primary'>Sign up Free with Email.</Link></h2>
            </div>
        </div>
    </div>
  )
}

export default hero