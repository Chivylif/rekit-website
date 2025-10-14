import { Row, Col, Typography, List } from "antd";
import Link from "next/link";
import React from "react";
import RekitLogo, { RekitFooterLogo } from "../RekitLogo";

const call = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0191 16.7976C21.0191 17.0663 20.9693 17.4171 20.8698 17.85C20.7703 18.2829 20.6658 18.6238 20.5563 18.8726C20.3473 19.3702 19.7402 19.8977 18.735 20.455C17.7995 20.9626 16.874 21.2163 15.9584 21.2163C15.6897 21.2163 15.4284 21.1989 15.1746 21.1641C14.9209 21.1293 14.6347 21.0671 14.3163 20.9775C13.9978 20.8879 13.7614 20.8158 13.6072 20.761C13.4529 20.7063 13.1767 20.6043 12.7786 20.455C12.3806 20.3057 12.1367 20.2162 12.0472 20.1863C11.0718 19.838 10.201 19.4249 9.4347 18.9472C8.16082 18.161 6.84464 17.0887 5.48616 15.7302C4.12768 14.3717 3.05533 13.0555 2.26911 11.7816C1.7914 11.0153 1.37838 10.1445 1.03005 9.16919C1.0002 9.07962 0.910628 8.83579 0.761345 8.4377C0.612061 8.03961 0.510051 7.76344 0.455314 7.60918C0.400577 7.45492 0.328423 7.21855 0.238853 6.90008C0.149283 6.58161 0.0870819 6.29549 0.0522491 6.04171C0.0174164 5.78792 0 5.52668 0 5.25797C0 4.34236 0.253782 3.41681 0.761345 2.4813C1.31867 1.47613 1.84614 0.86904 2.34375 0.660044C2.59255 0.550569 2.93342 0.446071 3.36634 0.346549C3.79926 0.247027 4.15007 0.197266 4.41878 0.197266C4.55812 0.197266 4.66261 0.212194 4.73228 0.242051C4.91142 0.301764 5.17515 0.679948 5.52348 1.3766C5.63296 1.5657 5.78224 1.83441 5.97133 2.18273C6.16042 2.53106 6.33459 2.84704 6.49382 3.13068C6.65306 3.41432 6.80732 3.68054 6.9566 3.92935C6.98646 3.96916 7.07354 4.09356 7.21785 4.30256C7.36215 4.51155 7.46914 4.6882 7.5388 4.83251C7.60847 4.97682 7.6433 5.11864 7.6433 5.25797C7.6433 5.45701 7.50148 5.70582 7.21785 6.00438C6.93421 6.30295 6.62569 6.57664 6.29229 6.82544C5.95889 7.07425 5.65037 7.33798 5.36673 7.61664C5.0831 7.89531 4.94128 8.12421 4.94128 8.30335C4.94128 8.39292 4.96616 8.50488 5.01592 8.63923C5.06568 8.77359 5.10798 8.8756 5.14281 8.94526C5.17764 9.01493 5.24731 9.13436 5.3518 9.30354C5.4563 9.47273 5.51353 9.56728 5.52348 9.58718C6.27985 10.9506 7.14569 12.12 8.12101 13.0953C9.09633 14.0707 10.2657 14.9365 11.6292 15.6929C11.6491 15.7028 11.7436 15.76 11.9128 15.8645C12.082 15.969 12.2014 16.0387 12.2711 16.0735C12.3407 16.1084 12.4428 16.1507 12.5771 16.2004C12.7115 16.2502 12.8234 16.2751 12.913 16.2751C13.0921 16.2751 13.321 16.1333 13.5997 15.8496C13.8784 15.566 14.1421 15.2575 14.3909 14.9241C14.6397 14.5907 14.9134 14.2821 15.212 13.9985C15.5105 13.7149 15.7593 13.573 15.9584 13.573C16.0977 13.573 16.2395 13.6079 16.3838 13.6775C16.5281 13.7472 16.7048 13.8542 16.9138 13.9985C17.1228 14.1428 17.2472 14.2299 17.287 14.2597C17.5358 14.409 17.802 14.5633 18.0857 14.7225C18.3693 14.8818 18.6853 15.0559 19.0336 15.245C19.3819 15.4341 19.6507 15.5834 19.8397 15.6929C20.5364 16.0412 20.9146 16.3049 20.9743 16.4841C21.0042 16.5537 21.0191 16.6582 21.0191 16.7976Z"
      fill="#2A2F33"
    />
  </svg>
);

