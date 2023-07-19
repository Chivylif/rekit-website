import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import bannersix from "../assets/images/bannersix.png";
import NextStep from "../components/NextStep";
import SmallWrapper from "../components/SmallWrapper";
import BoardCardContainer from "../containers/BoardCardContainer";
import BoardDetails from "../components/BoardDetails";
import { boardData } from "../constants";










const OurBoard = () => {
  const [step,setStep] = useState(1)
  const [data, setData] = useState(boardData)
  const [showDetails, setShowDetails] = useState(false)
  
  const handleShowDetails = () => {
    setShowDetails(!showDetails)
  }
  function switchStep(step) {
    setStep(step)
  }
  const generateDetails = () => {
    
    if(step === 1) {
      return <BoardDetails 
      about={[
        'Dr. Nwuke has over 28 years of experience in finance and corporate governance from working with top corporates and leading commercial banks in Nigeria. He joined the Board of Coscharis Group in August 2014 and is currently responsible for the strategic drive to position the Coscharis Group for sustainability beyond the lifetime of the founders. He was an Executive Director position in Access Bank from 2004 to 2013.',
        'Dr. Nwuke holds a B.Sc. degree in Accountancy from University of Nigeria, Nsukka, MBA (Distinction) in International Banking and Finance from the Birmingham Business School, United Kingdom as well as a Doctor of Business Administration (DBA) in Leadership at the Walden University, Minnesota, USA with a research focus on leadership transition challenges in family businesses.',
        'Dr. Nwuke has been exposed to several leadership and professional development programs at renowned global institutions of excellence including Harvard Business School, Boston (AMP 175), Wharton Business School, Pennsylvania (both in U.S.A), Lagos Business School and IESE Barcelona, Spain, INSEAD and IMD both in Singapore and Switzerland respectively. Dr. Nwuke is a member of the Society for Corporate Governance and the Institute of Directors (IOD).',
        'He is a Fellow of both the Institute of Chartered Accountants of Nigeria, and the Chartered Institute of Taxation of Nigeria, an honorary member of Chattered Institute of Bankers, Nigeria and a member of Business Recovery and Insolvency Practitioners (BRIPAN).'
      ]}
      showDetails={handleShowDetails}
      displayDetails={showDetails}
      left="50px"
      step={step}
      />
    }else if(step === 2) {
      return <BoardDetails about={[
        'Chioma is a friendly, compassionate, passionate, energetic, innovative, and loyal person, who believes in relationships and also believes that with integrity and the right skills, many doors of opportunity will open for anyone.',
        'A 1987 graduate of the University of Nigeria, Nsukka, where she obtained a B.Sc in Economics. Other formal education has come in form of various courses attended in the course of her career and she is a pioneer alumnus of the INSEAD management program, Transition to General Management (2012). All the courses she undertook enabled her to acquire strong skills in strategy development and execution, policy setting and execution, relationship management and customer service, business and product development, and Financial Planning.',
        'She is the founder and CEO of Modd Management Company Limited, an investment management and administrative company with Assets Under Management of over N38billion.',
        'Prior to setting up the company, Chioma worked in ARM Company Limited for 16years and held the Managing Director role for 2 of their businesses over a 7-year period. She worked as the Managing Director of the Asset Management business for a little over five years, providing strategic direction and business development for the company and then as pioneer Managing Director for the Financial Advisory business, which was created as a distribution platform for all retail products of the Group.',
        'Chioma also worked in Guaranty Trust Bank Plc from May 1995 and left in 2000 as a Deputy Manager.',
      ]}
      showDetails={handleShowDetails}
      displayDetails={showDetails}
      left={'300px'}
      step={step}
      />
    }else if(step === 3) {
      return <BoardDetails about={[
        'Mr. Okolo has 19 years’ experience in Banking and Asset Management. Prior to joining MODD Management, he was Director and Head of the Asset Management subsidiary of Coronation Merchant Bank, where he was responsible for successfully setting up the business.',
        'Also, he served as an Assistant Vice President/Senior Portfolio Manager at Asset and Resource Management (ARM) for three years, heading the Investment Management Division, and was responsible for managing assets of over USD 2 billion for both Institutions and Individual clients.',
        'Emeka began his career as a Treasury Officer in Comet Merchant Bank which later became First Atlantic after which he joined Guardian Express Bank as a FX Currency Trader and then Fidelity Bank, where he worked in Corporate Finance and Strategy divisions at various times. After the acquisition of Fidelity Bank’s N2bn mutual fund business by Investment One Financial Services Limited (then GTB Asset Management), he joined the company to set up the Fund Management business.'
      ]}
      showDetails={handleShowDetails}
      displayDetails={showDetails} 
      step={step}
      />
    }else {
      return <BoardDetails about={[
        'Onene Osila Obele-Oshoko is a disciplined, focused, and dependable professional achiever with a strong drive for building teams that deliver on organizational mandates. She has a strong executive managerial background with senior level experience and cross sector exposure. This is further supported by her investigative mind set on process improvements for effective controls and fraud deterrence. Her robust appreciation of strategic management makes it possible for her to envision, build and implement sophisticated plans that explicitly support key business needs. Although she is highly self- driven, she remains teachable and a team player.',
        'Onene graduated from the Rivers State University (1988) with Bachelors Degree in Accountancy. She is a Fellow of the Institute of Chartered Accountants of Nigeria, as well as member of other professional bodies. She also has a Masters in Business Administration and Masters in Laws (International Business).',
        'She started her work career with Peat Marvick Ani Ogunde (PMAO) & Co (Chartered Accountants) after her National Youth Service, then joined the banking industry in 1991. With over twenty (20) years banking experience of which fourteen (14) years was at managerial level, some years as Chief Finance Officer in the private sector and about four (4) years as Executive Chairman in a significant public agency, Onene has a trail of transformations and major improvements in the Nigerian economy. She is quite verse in both private and public management administration, with a strong bias for management transformation and process reengineering for enhanced productivity.'
      ]}
      showDetails={handleShowDetails}
      displayDetails={showDetails}
      step={step}
      />
    }
  }
  
  return (
    <div>
      <Head>
        <title>Our Board | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Our Board Members Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta property="og:description" content="Our Board Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta property="og:title" content="Our Board Members | Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Banner
          image={bannersix}
          headline="Our Board"
          desc="Our employees have a combined industry experience of 76 years."
        />
        <SmallWrapper>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 pb-16">
            <BoardCardContainer data={data} myShow={showDetails} showDetails={handleShowDetails} switchStep={switchStep} step={step} />
          </div>
          <div>
            {generateDetails()}
          </div>
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

export default OurBoard;
