import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import axios from "axios";
import AppLayout from "../../layouts/AppLayout";
import Banner from "../../components/Banner";
import BlogRefresh from "../../components/BlogRefresh";
import SmallWrapper from "../../components/SmallWrapper";
import Image from "next/image";
import Spending from "../../assets/images/SPENDING.jpg"
import PostBanner from "../../components/PostBanner";
import Link from "next/link";
import { blogPosts } from "../../constants";

const Lifestyle = () => {
  const router = useRouter()
  console.log(router.query);
  
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


  const sliceToTen = (arr) => {
    return arr.slice(0, 10);
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


      <AppLayout>
        <div className="flex-col justify-center content-center mx-50 lg:flex-col bg-white md:flex-col pb-10">
            <div className="lg:flex">
                <div className="lg:w-4/5 px-[2rem] pt-10 lg:pt-20 mx-auto pb-5 border-r-3"> 
                <div className="mx-auto px-[1rem]">
               <PostBanner 
               image={Spending}
               headline="Spending Habits"
               desc="Samuel Apanisile - 28th August, 2023."
               /> 
               <p className="leading-[1.2rem] pt-10 font-normal font-inter text-[#212020] text-[1rem]">       
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Libero enim sed faucibus turpis in eu mi bibendum neque. Ut ornare lectus sit amet est placerat in egestas. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Nisl vel pretium lectus quam id leo in vitae. Enim lobortis scelerisque fermentum dui faucibus in ornare. Egestas sed sed risus pretium quam. Turpis massa sed elementum tempus egestas sed. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Dictum non consectetur a erat nam.
Cursus euismod quis viverra nibh cras. Volutpat lacus laoreet non curabitur gravida arcu. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Gravida arcu ac tortor dignissim convallis aenean. Dis parturient montes nascetur ridiculus mus mauris vitae. Nunc mattis enim ut tellus elementum sagittis vitae. Morbi non arcu risus quis. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Faucibus a pellentesque sit amet porttitor eget dolor.
Amet tellus cras adipiscing enim eu turpis egestas pretium. Gravida in fermentum et sollicitudin ac. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Diam quis enim lobortis scelerisque fermentum. Pulvinar sapien et ligula ullamcorper malesuada proin. Nec sagittis aliquam malesuada bibendum arcu. Eros in cursus turpis massa tincidunt dui ut. Odio ut sem nulla pharetra diam. Egestas dui id ornare arcu odio. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Ornare lectus sit amet est. Duis at consectetur lorem donec massa sapien faucibus et. Aliquet bibendum enim facilisis gravida neque convallis. Sagittis eu volutpat odio facilisis mauris. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Commodo nulla facilisi nullam vehicula. Gravida dictum fusce ut placerat orci. Mattis vulputate enim nulla aliquet. Sit amet justo donec enim diam.
Neque convallis a cras semper auctor neque vitae tempus quam. Luctus accumsan tortor posuere ac ut consequat semper viverra. Eget nullam non nisi est sit. Morbi leo urna molestie at elementum eu facilisis sed odio. Pellentesque dignissim enim sit amet venenatis urna. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nunc vel risus commodo viverra maecenas accumsan lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Varius vel pharetra vel turpis nunc eget. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
Netus et malesuada fames ac turpis egestas maecenas pharetra. Sit amet volutpat consequat mauris nunc congue nisi. Non blandit massa enim nec dui nunc. Odio pellentesque diam volutpat commodo. Porta nibh venenatis cras sed felis eget velit aliquet. Imperdiet sed euismod nisi porta lorem mollis aliquam. Arcu ac tortor dignissim convallis. Augue interdum velit euismod in pellentesque massa placerat. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Diam quam nulla porttitor massa id. Pretium viverra suspendisse potenti nullam ac tortor. Proin fermentum leo vel orci porta.
Ultrices dui sapien eget mi proin. Posuere morbi leo urna molestie. Nisi lacus sed viverra tellus in. Cursus sit amet dictum sit amet justo. Mattis vulputate enim nulla aliquet porttitor. Accumsan in nisl nisi scelerisque eu ultrices. Arcu dictum varius duis at consectetur lorem donec. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Urna cursus eget nunc scelerisque viverra mauris in. Duis convallis convallis tellus id interdum velit laoreet. Pellentesque habitant morbi tristique senectus et netus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Arcu dui vivamus arcu felis bibendum ut tristique. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nunc eget lorem dolor sed viverra. Scelerisque felis imperdiet proin fermentum. Habitant morbi tristique senectus et netus et malesuada fames ac.
Fermentum leo vel orci porta non. Malesuada nunc vel risus commodo viverra maecenas. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Ornare lectus sit amet est placerat in egestas erat. Cursus turpis massa tincidunt dui ut ornare lectus. Quis blandit turpis cursus in hac habitasse. Dolor sit amet consectetur adipiscing elit pellentesque. Risus pretium quam vulputate dignissim suspendisse. Dapibus ultrices in iaculis nunc sed augue. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Volutpat diam ut venenatis tellus in metus vulputate. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Tortor condimentum lacinia quis vel eros donec ac odio tempor. In cursus turpis massa tincidunt. Accumsan sit amet nulla facilisi morbi tempus iaculis. Molestie a iaculis at erat pellentesque. Consectetur adipiscing elit pellentesque habitant morbi tristique.
Risus at ultrices mi tempus. Consectetur adipiscing elit pellentesque habitant morbi tristique. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Ut venenatis tellus in metus vulputate eu. Proin sed libero enim sed faucibus turpis in eu mi. Sed ullamcorper morbi tincidunt ornare massa eget. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Feugiat nisl pretium fusce id velit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Sit amet venenatis urna cursus eget nunc scelerisque. Nulla pharetra diam sit amet nisl suscipit adipiscing.
              </p>  
                    {/* <Image
                    src={Spending}
                    alt="img"
                    style={{
                        borderRadius: "10px",
                        }}
                    /> */}
                 
                    {/* <h1 className="font-extrabold pt-0.5 text-[#F08420] text-xl font-raleway">
                    Spending Habits
                    </h1>
                     */}
                </div>

                </div>
               
            </div>
            <div className="grid lg:w-full sm:grid-cols-2 lg:grid-cols-4 mb-1 lg:mb-1 justify-items-center px-[3rem] pt-[3rem] pb-[3rem] ">
                {blogPosts.map(({ author, title, updatedDate, images, description, content }, idx) => {
                    return(
                        <div 
                        className="mx-auto px-[1rem] w-5/6 pb-[3rem]" id={idx} >
                        <Image
                        src={images[0]}
                        alt="img"
                        width="200px"
                        height="150px"
                        style={{
                            borderRadius: "10px",
                            }}
                        />
                        <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway">
                        {description}
                        </h1>
                        <p className="leading-[1.0rem] font-normal font-inter text-[#212020] text-[0.8rem]">       
                        {title}
                        </p>  
                    </div>
                    )
                })}
            </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Lifestyle;
