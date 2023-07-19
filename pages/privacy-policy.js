import Head from 'next/head'
import React from 'react'
import SimpleBanner from '../components/SimpleBanner';
import SmallWrapper from '../components/SmallWrapper';
import AppLayout from "../layouts/AppLayout";
import { Paragraph } from './legal-disclaimer';

const Heading = ({children}) => {
  return (
    <div className="text-[#16130F] font-bold font-inter text-base">{children}</div>
  )
}

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Privacy Policy Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta property="og:description" content="Privacy Policy Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta property="og:title" content="Privacy Policy | Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Head>
        <title>Rekit | Contact Us</title>
        <meta
          name="description"
          content="Rekit Web app Wealth Generator Contact Page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <SimpleBanner title="Privacy Policy" />

        <SmallWrapper>
          <h1  className="text-[#F3921D] mb-5 font-semibold font-raleway text-[28px]">Privacy Policy for REKIT Financial Advisors Limited </h1>

          <div className="my-5">
            <ol className="list-decimal mt-16">
              <li>
                <Heading>Introduction</Heading>
                <Paragraph>rekitadvisory.com is provided by REKIT Financial Advisors Limited (“REKIT”). At REKIT, we value your privacy, and we are committed to safeguarding your personal information. All personal data that you provide us will be protected and kept confidential among our affiliates, representatives, and privies. Throughout the website, the terms “we”, “us” and “our” refer to REKIT.</Paragraph>
                <Paragraph>This Privacy Policy explains how we collect, use, share and protect your personal data in connection with your relationship with us as a user or potential user. It applies to all our clients, potential clients, consultants, partners and every other person we hold information about.</Paragraph>
                <Paragraph>This policy also sets out your rights and who you may contact for further informationYou agree to this Privacy Policy by visiting our website and when you use our services. Your use of our services, and any dispute over privacy is subject to this Policy and our Terms of Service including its applicable limitations on damages and the resolution of disputes. Our Terms of Service are incorporated by reference into this Policy. Our website and services are not directed at you if we are prohibited by any law of any jurisdiction from making the  information on our website available to you and is not intended for any use that would be contrary to local law or regulation.</Paragraph>
              </li>
              <li>
                <Heading>Content</Heading>
                <Paragraph>Where processing of personal information is based on consent, we shall obtain the requisite consent at the time of collection of the personal information. In this regard, you consent to the processing of your personal information when you access our website, or use our services, content, features, technologies or functions offered on our website or other digital platforms. You can withdraw your consent at any time but such withdrawal will not affect the lawfulness of the processing of your data based on consent given before its withdrawal.</Paragraph>
              </li>
              <li>
                <Heading>Age Restriction</Heading>
                <Paragraph>You affirm that you are over the age of majority and have the right to contract in your own name, and that you have read the above authorisation and fully understand its contents.</Paragraph>
              </li>
              <li>
                <Heading>Information We Collect</Heading>
                <Paragraph>In providing financial advisory services to you, we collect certain non-personal and personal information about you.  Our policy is to keep this information confidential and strictly safeguarded, and to use or disclose it only as needed to provide services to you, or as permitted or required by law.  This policy is applicable to information for current and former clients.
