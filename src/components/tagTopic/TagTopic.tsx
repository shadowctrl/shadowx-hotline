import { ReactNode } from "react";
import "./tagTopic.scss";
import { NextPage } from "next";

interface Props {
  topic?: string;
  date: ReactNode;
}
interface DateProps {
  date: string | number | Date;
}

const FormatDate: React.FC<DateProps> = ({ date }) => {
  let givenDate = new Date(date);
  let currentDate = new Date();
  let differenceInMillis = currentDate.getTime() - givenDate.getTime();
  let differenceInHours: number = Math.floor(
    differenceInMillis / (1000 * 60 * 60)
  );

  return <span>{differenceInHours} hours ago</span>;
};
const TagTopic: NextPage<Props> = ({ topic = "Cybersecurity News", date }) => {
  return (
    <p className="tag-topic">
      {topic} <span>·</span>
      <FormatDate date={date} />
    </p>
  );
};

export default TagTopic;
