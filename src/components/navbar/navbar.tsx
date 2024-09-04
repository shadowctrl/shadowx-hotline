import "./navbar.scss";
import securityLogo from "@/assets/security_logo.svg";
import plusSign from "@/assets/plus_sign.svg";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}
const comps = [
  {
    image: securityLogo,
    title: "ShadowX Hotline",
  },
  {
    title: "All",
  },
  {
    title: "Latest",
  },
  {
    title: "Recommended",
  },

  {
    title: "Top",
  },
];

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="nav-parent">
      {comps.map((value) => (
        <div className="nav-components" key={value.title}>
          {value.image ? (
            <div className="nav-comp-container">
              <Image
                src={value.image}
                alt={value.title}
                height={24}
                width={24}
              />
              <h1>{value.title}</h1>
            </div>
          ) : (
            <div className="nav-comp-container">
              <h1>{value.title}</h1>
              <Image src={plusSign} width={16} height={16} alt={value.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
