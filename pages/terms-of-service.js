import Head from 'next/head'
import React from 'react'
import SimpleBanner from '../components/SimpleBanner';
import AppLayout from "../layouts/AppLayout";
import SmallWrapper from '../components/SmallWrapper';
import { Paragraph } from './legal-disclaimer';

const Heading = ({children}) => {
  return (
    <div className="text-[#16130F] font-bold font-inter text-base">{children}</div>
  )
}

const TermsConditions = () => {
  return (
    <div>
      <Head>
        <title>Terms of Service | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Terms of Service Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta property="og:description" content="Terms of Service Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta property="og:title" content="Terms of Service | Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AppLayout>
        <SimpleBanner title="terms of service " />
        <SmallWrapper>
        <h1  className="text-[#F3921D] mb-5 font-semibold font-raleway text-[28px]">
          Terms of Service – REKIT Financial Advisors Limited
          </h1>
          <p>Please read these Terms of Service (“Terms”), which set forth the legally binding terms and conditions between you and REKIT Financial Advisors Limited (‘the Company’ or ‘REKIT’ or ‘we’, ‘our’ or ‘us’). It governs your access to and the use of the Company’s website, mobile application and the Services provided by REKIT. Our collection and use of your personal information in connection with your use of our Services is described in our Privacy Policy.  Your access to use our services is conditioned on your acceptance of and compliance with these Terms.
These Terms apply to all visitors, users, agents, and any other person who access or use our services. Our website is not directed at you if we are prohibited by any law of any jurisdiction from making the information on our website available to you and is not intended for any use that would be contrary to your local law or regulation.
By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access our services.
</p>
        <div className="my-5">
            <ol className="list-decimal mt-16">
              <li>
                <Heading>	Definitions</Heading>
                <Paragraph>In these Terms,</Paragraph>
                <Paragraph> <span className="font-bold">“Account”</span>	means a unique personified account registered in the name of the User and which contains details of the User’s transactions/operations on the Platform (as defined below). </Paragraph>
                <Paragraph> <span className="font-bold">“Mobile Application”</span>	means any mobile application developed by REKIT.</Paragraph>
                <Paragraph> <span className="font-bold">“Platform”</span>	means, collectively the Company’s website, mobile application and other related applications provided by REKIT.</Paragraph>
                <Paragraph> <span className="font-bold">“Service(s)”</span>	means all products and services provided to you by REKIT and as described in clause 3 of these Terms.</Paragraph>
                <Paragraph> <span className="font-bold">“Site”</span>	means the website for the services provided by REKIT which can be found at info@rekitadvisory.com. </Paragraph>
                <Paragraph> <span className="font-bold">“Terms”</span>	means these standard terms of service.</Paragraph>
                <Paragraph> <span className="font-bold">“User”</span>	means persons, customers and visitors who access the Service.</Paragraph>
              </li>
              <li>
                <Heading>	Acceptance of Terms</Heading>
                <Paragraph>The Service is offered subject to acceptance of all the terms and conditions contained in these Terms and all other operating rules, policies, and procedures that may be published on the Platform, which are incorporated by reference, including operating rules, policies, and procedures of third-party service providers to the Platform that are referenced herein. These Terms apply to every user of the Service. In addition, some Services offered through the Platform may be subject to additional terms and conditions adopted by the Platform. Your use of those Services is subject to those additional terms and conditions, which are incorporated into these Terms by this reference.</Paragraph>
                <Paragraph>REKIT reserves the right, at its sole discretion, to modify or replace these Terms from time to time by posting the updated terms on the Platform. It is your responsibility to check the Terms periodically for changes. If you object to any such changes, your sole recourse will be to cease using the Platform and the Service.  Your continued use of the Service following the posting of any changes to the Terms will indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.</Paragraph>
                <Paragraph>REKIT reserves the right to change, suspend, or discontinue the Service (including, but not limited to, the availability of any feature, database, or Content) at any time for any reason. REKIT may also impose limits on certain features and Services or restrict your access to parts of or the entire Platform without notice or liability.</Paragraph>
              </li>
                <li>
                  <Heading>	Scope of REKIT’s Services</Heading>
                  <ol className="list-decimal">
                    <li>
                      <Paragraph>REKIT is an investment advisory solutions company that provides comprehensive and specialized financial consulting which encompass wealth management, investment solutions and
administration, trust and wills as well as tax management.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>REKIT uses various technology solutions to offer its clients diverse investment solutions.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>REKIT’s Services can be accessed through its web and mobile applications.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>REKIT may make access to the Platform or certain areas or features of the Platform, subject to certain conditions or requirements, such as signing up for an account, completing a 
verification process, meeting specific quality or eligibility criteria.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>To access our Services, a User is required to sign up on the Platform and create an account (REKIT Account) by providing the User’s name, email and password.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>A User is granted access to use the Platform and has a responsibility to ensure that no third party shall gain access to the User’s account information. Accounts can only be used by 
the person in whose name and information they are registered under. The User is granted an exclusive and non-assignable right to the use of and to access the Account and it is his/
her responsibility to ensure that no other third party, including, without limitation, to any next of kin and/or to members of his/her immediate family, shall gain access to and/or trade 
through the Account assigned to him/her.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>You must be at least 18 years old and able to enter into legally binding contracts to access and use the Services. By accessing or using the Platform, you represent and warrant that 
you are 18 or older and have the legal capacity and authority to enter into a contract.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>You hereby authorise Us to, directly or through third parties, make any inquiries we consider necessary to verify your identity and/or protect against fraud, including to query identity 
information contained in public reports (e.g., your name, address, past addresses, or date of birth), to query account information associated with your linked bank account (e.g., name 
or account balance), and to take action we reasonably deem necessary based on the results of such inquiries and reports. You further authorise any and all third parties to which such 
inquiries or requests may be directed to fully respond to such inquiries or requests.</Paragraph>
                    </li>
                    <li>
                      <Paragraph>REKIT does not assume any responsibility for the confirmation of any User’s identity. Notwithstanding the above, for transparency and as permitted by Applicable Laws, we may ask 
 users to provide a form of government identification or other information or undertake additional checks designed to help verify the identities or backgrounds of the Users. </Paragraph>
                    </li>
                    <li>
                      <Paragraph>You agree to strictly observe the security and authentication procedures of the Platform and you will log out from the Platform at the end of every visit.</Paragraph>
                    </li>
                    <li><Paragraph>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms, 
 which may result in immediate termination of your account on our Platform and the Service.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>4.	Accounts</Heading>
                  <ol>
                    <li><Paragraph>To initiate and commence the use any of our Services, all Users must sign up by registering an Account on the relevant Platform.</Paragraph></li>
                    <li><Paragraph>To initiate and commence the use any of our Services, all Users must sign up by registering an Account on the relevant Platform.</Paragraph></li>
                    <li><Paragraph>You must provide accurate, current and complete information during the registration process and keep your Account information up to date at all times.</Paragraph></li>
                    <li><Paragraph>You are responsible for safeguarding the password that you use to access the Services on the Platform and for any activities or actions under your password, whether your password 
         is with our Service or a third-party service.</Paragraph></li>
                    <li><Paragraph>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your Account.</Paragraph></li>
                    <li><Paragraph>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or  
        entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</Paragraph></li>
                    <li><Paragraph>You are liable for any and all activities conducted through your Account, unless such activities are not authorised by you and you are not otherwise negligent (such as failing to report 
       the unauthorised use or loss of your credentials)</Paragraph></li>
                    <li><Paragraph>You agree to strictly observe the security and authentication procedures of the website/service and you will log out from the website by taking proper steps at the end of every visit.</Paragraph></li>
                      <li>
                        <Paragraph>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms, 
        which may result in immediate termination of your account on our Service.</Paragraph>
                      </li>
                  </ol>
                </li>
                <li>
                  <Heading>5.	Fees and Payment Terms</Heading>
                  <ol>
                    <li><Paragraph>Our Services are provided on investment-by-investment basis.</Paragraph></li>
                    <li><Paragraph>Subject to your investment, you agree to pay fees in accordance with the applicable fees generated for you.</Paragraph></li>
                    <li><Paragraph>Subject to the requirements of the law, REKIT will not refund paid fees. REKIT may however consider limited refund requests on a case-by-case basis.</Paragraph></li>
                    <li><Paragraph>All appropriate fees payable by you based on your investment will be subjected to appropriate taxes including but not limited to withholding taxes and value-added taxes.</Paragraph></li>
                    <li><Paragraph>You will notify us in writing in the event you dispute any fees paid or payable by you under these Terms. If you dispute any fees, you agree to act reasonably and in good faith and will
         cooperate diligently with us to resolve the dispute. You will provide such notice to us within 30 (thirty) working days of the date we bill you for such fees that are in dispute and the 
         parties will work together to resolve the dispute promptly.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>6.	Credit Card and Payments</Heading>
                  <ol>
                    <li><Paragraph>Payments for our Services can be made with your debit and credit cards.</Paragraph></li>
                    <li><Paragraph>Payments for our Services can be made with your debit and credit cards.</Paragraph></li>
                    <li><Paragraph>You agree to provide us with your valid debit or credit card (“card”) information and authorize us to deduct your charges against that card.</Paragraph></li>
                    <li><Paragraph>Where your card expires, you agree to replace your billing information with the information of a valid card. You acknowledge and agree that we’re authorized to deduct any charges 
        on your account against the new card.</Paragraph></li>
                    <li><Paragraph>You represent and warrants that you are authorized to use that card, and that all charges may be billed to that card and won’t be rejected. Where we are unable to process your card 
        order, we will contact you by email and may suspend our Services to you until your payment can be processed.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>7.	Users’ Representations & Warranties</Heading>
                  <Paragraph>Representations and warranties are statements and promises made by you to REKIT, which we rely on as being accurate in our dealings with you. You make the following representations and warranties to us at the time of agreeing to these Terms and every time you use the Services;</Paragraph>
                      <ol>
                        <li><Paragraph>you are over the age of 18 years;</Paragraph></li>
                        <li><Paragraph>you are of sound mind and have the capacity to enter into a legally binding contract;</Paragraph></li>
                        <li><Paragraph>all personal information that you provide about yourself is accurate and true to the best of your knowledge;</Paragraph></li>
                        <li><Paragraph>all information that you provide about you is accurate and true;</Paragraph></li>
                        <li><Paragraph>you have carefully considered the risks involved with using the Platform, and its Services;</Paragraph></li>
                        <li><Paragraph>if you are registering or accepting these Terms on behalf of a legal entity such as a company, trust or partnership, you are legally authorised to do so and we may request evidence of 
             such legal entitlement (by way of a copy of any document which shows the valid and subsisting authorisation);</Paragraph></li>
                        <li><Paragraph>you will obtain such professional advice as is appropriate to protect your interests, including legal, tax, accounting and other advice; and</Paragraph></li>
                        <li><Paragraph>you are not breaching any Applicable Laws or regulations that are applicable to you or any company, trust or partnership upon whose authority you are acting.</Paragraph></li>
                      </ol>
                </li>
                <li>
                  <Heading>8.	Intellectual Property </Heading>
                  <Paragraph>Representations and warranties are statements and promises made by you to REKIT, which we rely on as being accurate in our dealings with you. You make the following representations and warranties to us at the time of agreeing to these Terms and every time you use the Services;</Paragraph>
                  <ol>
                    <li><Paragraph>The Service and all rights in our product name, trade names, logos, service marks, slogans, product packaging, its original content, features and functionality are and will remain the 
             exclusive property of REKIT. Our trademarks may not be used in connection with any product or service without our prior written consent.</Paragraph></li>
                    <li><Paragraph>You will not use, copy, adapt, modify, prepare derivative works of, distribute, license, sell, transfer, publicly display, publicly perform, transmit, broadcast or otherwise exploit REKIT’s 
             website or Collective Content, except to the extent that you are the legal owner of certain User Content or as expressly permitted in these Terms. No licenses or rights are granted to 
             you by implication or otherwise under any intellectual property rights owned or controlled by REKIT or its licensors, except for the licenses and rights expressly granted in these 
             Terms.</Paragraph></li>
                    <li><Paragraph>Subject to your compliance with these Terms, REKIT grants you a limited, non-exclusive, non-sub licensable, revocable, non-transferable license to access and view any Collective 
             Content made available on or through the website and accessible to you, solely for your personal and non-commercial use.</Paragraph></li>
                    <li><Paragraph>Users shall not directly or indirectly: (i) decipher, decompile, disassemble, reverse engineer, or otherwise attempt to derive any source code or underlying ideas or algorithms of any 
             part of the Service, except to the extent applicable laws specifically prohibit such restriction; (ii) modify, translate, or otherwise create derivative works of any part of the Service; or 
             (iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that you receive hereunder.;</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>9.	Special Provisions for Mobile Applications</Heading>
                  <ol className="list-decimal">
                    <li><Paragraph>REKIT may make available Mobile Applications to access the Services via a mobile device.  To use the Mobile Application, you must have a mobile device that is compatible with the 
mobile service.</Paragraph></li>
                    <li><Paragraph>REKIT does not warrant that the Mobile Application will be compatible with your mobile device.  REKIT hereby grants to you a non-exclusive, non-transferable, revocable license to 
use an object code copy of the Mobile Application for one registered account on one mobile device owned or leased solely by you, for your personal use.</Paragraph></li>
                    <li><Paragraph>You may not: (i) modify, disassemble, decompile or reverse engineer the Mobile Application; (ii) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Mobile 
 Application to any third-party or use the Mobile Application to provide time sharing or similar services for any third-party; (iii) make any copies of the Mobile Application; (iv) remove, 
circumvent, disable, damage or otherwise interfere with security-related features of the Mobile Application, features that prevent or restrict use or copying of any content accessible 
through the Mobile Application, or features that enforce limitations on use of the Mobile Application; or (v) delete the copyright and other proprietary rights notices on the Mobile 
Application.</Paragraph></li>
                    <li><Paragraph>You acknowledge that REKIT may occasionally issue upgraded versions of the Mobile Application, and may automatically electronically upgrade the version of the Mobile Application 
 that you are using on your mobile device.  You consent to such automatic upgrading on your mobile device, and agree that these Terms will apply to all such upgrades.</Paragraph></li>
                    <li><Paragraph>Standard data charges from your mobile network or internet service provider may apply to your use of the Mobile Application.</Paragraph></li>
                    <li><Paragraph>The following additional terms and conditions apply with respect to any Mobile Application that REKIT provides to you designed for use on an Apple iOS-powered mobile device (an
  “iOS App”):</Paragraph>
  <ol className="list-decimal">
    <li><Paragraph>You acknowledge that these Terms are between you and REKIT only, and not with Apple, Inc. (“Apple”).</Paragraph></li>
    <li><Paragraph>Your use of REKIT’s iOS App must comply with Apple’s current App Store Terms of Service.</Paragraph></li>
    <li><Paragraph>REKIT, and not Apple, is solely responsible for our iOS App and the Services and related content available on our iOS App. You acknowledge that Apple has no obligation to 
       provide maintenance and support services with respect to our iOS App.  To the maximum extent permitted by applicable law, Apple will have no warranty obligation whatsoever 
       with respect to our iOS App.</Paragraph></li>
    <li><Paragraph>You agree that REKIT, and not Apple, is responsible for addressing any claims by you or any third-party relating to our iOS App or your possession and/or use of our iOS App, 
         including, but not limited to: (i) product liability claims; (ii) and claims arising under consumer protection or similar legislation, and all such claims are governed solely by these 
         Terms and any law applicable to us as provider of the iOS App.</Paragraph></li>
    <li><Paragraph>You agree that REKIT, and not Apple, shall be responsible, to the extent required by these Terms, for the investigation, defense, settlement and discharge of any third-party
         intellectual property infringement claim related to our iOS App or your possession and use of our iOS App.</Paragraph></li>
    <li><Paragraph>You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a
       “terrorist supporting” country; and (ii) You are not listed on any U.S. Government list of prohibited or restricted parties..</Paragraph></li>
  </ol>
  </li>
                  <li><Paragraph>The following additional terms and conditions apply with respect to any Mobile Application that REKIT provides to you designed for use on an Android-powered mobile device (an 
 “Android App”):</Paragraph></li>
                  <li><Paragraph>You acknowledge that these Terms are between you and REKIT only, and not with Google, Inc. (“Google”)..</Paragraph></li>
                  <li><Paragraph>Your use of REKIT’s Android App must comply with Google’s current Android Market Terms of Service.</Paragraph></li>
                  <li><Paragraph>Google is only a provider of the Android Market where you obtained the Android App. REKIT, and not Google, are solely responsible for REKIT’s Android App and the Services and 
       content available thereon.  Google has no obligation or liability to you with respect to REKIT’s Android App or these Terms.</Paragraph></li>
                  <li><Paragraph>You acknowledge and agree that Google is a third-party beneficiary to the Terms as they relate to REKIT’s Android App.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>	Prohibited Activities</Heading>
                  <ol className="list-decimal">
                    <li><Paragraph>You shall not use the Services for any purpose that is prohibited by these Terms. You are responsible for all your activity in connection with the Services. Violation of our rules may 
result in the termination and cancellation of your transaction. You acknowledge and agree that we may terminate any REKIT transaction initiated at any time for any reason (including, 
but not limited to, our independent assessment or the receipt of claims or allegations from third parties or authorities).</Paragraph></li>
                    <li><Paragraph>Users shall not utilize the Site or the Services for any illegal purpose.</Paragraph></li>
                    <li><Paragraph>You are solely responsible for compliance with any and all laws, rules, regulations, and tax obligations that may apply to your use of the Services. In connection with your use of the 
 Site, you will not and will not assist or enable others to:</Paragraph></li>
                    <li><Paragraph>breach or circumvent any applicable laws or regulations, agreements with third-parties, third-party rights, or our Terms;</Paragraph></li>
                    <li><Paragraph>use the Site or Collective Content for any commercial or other purposes that are not expressly permitted by these Terms or in a manner that falsely implies endorsement, 
 partnership or otherwise misleads others as to your affiliation with REKIT;</Paragraph></li>
                    <li><Paragraph>copy, store or otherwise access or use any information, including personally identifiable information about any other User, contained on the Site in any way that is inconsistent with 
 REKIT’s Privacy Policy or these Terms or that otherwise violates the privacy rights of Users or third parties;</Paragraph></li>
                    <li><Paragraph>use the Platform in connection with the distribution of unsolicited commercial messages ("spam");</Paragraph></li>
                    <li><Paragraph>use the Platform with the intention to circumvent any Service Fees or for any other reason; </Paragraph>
                      <ol className="list-decimal">
                        <li><Paragraph>request, accept or make any payment for orders outside of the Platform. If you do so, you acknowledge and agree that you: (i) would be in breach of these Terms; (ii) accept all 
       risks and responsibility for such payment, and (iii) hold REKIT harmless from any liability for such payment;</Paragraph></li>
                        <li><Paragraph>discriminate against or harass anyone on the basis of race, tribe, origin, religion, gender, physical or mental disability, medical condition, marital status, or age, or otherwise 
        engage in any abusive or disruptive behaviour;</Paragraph></li>
                        <li><Paragraph>use, display, mirror or frame the Platform or Collective Content, or any individual element within the REKIT, REKIT’s name, any trademark, logo or other proprietary information 
        belonging to REKIT, or the layout and design of any page or form contained on a page in the Platform, without REKIT’s express written consent;</Paragraph></li>
                        <li><Paragraph>dilute, tarnish or otherwise harm REKIT’s brand in any way, including through unauthorized use of Collective Content, registering and/or using REKIT’s or derivative terms in 
        domain names, trade names, trademarks or other source identifiers, or registering and/or using domains names, trade names, trademarks or other source identifiers that closely 
        imitate or are confusingly similar to REKIT’s domains, trademarks, taglines, promotional campaigns or Collective Content;</Paragraph></li>
                        <li><Paragraph>use any robots, spider, crawler, scraper or other automated means or processes to access, collect data or other content from or otherwise interact with the Platform for any 
        purpose;</Paragraph></li>
                        <li><Paragraph>avoid, bypass, remove, deactivate, impair, descramble, or otherwise attempt to circumvent any technological measure implemented by REKIT or any of REKIT’s providers or any 
        other third party to protect the Platform;</Paragraph></li>
                        <li><Paragraph>attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Platform;</Paragraph></li>
                        <li><Paragraph>take any action that damages or adversely affects, or could damage or adversely affect the performance or proper functioning of the Platform;</Paragraph></li>
                        <li><Paragraph>violate or infringe anyone else’s rights or otherwise cause harm to anyone.</Paragraph></li>
                      </ol>
                    </li>
                    <li><Paragraph>You acknowledge that REKIT has no obligation to monitor the access to or use of the Platform by any User or to review, disable access to, or edit any User Content, but has the right 
  to do so to (i) operate, secure and improve the Platform (including without limitation for fraud prevention, risk assessment, investigation and customer support purposes); (ii) ensure 
  Users’ compliance with these Terms; (iii) comply with applicable law or the order or requirement of a court, law enforcement or other administrative agency or governmental body
  ; (iv) respond to User Content that it determines is harmful or objectionable; or (v) as otherwise set forth in these Terms. Users agree to cooperate with and assist REKIT in good 
  faith, and to provide REKIT with such information and take such actions as may be reasonably requested by REKIT with respect to any investigation undertaken by REKIT or a 
  representative of REKIT regarding the use or abuse of the Platform.</Paragraph></li>
  <li><Paragraph>If you feel that any User you interact with, whether online or in person, is acting or has acted inappropriately, including but not limited to anyone who (i) engages in offensive, 
   violent or sexually inappropriate behaviour, (ii) you suspect of stealing from you, or (iii) engages in any other disturbing conduct, you should immediately report such person to the 
   appropriate authorities and then to REKIT by contacting us with your police station and report number (if available); provided that your report will not obligate us to take any action 
   beyond that required by law (if any) or cause us to incur any liability to you.</Paragraph></li>
                  </ol>
                </li>
                <li><Heading>11.	Links to Other Websites</Heading>
                <ol className="list-decimal">
                  <li><Paragraph>The Platform may contain links to third-party websites or services that are not owned or controlled by REKIT.</Paragraph></li>
                  <li><Paragraph>REKIT has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree 
        that REKIT shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such 
        content, goods or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party 
        websites or services that you visit.</Paragraph></li>
                </ol>
                </li>
                <li><Heading>12.	Termination</Heading>
                  <ol className="list-decimal">
                    <li>
                      <Paragraph>

                      We may terminate or suspend our Service to you immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                      </Paragraph>
                      </li>
                    <li><Paragraph>Upon termination, your right to use the Platform and our Service will immediately cease. If you wish to terminate your transaction, you may simply send an email to 
          info@rekitadvisory.com.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>13.	Indemnity</Heading>
                  <Paragraph>You agree to indemnify and hold harmless REKIT, its affiliates and subsidiaries, its officers, directors, employees and agents, against all liabilities, costs, expenses, damages and losses (including any direct, indirect or consequential losses, loss of profit, loss of reputation and all interest penalties and legal and other reasonable professional costs and expenses) suffered or incurred as a result of:</Paragraph>
                  <ol className="list-decimal">
                    <li><Paragraph>your fraudulent or illegal use of the Services or the Platform;</Paragraph></li>
                    <li><Paragraph>your negligence or any default by you of any of these Terms;</Paragraph></li>
                    <li><Paragraph>any inaccurate or incomplete information that you have knowingly provided to us;</Paragraph></li>
                    <li><Paragraph>you allowing any other person to access your account either with your permission or as a result of your failure to keep your username and password private;</Paragraph></li>
                    <li><Paragraph>any claim made against you for actual or alleged infringement of REKIT’s Intellectual Property or any actual or alleged infringement of a third party’s Intellectual Property arising out 
               of or in connection with our Services or your use of the Platform.</Paragraph></li>
                  </ol>
                </li>
                <li><Heading>14.	Limitation of Liability</Heading>
                <Paragraph>In no event shall REKIT, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</Paragraph>
                <ol className="list-decimal">
                  <li><Paragraph>your use of the Platform or the Services or your inability to use the Platform or the Services;</Paragraph></li>
                  <li><Paragraph>any conduct or content of any third party on the Platform;</Paragraph></li>
                  <li><Paragraph>any unauthorised access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or 
          not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose;</Paragraph></li>
                  <li><Paragraph>any legal proceedings between the you and any third parties.</Paragraph></li>
                </ol>
                </li>
                <li>
                  <Heading>15.	Disclaimer</Heading>
                  <ol className="list-decimal">
                    <li><Paragraph>Your use of the Service is at your sole risk. The Platform is provided on an “AS IS” and “AS AVAILABLE” basis. The Platform is provided without warranties of any kind, whether 
express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</Paragraph></li>
                    <li><Paragraph>REKIT, its subsidiaries, affiliates, and its licensors do not warrant that a) the Platform will function uninterrupted, secure or available at any particular time or location; b) any errors or 
 defects will be corrected; c) the Platform is free of viruses or other harmful components; or d) the results of using the Platform will meet your requirements.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>16.	Governing Law</Heading>
                  <ol className="list-decimal">
                    <li><Paragraph>These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions..</Paragraph></li>
                    <li><Paragraph>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a 
          court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any 
          prior agreements we might have between us regarding the Service.</Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>17.	Dispute Resolution</Heading>
                  <ol className="list-decimal">
                    <li><Paragraph>Any disputes arising under or in connection with the validity, interpretation and performance of this Terms between you and REKIT or between REKIT and any third parties that 