const data = [
  {
    title: "Ant Design Title 1",
  },
  // {
  //   title: 'Ant Design Title 2',
  // },
  // {
  //   title: 'Ant Design Title 3',
  // },
  // {
  //   title: 'Ant Design Title 4',
  // },
];
const contactsdata = [
  {
    title: "info@rekitadvisory.com",
  },
  {
    title: "07062106633",
  },
  {
    title: "09011959063",
  },
];
const quicklinksone = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "Our Services",
    href: "/investment-solutions",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Our Edge",
    href: "/our-edge",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
];

const quicklinkstwo = [
  {
    title: "Our Board",
    href: "/our-board",
  },
  {
    title: "Management Team",
    href: "/our-mgmt-team",
  },
  {
    title: "Terms of service",
    href: "/terms-of-service",
  },
  {
    title: "privacy policy",
    href: "/privacy-policy",
  },
  {
    title: "Legal disclaimer",
    href: "/legal-disclaimer",
  },
];

// #EBF0F078

const Footer = () => {
  return (
    <footer className="w-[95%] mx-auto bg-[rgba(235, 240, 240, 0.47)] pt-12 pb-16">
      <Row>
        <Col xs={24} sm={24} md={6} lg={6}>
          <div className="-ml-5 lg:ml-0">
            <RekitFooterLogo />
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <div className="mt-5 lg:mt-0">
            <Typography.Title level={5} className="uppercase text-[#0A0B0B]">
              QUICK LINKS
            </Typography.Title>
            <Row className="mr-0 lg:mr-[30px]">
              <Col xs={24}>
                <List
                  itemLayout="horizontal"
                  dataSource={quicklinksone}
                  renderItem={(item) => (
                    <List.Item.Meta
                      title={
                        <div className="w-[230px] text-[#0A0B0B] capitalize">
                          <Link href={item.href} legacyBehavior>
                            <a className="decoration-none text-[#0A0B0B] hover:text-[#FF912B]">
                              {item.title}
                            </a>
                          </Link>
                        </div>
                      }
                    ></List.Item.Meta>
                  )}
                />
              </Col>
              <Col span={24}>
                <List
                  itemLayout="horizontal"
                  dataSource={quicklinkstwo}
                  renderItem={(item) => (
                    <List.Item.Meta
                      title={
                        <div className="w-[230px] text-[#0A0B0B]  capitalize">
                          <Link href={item.href} >
                            <div className="decoration-none text-[#0A0B0B] hover:text-[#FF912B]">
                              {item.title}
                            </div>
                          </Link>
                        </div>
                      }
                    ></List.Item.Meta>
                  )}
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <Typography.Title level={5} className="uppercase text-[#0A0B0B]">
            head office
          </Typography.Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div className="w-[230px] text-[#0A0B0B]">
                      REKIT Financial Advisors <br />
                      Limited <br />
                      Oceanview Apartments, 18, Hakeem Dickson Drive, Lekki,
                      Lagos&quot;
                    </div>
                  }
                />

                {/* <List.Item.Meta
                      style={{border: 'none!important'}}
                        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      /> */}
              </List.Item>
            )}
          />
          <List
            itemLayout="horizontal"
            dataSource={contactsdata}
            renderItem={(item) => (
              <List.Item
                className={`${
                  item.title === "info@rekitadvisory.com" && "underline"
                } text-[#0A0B0B]`}
              >
                <div className="flex items-center space-x-3">
                  {item.title != "info@rekitadvisory.com" && <div>{call}</div>}
                  <div>{item.title}</div>
                </div>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          {/* <Typography.Title level={5} className="uppercase text-[#0A0B0B]">head office</Typography.Title> */}
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div className="w-[230px] text-[#0A0B0B]">
                      <span className="uppercase font-bold">
                        STOCK MARKET INSIGHTS Gold&apos;s Allure Boosted By
                        Rate, Inflation Outlook
                      </span>
                      <br />
                      <span className="font-normal">February 10, 2022</span>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div className="w-[230px] text-[#0A0B0B]">
                      <span className="uppercase font-bold">
                        Euronet Worldwide, Inc. 2021 Q4 - Results - Earnings
                        Call Presentation
                      </span>
                      <br />
                      <span className="font-normal">February 10, 2022</span>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <div className="w-full text-center font-bold font-raleway mt-5 text-gray-700 underline">
        REKIT does not receive cash. Therefore, all payments must be made
        through REKIT advised channels.
      </div>
    </footer>
  );
};

export default Footer;
