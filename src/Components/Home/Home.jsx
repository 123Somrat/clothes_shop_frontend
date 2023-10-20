import React from 'react'
import Banner from '../Banner/Banner'
import Brand from '../Brand/Brand'
import Footer from '../Footer/Footer'
import TopPicks from '../../TopPicks/TopPicksProducts'
import TopPicksProducts from '../../TopPicks/TopPicksProducts'

export default function Home() {
  return (
    <div>
        <Banner/>
        <div className=' bg-gray-100'>
           <Brand/>
            <TopPicksProducts/>
           <Footer/>
        </div>
    </div>
  )
}