cannot be resolved amicably by the parties through negotiation within 30 (thirty) days shall be resolved by Arbitration at the Lagos Court of Arbitration (LCA) before a single 
arbitrator in accordance with the Arbitration and Conciliation Act, Cap A18, Laws of the Federation of Nigeria..</Paragraph></li>
                    <li><Paragraph>The Parties shall endeavour in good faith to mutually agree on the selection of an arbitrator. If the Parties cannot mutually agree on the selection of an arbitrator within ten (10) days 
  of the request, they shall apply to the LCA to appoint an arbitrator. Arbitration proceedings shall be conducted in Lagos. The arbitrator will be requested to render an award within 
  ninety (90) days and to provide, in writing the reasoning for the award. The decision of any such arbitrator shall be final and binding on the parties.</Paragraph></li>
                    <li><Paragraph>Each party shall bear its cost in connection with the Arbitration and the arbitrator’s fees shall be split equally between both parties. </Paragraph></li>
                  </ol>
                </li>
                <li>
                  <Heading>18.	Force Majeure</Heading>
                  <Paragraph>REKIT shall not be liable for failure to perform, or for delay in performing its obligations hereunder if such failure or delay shall be due to natural disasters, war, riot, civil commotion, weather, pandemics, epidemics, labour disputes, failure of sub-contractors or any other cause beyond its reasonable control and whether or not of a similar nature to the foregoing.</Paragraph>
                </li>
                <li>
                  <Heading>19.	Feedback</Heading>
                  <Paragraph>We welcome and encourage you to provide feedback, comments and suggestions for improvements to REKIT’s Platform or Services. You may submit your feedback by emailing us at info@rekitadvisory.com. Any feedback you submit to us will be considered non-confidential and non-proprietary to you. By submitting your feedback to us, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable, perpetual license to use and publish those ideas and materials for any purpose, without compensation to you.</Paragraph>
                </li>
                <li>
                  <Heading>20.	Changes to Terms & Conditions</Heading>
                  <Paragraph>REKIT reserves the right, in its sole discretion, to change the Terms of Service. REKIT encourages you to periodically review the Terms to stay informed of our updates.</Paragraph>
                </li>
                <li>
                  <Heading>21.	Contact Us</Heading>
                  <Paragraph>If you have any questions about these Terms, please contact us at info@rekitadvisory.com.If you have any questions about these Terms, please contact us at info@rekitadvisory.com.</Paragraph>
                </li>
              </ol>
              </div>
        </SmallWrapper>
        </AppLayout>
        
      </div>
  )
}

export default TermsConditions


