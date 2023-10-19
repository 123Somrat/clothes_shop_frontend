import Marquee from "react-fast-marquee"

export default function LatestNewses() {
   const news = ["with out delivary cost if you bought product more then 100 euro","Winter offers start from next few days","CheckOut our latest product"]


  return (
    <div className='h-[60px] bg-gray-200 grid grid-cols-3'>
        {
            news.map((news,id)=><Marquee key={id}>
                     <h1>{news}</h1>
             </Marquee>
             )
        }
      
    </div>
  )
}
