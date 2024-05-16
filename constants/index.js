import servicecardone from "../assets/images/servicecardone.png";
import servicecardtwo from "../assets/images/servicecardtwo.png";
import servicecardthree from "../assets/images/servicecardthree.png";
import servicecardfour from "../assets/images/servicecardfour.png";
import weareone from "../assets/images/weare-1.png";
import wearetwo from "../assets/images/weare-2.png";

import boardone from "../assets/images/board-1.png";
import boardtwo from "../assets/images/board-2.png";
import boardthree from "../assets/images/board-3.png";
import boardfour from "../assets/images/board-4.png";
import managementTeamOne from "../assets/images/managementTeam-1.jpeg";
import managementTeamTwo from "../assets/images/managementTeam-2.jpeg";
import managementTeamThree from "../assets/images/managementTeam-3.jpeg";
import managementTeamFour from "../assets/images/managementTeam-4.jpeg";
import managementTeamFive from "../assets/images/managementTeam-5.jpeg";
import managementTeamSix from "../assets/images/managementTeam-6.jpeg";
import sam from "../assets/images/Sam.jpg";
import AFEXOne from "../assets/images/AFEXOne.png";
import AFEXTwo from "../assets/images/AFEXTwo.png";
import cashewOne from "../assets/images/cashewOne.jpg";
import cashewTwo from "../assets/images/cashewTwo.jpg";
import cashew from "../assets/images/cashew.jpg";
import cashewThree from "../assets/images/raw-cashew.jpg";

export const btnStyles = { padding: ".8em 2em", minHeight: "3rem" };
export const boardData = [
  {
    key: 1,
    name: "Dr. Okechukwu Nwuke",
    role: "Chairman",
    cert: "dba",
    image: boardone,
  },
  {
    key: 2,
    name: "Chioma Okigbo",
    role: "Director",
    cert: "",
    image: boardtwo,
  },
  {
    key: 3,
    name: "Emeka Okolo",
    role: "Director",
    cert: "CFA",
    image: boardthree,
  },
  {
    key: 4,
    name: "Onene Osila Obele-Oshoko",
    role: "Director",
    cert: "",
    image: boardfour,
  },
];

export const managementTeamData = [
  {
    key: 1,
    name: "Dr Eberechukwu Agbogun",
    role: "Managing Partner",
    cert: "",
    image: managementTeamOne,
  },
  {
    key: 2,
    name: "Vincent Damian Akioyamen",
    role: "Head - Compliance & Ethics Director",
    cert: "",
    image: managementTeamTwo,
  },
  {
    key: 3,
    name: "Irene Adagbon",
    role: "Head - Customer Service",
    cert: "",
    image: managementTeamThree,
  },
  {
    key: 4,
    name: "Apanisile Samuel Temitope",
    role: "Head - Investment & Risk Advisory",
    cert: "",
    image: sam,
  },
  {
    key: 5,
    name: "Faith Ike",
    role: "Head - Accounts",
    cert: "",
    image: managementTeamSix,
  },
];

export const tabsData = [
  {
    key: "one",
    text: "Lifestyle financial planning",
    content: { id: 1, title: "taofik" },
  },
  { key: "two", text: "Wealth mangement", content: { id: 1, title: "taofik" } },
  {
    key: "three",
    text: "Goal-based investing",
    content: { id: 1, title: "taofik" },
  },
  {
    key: "four",
    text: "Sucession planning",
    content: { id: 1, title: "taofik" },
  },
];

export const wealthTabsData = [
  { key: "one", text: "Estate Planning​" },
  { key: "two", text: "Tax Planning Strategies" },
  { key: "three", text: "Global Family Office" },
  { key: "four", text: "Risk Management & Insurance" },
];

export const goalsTabsData = [
  { key: "one", text: "Home Purchase Plan​" },
  { key: "two", text: "Wedding Plan" },
  { key: "three", text: "Retirement Plan" },
  { key: "four", text: "Car Purchase Plan" },
  { key: "five", text: "Education Planning" },
  // { key: "six", text: "Customize your Plan" },
  { key: "six", text: "Umbrella Solution" },
];

export const investmentTabsData = [
  { key: "one", text: "Strategic Solutions and Products​" },
  { key: "two", text: "Multi-Asset Class Investment Solutions" },
  { key: "three", text: "Equity & Fixed Income Trading​" },
  { key: "four", text: "Alternative Investments" },
];

