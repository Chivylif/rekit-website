import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import SmallWrapper from "../components/SmallWrapper";
import NextStep from "../components/NextStep";
import TabsContainer from "../containers/TabsContainer";
import { goalsTabsData } from "../constants";
import Head from "next/head";
import AboutUsCard from "../components/AboutCard";
import Image from "next/image";

import bannerthree from "../assets/images/bannerthree.png";
import goalone from "../assets/images/goal-1.png";
import goaltwo from "../assets/images/goal-2.png";
import goalthree from "../assets/images/goal-3.png";
import goalfour from "../assets/images/goal-4.png";
import goalfive from "../assets/images/goal-5.png";
import goalsix from "../assets/images/goal-6.png";
import savingsPlan from "../assets/images/savings-plan.jpeg"
import goaltop from "../assets/images/goal-top.png";

import calculator from "../assets/images/calculator.jpeg";
import Modal from "../components/Modal";
import HomePlan from "../components/HomePlan";
import CarPlan from "../components/CarPlan";
import WeddingPlan from "../components/WeddingPlan";
import RetirementPlan from "../components/RetirementPlan";
import EducationPlan from "../components/EducationPlan";
import SavingsPlan from "../components/SavingsPlan";

const GoalBasedInvesting = () => {
  const [activeTab, setActiveTab] = useState("one");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHome, setIsOpenHome] = useState(false);
  const [isOpenWedding, setIsOpenWedding] = useState(false);
  const [isRetirement, setIsRetirement] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isSavings, setIsSavings] = useState(false);

  const generateTabContent = () => {
    if (activeTab === "one") {
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
    } else if (activeTab === "two") {
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
            desc="Bring your dream wedding to life with REKIT's comprehensive wedding plan that allows you to conveniently shoulder all of the big day's expenses."
          />
        </>
      );
    } else if (activeTab === "three") {
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
            desc="Enjoy life after active service with our personalised retirement plan which gives you access to tax-free monthly income to enable you maintain a comfortable lifestyle at retirement."
          />
        </>
      );
    } else if (activeTab === "four") {
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
            desc="You don't have to break the bank to buy a new car. Fund your vehicle purchase with our accessible savings and credit solutions."
          />
        </>
      );
    } else if (activeTab === "five") {
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
            desc="The gift of solid education cannot be over emphasized. Gift one to yourself or loved ones through our education plan."
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
            image={savingsPlan}
            title="Umbrella Solution"
            desc="With our all-inclusive umbrella solution, you can achieve your life ambitions that are not captured on our list of predefined plans."
          />
        </>
      );
    }
  };
  return (
    <div>
      <Head>
        <title>Goal Based Investment | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Goal Based Investment Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Goal Based Investment Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Goal Based Investment Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={bannerthree}
          headline="GOAL-BASED INVESTING"
          desc="We provide the opportunity to create custom plans that address goals that might not be captured by our list of predefined plans."
        />
        <SmallWrapper>
          {/* <div className="grid lg:grid-cols-1 gap-y-10 lg:gap-y-0 lg:gap-x-10 mb-20"> */}
            {/* <div>
              <Image src={goaltop} alt="investtop" />
            </div> */}
            {/* <div
              id="calulator"
              className="text-base font-inter flex justify-center lg:pl-[4rem] lg:pt-[1rem] font-normal leading-[1.8rem] text-[#212020]"
            >
              We all have unique, wonderful goals and aspirations. Rekit’s
              advisors are the people you need to ensure that financing
              these goals and aspirations would be easier. Our wide range of plans allows you
              to plan for life milestones conveniently. Let our advisors work
              with you to finance your big-picture objectives and conveniently
              attain major life milestones.
            </div> */}
          {/* </div> */}

          <div className="py-10">
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-2">
              <TabsContainer
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabItem={goalsTabsData}
              />
            </div>
            <div className="mt-5 p-4 w-full min-h-40">
              {generateTabContent()}
            </div>
          </div>
        </SmallWrapper>
        <NextStep
          title="Take the next step toward your personal and professional goals"
          height="406px"
          btnText="create a plan"
        />
      </AppLayout>
    </div>
  );
};

export default GoalBasedInvesting;
