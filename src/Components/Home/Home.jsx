import React from 'react'
import Banner from '../Banner/Banner'
import Brand from '../Brand/Brand'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
        <Banner/>
        <div className='my-12 bg-gray-100'>
           <Brand/>
           <Footer/>
        </div>
    </div>
  )
}
