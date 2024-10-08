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
      <div className="news-card-head">
        {topic && <h2 className="news-card-title">{topic}</h2>}
        <TagTopic date={date} />
        <h1>{title}</h1>
        <p>#{source}</p>{" "}
      </div>
      <div className="news-card-content">
        <Image src={imgUrl} width={350} height={400} alt={title} />
      </div>{" "}
    </div>
  );
};

export default Cards;
