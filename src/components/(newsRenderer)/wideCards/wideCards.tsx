import "./WideCards.scss";
import { NextPage } from "next";

interface Props {}

const WideCards: NextPage<Props> = ({}) => {
  return (
    <div className="wide-card-parent">
      <div className="wide-card-container"></div>
    </div>
  );
};

export default WideCards;
