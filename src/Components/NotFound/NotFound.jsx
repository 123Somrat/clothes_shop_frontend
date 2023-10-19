import Lottie from "lottie-react";
import notFound from "../../../public/animation_lnxlv9ml.json"


export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
  )
}
