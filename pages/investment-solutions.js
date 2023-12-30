import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import NextStep from "../components/NextStep";
import SmallWrapper from "../components/SmallWrapper";
import TabsContainer from "../containers/TabsContainer";
import AboutUsCard from "../components/AboutCard";
import { investmentTabsData } from "../constants";
import bannerfour from "../assets/images/bannerfour.png"
import investone from "../assets/images/invest-1.png"
import investtwo from "../assets/images/invest-2.png"
import investthree from "../assets/images/invest-3.png"
import investfour from "../assets/images/invest-4.png"
import investtop from "../assets/images/invest-top.png"
import Image from "next/image";


const InvestmentSolutions = () => {
    const [activeTab, setActiveTab] = useState("one");
    const generateTabContent = () => {
      if (activeTab === "one") {
        return (
          <AboutUsCard
            image={investone}
            title="Strategic Solutions and Structured Products"
            desc="Get tailor-made investment solutions that suit both your financial goals and risk appetite. This range of investment solutions includes equities, bonds, fixed income, money market, commercial papers and real estate. We also have a bouquet of specialised solutions including structured products, derivatives, private equities, venture capital and several asset-backed solutions in multicurrency."
          />
        );
      } else if (activeTab === "two") {
        return (
          <AboutUsCard
            image={investtwo}
            title="Multi-Asset Class Investment Solutions"
            desc="Manage investment volatility by diversifying across multiple asset classes and regions that are appropriate for you."
          />
        );
      } else if (activeTab === "three") {
        return (
          <AboutUsCard
            image={investthree}
            title="Equity and Fixed Income Trading"
            desc="Our financial advisors will expose you to global financial markets and solutions that fit your aspirations in a safe and informed way. Our expertise and valuable partnerships with leading financial and non-financial institutions keep us abreast of unfolding events and equip us with relevant information to serve you better."
          />
        );
      } else {
        return (
          <AboutUsCard
            image={investfour}
            title="Alternative Investments"
            desc="We provide access to thoroughly researched opportunities within the alternative investment universe including real estate, arts, wines, commodities, derivatives, private equity, and venture capital. You can access a wide range of alternative investment opportunities through our robust network to diversify your investment portfolio."
          />
        );
      } 
    };
  return (
    <div>
      <Head>
        <title>Investment Solutions | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Investment Solutions Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta property="og:description" content="Investment Solutions Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta property="og:title" content="Investment Solutions Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={bannerfour}
          headline="INVESTMENT SOLUTIONS"
          desc="We shape your portfolio to suit your investment style and objectives as well as effectively allocate your wealth to achieve expected returns."
        />
        <SmallWrapper>
            <div className="grid gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-x-10 mb-20">
                <p className="text-base font-inter font-normal leading-[1.8rem] text-[#212020]">
                We all have unique, wonderful goals and aspirations. Our expert advisors at REKIT are the people you need to ensure that financing these goals and aspirations would be easier. Our wide range of plans allows you to plan for life’s milestones conveniently. We also provide the opportunity to create custom plans.
                </p>
                <div>
                    <Image src={investtop} alt="investtop" />
                </div>
            </div>
          <div className="py-10">
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
              <TabsContainer
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabItem={investmentTabsData}
              />
            </div>
            <div className="mt-5 p-4 w-full min-h-40">
              {generateTabContent()}
            </div>
          </div>
        </SmallWrapper>
        <NextStep
          title="Talk to our team"
          height="406px"
          btnText="create a plan"
        />
      </AppLayout>
    </div>
  );
};

export default InvestmentSolutions;
