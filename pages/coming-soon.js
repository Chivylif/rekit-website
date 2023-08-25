import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Modal from "../components/Modal";
import Button from "../components/Button";
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import styled from "styled-components";

const ComingSoon = () => {
  const [see, setSee] = useState(false);
  const [formData, setFormData] = useState({
    FIRSTNAME: '',
    CONTACT_EMAIL: '',
    zx: "1301cfa8f",
    zcvers: "3.0",
    mode: "OptinCreateView",
    zcld: "1f44ee18f87779fa",
    zctd: "1f44ee18f8714fc9",
    zc_trackCode: "ZCFORMVIEW",
    zc_formIx: "3z474e45f32a174e4551a44dce662aaf36c96df15370c8386abf9d258489f804cf",
    scriptless: "yes",
    zc_spmSubmit: "ZCSPMSUBMIT"
  });

  useEffect(() => {
    setTimeout(() => {
      setSee(true);
    }, 2000);
  }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSee(false)

  };
  return (
    <div>
      <Head>
        <title>Rekit | Coming Soon</title>
        <meta
          name="description"
          content="International reach of Specialist expertise in family wealth management, protection, personalised solutions for the preservation of family wealth"
        />
        <meta
          name="keywords"
          content="International reach, Personalised solutions, "
        />
        <link rel="icon" href="/favicon.ico" />

        <title>Coming Soon | Rekit Financial Advisors Limited</title>
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
          content="Coming Soon Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="Coming Soon | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
      {
          <Modal
          openModal={see}
          closeModal={() => setSee(!see)}
          modalTop="-20"
          width="400px"
          
        >
          <form  method="POST" id="zcampaignOptinForm" action="https://zcvrp-zgvfh.maillist-manage.com/weboptin.zc" target="_zcSignup" > 
          
          <p className="text-2xl md:text-2xl drop-shadow-md mb-4 text-orange-500 font-bold text-center">
           Stay up-to-date 
          </p>
          <p className="text-lg md:text-lg text-gray-700 mb-2 text-center">
           Get finance insights and tips from our experts.
          </p>
                     <div> <input className="mb-2" type="text" placeholder="Name"  name="FIRSTNAME" id="FIRSTNAME" /> </div> 
                     <div> <input className="mb-2" placeholder="Email Address" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" type="text" /> </div>
                    <div> <input className="mybtn highlighted_btn" type="submit" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Sign Up" onBlur={handleSubmit} /> </div>
                     <input type="hidden" id="fieldBorder" value=""/>
                      <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />  
                      <input type="hidden" id="emailReportId" name="emailReportId" value=""/>  
                      <input type="hidden" id="formType" name="formType" value="QuickForm" />
                      <input type="hidden" name="zx" id="cmpZuid" value="1301cfa8f" /> 
                      <input type="hidden" name="zcvers" value="3.0" /> 
                      <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />  
                      <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                      <input type="hidden" id="zcld" name="zcld" value="1f44ee18f87779fa" /> 
                      <input type="hidden" id="zctd" name="zctd" value="1f44ee18f8714fc9" /> 
                      <input type="hidden" id="document_domain" value="" /> 
                      <input type="hidden" id="zc_Url" value="zcvrp-zgvfh.maillist-manage.com" /> 
                      <input type="hidden" id="new_optin_response_in" value="0" />
                      <input type="hidden" id="duplicate_optin_response_in" value="0" />  
                      <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />  
                      <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z474e45f32a174e4551a44dce662aaf36c96df15370c8386abf9d258489f804cf" /> 
                      <input type="hidden" id="viewFrom" value="URL_ACTION" /> 
                      <input type="hidden" id="scriptless" name="scriptless" value="yes" /> 
                      <input  type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" /> 
                    </form> 
        </Modal>
         }
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <h1 className="text-4xl md:text-6xl text-orange-500 font-bold mb-4 text-center">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 text-center">
            We are working hard to bring you an amazing Web App. Stay tuned!
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center">
            
          </p>
         
        </div>
      
   

      </AppLayout>
    </div>
  );
};

export default ComingSoon;
