import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import AppLayout from "../../../layouts/AppLayout";
import Image from "next/image";
import Link from "next/link";
import clipOne from "../../../public/assets/taxation1.jpeg"
import clipThree from "../assets/taxation2.jpeg"

import { blogPosts } from "../../../constants";


// export async function getServerSideProps(context) {
//   // Disable caching for this page
//   context.res.setHeader('Cache-Control', 'no-store');

//   return {
//     props: {},
//   };
// }

const Taxation = () => {
  const relatedPosts = blogPosts.filter(p => p.category.toLowerCase() == "taxation".toLowerCase());
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog | How to Retire Rich</title>
        <meta
          name="description"
          content="International reach of Specialist expertise in family wealth management, protection, personalised solutions for the preservation of family wealth"
        />
        <meta
          name="keywords"
          content="International reach, Personalised solutions, "
        />
        <link rel="icon" href="/favicon.ico" />

        <title>REKIT Blog | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="This is the blog page for Taxation"
        />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta
          property="og:description"
          content="Insights Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Blog | Taxation | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
        <h1 className="flex justify-center content-center pt-5 text-[#F08420] font-raleway font-bold text-[1.5rem] lg:mx-10 lg:text-[2.5rem] uppercase">
          Taxation
        </h1>

        <div className="lg:w-4/5 px-[0.2rem] pt-5 lg:pt-5 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                      How to navigate Nigeria's current tax landscape: Insights, Changes, and Smart Strategies
                    </h1>
                    {/* <h3 className="pb-3 text-[#212020] text-l  font-raleway">
                    Author:  Samuel Apanisile
                    </h3> */}

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In 2024, Nigeria is poised for a significant overhaul of its tax system, with the aim of boosting revenue, ensuring tax compliance, and facilitating economic growth. The Federal Inland Revenue Service (FIRS) is at the forefront of these reforms, targeting a 57% increase in revenue to 19.4 trillion naira ($20.3 billion). President Bola Tinubu's government is on a mission to streamline tax processes, attract investments, and drive the nation towards financial self-sufficiency.
                    </p> 

                    <div className="flex justify-center content-center pb-4 ">
                    <Image
                    src={clipOne}
                    className="mx-auto"
                    alt="Bosede Lorie"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">1. Boosting Early Revenue: The Role of Withholding Tax (WHT): </span> One of the key mechanisms in enhancing early revenue and widening the tax net is the Withholding Tax (WHT) system. This mechanism involves deducting income tax in advance from specific transactions such as rent, dividends, interest income, and professional fees. For instance, tenants can expect a 5% WHT deduction on monthly rent payments, while shareholders receiving dividends may encounter a 10% deduction. Understanding and navigating WHT implications is crucial for taxpayers aiming to stay compliant and financially savvy.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">2. Tax Compliance for Individuals: </span>  Tax compliance remains a cornerstone for individuals seeking to avoid penalties and legal entanglements. Filing tax returns on time and accurately is paramount. For those unfamiliar with the process, seeking advice from a qualified tax professional can be a wise move, ensuring adherence to evolving tax laws and regulations.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">3. Tax Planning for Individuals: </span> Reducing tax liability becomes achievable through effective tax planning. Investing in tax-efficient instruments like pension plans, mutual funds, and life insurance policies can not only provide financial security but also offer substantial tax benefits. As the landscape evolves, individuals should explore these options to optimize their financial portfolio.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">4. Exploring Tax Incentives for Businesses:  </span> Businesses in Nigeria can leverage tax incentives by investing in specific sectors such as agriculture, infrastructure, and renewable energy. These incentives encompass tax holidays, exemptions, and credits, serving as powerful tools to alleviate the tax burden. Entrepreneurs and corporations should consider exploring these opportunities to foster growth while contributing to national development.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">5. Corporate and Personal Tax Rates:  </span>  Understanding the current tax rates is crucial for both individuals and businesses in Nigeria. The corporate tax rate stands at 30%, while the personal income tax rate is 24%. With potential reforms on the horizon, keeping abreast of any changes in these rates is essential for effective financial planning and decision-making.
                    </p>

                    <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Some insights into Corporate Tax Rates and Exemptions:
                    </h1>

                    
                    <div className="flex justify-center content-center pb-1 ">
                    <Image
                    src={clipThree}
                    className="mx-auto"
                    alt="percentage-allocation-of-income"
                    style={{
                        borderRadius: "10px",
                        }}
                    />
                    </div>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">1. Understanding corporate tax rates is essential for businesses. </span>   Nigeria's corporate tax structure includes exemptions to foster growth:
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Small companies (annual gross turnovers of N25 million or less) are exempted. 
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Medium-sized companies (gross turnovers greater than N25 million but less than N100 million) face a 20% tax rate.
                    </p> 

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                    •	Large companies (annual gross turnovers exceeding N100 million) have a 30% tax rate.
                    </p> 

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    Additionally, Nigerian companies are liable for tax on worldwide income, while non-resident companies (NRCs) are taxed on income derived from Nigeria.
                    </p>



                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">2. Digital and Technical Services Taxation:  </span>   In the era of digital commerce, specific taxation measures have been introduced:
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Digital, online, or e-commerce activities ("Digital SEP") earning over N25 million annually are subject to Nigerian tax laws.
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Technical, Professional, Management, and Consultancy services ("TPMC SEP") provided remotely to Nigerian customers face a 10% WHT, acting as a final tax for foreign companies.
                    </p> 


                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold">3. Taxation of Dividends and Exemptions:  </span> Dividend taxation has nuances:
                    </p>

                    <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Dividends paid from profits with no tax payable or taxable profit less than the dividend paid are taxed as if the dividend is the total taxable profit.
                    </p>

                     <p className="leading-[1.2rem] px-[2rem] pb-2 font-normal font-inter text-[#212020] text-justify text-[1rem]">       
                     •	Exceptions include dividends from retained earnings, tax-exempt profits, franked investment income, and those paid by Real Estate Investment Companies.
                    </p> 


                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    <span className="font-extrabold"> 4. Basis of Assessment and FIRS Empowerment:  </span> Both resident and non-resident companies are assessed on a preceding year basis. The FIRS can use a deemed profit ratio, applying 20% of profits to every income and taxing it at 30%, effectively resulting in 6% of turnover. This practice is predominantly applied to NRCs and, occasionally, Nigerian companies.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    In navigating Nigeria's tax landscape in 2024, individuals and businesses must stay informed, compliant, and strategic. Leveraging withholding tax mechanisms, understanding tax planning opportunities, exploring incentives, and being aware of evolving corporate and personal tax rates are all critical steps in positioning oneself for success amid the ongoing reforms. The reforms reflect a commitment to fiscal responsibility and economic rejuvenation.
                    </p>

                    <p className="leading-[1.2rem] pb-4 font-normal font-inter text-[#212020] text-[1rem]">       
                    For detailed and informative advice on various tax matters, including <span className="font-extrabold"> Capital Gains Tax (CGT), Companies Income Tax (CIT), Value Added Tax (VAT),</span> and more, contact <span className="font-extrabold color-blue">REKIT Financial Advisors. </span>  Our expertise spans a wide array of tax-related subjects, ensuring comprehensive guidance for individuals and businesses in Nigeria's ever-evolving fiscal landscape. As Nigeria charts a path towards financial stability and growth, embracing these insights will be pivotal for taxpayers aiming to thrive in the evolving economic landscape.
                    </p>



                   



 
                    



                    



                </div>

                </div>
                <div className="flex justify-center content-center pb-1 ">
                <h1 className="font-extrabold pt-1 pb-8 text-3xl font-raleway"> Related Posts </h1>
                </div>

            <div className="grid lg:w-4/5 sm:grid-cols-2 lg:grid-cols-4 mx-auto mb-1 lg:mb-1 justify-items-center lg:justify-items-center px-[4rem] ">
            
                {relatedPosts.map(({ title, author, category, slug }, idx) => {
                    return (
                      <Link
                        href={{
                          pathname: `/${category}/[slug]`,
                          query: { slug: slug },
                        }}
                        key={idx}
                        legacyBehavior>
                        <div 
                        className="mx-auto px-[1rem] w-full pb-[3rem] cursor-pointer"
                         >
                        <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                        {author}
                        </h1>
                        <p className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem]">       
                        {title}
                        </p>  
                    </div>
                      </Link>
                    );
                })}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Taxation;
