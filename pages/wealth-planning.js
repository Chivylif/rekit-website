import React, { useState } from "react";
import Banner from "../components/Banner";
import AppLayout from "../layouts/AppLayout";
import bannertwo from "../assets/images/banner-2.png";
import SmallWrapper from "../components/SmallWrapper";
import Head from "next/head";
import NextStep from "../components/NextStep";
import WealthTabsContainer from "../containers/WealthTabsContainer";
import TabsContainer from "../containers/TabsContainer";
import { goalsTabsData } from "../constants";
import AboutUsCard from "../components/AboutCard";
import wealthone from "../assets/images/wealth-1-tab.png";
import wealthtwo from "../assets/images/wealth-2-tab.png";
import wealththree from "../assets/images/wealth-3-tab.png";
import wealthfour from "../assets/images/wealth-4-tab.png";
import wealthfive from "../assets/images/wealth-5-tab.png";
import wealthPlanning from "../assets/images/wealth-planning.jpeg";

import goalone from "../assets/images/goal-1.png";
import goaltwo from "../assets/images/goal-2.png";
import goalthree from "../assets/images/goal-3.png";
import goalfour from "../assets/images/goal-4.png";
import goalfive from "../assets/images/goal-5.png";
import goalsix from "../assets/images/goal-6.png";
import goaltop from "../assets/images/goal-top.png";

import Modal from "../components/Modal";
import HomePlan from "../components/HomePlan";
import CarPlan from "../components/CarPlan";
import WeddingPlan from "../components/WeddingPlan";
import RetirementPlan from "../components/RetirementPlan";
import EducationPlan from "../components/EducationPlan";
import SavingsPlan from "../components/SavingsPlan";

