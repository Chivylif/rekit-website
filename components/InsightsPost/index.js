import React, { useState } from "react";
import Banner from "../Banner";
import PostBanner from "../PostBanner";
import InsightCard from "../investInsightCard";
import bannerfive from "../../assets/images/bannerfive.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

const InsightPost = (props) => {
  const {
    title,
    content,
    right,
    name,
    date,
    description,
    relatedPosts,
    postHandler,
    images,
  } = props;
  return (
    <div className={`py-1 ${right && "pl-2"} w-full`}>
      <PostBanner
        image={bannerfive}
        headline={title}
        desc={`${name} | ${date} | ${description}`}
      />

      <div className="flex-col justify-center content-center lg:flex lg:flex-row lg:justify-between">
        <div className="w-full lg:w-3/4 px-[0.5rem] lg:px-[2rem] pt-10 bg-white pb-10 border-r-2">
          {content.map((para, index) => {
            return (
              <React.Fragment>
                {index == 2 && (
                  <div className="mx-auto px-[1rem] py-[1rem] my-auto flex-col justify-center content-center lg:flex lg:flex-row lg:justify-center lg:max-w-xl">
                    <Image
                      src={images[0]}
                      alt="img"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                )}
                {index == 5 && (
                  <div className="mx-auto px-[1rem] py-[1rem] my-auto flex-col justify-center content-center lg:flex lg:flex-row lg:justify-center lg:max-w-xl">
                    <Image
                      src={images[1]}
                      alt="img"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                )}
                <p
                  className="leading-[1.2rem] font-normal font-inter text-[#212020] text-[1rem] text-justify mb-2"
                  id={index}
                >
                  {para}
                </p>
              </React.Fragment>
            );
          })}
        </div>
        <div className="w-full lg:w-1/4 px-[0.5rem] lg:px-[1rem] pt-5 mx-auto bg-white pb-5">
          <h1 className="font-extrabold pt-0.5 text-[#F08420] text-l font-raleway text-center">
            Related Posts
          </h1>
          {relatedPosts.map(
            (
              { author, title, updatedDate, description, content, images },
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
                      displayImage={false}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightPost;