</Paragraph>
<Paragraph>There are three categories of information we collect. We collect a variety of information from our users and visitors to our website. As described below, some information is automatically collected when you visit our website, some you provide to us when filling out a form or communicating with us, and some provided to us by Third-Party Integration Application Programming Interface (API), including VerifyMe.
</Paragraph>
                <ol className="list-decimal">
                  <li>
                    <Paragraph>Information Collected Automatically: Whenever you visit our website, our web servers automatically collect non-personal information such as the domain name of the internet access provider, the internet protocol address used to connect the computer to the internet, the average time spent on our website, pages viewed, information searched for, access times, and other relevant statistics.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Information You Provide Us: If you provide us with personal information, by contacting us, or subscribing to our services we collect the following personal information:</Paragraph>
                    <ol>
                    <li>
                    <Paragraph>Username and password;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Contact information;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Investment objectives and experience;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Financial circumstances;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Financial circumstances;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>you provide account information such as your personal details e.g., name, gender, date and place of birth; contact information such as address, email address, and mobile 
                       numbers, provide your employment information</Paragraph>
                  </li>
                  <li>
                    <Paragraph>you provide information concerning your identity e.g., photo ID, passport information, National ID card and nationality</Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                    Payment information;
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>Any other information you provide to us.</Paragraph>
                  </li>
                    </ol>
                  </li>
                  <li>
                    <Paragraph>Information Provided by Third-Party Integration API: In order to provide our bespoke Services to our clients, we collect personally identifiable information available through VerifyMe, a third-party platform that provides us digital identity and verification services. Some of the following personal information include:</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Bank Verification Number (BVN);</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Company Identification;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Driver License Number;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Identity Biometrics;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>National Identity Number;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Tax Identity Number;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Property Verification;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>Employment Verification.</Paragraph>
                  </li>
                </ol>
              </li>
              <li>
                <Heading>Using Your Personally Identifiable Information</Heading>
                <Paragraph>“Personally Identifiable Information” means any information that (a) identifies or can be used to identify, contact, or locate the person to whom such information pertains, or (b) from which identification or contact information of an individual person can be derived.</Paragraph>
                <Paragraph>We primarily collect your information to ensure that we provide the most efficient financial advisory service to you, monitor the use and improve our website and other legitimate interests. Your information will solely be used and disclosed for the following purposes:</Paragraph>
                <ol>
                  <li>
                    <Paragraph>To help us verify your identity;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>We conduct necessary investigations i.e., due diligence checks, and AML/CFT checks and obtain information that we need to support our regulatory obligations, e.g., information 
             about transaction details, detection of any suspicious and unusual activities; </Paragraph>
                  </li>
                  <li>
                    <Paragraph>We use these information to detect and prevent financial crimes including fraud, financing for terrorism and money laundering, this is to ensure security and business continuity.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To carry out our obligations ensuing from any contracts entered into between you and us;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To provide you with the products, services and information you request from us; </Paragraph>
                  </li>
                  <li>
                    <Paragraph>To assist you with enquiries and improve our customer service;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To assist us in carrying out marketing analysis and customer profiling (including transactional information), conduct research, including creating statistical and testing information;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To allow us to communicate with you in any way (including e-mail, telephone, visit, and text or multimedia messages);</Paragraph>
                  </li>
                  <li>
                    <Paragraph>For our billing and account purposes;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>For our billing and account purposes;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To help prevent and detect fraud or loss;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To update our records;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To make recommendations and suggestions to you about services offered by us unless you have previously asked us not to do so;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To send you service or support messages, such as updates, security alerts, email notifications and /or newsletters;</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To conduct investigations and risk assessments; and</Paragraph>
                  </li>
                  <li>
                    <Paragraph>For compliance with legal and regulatory obligations. </Paragraph>
                  </li>
                </ol>
              </li>
              <li>
                <Heading>6.	Data Accuracy</Heading>
                <Paragraph>Your personal data must be accurate and kept up to date. In this regard, REKIT shall ensure that any data it collects and/or processes is accurate and not misleading in a way that could be harmful to you; make efforts to keep your personal data updated where reasonable and applicable; and make timely efforts to correct or erase your personal data when inaccuracies are discovered.</Paragraph>
              </li>
              <li>
                <Heading>7.	Other Information We Collect</Heading>
                <Paragraph>Other information which may be automatically collected from you when you visit our website include; domain name of your internet service provider, the internet protocol address used to connect the computer to the internet, the average time spent on our website, pages viewed, information searched for, access times, your geographical location, operating system, referral source, and other relevant statistics. We may also collect information from you using cookies and other analytical tools especially when you use our products and services. More details are provided below in our section on Cookies.</Paragraph>
              </li>
              <li>
                <Heading>8.	Data Confidentiality</Heading>
                <Paragraph>Your information is regarded as confidential and will not be divulged to any third party, except under legal and/or regulatory conditions. You have the right to request copies of any and all information we keep on you, if such requests are made in compliance with the Freedom of Information Act and other relevant enactments. While we are responsible for safeguarding the information entrusted to us, your role in fulfilling confidentiality duties includes, but is not limited to, adopting and enforcing appropriate security measures such as non-sharing of passwords and other platform login details, adherence with physical security protocols on our premises, dealing with only authorized officers of REKIT.</Paragraph>
              </li>
              <li>
                <Heading>9.	Disclosures</Heading>
                <ol>
                  <li>
                    <Paragraph>We will not sell, publish, or disclose to third parties your personally identifiable information collected on our website, through our servers or otherwise obtained by us, other than to 
