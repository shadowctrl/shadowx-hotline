import { NextPage } from "next";
import Image from "next/image";
import TagTopic from "@/components/tagTopic/TagTopic";
import "./cards.scss";

interface Props {
  topic?: string;
  date: string;
  title: string;
  source: string;
  imgUrl: string;
}

const Cards: NextPage<Props> = ({ topic, date, title, source, imgUrl }) => {
  return (
    <div className="news-card">
      {topic && <h2 className="news-card-title">{topic}</h2>}
      <TagTopic date={date} />
      <div className="news-card-content">
        <h1>{title}</h1>
        <p>#{source}</p>
        <Image src={imgUrl} width={400} height={400} alt={title} />
      </div>
    </div>
  );
};

export default Cards;