export const wearedata = [
  {
    id: 1,
    image: weareone,
    desc: [
      "Founded in 2019, REKIT Financial Advisors Limited (“REKIT”) is a leading Nigerian investment and financial advisory firm that helps clients turn risk into a path for growth. With a combined 100+ years worth of industry experience, we design and deliver solutions that Manage risks, hone talents....we are poised to develop bespoke, comprehensive, personalized investment advisory services including wealth planning and management to our clientele.",
      "Working closely with selected financial and non-financial institutions, we develop evidenced based, tried and tested winning investment solutions that ensures our clients meet their goals efficiently and cost effectively. Our uniques perspective allows us to see the critical interception between talents, assets and ideas, the dynamic formula that drives business performance.",
    ],
    order: false,
  },
  {
    id: 1,
    image: wearetwo,
    desc: [
      "Working closely with selected independent and trusted third party fund/asset managers, we aim to develop bespoke investment solutions, as well as financial planning services that ensure our clients meet their goals efficiently and cost-effectively. Our unique perspective allows us to see the critical intersections between talent, assets, and ideas — the dynamic formula that drives business performance.",
      "At REKIT, our clients are our topmost priorities. At such, professionalism, client service, fairness, and integrity underscore everythigng we do. We provide our clients with honest advice and dedicated support to help them achieve positive outcomes. We continously develop long term invaluable proffesional relationships based on mutual trust and respect.",
    ],
    order: true,
  },
];

export const whoWeServe = [
  "At REKIT, we serve a global clitentele all of whom require specialized financial expertise and strategic advice to achieve their goals.",
  " We offer personalized and corporate advisory services to individuals, corporations, governments, and institutional investors. We provide a variety of financial advisory services including mergers and acquisitions (M&A), capital raising, corporate restructuring, and strategic planning.",
  " Individual clients may seek our services for lifestyle financial planning, goal-based planning, wealth management and succession planning. In general, advising clients on how to manage their personal investments and create wealth over time.",
  " On the other hand, corporate clients may require our expertise and proffesional support with mergers and acquisitions, capital raising and restructuring of their operations to become more efficient and profitable.",
  " Governments may also leverage our advisory services to help them manage their processes and internal structures including finances to attract foreign investment and investors. ",
  " Institutional investors, such as pension funds and endowments, may require our advice and specialization on winning asset allocation strategies to generate competitive returns on their portfolios.",
];

