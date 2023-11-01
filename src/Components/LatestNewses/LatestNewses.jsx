import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function LatestNewses() {
 // const [newsIndex, setNewsIndex] = useState(0);
 // const [currentNews, setCurrentNews] = useState(null);
  const newses = [
    "With out delivary cost if you bought product more then 100 euro",
    "Winter offers start from next few days",
    "CheckOut our latest product",
  ];

  /*
  useEffect(() => {
    if (newsIndex < newses.length) {
      const timer = setTimeout(() => {
        setCurrentNews(newses[newsIndex]);
        setNewsIndex(newsIndex + 1);
      }, 3000); // Delay for 3 seconds

      return () => {
        clearTimeout(timer);
      };
    }
  }, [newsIndex, newses]);
*/
  return (
    <div className="h-[60px] bg-gray-200 flex">
      {
        <Marquee delay={5} pauseOnHover={true}>
          {newses.map((news, id) => (
            <h1 key={id} className="text-md mr-24">
              {news}
            </h1>
          ))}
        </Marquee>
      }
      ;
    </div>
  );
}