const WealthPlanning = () => {
  const [activeTab, setActiveTab] = useState("one");
  const [activeTabTwo, setActiveTabTwo] = useState("one");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);
  const [isOpenWedding, setIsOpenWedding] = useState(false);
  const [isRetirement, setIsRetirement] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isSavings, setIsSavings] = useState(false);
  const generateTabContent = () => {
    if (activeTab === "one") {
      return (
        <AboutUsCard
          viewButton={false}
          image={wealthone}
          title="Will, Trusts, and Estate Planning​"
          desc="We understand that our clients work very hard to create wealth, provide comfort and security to themselves and their loved ones and as such need to preserve and protect the wealth and assets that they have accumulated over their lifetime. We are here to help create an action plan for your future and that of your loved ones leveraging well-crafted estate planning tools including wills, trusts, holding companies, foundations and endowment funds."
        />
      );
    } else if (activeTab === "two") {
      return (
        <div>
          <AboutUsCard
            viewButton={false}
            image={wealthtwo}
            title="Tax Planning Strategies"
            listHead="Reduce your tax bill with our effective tax planning strategies. We provide access to the collaborative community of our global accounting network comprising trusted experts with experience in local and international tax laws. Our tax planning experts provide support with:"
            list={[
              "Avoidance of tax penalties that jeopardise family wealth by ensuring you understand and comply with taxation laws covering inheritance, death, and wealth tax both locally and internationally.",
            ]}
          />
          <AboutUsCard
            viewButton={false}
            image={wealththree}
            order={true}
            list={[
              "Analysis of double tax treaties to manage wealth across multiple jurisdictions in order to advise on asset protection structures.",
              "Understanding and complying with various tax laws that apply to real estate ownership in different countries whether a property is vacant or occupied. ",
              "Planning for relocation of either people — which will include advice on visa or passport applications, identifying educational institutions, and paying school fees or assets which include wealth management and tax planning support.",
            ]}
          />
        </div>
      );
    } else if (activeTab === "three") {
      return (
        <AboutUsCard
          viewButton={false}
          image={wealthfour}
          title="Global Family Office​"
          listHead="We develop investment solutions that address specific goals such as:"
          listStyle={false}
          list={[
            "From managing investment assets in various locations worldwide to providing advice on structuring the legal holding of these assets in the best way possible for optimal taxation.",
            "Our global team of advisors help our clients to set up, administer and manage their family offices, providing advice and support in the areas of family governance, trust and corporate services, asset holding, tax planning, wealth management, probate, estate administration and wealth planning for charity and philanthropy.",
          ]}
        />
      );
    } else {
      return (
        <AboutUsCard
          viewButton={false}
          image={wealthfive}
          title="Risk Management & Insurance"
          listStyle
          listHead="Having the right insurance coverage and asset protection strategies help mitigate the financial impact of unforeseen events. Our advisors will analyse your current level of risk exposure and offer personalised solutions to protect the vulnerable areas of your financial life. Our insurance cover includes:"
          list={[
            "Comprehensive insurance reviews for you, your family, and your business.",
            "Advanced asset protection strategies and structures.",
            "Policy selection, coordination, and execution.",
          ]}
        />
      );
    }
  };
  const generateTabTwoContent = () => {
    if (activeTabTwo === "one") {
      return (
        <>
          <Modal
            openModal={isOpenHome}
            closeModal={() => setIsOpenHome(!isOpenHome)}
            modalTop="16"
            width="620px"
          >
            <HomePlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsOpenHome(!isOpenHome)}
            image={goalone}
            title="Home Purchase Plan"
            desc="The best time to invest in real estate is now. Own your ideal home with REKIT's home purchase plan which lets you spread out payment in interest-free instalments."
          />
        </>
      );
    } else if (activeTabTwo === "two") {
      return (
        <>
          <Modal
            openModal={isOpenWedding}
            closeModal={() => setIsOpenWedding(!isOpenWedding)}
            modalTop="16"
            width="620px"
          >
            <WeddingPlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsOpenWedding(!isOpenWedding)}
            image={goaltwo}
            title="Wedding Plan"
            desc="Bring your dream wedding to life with REKIT's comprehensive wedding plan that allows you to conveniently set financial goals and shoulder all expenses for your big day."
          />
        </>
      );
    } else if (activeTabTwo === "three") {
      return (
        <>
          <Modal
            openModal={isRetirement}
            closeModal={() => setIsRetirement(!isRetirement)}
            modalTop="16"
            width="620px"
          >
            <RetirementPlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsRetirement(!isRetirement)}
            image={goalthree}
            title="Retirement Plan"
            desc="Planning to retire in a few years? Enjoy life after active service with our personalised retirement plan which gives you access to tax-free monthly income for your continued sustenance."
          />
        </>
      );
    } else if (activeTabTwo === "four") {
      return (
        <>
          <Modal
            openModal={isOpen}
            closeModal={() => setIsOpen(!isOpen)}
            modalTop="16"
            width="620px"
          >
            <CarPlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsOpen(!isOpen)}
            image={goalfour}
            title="Car Purchase Plan"
            desc="You don't have to break the bank to buy a new car. Fund your next vehicle purchase with our wide range of custom-made and convenient advisory plans."
          />
        </>
      );
    } else if (activeTabTwo === "five") {
      return (
        <>
          <Modal
            openModal={isEducation}
            closeModal={() => setIsEducation(!isEducation)}
            modalTop="16"
            width="620px"
          >
            <EducationPlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsEducation(!isEducation)}
            image={goalfive}
            title="Education Plan"
            desc="The best gift for anyone is a solid education, finance your studies with top-notch financial planning solutions that help you achieve yours and your ward’s educational goals."
          />
        </>
      );
    } else {
      return (
        <>
          <Modal
            openModal={isSavings}
            closeModal={() => setIsSavings(!isSavings)}
            modalTop="16"
            width="620px"
          >
            <SavingsPlan />
          </Modal>
          <AboutUsCard
            viewButton={true}
            open={() => setIsSavings(!isSavings)}
            image={goalsix}
            title="Savings Plan"
            desc="With our custom-made plans, you can achieve unique goals that are not captured on our list of predefined plans. Our financial advisors will work with you to create personalised strategies that fit your life and goals for the future."
          />
        </>
      );
    }
  };
  return (
    <div>
      <Head>
        <title>Wealth Planning | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Wealth Planning Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Wealth Planning Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Wealth Planning Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={wealthPlanning}
          headline="Wealth Planning"
          desc="Wealth planning is the process of structuring, building, and preserving your wealth, in order to transfer it to the next generation."
        />
        <SmallWrapper>
          <p className="text-[#161616] text-base font-normal font-inter leading-[1.8rem]">
            Our consultative wealth planning process is client-centered and
            involves understanding our clients’ objectives and developing a
            comprehensive roadmap that supports them through building,
            protecting and transitioning their wealth from a broad perspective
            of retirement, tax, legacy and business planning.
          </p>
          <p className="text-[#161616] text-base font-normal font-inter leading-[1.8rem]">
            Our wealth planning value propositions include wealth creation,
            accumulation, enhancement, protection, preservation and
            distribution. Our team of experts will handhold you through the
            wealth planning value chain to ensure that your objectives are met.
          </p>
          {/* <p className="text-[#161616] text-base font-normal font-inter leading-[1.8rem]">
            We all have unique, wonderful goals and aspirations. Rekit’s
            advisors are just the people you need to ensure that the financing
            of these goals would be easier. Our wide range of plans allows you
            to plan for life milestones conveniently. Let our advisors work with
            you to finance your big-picture objectives and conveniently attain
            major life milestones.
          </p> */}

          <div className="py-10">
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
              <WealthTabsContainer
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="mt-5 p-4 w-full min-h-40">
              {generateTabContent()}
            </div>
          </div>
          {/* <div className="py-10">
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
              <TabsContainer
                activeTab={activeTabTwo}
                setActiveTab={setActiveTabTwo}
                tabItem={goalsTabsData}
              />
            </div>
            <div className="mt-5 p-4 w-full min-h-40">
              {generateTabTwoContent()}
            </div>
          </div> */}
        </SmallWrapper>

        <NextStep
          title="Book a consultation to begin"
          btnText="create a plan"
          height="406px"
        />
      </AppLayout>
    </div>
  );
};

export default WealthPlanning;
