import Head from 'next/head'
import React from 'react'
import SimpleBanner from '../components/SimpleBanner';
import SmallWrapper from '../components/SmallWrapper';
import AppLayout from "../layouts/AppLayout";

export const Paragraph = ({children}) => {
  return (
    <p className="text-[#1D1D1D] my-2 leading-[1.8rem] text-xs tracking-widest">
      {children}
    </p>
  )
}
export const Heading = ({children}) => {
  return (
    <h1 className="text-[#16130F] mb-3 font-bold font-inter text-[22px]">{children}</h1>
  )
}
export const TextWrapper = ({children}) => {
  return (
    <div className="my-10">{children}</div>
  )
}
const LegalDisclaimer = () => {
  return (
    <div>
      
      <Head>
        <title>Rekit | Contact Us</title>
        <meta
          name="description"
          content="Rekit Web app Wealth Generator Contact Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <SimpleBanner title="LEGAL DISCLAIMER" />
        <SmallWrapper>
          <h1 className="text-[#F3921D] mb-5 font-semibold font-raleway text-[28px]">LEGAL DISCLAIMER - REKIT ADVISORY</h1>
          <p className="text-[#1D1D1D] leading-[1.8rem] text-xs tracking-widest">
          REKIT Financial Advisors Limited (REKIT) and its, officers, directors, owners, employees, agents, and representatives (collectively “REKIT”) provide the Company’s website and mobile application (the “Platform”) for informational purposes only.  Use of and access to the Platform and the information, materials, services, and other content available on or through the Platform (“Content”) are subject to these terms of service and all applicable laws.

          </p>

          <TextWrapper>
            <Heading>NO INVESTMENT ADVICE</Heading>
            <Paragraph>The Content is for informational purposes only, you should not construe any such information or other material as investment, financial, or other advice. Nothing contained on our Platform constitutes a solicitation, recommendation, endorsement, or offer by REKIT or any third-party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.</Paragraph>
            <Paragraph>All Content on the Platform is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Platform constitutes professional and/or financial advice, nor does any information on the Platform constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. REKIT is not a fiduciary by virtue of any person’s use of or access to the Platform or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Platform before making any decisions based on such information or other Content. In exchange for using the Platform, you agree not to hold REKIT, its affiliates or any third-party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you through the Platform.</Paragraph>
          </TextWrapper>

          <TextWrapper>
            <Heading>INVESTMENT RISKS</Heading>
            <Paragraph>There are risks associated with investing in securities. Investing in stocks, bonds, exchange-traded funds, mutual funds, and money market funds involve the risk of loss.  Loss of principal is possible. Some high-risk investments may use leverage, which will accentuate gains & losses. Foreign investing involves special risks, including greater volatility and political, economic and currency risks and differences in accounting methods.  The past investment performance of any securities or firm is not a guarantee or predictor of future investment performance.</Paragraph>
          </TextWrapper>

          <TextWrapper>
            <Heading>THIRD PARTY LINKED SITES</Heading>
            <Paragraph>The Platform may contain links to other websites and REKIT has not reviewed such other websites and is not responsible in any way in relation to the content of such websites. Such websites may provide links to other websites or contents with or without our authorization.  REKIT does not endorse other websites and shall not be responsible or liable for any links from those other websites or contents advertising, products or other materials available on or through such other sites, or any loss or damages incurred in connection therewith.  REKIT may, in its sole discretion, block links to these websites and contents without prior notice.</Paragraph>
            <Paragraph>YOUR USE OF THIRD-PARTY WEBSITES AND CONTENT, INCLUDING WITHOUT LIMITATION, YOUR USE OF ANY INFORMATION, DATA, ADVERTISING, PRODUCTS, OR OTHER MATERIALS ON OR AVAILABLE THROUGH SUCH WEBSITES, IS AT YOUR OWN RISK AND IS SUBJECT TO THEIR TERMS OF USE.</Paragraph>
          </TextWrapper>

          <TextWrapper>
            <Heading>LIMITATION OF LIABILITY</Heading>
            <Paragraph>Use of the Platform is at the user&apos;s own risk and REKIT expressly disclaims all liability with respect to actions taken or not taken based on any contents of the Platform. The contents of the Platform contain general information and may not reflect the most current developments, and neither the authors nor REKIT make any claims, promises or guarantees about the accuracy, completeness, currency or adequacy of the contents or information contained or linked to herein. The materials on the Platform may be changed, improved or updated with or without notice. REKIT is not responsible for any errors or omissions in the content of the Platform or for damages arising from the use or performance of the Platform under any circumstances.</Paragraph>
          </TextWrapper>
        </SmallWrapper>
        </AppLayout>
        
      </div>
  )
}

export default LegalDisclaimer



