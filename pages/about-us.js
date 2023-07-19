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
import WhoWeServeContainer from "../containers/WhoWeServeContainer";
import Button from "../components/Button";
import Banner from "../components/Banner";
import SmallWrapper from "../components/SmallWrapper";
import { tabsData } from "../constants";

const AboutUs = (props) => {
  const [activeTab, setActiveTab] = useState("one");
  const generateTabContent = () => {
    if (activeTab === "one") {
      return (
        <AboutUsCard
          image={serveone}
          title="LIfestyle financial planning"
          desc="We ensure we have a detailed understanding of our client's values, needs, choices and experience. We provide an assessment of lifecycle conditions, from start to end of a professional or entrepreneurial career, aiming to provide a comprehensive, relative evaluation of individual financial goals against lifecycle conditions."
        />
      );
    } else if (activeTab === "two") {
      return (
        <AboutUsCard
          image={servetwo}
          title="Wealth management"
          list={[
            "We provide professional financial advisory services.",
            "We partner with our clients through innovative solutions to support wealth accumulation, protection and retirement planning.",
            "We provide Estate planning and trust services for wealth sustenance and distribution.",
          ]}
        />
      );
    } else if (activeTab === "three") {
      return (
        <AboutUsCard
          image={servethree}
          title="Goal-Based Investing"
          listHead="We develop investment solutions that address specific goals such as:"
          list={[
            "Home acquisition",
            "Car Purchase ",
            "Education Financial Planning",
            "Vacation Planning ",
            "Retirement Planning, etc",
          ]}
        />
      );
    } else {
      return (
        <AboutUsCard
          image={servefour}
          title="Succession Planning"
          list={[
            "We provide Estate Planning and Trust services for wealth sustenance and distribution.",
            " We partner with our clients to develop bespoke living trust solutions and provide efficient management of trust’s assets to ensure protection and conservation.",
          ]}
        />
      );
    }
  };
  return (
    <div>
      <Head>
        <title>About Us | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="About Us Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="About Us Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="About Us | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={aboutus}
          headline="About Us"
          desc="An investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />

        <SmallWrapper>
          <h1
            id="whoweare"
            className="border-b-2 w-fit pb-2 mb-5 text-[26px] text-[#5A5A5A] font-bold font-raleway border-[#F5A356]"
          >
            WHO WE ARE
          </h1>

          <div className="grid grid-col-2 gap-x-16 gap-y-20">
            <WeAreContainers />
          </div>

          <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-x-10 py-20">
            <SmallCardContainer />
          </div>

          <div className="w-full bg-white py-10" id="whoweserve">
            <h1 className="border-b-2 w-fit pb-2 mb-5 text-[26px] text-[#5A5A5A] font-bold font-raleway border-[#F5A356]">
              WHO WE SERVE
            </h1>
            <WhoWeServeContainer />
          </div>
        </SmallWrapper>
        <NextStep
          title="Schedule a consultation to get started"
          btnText="CREATE A PLAN"
          onClick={() => {}}
          height="406px"
        />
      </AppLayout>
    </div>
  );
};

export default AboutUs;
