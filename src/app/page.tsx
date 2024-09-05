import "@/styles/globals.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
interface DateProps {
  date: string | number | Date;
}

const fetchNewsData = async () => {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchNews`
  );
  const data = await res.json();
  return data;
};

const FormatDate: React.FC<DateProps> = ({ date }) => {
  let givenDate = new Date(date);
  let currentDate = new Date();
  let differenceInMillis = currentDate.getTime() - givenDate.getTime();
  let differenceInHours: number = Math.floor(
    differenceInMillis / (1000 * 60 * 60)
  );

  return <span>{differenceInHours} hours ago</span>;
};

export default async function Home() {
  const data = await fetchNewsData();
  return (
    <div className="main-parent">
      <div className="left-container">
        <div className="left-head">
          <h2>Best of the Week</h2>
          <h3>
            Cybersecurity News <span>·</span>
            <FormatDate date={data[0].highlight.date} />
          </h3>
        </div>
        <div className="highlights-container">
          <div className="news-highlight">
            <h2>
              {data[0].highlight.title}
              <span>#{data[0].highlight.source.name}</span>
            </h2>
            <div className="highlight-wrap">
              <Link
                href={data[0].highlight.link}
                target="_blank"
                rel="noreferrer nofollow"
              >
                <h3>
                  Read Article
                  <FaArrowRightLong className="highlight-arrow" />
                </h3>
              </Link>
            </div>
          </div>
          <div className="highlights-animation">
            <span />
            <span />
            <span />
            <span />
          </div>{" "}
          <div className="center-text">
            Scanning Latest
            <br />
            Feed
          </div>
          {/* Wifi searching Animation */}
          {/* <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx="43" cy="43" r="40" />
              <circle className="front" cx="43" cy="43" r="40" />
              <circle className="new" cx="43" cy="43" r="40" />
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx="30" cy="30" r="27" />
              <circle className="front" cx="30" cy="30" r="27" />
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx="17" cy="17" r="14" />
              <circle className="front" cx="17" cy="17" r="14" />
            </svg>
            <div className="text" data-text="Searching" />
          </div> */}
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  );
}
