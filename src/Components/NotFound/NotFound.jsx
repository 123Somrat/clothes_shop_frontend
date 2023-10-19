import Lottie from "lottie-react";
import notFound from "../../../public/animation_lnhzy7r4.json"
import noData from "../../../public/animation_lnxlv9ml.json"

export default function NotFound() {



  return (
    <div className="w-[500px] h-[500px] mx-auto">
      <Lottie 
      animationData={noData} 
      loop={true}
      height={400}
      width={400}
      />
      
    </div>
     
  )
}
