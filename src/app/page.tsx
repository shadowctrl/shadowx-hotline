import NewsRender from "@/components/newsRender/newsRender";
import TagTopic from "@/components/tagTopic/TagTopic";
import "@/styles/globals.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "@/components/(newsRenderer)/cards/cards";
import WideCards from "@/components/(newsRenderer)/wideCards/wideCards";

const fetchNewsData = async () => {
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchNews`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await fetchNewsData();
  return (
    <div className="main-parent-wrap">
      <div className="main-parent">
        <div className="left-container-wrap">
          <div className="left-container">
            <div className="left-head">
              <h2 className="head-title">Best of the Week</h2>
              <TagTopic
                date={data[0].highlight ? data[0].highlight.date : data[0].date}
              />
            </div>
            <div className="highlights-container">
              <div className="news-highlight">
                <h2>
                  {data[0].highlight ? data[0].highlight.title : data[0].title}
                  <span>
                    #
                    {data[0].highlight
                      ? data[0].highlight.source.name
                      : data[0].source.name}
                  </span>
                </h2>
                <div className="highlight-wrap">
                  <Link
                    href={
                      data[0].highlight ? data[0].highlight.link : data[0].link
                    }
                    target="_blank"
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

          <div className="latest-news-parent">
            {data.slice(1, 4).map((value: any) => (
              <div
                className="latest-news"
                key={value.highlight ? value.highlight.title : value.title}
              >
                {value.highlight ? (
                  <Link
                    href={value.highlight.link}
                    target="_blank"
                    className="latest-news-item"
                  >
                    <TagTopic date={value.highlight.date} />
                    <h3>{value.highlight.title} </h3>
                  </Link>
                ) : (
                  <Link
                    href={value.link}
                    target="_blank"
                    className="latest-news-item"
                  >
                    <TagTopic date={value.date} />
                    <h3>{value.title}</h3>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="right-container-wrap">
          <div className="right-container-highlight">
            <h2 className="right-head">Recommended </h2>
            {data.slice(4, 5).map((value) => (
              <div
                className="other-news-highlight"
                key={value.highlight ? value.highlight.title : value.title}
              >
                {value.highlight ? (
                  <div className="others-highlight-item">
                    <Link href={value.highlight.link} target="_blank">
                      <div className="card">
                        <p className="heading">{value.highlight.title}</p>
                        <p>{value.highlight.source.name}</p>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="others-highlight-item">
                    <Link href={value.link} target="_blank">
                      <div className="card">
                        <p className="heading">{value.title}</p>
                        <p>{value.source.name}</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="other-news-container">
            {data.slice(5, 8).map((value) => (
              <div key={value.highlight ? value.highlight.title : value.title}>
                {value.highlight ? (
                  <div className="other-news-item">
                    <TagTopic date={value.highlight.date} />
                    <Link
                      href={value.highlight.link}
                      target="_blank"
                      className="other-news-content"
                    >
                      <h3>{value.highlight.title}</h3>
                      <Image
                        src={value.highlight.thumbnail}
                        width={100}
                        height={50}
                        alt={value.highlight.title}
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="other-news-item">
                    <TagTopic date={value.date} />
                    <Link
                      href={value.link}
                      target="_blank"
                      className="other-news-content"
                    >
                      <h3>{value.title}</h3>
                      <Image
                        src={value.thumbnail}
                        width={100}
                        height={50}
                        alt={value.title}
                      />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section2-main">
        <div className="section2-left-main">
          {data.slice(8, 9).map((value) => (
            <Link
              key={value.highlight ? value.highlight.title : value.title}
              href={value.highlight ? value.highlight.link : value.link}
              target="_blank"
            >
              {value.highlight ? (
                <Cards
                  date={value.highlight.date}
                  title={value.highlight.title}
                  source={value.highlight.source.name}
                  imgUrl={value.highlight.thumbnail}
                />
              ) : (
                <Cards
                  date={value.date}
                  title={value.title}
                  source={value.source.name}
                  imgUrl={value.thumbnail}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="section2-newsrender">
          {data.slice(9, 17).map((value) => (
            <Link
              key={value.highlight ? value.highlight.title : value.title}
              href={value.highlight ? value.highlight.link : value.link}
              target="_blank"
            >
              {value.highlight ? (
                <NewsRender
                  imgUrl={value.highlight.thumbnail}
                  title={value.highlight.title}
                  date={value.highlight.date}
                  source={value.highlight.source.name}
                />
              ) : (
                <NewsRender
                  imgUrl={value.thumbnail}
                  title={value.title}
                  date={value.date}
                  source={value.source.name}
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="section3-main">
        {data.slice(17, 21).map((value) => (
          <Link
            key={value.highlight ? value.highlight.title : value.title}
            href={value.highlight ? value.highlight.link : value.link}
            target="_blank"
          >
            {value.highlight ? (
              <div className="section3-item">
                <Cards
                  date={value.highlight.date}
                  title={value.highlight.title}
                  source={value.highlight.source.name}
                  imgUrl={value.highlight.thumbnail}
                />
              </div>
            ) : (
              <div className="section3-item">
                <Cards
                  date={value.date}
                  title={value.title}
                  source={value.source.name}
                  imgUrl={value.thumbnail}
                />
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="section4-main">
        <WideCards />
      </div>
    </div>
  );
}
