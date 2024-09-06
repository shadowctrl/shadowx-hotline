import Image from "next/image";
import "./newsRender.scss";
import { NextPage } from "next";
import TagTopic from "../tagTopic/TagTopic";

interface Props {
  imgUrl: string;
  date: string;
  title: string;
  source: string;
}

const NewsRender: NextPage<Props> = ({ imgUrl, date, title, source }) => {
  return (
    <div className="news-main">
      <Image src={imgUrl} width={400} height={200} alt={title} />
      <div className="news-content">
        <TagTopic date={date} />
        <h2>{title}</h2>
        <p>#{source}</p>
      </div>
    </div>
  );
};

export default NewsRender;
