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
    role: "Head - HR, Compliance & Ethics",
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
    role: "Head - Investment Management",
    cert: "",
    image: sam,
  },
  {
    key: 5,
    name: "Henry Mba",
    role: "Head - Technology",
    cert: "",
    image: managementTeamFive,
  },
  {
    key: 6,
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
  { key: "six", text: "Savings Plan" },
];

export const investmentTabsData = [
  { key: "one", text: "Strategic Solutions and Products​" },
  { key: "two", text: "Multi-Asset Class Investment Solutions" },
  { key: "three", text: "Equity & Fixed income Trading​" },
  { key: "four", text: "Alternative Investments" },
];

export const wearedata = [
  {
    id: 1,
    image: weareone,
    desc: [
      "Founded in 2019, REKIT Financial Advisors Limited (“REKIT”) is a leading Nigerian investment and financial advisory firm that helps clients turn risk into a path for growth. With a combined 100+ years worth of industry experience, we design and deliver solutions that manage risk, optimize benefits, cultivate talent, and expand the power of capital to protect and strengthen individuals and institutions.",
      "We aim to develop bespoke, comprehensive, personalized, financial and investment advisory, as well as consulting services, including wealth management and financial planning to a range of clients including individuals and corporates.",
    ],
    order: false,
  },
  {
    id: 1,
    image: wearetwo,
    desc: [
      "Working closely with selected independent and trusted third party fund/asset managers, we aim to develop bespoke investment solutions, as well as financial planning services that ensure our clients meet their goals efficiently and cost-effectively. Our unique perspective allows us to see the critical intersections between talent, assets, and ideas — the dynamic formula that drives business performance.",
      "At REKIT, professionalism, client service, fairness, and integrity are our top priorities. We provide our clients with honest advice and dedicated support to jointly achieve effective results. We seek to develop long–term professional relationships based on mutual trust and respect.",
    ],
    order: true,
  },
];

export const whoWeServe = [
  "At REKIT, we serve a diverse range of clients, all of whom require specialized financial expertise and strategic advice to achieve their goals.",
  "We offer personalized and corporate advisory services to individuals, corporations, governments, and institutional investors. We provide a variety of financial service advisory, including mergers and acquisitions (M&A), capital raising, corporate restructuring, and strategic planning.",
  "Individual clients may seek our services for lifestyle financial planning, goal-based planning, wealth management and succession planning. In general, advising clients on how to manage their personal investments and create wealth over time.",
  "Corporate clients, on the other hand, may need assistance with mergers and acquisitions, capital raising, or restructuring their operations to become more efficient and profitable.",
  "Governments may also use our advisory services to help them manage their finances and attract foreign investment.",
  "Institutional investors, such as pension funds and endowments, may need advice on how to allocate their assets and generate returns for their beneficiaries.",
];

