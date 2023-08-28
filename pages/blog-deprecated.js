import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import Banner from "../components/Banner";
import BlogRefresh from "../components/BlogRefresh";
import SmallWrapper from "../components/SmallWrapper";
import Image from "next/image";
import Button from "../components/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import bannerfive from "../assets/images/bannerfive.png";
import InsightCard from "../components/investInsightCard";
import InsightPost from "../components/InsightsPost";
import Link from "next/link";
import { blogPosts } from "../constants";

const Insights = () => {
  const [loaderBtnMsg, setLoaderBtnMsg] = useState("Loading...");
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const [insightsFetch, setInsightsFetch] = useState(blogPosts);
  const [page, setPage] = useState(0);
  const [viewPost, setViewPost] = useState(blogPosts);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [revealPost, setRevealPost] = useState(false);
  const [effectLoad, setEffectLoad] = useState(true);
  const [post, setPost] = useState({});
  const [columnOneWidth, setColumnOneWidth] = useState("0");
  const [columnTwoWidth, setColumnTwoWidth] = useState("full");
  const [seperateBorder, setSeperateBorder] = useState("0");
  const [paddingTop, setPaddingTop] = useState("0");
  const [backgroundPost, setBackgroundPost] = useState("inherit");
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loaderMessage, setLoaderMessage] = useState(
    "View all our Recent Blog Posts"
  );
  const ref = useRef(null);

  const changePage = (e) => {
    e.preventDefault();
    const { direction } = e.target.closest("[data-direction]").dataset;
    if (direction === "next") setPage(++page);
    else if (direction === "previous") setPage(--page);
  };

  useEffect(() => {
    setViewPost(paginatedPosts[page]);
    if (paginatedPosts.length - page === 1) setNextPage(false);
    else setNextPage(true);
    if (page === 0) setPrevPage(false);
    else setPrevPage(true);
  }, [page]);

  const init = (e) => {
    e.preventDefault();
    const { category } = e.target.closest("[data-category]").dataset;
    if (category) {
      setPaginatedPosts(
        insightsFetch.filter(({ category }) => category === category)
      );
    }
    setPaddingTop("0");
    setRevealPost(false);
    setEffectLoad(true);
    setColumnTwoWidth("full");
    setPage(0);
    setViewPost(paginatedPosts[0]);
    paginatedPosts.length > 1 && setNextPage(true);
    setPrevPage(false);
  };

  const categoryArr = [
    "Lifestyle",
    "Stories",
    "Investment Insights",
    "Research",
  ];
  const [sortedPosts, setSortedPosts] = useState({
    Lifestyle: [],
    Stories: [],
    investmentInsights: [],
    Research: [],
  });

  const sliceToTen = (arr) => {
    return arr.slice(0, 10);
  };



  const setRelatedPostMethod = (description) => {
    if (description === "Investment Insights")
      return sliceToTen(sortedPosts.investmentInsights);
    else return sliceToTen(sortedPosts.description);
  };

  const postHandler = (event) => {
    event.preventDefault();
    let { postid } = event.target.closest("[data-postid]").dataset;
    let { description } = event.target.closest("[data-description]").dataset;
    for (let i = 0; i < categoryArr.length; i++) {
      let category = categoryArr[i];
      if (categoryArr[i] === "Investment Insights") {
        const categorisedArr = insightsFetch.filter(
          ({ description }) => description === category
        );
        setSortedPosts({
          ...sortedPosts,
          [sortedPosts.investmentInsights]: categorisedArr,
        });
      } else {
        const categorisedArr = insightsFetch.filter(
          ({ description }) => description === category
        );
        setSortedPosts({
          ...sortedPosts,
          [sortedPosts[`${category}`]]: categorisedArr,
        });
      }
    }
    setRelatedPosts(
      sliceToTen(
        insightsFetch.filter((post) => post.description === description)
      )
    );

    setPost(insightsFetch.find((blogs, index) => index === +postid));
    setNextPage(false);
    setPrevPage(false);
    setRevealPost(true);
    setEffectLoad(false);
    setColumnTwoWidth("0");
    setColumnOneWidth("4/5");
    setSeperateBorder("2");
    setPaddingTop("10");
    setBackgroundPost("white");
  };

  return (
    <div>
      <Head>
        <title>Rekit | REKIT Blog</title>
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
          content="Our Edge Members Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
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
          content="Insights | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=G-REJ602RMGQ"}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-REJ602RMGQ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <AppLayout>
        <div className="flex-col justify-center content-center lg:flex-row md:flex-col">
          <div
            className={`w-full lg:w-3/4 px-[0.5rem] lg:px-[2rem] pt-${paddingTop} mx-auto bg-${backgroundPost} pb-${paddingTop} `}
          >
            {
              <div className="pt-1 lg:pt-2 pb-1 lg:pb-1">
                <div className="flex-col justify-center content-center mb-1 lg:mb-1">
                  {revealPost && (
                    <InsightPost
                      title={post.title}
                      name={post.author}
                      date={post.updatedDate}
                      content={post.content}
                      relatedPosts={relatedPosts}
                      postHandler={postHandler}
                      description={post.description}
                      images={post.images}
                    />
                  )}
                </div>
              </div>
            }
          </div>
          <div
            className={`w-full lg:w-${columnTwoWidth} px-[0.5rem] lg:px-[2rem] pt-10 mx-auto bg-white pb-10`}
          >
            {effectLoad &&
              blogPosts.map(
                (
                  { author, title, updatedDate, images, description, content },
                  index
                ) => {
                  return (
                    <div
                      className="pt-1 lg:pt-2 pb-1 lg:pb-1 border-b-2"
                      id={index}
                    >
                      <div
                        className="grid lg:grid-cols-1 mb-1 lg:mb-1"
                        id={index}
                        data-postid={index}
                        data-description={description}
                      >
                        <InsightCard
                          clickHandler={postHandler}
                          title={title}
                          name={author}
                          date={updatedDate}
                          articleLink={`${index}`}
                          description={content[0]}
                          image={images[0]}
                        />
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
        {
          <div className="w-full flex justify-center items-center pt-5 mx-auto my-auto bg-[#FFF] flex-row  content-center">
            {/* {prevPage && (
              <div data-direction="previous">
                <Button
                  shape="round"
                  data-direction="next"
                  size="small"
                  text="Prev"
                  className="normal_btn highlighted_btn mt-1 font-semibold mx-2"
                  onClick={changePage}
                />
              </div>
            )} */}
            {/* {nextPage && (
              <div data-direction="next">
                <Button
                  shape="round"
                  data-direction="next"
                  size="small"
                  text="Next"
                  className="normal_btn highlighted_btn mt-1 font-semibold mx-2"
                  onClick={changePage}
                />
              </div>
            )} */}
          </div>
        }

        {/* <BlogRefresh
          btnText={loaderBtnMsg}
          height="323px"
          title={loaderMessage}
          onClick={init}
        /> */}
      </AppLayout>
    </div>
  );
};

export default Insights;
