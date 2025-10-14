import { Menu, Row } from "antd";
import React from "react";
import Button from "../Button";
// import Menu from '../Menu'
import RekitLogo, { RekitSmallLogo } from "../RekitLogo";
import styles from "./styles.module.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const items = [
    {
      label: (
        <span className="text-[#050504] text-base font-inter">Our Service</span>
      ),
      key: "ourservice",
      children: [
        {
          label: (
            <Link href="/investment-solutions" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Investment Solution
              </div>
            </Link>
          ),
          key: "investmentsolution",
        },
        {
          label: (
            <Link href="/goal-based-investing" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Goal Based Investing
              </div>
            </Link>
          ),
          key: "goalbasedinvesting",
        },
      ],
    },
    {
      label: (
        <Link href="/wealth-planning" legacyBehavior>
          <div
            rel="noopener noreferrer"
            className="text-[#050504] text-base font-inter"
          >
            Wealth Planning
          </div>
        </Link>
      ),
      key: "wealthplanning",
    },
   
    {
      label: (
        <Link href="/our-edge" className="active:text-[#F08420]" legacyBehavior>
          <div
            id="ouredge"
            className="text-[#050504] text-base font-inter active:text-[#F08420]"
          >
            Our Edge
          </div>
        </Link>
      ),
      key: "ouredge",
      children: [
        {
          label: (
            <Link href="/our-board" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Our Board
              </div>
            </Link>
          ),
          key: "ouboard",
        },
        {
          label: (
            <Link href="/our-mgmt-team" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Our Management team
              </div>
            </Link>
          ),
          key: "ourmanagementteam",
        },
      ],
    },
    {
      label: (
        <Link href="/about-us" className="active:text-[#F08420]" legacyBehavior>
          <div
            id="about"
            className="text-[#050504] text-base font-inter active:text-[#F08420]"
          >
            About us
          </div>
        </Link>
      ),
      key: "aboutus",
      children: [
        {
          label: (
            <Link href="/about-us#whoweare" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Who we are
              </div>
            </Link>
          ),
          key: "whoweare",
        },
        {
          label: (
            <Link href="/about-us#whoweserve" legacyBehavior>
              <div
                rel="noopener noreferrer"
                className="font-bold mylink font-inter"
              >
                Who we serve
              </div>
            </Link>
          ),
          key: "whoweserve",
        },
      ],
    }, 
    {
      label: (
        <Link href="/blog" legacyBehavior>
          <div
            rel="noopener noreferrer"
            className="text-[#050504] text-base font-inter"
          >
            Blog
          </div>
        </Link>
      ),
      key: "blog",
    },
    {
      label: (
        <Link href="/glossary" legacyBehavior>
          <div
            rel="noopener noreferrer"
            className="text-[#050504] text-base font-inter"
          >
            Resources
          </div>
        </Link>
      ),
      key: "glossary",
    },
    {
      label: (
        <Link href="/contact-us" legacyBehavior>
          <div
            rel="noopener noreferrer"
            className="text-[#050504] text-base font-inter"
          >
            Contact Us
          </div>
        </Link>
      ),
      key: "contactus",
    },
  ];

  const route = useRouter();
  const navigate = () => {
    route.push("https://app.rekitonline.com/");
  };
  return (
    <header className="fixed">
      <div
        className={`${
          !mobile && "hidden"
        } absolute h-screen w-full bg-gray-200`}
      >
        <div className="flex justify-between">
          <div></div>

          <div
            onClick={() => setMobile(!mobile)}
            className="w-fit lg:hidden flex flex-col rounded-xl cursor-pointer mt-4 mr-3"
          >
            <CloseOutlined style={{ fontSize: "1.5rem" }} />
          </div>
        </div>

        <div className="mt-16">
          <Menu
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              border: "none",
              alignItems: "center", 
              marginRight: "1rem",
              background: "transparent",
            }}
            mode="inline"
            items={items}
          />
          {/* <a
            target="_blank"
            className="ml-5"
            href="https://app.rekitonline.com/login.do"
          >
            <Button
              text="LOGIN"
              size="large"
              className="mybtn normal_btn text-[13px] font-bold"
              style={{ minWidth: "8rem", borderRadius: "4px" }}
            />
          </a> */}
        </div>
      </div>
      {/* <section className={styles.black}></section> */}
      <section className={styles.head_content}>
        <div className="hidden lg:block ">
          <Link href="/" legacyBehavior>
        
              <RekitLogo />
         
          </Link>
        </div>
        <div href="/" className="lg:hidden -ml-8">
          <Link href="/" legacyBehavior>
         
              <RekitSmallLogo />
       
          </Link>
        </div>
        <div
          style={{ width: "100%" }}
          className="hidden xl:flex justify-end items-center"
        >
          <Menu
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              border: "none",
              marginRight: "1rem",
            }}
            mode="horizontal"
            items={items}
          />

          {/* <div style={{ gap: "1rem", display: "flex", width: "fit-content" }}>
            <a target="_blank" href="https://app.rekitonline.com/login.do">
              <Button
                text="LOGIN"
                size="large"
                className="mybtn normal_btn text-[13px] font-bold"
                style={{ minWidth: "8rem", borderRadius: "4px" }}
              />
            </a>
            <a target="_blank" href="https://app.rekitonline.com">
              <Button
                text="GET STARTED"
                size="large"
                className="mybtn highlighted_btn text-[13px] font-bold"
                style={{ minWidth: "8rem", borderRadius: "4px" }}
              />
            </a>
          </div> */}
        </div>
        <div
          onClick={() => setMobile(!mobile)}
          className="w-fit lg:hidden flex flex-col rounded-xl cursor-pointer -mr-5"
        >
          <MenuOutlined style={{ fontSize: "1.2rem" }} />
        </div>
      </section>
    </header>
  );
};

export default Header;