provide our services and as set forth in this Privacy Policy. We may share generic aggregated demographic information not linked to any personally identifiable information regarding 
visitors and Users with our business partners, trusted affiliates, professional advisers and advertisers for the purposes outlined above. We may share your information with these third 
parties for those limited purposes if you have given us your permission and in compliance with the Nigeria Data Protection Regulation 2019 (NDPR).</Paragraph>
                  </li>
                  <li>
                    <Paragraph>We may request and provide information about you from and to third parties to provide our services.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>We will notify you as soon as we become aware of a harmful data breach which may result in a risk of your rights and freedom.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>You have the right to request an erasure of your data at any time.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>We will notify you if we are transferring your data.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>You may request at any time that we halt further dissemination of your data or cease to use your data.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>We may disclose Personally Identifiable Information if required to do so by law or in the good faith belief that such action is necessary to (a) conform with the requirements of the
law or comply with legal process served on us, or (b) act in urgent circumstances to protect the personal safety of users of our service or members of the public.</Paragraph>
                  </li>
                  <li>
                    <Paragraph>To the extent practicable and legally permitted, we will attempt to advise you prior to any such disclosure, so that you may seek a protective order or other relief limiting such 
 disclosure.</Paragraph>
                  </li>
                 
                </ol>
              </li>
              <li>
                <Heading>10.	Transfer of Personal Data</Heading>
                <ol>
                  <li>
                    <div>Third Party Processor within Nigeria </div>
                  <Paragraph>We may engage the services of third parties in order to process your personal data. The processing by such third parties shall be governed by a written contract with REKIT to ensure 
  adequate protection and security measures are put in place by the third party for the protection of your personal data in accordance with the terms of this policy and the Nigeria Data
 Protection Regulation (NDPR).</Paragraph>
                  </li>
                  <li>
                  Transfer of Personal Data to Foreign Country
                  <ol>
                    <li>
                      <Paragraph>Where your personal data is to be transferred to a country outside Nigeria, REKIT shall put adequate measures in place to ensure the security of such data. In particular, REKIT
          shall, among other things, conduct a detailed assessment of whether the said country is on the National Information Technology Development Agency (NITDA) White List of 
          Countries with adequate data protection laws.</Paragraph>
                    </li>
                    <li><Paragraph>Transfer of your personal data out of Nigeria would be in accordance with the provisions of the NDPR. REKIT will therefore only transfer your personal data out of Nigeria on one 
           of the following conditions: </Paragraph>
           <ul className="list-[lower-alpha]">
             <li><Paragraph>Your explicit consent has been obtained;</Paragraph></li>
             <li><Paragraph>The transfer is necessary for the performance of a contract between you and REKIT;</Paragraph></li>
             <li><Paragraph>The transfer is necessary to conclude a contract between REKIT and a third party in your interest;</Paragraph></li>
             <li><Paragraph>The transfer is necessary for reason of public interest;</Paragraph></li>
             <li><Paragraph>The transfer is for the establishment, exercise or defense of legal claims;</Paragraph></li>
             <li><Paragraph>The transfer is necessary in order to protect your vital interests or the interests of other persons, where you are physically or legally incapable of giving consent</Paragraph></li>
           </ul>
           </li>
           <li>
             <Paragraph>Provided, in all circumstances, that you have been manifestly made to understand through clear warnings of the specific principle(s) of data protection that are likely to be violated     
      in the event of transfer to a third country, this provision shall not apply to any instance where you are answerable in duly established legal action for any civil or criminal claim in 
      another country.</Paragraph>
           </li>
           <li><Paragraph>We will take all necessary steps to ensure that your personal data is transmitted in a safe and secure manner. Details of the protection given to your information when it is 
       transferred outside Nigeria shall be provided to you upon request.</Paragraph></li>
       <li><Paragraph>Where the recipient country is not on the White List and none of the conditions stipulated in clause 9.2.2 of this policy is met, REKIT will engage with NITDA and the Office of the      
      Honourable Attorney General of the Federation (HAGF) for approval with respect to such transfer.</Paragraph></li>
                  </ol>
                  </li>
                </ol>
                  </li>
                  <li>
                    <Heading>11.	Disclosures</Heading>
                    <Paragraph>Subject to certain limitations and exceptions, you are entitled to the following principal rights under the NDPR: </Paragraph>
                    <ol>
                      <li>
                        <Paragraph>You have the right to be notified if we are transferring your personal information.</Paragraph>
                      </li>
                      <li>
                        <Paragraph>You have the right to request an erasure of your personal information at any time.</Paragraph>
                      </li>
                      <li>
                        <Paragraph>You have the right to request that we rectify inaccurate personal information.</Paragraph>
                      </li>
                      <li>
                        <Paragraph>You may request at any time that we halt further dissemination of your data or cease to use your personal information.</Paragraph>
                      </li>
                      <li>
                        <Paragraph>You have the right to request for copies of your personal information.</Paragraph>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <Heading>12.	Website Security</Heading>
                    <Paragraph>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures such as secure sockets layer (SSL) to safeguard and secure the information we collect online. We use encryption tools when accepting and transmitting delicate visitor information through our website. Some of the other safeguards we use are firewalls and physical access controls to our data centres, and information access authorization controls.</Paragraph>
                  </li>
                  <li>
                    <Heading>13.	Training</Heading>
                    <Paragraph>We shall ensure that employees who collect, access and process your personal data receive adequate data privacy and protection training in order to develop the necessary knowledge, skills and competence required to effectively manage the compliance framework under this policy and the NDPR with regard to the protection of personal data. On an annual basis, we shall develop a capacity building plan for our employees on data privacy and protection in accordance with the NDPR.</Paragraph>
                  </li>
                  <li>
                    <Heading>14.	Use of Cookies</Heading>
                    <Paragraph>We use cookies to identify you as a user and make your user experience easier, customise our services, content and advertising; help you ensure that your account security is not compromised, mitigate risk and prevent fraud; and to promote trust and safety on our website. Cookies allow our servers to remember your account log-in information when you visit our website, IP addresses, date and time of visits, monitor web traffic and prevent fraudulent activities. If your browser or browser add-on permits, you have the choice to disable cookies on our website; however, this may limit your ability to use our website.</Paragraph>
                  </li>
                  <li>
                    <Heading>15.	The Data We Retain</Heading>
                    <Paragraph>We will retain your information for as long as needed to provide you with our services, comply with our legal and statutory obligations or verify your information with a financial institution. 