export const serviceCardItems = [
  {
    image: servicecardone,
    title:
      "Discover Your Wealth Potential With Our Free Online Calculator",
    data: [
      {
        lead: "Determine your",
        title: "Wealth",
        description: "in real time over a range of years",
      },
      {
        lead: "Get",
        title: "Insightful",
        description: "Investment advice",
      },
      {
        lead: "Enjoy",
        title: "a Variety",
        description:
          "of investment solutions just right for you ",
      },
    ],
    cardTitle: "Wealth Planning Calculator",
    cardDescription:
      "Estimate your future wealth today",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "calculate here!!",
    btnTwoClick: () => {},
  },
  {
    image: servicecardtwo,
    title: "Wealth Planning Solutions For Building and Preserving Your Wealth",
    data: [
      {
        lead: "",
        title: "Consultative Model",
        description:
          "Understanding our client needs is key to our investment advice",
      },
      {
        lead: "",
        title: "Team of Specialists",
        description:
          "Our team of specialists ensure that each client’s financial goal is prioritized in order of importance",
      },
      {
        lead: "",
        title: "Customized Solutions",
        description:
          "Our solutions fit into your needs and ensure that each stage of your financial lifecycle is adequately catered to",
      },
    ],
    cardTitle: "",
    cardDescription:
      "",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "learn more",
    btnTwoClick: () => {},
    link: "/wealth-planning",
  },
  {
    image: servicecardthree,
    title: "Optimizing Your Asset Allocation",
    data: [
      {
        lead: "",
        title: "",
        description:
          "",
      },
      {
        lead: "",
        title: "",
        description:
          "",
      },
      {
        lead: "",
        title: "",
        description:
          "",
      },
    ],
    cardTitle: "Strategic Asset allocation",
    cardDescription:
      "We deploy strategic asset allocation tools to ensure that your portfolio has the right mix of assets that result in winning outcomes across markets, sectors and companies",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "learn more",
    btnTwoClick: () => {},
    link: "/investment-solutions",
  },
  {
    image: servicecardfour,
    title: "Goal-Based Planning for life milestones",
    data: [
      {
        lead: "Advisors work with you to",
        title: "Create",
        description:
          "personalized strategies that fit your plans for the future.",
      },
      {
        lead: "We help",
        title: "Actualize",
        description:
          "your dreams by developing an investment plan to help you realize your goals.",
      },
      {
        lead: "We provide the",
        title: "Opportunity",
        description:
          "for flexibility in your unique plan to accomodate changes in your circumstances.",
      },
    ],
    cardTitle: "Our wide range of plans allows you to meet your major life goals conveniently",
    cardDescription:
      "",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "learn more",
    btnTwoClick: () => {},
    link: "/goal-based-investing",
  },
];
export const blogPosts = [
  {
    title: "How Does Commercial Paper Investment Work in Nigeria? A beginner’s guide",
    author: "Rekit Financial Advisory",
    updatedDate: "May 16, 2024 at 14:12:00 PM",
    description: "Financial Education",
    category: "financialEducation",
    slug: "how-does-commercial-paper-investment-work-in-nigeria"
  },
  {
    title: "What are Equities? How to Get Started on Equities",
    author: "Rekit Financial Advisory",
    updatedDate: "April 21, 2024 at 10:31:00 AM",
    description: "Financial Education",
    category: "financialEducation",
    slug: "what-are-equities"
  },
  {
    title: "How to Plan for retirement: Exploring the Benefits of Annuities for Retirement Planning",
    author: "Adachi Obi",
    updatedDate: "April 5, 2024 at 12:18:00 PM",
    description: "Retirement Planning",
    category: "retirementPlaning",
    slug: "how-to-plan-for-retirement"
  },
  {
    title: "Insurance",
    author: "Rekit Financial Advisory",
    updatedDate: "February 21, 2024 at 11:12:00 AM",
    description: "Insurance",
    category: "insurance",
    slug: "what-is-insurance"
  },
  {
    title: "5 money question to ask your partner before marriage",
    author: "Rekit Financial Advisory",
    updatedDate: "February 16, 2024 at 16:02:55 PM",
    description: "Financial Education",
    category: "financialEducation",
    slug: "5-money-question-to-ask-your-partner-before-marriage"
  },
  {
    title: "Finance News - 12/02/2024",
    author: "Rekit Financial Advisory",
    updatedDate: "February 12, 2024 at 09:22:12 AM",
    description: "Financial News and Updates",
    category: "financialNewsAndUpdates",
    slug: "financial-news-12-02-2024"

  },
  {
    title: "How to navigate Nigeria's current tax landscape: Insights, Changes, and Smart Strategies",
    author: "Samuel Apanisile",
    updatedDate: "January 24, 2024 at 16:12:42 PM",
    description: "Taxation",
    category: "taxation",
    slug: "nigerias-current-tax-landscape"

  },
  {
    title: "Real Estate: Getting Started in Real Estate Investments: A Beginner's Guide",
    author: "Samuel Apanisile",
    updatedDate: "January 23, 2024 at 11:35:33 AM",
    description: "Real Estate",
    category: "realEstate",
    slug: "getting-started-in-real-estate"

  },
   {
    title: " Financial Overview of 2023 and Insightful Investment Recommendations for 2024",
    author: "Samuel Apanisile",
    updatedDate: "December 20, 2023 at 13:45:06 PM",
    description: "Financial Market Analysis",
    category: "financialMarketAnalysis",
    slug: "financial-overview-2023-recommendations-2024"

  },
  {
    title: " What are bonds? Let's discuss bonds ",
    author: "Samuel Apanisile",
    updatedDate: "December 15, 2023 at 10:22:06 AM",
    description: "Investment Insights",
    category: "investmentInsights",
    slug: "what-are-bonds"

  },
  {
    title: "HOW TO RETIRE RICH: 7 STEPS TO RETIRE LIKE A BOSS ",
    author: "Samuel Apanisile",
    updatedDate: "December 5, 2023 at 8:15:19 AM",
    description: "Retirement Planning",
    category: "retirementPlaning",
    slug: "how-to-retire-rich"

  },
  {
    title: "The Six Must-Have Skills for Thriving as an Entrepreneur",
    author: "Samuel Apanisile",
    updatedDate: "November 20, 2023 at 10:15:19 AM",
    description: "Business Finance",
    category: "businessFinance",
    slug: "must-have-skills-of-an-entrepreneur"

  },
  {
    title: "Financial Advisor: What They Do and Why You Need One",
    author: "Samuel Apanisile",
    updatedDate: "November 1, 2023 at 12:04:39 PM",
    description: "Financial Education",
    category: "financialEducation",
    slug: "what-they-do"

  },
  {
    title: "Unlock the Wealth-Building Secrets of Billionaires: A Financial Planning Roadmap for Aspiring Young Adults",
    author: "Samuel Apanisile",
    updatedDate: "October 20, 2023 at 5:37:39 PM",
    description: "Personal Finance",
    category: "personalFinance",
    slug: "secrets-of-billionaires"

  }
];