export const serviceCardItems = [
  {
    image: servicecardone,
    title:
      "A specially designed investment product that helps in wealth accumulation.",
    data: [
      {
        lead: "Calculate your",
        title: "Wealth",
        description: "in real time over a range of years.",
      },
      {
        lead: "Provides",
        title: "Insightful",
        description: "Investment advice.",
      },
      {
        lead: "Wide",
        title: "Variety",
        description:
          "investor income and opportunity for capital appreciation.",
      },
    ],
    cardTitle: "Wealth Accumulation Calculator",
    cardDescription:
      "Calculate future wealth that can be created through your regular investments.",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "wealth calculator",
    btnTwoClick: () => {},
  },
  {
    image: servicecardtwo,
    title: "Wealth Planning Solutions for building and preserving your wealth.",
    data: [
      {
        lead: "Consultative approach",
        title: "Understand",
        description:
          "each client’s need and to establish a close working relationship.",
      },
      {
        lead: "We consult with our",
        title: "Specialists",
        description:
          "from our team of experts to prioritize each client’s financial need in order of importance.",
      },
      {
        lead: "We customize",
        title: "Solution",
        description:
          "to fit each need, working closely with every client throughout their lifecycle.",
      },
    ],
    cardTitle: "Preserving Your Wealth",
    cardDescription:
      "Calculate future wealth that can be created through your regular Investments.",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "learn more",
    btnTwoClick: () => {},
    link: "/wealth-planning",
  },
  {
    image: servicecardthree,
    title: "Investment Solutions for your strategic asset allocation.",
    data: [
      {
        lead: "We offer tailored",
        title: "Solutions",
        description:
          "on individual and corporate accounts that suits your distinct needs.",
      },
      {
        lead: "Diversify your",
        title: "Portfolio",
        description:
          "with sources of returns beyond traditional asset classes (stocks, bonds, and cash).",
      },
      {
        lead: "We help clients take",
        title: "Advantage",
        description:
          "we help Clients take advantage of opportunities by providing access recommendation on investments across all asset classes.",
      },
    ],
    cardTitle: "Strategic Asset allocation",
    cardDescription:
      "With our understanding of our client needs, we are able to make bespoke asset allocation recommendations that allow them access an array of suitable investment options across asset classes including equities, money market, fixed income, real estate and alternative investments.",
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
          "personalized strategies that fit your life and your plans for the future.",
      },
      {
        lead: "We help",
        title: "Actualize",
        description:
          "your dreams by drawing out a convenient plan of investment targeted towards your goals.",
      },
      {
        lead: "We provide the",
        title: "Opportunity",
        description:
          "to create custom plans that address goals that might not be captured by our list of predefined plans.",
      },
    ],
    cardTitle: "Our services are designed to help you meet your goals",
    cardDescription:
      "Our wide range of plans allows you to plan for life milestones conveniently.",
    btnOneText: "get started",
    btnOneClick: () => {},
    btnTwoText: "learn more",
    btnTwoClick: () => {},
    link: "/goal-based-investing",
  },
];
export const blogPosts = [
  {
    title: "Why Cashew is the real deal now?",
    author: "Samuel Apanisile",
    images: [cashew, cashewTwo],
    updatedDate: "March 28, 2023 at 5:37:39 PM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you’re chewing it or trying to invest in it. We enjoy the fleshy, juicy apple-like part and the nuts can also be eaten as a snack. It is a massive export commodity for Nigeria; this and more is why we stan this versatile nut!",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector. Still, the main commercial use is the Cashew nut as an ingredient in cereal, confectionery, and ready meals.",
      "Commodities are the best-known hedge against inflation. In recent times, we have all been feeling the brunt of the rising inflation of food prices. We consume and live healthily by consuming food, so any hike in the price of food items in the market will influence even the smallest of households. However, commodities are the only major asset class to provide a hedge against inflation.",
      "Also, most of these agricultural commodities are seasonal. This implies that when they are in the peak harvest season, the commodity’s price is lower than in other seasons. For instance, Cashew ripens by February, March, April, and May, and that’s it for the season. It has a short window for investors to enter and exit the market. It also provides an opportunity for capital appreciation as you buy low and sell high and It is an export crop that attracts foreign buyers.",
      "In Q3, 2022 Cashew nuts export stood at N10.43 billion, representing 12.3% of the total agricultural export. Also, in the same year, Nigeria generated over $ 250 million, accounting for about 10% of the country’s agricultural export.",
      "According to The Minister of Agriculture and Rural Development, Dr. Mohammad Mahood Abubakar, the cashew export is expected to fetch Nigeria about $ 500 million by 2023.",
      "As an investor, you can make a quick return of 8-15% within a period of 3-5 months when you contact us REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Lifestyle",
    slug: "lifestyle"
  },
  {
    title: "Cashew Investment",
    author: "Samuel Apanisile",
    images: [cashewThree, cashewTwo],
    updatedDate: "April 6, 2023 at 10:00:36 AM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you are eating it or trying to invest in it. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use. Our passion for the versatile nut is driven by its nutritional value and economic viability as it contributes significantly to Nigeria’s total annual exports.",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector in Nigeria. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use.",
      "Commodities are one of the best-known asset classes for hedging against inflation. In recent times, we have all felt the brunt of the rising inflation of food prices. We consume and live healthily by consuming food. Therefore, a hike in the price of food items in the market will influence even the smallest of households.",
      "Also, most agricultural commodities are seasonal. This implies that prices of commodities are lower during harvest season than off-harvest season. For instance, cashew season is between February and May yearly. Consequently, investors have a limited period in a year to invest in and exit the cashew market.",
      "As an export crop with high demand in the international market, cashew also provides an opportunity for capital appreciation for investors who buy low and sell high.",
      "Nigeria’s cashew nuts export stood at N10.43 billion in Q3 2022, representing 12.3% of the total agricultural export of N84.21b in the same quarter.",
      "According to the Minister of Agriculture and Rural Development, Dr. Mohammad Mahmood Abubakar, Nigeria generated N112 billion in revenue from the exports of cashew nuts in 2022, and forecasts revenue from exports to reach N231 billion by 2023. Cashew is projected to return up to 15% in 5 months in 2023 for moderate risk investors who take position and exit within the specified timeframe.",
      "Let us get you started on cashew investing today. Contact us at REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Stories",
    slug: "stories"
  },
  {
    title: "Guess who had a great outing in a down market in 2022?",
    author: "Samuel Apanisile",
    images: [AFEXOne, AFEXTwo],
    updatedDate: "April 14, 2023 at 1:11:21 PM",
    content: [
      "Undoubtedly, 2022 was tough globally for equity markets and investors. Unknown to most investors, not only were commodity markets and investors insulated from the market shocks of 2022, but 2023 presents more upbeat outcomes to discerning investors.",
      "Exchange Traded Commodities (ETCs) on AFEX Nigeria are alternative investment products that allow investors to gain exposure to a basket of commodities traded on the AFEX exchange. ETCs are designed to track the performance of underlying commodities and offer investors the ability to invest in commodities without the need to take physical delivery of the underlying assets.",
      "AFEX Nigeria is a leading commodity exchange in Nigeria that offers trading in agricultural commodities such as maize, soybeans, sorghum, cocoa, cashew and paddy rice. AFEX offers ETCs that track the performance of baskets of commodities such as the AFEX Commodities Index (ACI) and the AFEX Export Index (AEI). ACI outperforms NSI as seen below:",
      "Essentially, investing in ETCs, provides diversification benefits to an investment portfolio and allows investors to gain exposure to the performance of commodities without the need for physical delivery or storage of the assets. It extensively provides inflation and foreign exchange (FX) hedging to investors.  ETCs allow investors to gain exposure to a mix or diversified basket of commodities as seen in the Table below which can provide diversification benefits to a portfolio.",
      "Portfolio structuring and management involve the selection and management of investments to achieve specific investment objectives, such as maximizing returns or minimizing risks. By including ETCs in a portfolio, investors can gain exposure to the performance of different commodities, which can help to spread risk across different asset classes. Additionally, ETCs are traded on an exchange, which allows investors to buy and sell them like stocks, providing a high degree of liquidity and flexibility in managing their portfolio. Investors can use ETCs as part of a broader investment strategy, such as a long-term buy-and-hold approach or a tactical allocation strategy.",
      "A Cash Spot Trading Table on Maize, Soybeans, Sorghum, Paddy Rice and Cashew on the AFEX Nigeria Exchange as of April 13th, 2023:",
      "Solution Profile: Exchange Traded Commodity (ETC)- Fixed Income Feature:  This is for moderate risk investors.",
      "Minimum For Portfolio management solution: N2M; Tenor: 6 months, 9months and 12 months",
      "Returns: Capital Preservation + (10% -15% annually) based on market performance.",
      "Please, confirm your risk profile from the link below and you will receive an email from us on how to activate your recommendation on Commodity Portfolio Management – ETC solution.",
    ],
    description: "Investment Insights",
    slug: "investmentInsights"
  },
  {
    title: "Why Cashew is the real deal now?",
    author: "Samuel Apanisile",
    images: [cashew, cashewTwo],
    updatedDate: "March 28, 2023 at 5:37:39 PM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you’re chewing it or trying to invest in it. We enjoy the fleshy, juicy apple-like part and the nuts can also be eaten as a snack. It is a massive export commodity for Nigeria; this and more is why we stan this versatile nut!",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector. Still, the main commercial use is the Cashew nut as an ingredient in cereal, confectionery, and ready meals.",
      "Commodities are the best-known hedge against inflation. In recent times, we have all been feeling the brunt of the rising inflation of food prices. We consume and live healthily by consuming food, so any hike in the price of food items in the market will influence even the smallest of households. However, commodities are the only major asset class to provide a hedge against inflation.",
      "Also, most of these agricultural commodities are seasonal. This implies that when they are in the peak harvest season, the commodity’s price is lower than in other seasons. For instance, Cashew ripens by February, March, April, and May, and that’s it for the season. It has a short window for investors to enter and exit the market. It also provides an opportunity for capital appreciation as you buy low and sell high and It is an export crop that attracts foreign buyers.",
      "In Q3, 2022 Cashew nuts export stood at N10.43 billion, representing 12.3% of the total agricultural export. Also, in the same year, Nigeria generated over $ 250 million, accounting for about 10% of the country’s agricultural export.",
      "According to The Minister of Agriculture and Rural Development, Dr. Mohammad Mahood Abubakar, the cashew export is expected to fetch Nigeria about $ 500 million by 2023.",
      "As an investor, you can make a quick return of 8-15% within a period of 3-5 months when you contact us REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Research",
    slug: "research"
  },
  {
    title: "Cashew Investment",
    author: "Samuel Apanisile",
    images: [cashewThree, cashewTwo],
    updatedDate: "April 6, 2023 at 10:00:36 AM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you are eating it or trying to invest in it. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use. Our passion for the versatile nut is driven by its nutritional value and economic viability as it contributes significantly to Nigeria’s total annual exports.",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector in Nigeria. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use.",
      "Commodities are one of the best-known asset classes for hedging against inflation. In recent times, we have all felt the brunt of the rising inflation of food prices. We consume and live healthily by consuming food. Therefore, a hike in the price of food items in the market will influence even the smallest of households.",
      "Also, most agricultural commodities are seasonal. This implies that prices of commodities are lower during harvest season than off-harvest season. For instance, cashew season is between February and May yearly. Consequently, investors have a limited period in a year to invest in and exit the cashew market.",
      "As an export crop with high demand in the international market, cashew also provides an opportunity for capital appreciation for investors who buy low and sell high.",
      "Nigeria’s cashew nuts export stood at N10.43 billion in Q3 2022, representing 12.3% of the total agricultural export of N84.21b in the same quarter.",
      "According to the Minister of Agriculture and Rural Development, Dr. Mohammad Mahmood Abubakar, Nigeria generated N112 billion in revenue from the exports of cashew nuts in 2022, and forecasts revenue from exports to reach N231 billion by 2023. Cashew is projected to return up to 15% in 5 months in 2023 for moderate risk investors who take position and exit within the specified timeframe.",
      "Let us get you started on cashew investing today. Contact us at REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Investment Insights",
    slug: "investmentInsights"
  },

  {
    title: "Why Cashew is the real deal now?",
    author: "Samuel Apanisile",
    images: [cashew, cashewTwo],
    updatedDate: "March 28, 2023 at 5:37:39 PM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you’re chewing it or trying to invest in it. We enjoy the fleshy, juicy apple-like part and the nuts can also be eaten as a snack. It is a massive export commodity for Nigeria; this and more is why we stan this versatile nut!",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector. Still, the main commercial use is the Cashew nut as an ingredient in cereal, confectionery, and ready meals.",
      "Commodities are the best-known hedge against inflation. In recent times, we have all been feeling the brunt of the rising inflation of food prices. We consume and live healthily by consuming food, so any hike in the price of food items in the market will influence even the smallest of households. However, commodities are the only major asset class to provide a hedge against inflation.",
      "Also, most of these agricultural commodities are seasonal. This implies that when they are in the peak harvest season, the commodity’s price is lower than in other seasons. For instance, Cashew ripens by February, March, April, and May, and that’s it for the season. It has a short window for investors to enter and exit the market. It also provides an opportunity for capital appreciation as you buy low and sell high and It is an export crop that attracts foreign buyers.",
      "In Q3, 2022 Cashew nuts export stood at N10.43 billion, representing 12.3% of the total agricultural export. Also, in the same year, Nigeria generated over $ 250 million, accounting for about 10% of the country’s agricultural export.",
      "According to The Minister of Agriculture and Rural Development, Dr. Mohammad Mahood Abubakar, the cashew export is expected to fetch Nigeria about $ 500 million by 2023.",
      "As an investor, you can make a quick return of 8-15% within a period of 3-5 months when you contact us REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Investment Insights",
    slug: "investmentInsights"
  },
  {
    title: "Cashew Investment",
    author: "Samuel Apanisile",
    images: [cashewThree, cashewTwo],
    updatedDate: "April 6, 2023 at 10:00:36 AM",
    content: [
      "The awesome thing about Cashew is that it is an easy nut to crack, whether you are eating it or trying to invest in it. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use. Our passion for the versatile nut is driven by its nutritional value and economic viability as it contributes significantly to Nigeria’s total annual exports.",
      "Raw cashew nuts are grown in large quantities in West Africa and are a major export commodity in the agricultural sector in Nigeria. The commercial value of cashew nut as an ingredient in cereal, confectionery, and ready meals is evident in its use.",
      "Commodities are one of the best-known asset classes for hedging against inflation. In recent times, we have all felt the brunt of the rising inflation of food prices. We consume and live healthily by consuming food. Therefore, a hike in the price of food items in the market will influence even the smallest of households.",
      "Also, most agricultural commodities are seasonal. This implies that prices of commodities are lower during harvest season than off-harvest season. For instance, cashew season is between February and May yearly. Consequently, investors have a limited period in a year to invest in and exit the cashew market.",
      "As an export crop with high demand in the international market, cashew also provides an opportunity for capital appreciation for investors who buy low and sell high.",
      "Nigeria’s cashew nuts export stood at N10.43 billion in Q3 2022, representing 12.3% of the total agricultural export of N84.21b in the same quarter.",
      "According to the Minister of Agriculture and Rural Development, Dr. Mohammad Mahmood Abubakar, Nigeria generated N112 billion in revenue from the exports of cashew nuts in 2022, and forecasts revenue from exports to reach N231 billion by 2023. Cashew is projected to return up to 15% in 5 months in 2023 for moderate risk investors who take position and exit within the specified timeframe.",
      "Let us get you started on cashew investing today. Contact us at REKIT Financial Advisors, an AFEX registered commodity advisor.",
    ],
    description: "Life Style",
    slug: "lifestyle"
  },
];
