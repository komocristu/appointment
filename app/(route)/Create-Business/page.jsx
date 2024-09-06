import React from 'react'



function CreateBusiness() {
  return (
    <div>
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        <div>
            <h2 className='text-2xl font-bold'>what should we call your business?</h2>
            <p className='text-sm text-gray-500'>You can always change this later from settings</p>
        </div>
    </div>
  )
}

export default CreateBusiness