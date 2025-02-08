import React from 'react'
import { IoLogoFacebook } from 'react-icons/io'
import { IoCallSharp, IoLocationSharp, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

const FooterGrid = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 items-center mx-6 md:mx-20'>
      <div className='w-full'>
        <h2>Call</h2>
        <div className='my-2'>
          <div className='flex items-center font-semibold'>
            <IoCallSharp/>
            <p className='text-lg'>+233-123456789</p>
          </div>
          <div className='flex items-center font-semibold'>
            <IoCallSharp/>
            <p className='text-lg'>+233-123456789</p>
          </div>
          <div className='flex items-center font-semibold'>
            <IoCallSharp/>
            <p className='text-lg'>+233-123456789</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h2>Location</h2>
        <div>
          <div className='flex flex-row gap-2 my-2'>
            <div>
              <IoLocationSharp className='text-xl text-blue-600'/>
            </div>
            <div>
              <p className='text-lg'>Western Region</p>
              <p className='text-xl'>Awaso</p>
              <p className='text-lg'>P.O BOX 76</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h2>Social Media</h2>
        <div>
          <div className='flex items-center gap-2 '>
            <div className='text-blue-700 bg-slate-50 rounded p-1'>
              <IoLogoFacebook/>
            </div>
            <a href="">Facebook</a>
          </div>
          <div className='flex items-center'>
            <div className='bg-white rounded-full p-1'>
              <IoLogoTwitter className='text-blue-600'/>
            </div>
            <a href="">Twitter</a>
          </div>
          <div className='flex items-center'>
            <div className='p-1 bg-red-700'>
              <IoLogoInstagram/>
            </div>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterGrid
