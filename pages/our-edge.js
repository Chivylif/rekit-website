import React from "react";
import Head from "next/head";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import NextStep from "../components/NextStep";
import SmallWrapper from "../components/SmallWrapper";
import Image from "next/image";
import Button from "../components/Button";

import bannerseven from "../assets/images/bannerseven.png";
import bannersevenplus from "../assets/images/bannersevenplus.jpeg";
import edgeone from "../assets/images/edge-1.png";
import edgetwo from "../assets/images/edge-4.png";
import edgethree from "../assets/images/edge-5.png";
import Link from "next/link";

const Card = (props) => {
  const { title, description, right } = props;
  return (
    <div className={`py-5 ${right && "pl-8"}`}>
      <h1 className="font-extrabold pt-12 text-[#F08420] text-xl mb-4 font-raleway">
        {title}
      </h1>
      <p className="leading-[1.8rem] font-normal font-inter text-[#212020] text-base">
        {description}
      </p>
      {/* <Link href="https://app.rekitonline.com/"><a>
              <Button shape="round" size="large" text="get started" className="mybtn highlighted_btn mt-10 font-semibold uppercase"/>
                </a></Link> */}
    </div>
  );
};
const OurEdge = () => {
  return (
    <div>
      <Head>
        <title>Rekit | Our Edge</title>
        <meta
          name="description"
          content="International reach of Specialist expertise in family wealth management, protection, personalised solutions for the preservation of family wealth"
        />
        <meta
          name="keywords"
          content="International reach, Personalised solutions, "
        />
        <link rel="icon" href="/favicon.ico" />

        <title>Our Edge | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Our Edge Members Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Our Edge Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Our Edge | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Banner
          image={bannerseven}
          headline="our edge"
          desc="Why REKIT is the No 1 choice for your investment needs"
        />

        <SmallWrapper>
          <div className="pt-2 lg:pt-5 pb-5 lg:pb-10">
            <div className="grid lg:grid-cols-2 lg:gap-x-10 mb-8 lg:mb-16">
              <div>
                <Image src={edgeone} alt="edgethree" />
              </div>
              <Card
                title="International reach"
                right
                description="From managing investment assets in various locations worldwide, to providing advice on structuring the legal holding of these assets for optimal taxation, we provide you with access to specialist advice throughout the Australia, Europe, Asia, Africa and America."
              />
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-x-10 mb-8 lg:mb-16">
              <Card
                title="Specialist expertise in family wealth management and protection"
                description="Our global team of advisors provide advice and support in the areas of family governance, trust and corporate services, asset holding, tax planning, wealth management, probate, estate administration, wealth planning, charity and philanthropy."
              />
              <div>
                <Image src={edgetwo} alt="edgethree" />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-x-10 mb-8 lg:mb-16">
              <div>
                <Image src={edgethree} alt="edgethree" />
              </div>
              <Card
                right
                title="Personalised solutions for the preservation of family wealth"
                description="Our personalised services make it easy for families across different locations to trust us with providing effective solutions for managing their family wealth and investment assets."
              />
            </div>
          </div>
        </SmallWrapper>

        <NextStep link="/our-board" btnText="Learn more" height="323px" title="Meet our board" />
      </AppLayout>
    </div>
  );
};

export default OurEdge;