We are statutory obligated to retain the data you provide us with in order to process transactions, ensure settlements, make refunds, identify fraud and in compliance with laws and regulatory guidelines applicable to us, our banking providers and credit card processors.</Paragraph>
                  </li>
                  <li>
                    <Heading>16.	Data Breach Management Procedure </Heading>
                    <ol>
                      <li>
                        <Paragraph>In the event where there is any accidental or unlawful destruction, processing, loss, alteration, unauthorized disclosure of, or access to your personal data, we shall: </Paragraph>
                      </li>
                      <li><Paragraph>notify you within 24 hours of the occurrence of the data breach;  </Paragraph></li>
                      <li><Paragraph>properly investigate the breach and take the necessary steps to mitigate such breach;</Paragraph></li>
                      <li><Paragraph>identify remediation requirements and track the resolution of such breach; and</Paragraph></li>
                      <li><Paragraph>notify NITDA or any other regulatory authority, where necessary.</Paragraph></li>
                    </ol>
                  </li>
                  <li>
                    <Heading> 17.	Links to Third Party Websites</Heading>
                    <ol>
                      <li><Paragraph>Our website may contain links to third-party websites or services that are not owned or controlled by us.</Paragraph></li>
                      <li><Paragraph>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree 
          that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such ,
            content goods or services available on or through any such websites or services.</Paragraph></li>
                      <li><Paragraph>	We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</Paragraph></li>
                    </ol>
                  </li>
                  <li>
                    <Heading>18.	Limitation of Liability</Heading>
                    <Paragraph>We exercise reasonable efforts to safeguard the security and confidentiality of your personal data; however, we will not be liable for unauthorised disclosure of personal data that occurs through no fault of ours.</Paragraph>
                  </li>
                  <li>
                    <Heading>19.	Changes to this Privacy Policy</Heading>
                    <Paragraph>Changes may be made to this Privacy Policy from time. Whenever such changes are made, we will notify you. These changes will take effect immediately after you have been notified.</Paragraph>
                  </li>
                  <li>
                    <Heading>20.	Contact Us</Heading>
                    <Paragraph>If you would like more information or you have any comments or questions on our Privacy Policy, please contact us at info@rekitadvisory.com</Paragraph>
                  </li>
            </ol>

            <div className="mt-10 font-inter font-semibold text-[#1D1D1D] text-sm">This policy is effective as of January 2022.  Last updated: January 2022</div>
          </div>
        </SmallWrapper>
        </AppLayout>
        
      </div>
  )
}

export default PrivacyPolicy