import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import bannersix from "../assets/images/bannersix.png";
import NextStep from "../components/NextStep";
import SmallWrapper from "../components/SmallWrapper";
import BoardCardContainer from "../containers/BoardCardContainer";
import ManagementTeamDetails from "../components/ManagementTeamDetails";
import ManagementTeamCardContainer from "../containers/ManagementTeamCardContainer";
import { managementTeamData } from "../constants";

const OurMgmtTeam = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(managementTeamData);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  function switchStep(step) {
    setStep(step);
  }
  const generateDetails = () => {
    if (step === 1) {
      return (
        <ManagementTeamDetails
          about={[
            "Dr. Agbogun Ebere holds a doctoral degree in Business Administration at Walden University, United States of America.",

            "Over the years, she attended the Premier University of Ibadan to earn her first degree in BSc Psychology. She has an academic background in strategic management, human resource management, financial management, operations management, and marketing management.",

            "She holds a Master’s Degree in Business Administration from the Business School, Netherlands, a diploma in Personal Financial Planning from the Florida State University and a global certification as a Chartered Wealth Manager (CWM) from the Global Academy of Finance and Management (GAFM) USA.",

            "Over the years, Ebere attended several professional and strategic programs locally and offshore.",
          ]}
          showDetails={handleShowDetails}
          displayDetails={showDetails}
          left="50px"
          step={step}
        />
      );
    } else if (step === 2) {
      return (
        <ManagementTeamDetails
          about={[
            "Vincent holds his first degree in BA Philosophy from Imo State University, a Master’s in Strategic Human Resources Management (SHRM) from the University of Roehampton London – England, United Kingdom, a Master’s in Business Administration from UNICAF University-Malawi and a diploma in Human Resources Management from Allison Academy and Diploma in Personal Financial Planning from the Florida State University.",

            "Vincent is a Member of the Chartered Management Institute International (CMII), Member Human Capital Institute (HCI), Member Association of Corporate & Individual Investment Advisers (CIIA), and the Chartered Nigerian Institute of Management (NIM)",
          ]}
          showDetails={handleShowDetails}
          displayDetails={showDetails}
          step={step}
        />
      );
    } else if (step === 3) {
      return (
        <ManagementTeamDetails
          about={[
            "Irene is a graduate of the University of Portharcourt. An Enthusiastic, Proactive, Methodical Customer Service Officer with over 4 years of experience resolving complex customer inquiries.",
          ]}
          showDetails={handleShowDetails}
          displayDetails={showDetails}
          step={step}
        />
      );
    } else if (step === 4) {
      return (
        <ManagementTeamDetails
          about={[
            "Samuel holds a B.Sc. Degree in Accounting, MBA in Business Administration and MSc in Finance.",
            "He holds the following professional certifications: Master Project Manager (MPM), Accredited Management Accountant (AMA), Enterprise Risk Management Certified Professional (ERMCP), and Associate Commodity Broker (ACB) from the Commodities Brokers Association of Nigeria (CBAN).",
            "Samuel is currently pursuing the completion of his Ph.D. Business Administration (Complexity Science and Management) degree.",
          ]}
          showDetails={handleShowDetails}
          displayDetails={showDetails}
          step={step}
        />
      );
    }  else {
      return (
        <ManagementTeamDetails
          about={[
            "Faith holds a B.Sc. In Accounting from Houdegbe North America University Benin republic. She is currently an MBA student at Ahmadu Bello University Zaria.",
            "Faith has worked in different insurance companies where she handled different roles. ",
          ]}
          showDetails={handleShowDetails}
          displayDetails={showDetails}
          step={step}
        />
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Our Management Team | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Our Management Team - Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Our Management Team Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Our Management Team | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Banner
          image={bannersix}
          headline="Our Management Team"
          desc="Our employees have a combined industry experience of 100+ years."
        />
        <SmallWrapper>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-2 pb-16">
            <ManagementTeamCardContainer
              data={data}
              myShow={showDetails}
              showDetails={handleShowDetails}
              switchStep={switchStep}
              step={step}
            />
          </div>
          <div>{generateDetails()}</div>
        </SmallWrapper>
        <NextStep
          btnText="create a plan"
          height="323px"
          title="Talk to our team"
        />
      </AppLayout>
    </div>
  );
};

export default OurMgmtTeam;
