import React from "react";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import Head from "next/head";
import NextStep from "../components/NextStep";
import SmallWrapper from "../components/SmallWrapper";
import bannerfive from "../assets/images/bannerfive.png";
import { Col, Row, Radio, Input } from "antd";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Link from "next/link";
import * as gtag from '../lib/gtag'

const { TextArea } = Input;

const checkmark = <svg width="87" height="87" viewBox="0 0 97 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M94.344 50.4629C94.344 77.1193 73.661 98.5543 48.3577 98.5543C23.0544 98.5543 2.37146 77.1193 2.37146 50.4629C2.37146 23.8065 23.0544 2.37146 48.3577 2.37146C73.661 2.37146 94.344 23.8065 94.344 50.4629Z" fill="#13C39C" stroke="#25FFAE" strokeWidth="4.74292"/>
<path fillRule="evenodd" clipRule="evenodd" d="M70.8088 34.9353L45.1535 68.4099L25 50.8821L28.8025 46.1204L44.2979 59.5933L66.1744 31.0664L70.8088 34.9353V34.9353Z" fill="white"/>
</svg>


const ContactUs = () => {
  const [value, setValue] = React.useState(1)
  const [done, setDone] = React.useState(false)
  const [message, setMessage] = React.useState('')


  const handleInput = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    gtag.event({
      action: 'submit_form',
      category: 'Contact',
      label: this.state.message,
    })

    setMessage('')
  }

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };


  return (
    <div>
      {/* <form onSubmit={this.handleSubmit}>
          <label>
            <span>Message:</span>
            <textarea onChange={this.handleInput} value={this.state.message} />
          </label>
          <button type="submit">submit</button>
        </form> */}
      {
        done && (
          
      <Modal width="398px" openModal={done} closeModal={()=>setDone(!done)}>
        <div className="bg-white rounded-2xl text-center justify-center p-10 relative shadow-lg">
          <div className="absolute rounded-[50%] -top-[23%] left-[35%]">
            {checkmark}
          </div>
        <div>
        <h1 className="text-[#2A2F33] font-bold text-[28px] mt-6 font-inter">Success</h1>
        </div>
        <div className=" font-bold text-[20px] mt-5 font-raleway">
          <Link href="/" className="text-[#DE9A5B]">
            
          Click here to return home
            
          </Link>
        </div>
        </div>
      </Modal>
        )
      }
      <Head>
        <title>Contact Us | Rekit Financial Advisors Limited</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Contact Us Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta name="keywords" content="Investment, Finance, Advice" />
        <meta property="og:site_name" content="Rekit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rekitonline.com" />
        <meta property="og:image" content="/rekit.png" />
        <meta property="og:description" content="Contact Us Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations." />
        <meta property="og:title" content="Contact Us | Rekit Financial Advisors Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Banner
          image={bannerfive}
          headline="REACH OUT TO US"
          desc="One step closer to achieving your investment goals"
        />
        <SmallWrapper>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 96 }}>
            <Col xs={24} sm={24} md={24} lg={16}>
              <div className="text-[#16130F] text-base leading-[1.8rem] font-inter">
              Our partners including government,
                trend-setting companies and individuals have
                always been appreciative of our professional dynamism.
              </div>

              <h1 id="frame" className="my-5 font-bold text-[#050504] text-[26px]">Drop A Line</h1>
              
              <Row>
                <Col span={24}>
                   <div className="my-5">
                  <Row gutter={16}>
                   <Col xs={24} lg={12}>
                    <Input type="text" placeholder="Enter your name" className="py-3" />
                    </Col>
                    <Col xs={24} lg={12} className="mt-5 lg:mt-0">
                    <Input type="email" placeholder="Enter your email address" className="py-3" />
                    </Col>
                  </Row>
                   </div>
                  
                  
                </Col>
                
                <Col span={24}>
                <div className="my-2">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Enquiries</Radio>
                    <Radio value={2}>Partnerships</Radio>
                    <Radio value={3}>Others</Radio>
                  </Radio.Group>
                  </div>
                </Col>

                <Col span={24}>
                <div className="my-5">
                  <TextArea
                    rows={8}
                    placeholder="Type your message here"
                    maxLength={6}
                  />
                  </div>
                </Col>
                
                <Col span={24}>
                  <div className="mt-10">

                  <Button
                    shape="round"
                    size="large"
                    text="send message"
                    className="mybtn highlighted_btn rounded-xl uppercase"
                    style={{borderRadius: '2rem'}}
                    onClick={()=>setDone(!done)}
                    />
                    </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} className="mt-10 lg:mt-0">
              <Row>
                <Col span={24}>
                  <div className="flex w-9/12 flex-col">
                    <h2 className="font-bold font-raleway text-base uppercase">our location</h2>
                    <address className="my-1">
                      Oceanview Apartments, 18, Hakeem Dickson Drive, Lekki,
                      Lagos.
                    </address>
                    <div className="font-bold font-inter text-base">09011959063</div>
                    <div className="font-bold font-inter text-base">07062106633</div>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="my-10">
                  <h2 className="font-bold font-raleway text-base uppercase">CAREERS</h2>
                  <a rel="noopener noreferrer" href="mailto: careers@rekitadvisory.com" className="underline">
                    careers@rekitadvisory.com
                  </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="font-bold font-raleway text-base uppercase">SAY HELLO!</h2>
                  <div className="py-1">
                    REKIT Financial Advisors Limited (“REKIT”) is an investment
                    advisory solutions company set up to deliver comprehensive
                    and personalized financial consulting to our clients.
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="mailto:info@rekitadvisory.com"
                    className="underline"
                  >
                    info@rekitadvisory.com
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </SmallWrapper>
        {/* <NextStep
          title="Take the next step toward your personal and professional goals"
          height="406px"
          btnText="create a plan"
        /> */}
      </AppLayout>
    </div>
  );
};

export default ContactUs;
