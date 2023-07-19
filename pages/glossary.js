import React, { useState } from "react";
import NextStep from "../components/NextStep";
import AppLayout from "../layouts/AppLayout";
import Head from "next/head";
import SmallCardContainer from "../containers/SmallCardContainer";
import TabsContainer from "../containers/TabsContainer";
import { list } from "postcss";
import AboutUsCard from "../components/AboutCard";
import serveone from "../assets/images/serve-1.png";
import servetwo from "../assets/images/serve-2.png";
import servethree from "../assets/images/serve-3.png";
import servefour from "../assets/images/serve-4.png";
import aboutus from "../assets/images/about-us.png";
import Image from "next/image";
import WeAreContainers from "../containers/WeAreContainers";
import Button from "../components/Button";
import Banner from "../components/Banner";
import SmallWrapper from "../components/SmallWrapper";
import { tabsData } from "../constants";
import { RiAddLine } from "react-icons/ri";

const Glossary = (props) => {
  const [assetActive, setAssetActive] = useState();
  const assetClasses = [
    {
      title: "Asset Classes",
      content:
        "Asset Classes refer to group of similar types of financial assets or investment solutions that have similar characteristics, behaviour and risks.  Common asset classes include equities, bonds, real estate, commodities and money markets. Each asset class has its own unique risk and return profile, which makes it important for investors to diversify their portfolios across different asset classes to manage risk and achieve their investment goals.",
    },
    {
      title: "Asset Class - Structured Solutions",
      content:
        "These are alternative investment solutions that allow individual consumers to invest for a set amount of time while still receiving protection on their initial deposits. The combination of one or more underlying assets or securities typically includes stocks, bonds, options, indices, commodities, currency pairs, and interest rates. Investors benefit from the market performance of these derivatives that come with pre-specified features, such as maturity and payoff. Opportunities here fall under the range of a year and even more, with the risks and gains both being high.",
    },
    {
      title: "Asset Class - Money Market",
      content:
        "The money market is a financial market wherein short-term assets and open-ended funds are traded between institutions and traders. The market offers very high liquidity as the assets can easily convert into cash. Thus, it helps businesses and the government in meeting their working capital requirements. Opportunities here fall under the range of a day to a year, with the risks and gains both being low.",
    },
    {
      title: "Asset Class - Equities",
      content:
        "Equities or stocks or shares is a financial instrument representing a certain percentage of ownership to a buyer in a company. The primary purpose of taking up investment opportunities by buying stocks is capital appreciation and earning huge profits in the form of dividends. Opportunities here fall under the range of a year and even more, with the risks and gains both being high.",
    },
    {
      title: "Asset Class - Mutual Funds",
      content:
        "A mutual fund solution is an investment opportunity that holds assets such as stocks, bonds or a combination of two. The portfolio of securities held under the fund comes with a variety to suit the needs of diverse investors. It is a rewarding opportunity for early investors and middle-and high-income earners as it provides diversification, tax-saving, liquidity, and affordability. Opportunities here fall under the range of a year and even more, with the risks and gains both being moderately conservative.",
    },
    {
      title: "Asset Class - Fixed Income",
      content:
        "Fixed income solutions refers to securities that offer a steady return to the investors throughout the maturity period. In general, fixed-income instruments are called bonds. These securities are categorized under debt financing. Governments and corporations use these instruments to raise capital. It is a low-risk and low-return security that allows investors to diversify and mitigate the risk of their investment portfolios.",
    },
    {
      title: "Asset Class - Real Estate",
      content:
        "The real estate solution uses properties as an investment opportunity to profit through their purchase, sales, renovation, lease, construction, etc. An investor can enjoy multiple benefits like appreciation, leveraging the investment, tax benefits, and regular cash flow. This form of investment is particularly beneficial for those with moderate risk profiles looking for a means of passive income.",
    },
    {
      title: "Asset Class - Commodities",
      content:
        "Solutions in commodities can be an important way for an investor to diversify their financial portfolio beyond traditional securities, to help reduce risk and smoothen out returns. The prices of commodities generally tend to move in the opposite direction from securities such as stocks and bonds, even though they are considered highly volatile and high-risk. It is for this reason that many investors turn to commodities when the stock market is performing poorly. Some commodities are considered as being a good hedge against inflation. ",
    },
    {
      title: "Asset Class - Savings Scheme",
      content:
        "Savings solutions are investment opportunities introduced as an incentive to cultivate healthy saving and investing habits. This is also a way to increase the inflow of money into the economy. The Savings schemes solution caters to a wide demographic and encourages individuals to invest for various milestones of life such as retirement, children’s higher education, their marriage, etc. They are ideal for long-term wealth creation as they come with a certain lock-in period and offer good returns. Since they are not impacted by market volatility, they are safer investment options, ideal for the conservative investor.",
    },
  ];

  const handleActive = (index) => {
    if (assetActive === index) setAssetActive();
    else setAssetActive(index);
  };
  return (
    <div>
      <Head>
        <title>Glossary | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Glossary Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Glossary Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Glossary | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={aboutus}
          headline="Glossary"
          desc="Our glossary page contains definition of different financial terms in the financial and investment world. This page would be updated with inputs and contents from our team of investent specialists. "
        />
        <div className="assetContainer">
          {assetClasses.map((asset, index) => {
            return (
              <div
                key={index}
                className="asset"
                onClick={() => handleActive(index)}
              >
                <div className="assetHeading">
                  <span
                    className="addIcon"
                    style={{
                      transform: `${
                        assetActive === index ? "rotate(45deg)" : "rotate(0deg)"
                      }`,
                    }}
                  >
                    <RiAddLine size={25} />
                  </span>
                  <h3>{asset.title}</h3>
                </div>
                {assetActive === index ? (
                  <div className="assetContent">{asset.content}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </AppLayout>
    </div>
  );
};

export default Glossary;
