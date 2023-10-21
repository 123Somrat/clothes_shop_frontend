import Marquee from "react-fast-marquee";

export default function LatestNewses() {
  const news = [
    "With out delivary cost if you bought product more then 100 euro",
    "Winter offers start from next few days",
    "CheckOut our latest product",
  ];

  return (
    <div className="h-[60px] bg-gray-200 flex">
      <Marquee>
        {news.map((news, id) => (
          <h1 key={id} className="text-md mr-24">
            {news}
          </h1>
        ))}
      </Marquee>
    </div>
  );
}
