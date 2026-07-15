import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import Modal from "../components/Modal";

import SmallWrapper from "../components/SmallWrapper";
import Image from "next/image";
import Button from "../components/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Link from "next/link";

const BlogPost = () => {
  const [viewModal, setViewModal] = useState(false);
  const [openloader, setOpenloader] = useState(true);
  const [modalAlert, setModalAlert] = useState("Authenticating");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    username: "",
    content: "",
    password: "",
  });
  const categoryArr = [
    "",
    "Lifestyle",
    "Stories",
    "Investment Insights",
    "Research",
  ];
  const closeModal = () => setViewModal(false);

  const [selected, setSelected] = useState(categoryArr[0]);

  const { title, description, content, username, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setViewModal(true);
    setFormData({
      ...formData,
      [description]: selected,
    });
    const { title, description, content, username, password } = formData;
    axios
      .post(
        "http://localhost:8080/rekit/auth",
        { username, password },
        {
          headers: {
            clientInterface: "apiResponse",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        const { status, data } = response;
        console.log(response);
        if (status) {
          const name = data.data.user.accountName;
          setModalAlert("Creating Blog Post");
          axios
            .post(
              "http://localhost:8080/rekit/InsightsAPI",
              { title, description, content, name },
              {
                headers: {
                  clientInterface: "apiResponse",
                },
              }
            )
            .then((response) => {
              const { status, data } = response;
              console.log(response);
              setOpenloader(false);
              if (status) {
                setModalAlert("Blog Post Created Successfully");
              } else
                setModalAlert(
                  "Unable to create Blog post. Please try again later"
                );
            })
            .catch((err) => console.error(err));
        } else {
          setViewModal(false);
        }
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Rekit | BlogPosts</title>
        <meta
          name="description"
          content="International reach of Specialist expertise in family wealth management, protection, personalised solutions for the preservation of family wealth"
        />
        <meta
          name="keywords"
          content="International reach, Personalised solutions, "
        />
        <link rel="icon" href="/favicon.ico" />

        <title>BlogPosts | Rekit Financial Advisors Limited</title>
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
          content="BlogPosts Rekit Financial An Investment advisory company that delivers complementary and personalized, solutions to individuals and corporate organizations."
        />
        <meta
          property="og:title"
          content="BlogPosts | Rekit Financial Advisors Limited"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        {
          <Modal
            width="398px"
            openModal={viewModal}
            closeModal={() => setViewModal(!viewModal)}
          >
            <div className="bg-white rounded-2xl text-center justify-center p-10 relative shadow-lg">
              {openloader && (
                <div className="loader-small px-[0.5rem] lg:px-[1rem] lg:py-[1rem] mx-auto w-full"></div>
              )}
              <div>
                <h1 className="text-[#2A2F33] font-bold text-[28px] mt-6 font-inter">
                  {modalAlert}
                </h1>
              </div>
              <div className=" font-bold text-[20px] mt-5 font-raleway">
                <Link href="/blog" className="text-[#DE9A5B]">
                  
                    Click here to return to Blog
                  
                </Link>
              </div>
            </div>
          </Modal>
        }
        <div className="flex-col justify-center content-center w-full bg-white">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="flex-col justify-center content-center w-4/5"
          >
            <fieldset>
              <label className="formInput" htmlFor="">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => handleChange(e)}
                value={title}
              />
            </fieldset>
            <fieldset>
              <label className="formInput" htmlFor="">
                Please select Category
              </label>
              <select
                name="description"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                onBlur={(e) => handleBlur(e)}
              >
                {categoryArr.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <label className="password" htmlFor="">
                Content{" "}
                <span>
                  (Please remember to start each paragraph with the word for
                  proper formatting)
                </span>
              </label>
              <textarea
                name="content"
                rows="15"
                cols="30"
                placeholder="Content"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                value={content}
              ></textarea>
            </fieldset>
            <fieldset>
              <label for="profile-picture">
                Upload a Post Picture:{" "}
                <input id="profile-picture" type="file" name="file" />
              </label>
            </fieldset>
            <fieldset>
              <label className="email" htmlFor="">
                Email
              </label>
              <input
                type="email"
                name="username"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                value={username}
              />
            </fieldset>
            <fieldset>
              <label className="password" htmlFor="">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                value={password}
              />
            </fieldset>
            <button type="submit" className="mybtn highlighted_btn">
              Post
            </button>
          </form>
        </div>
      </AppLayout>
    </div>
  );
};

export default BlogPost;
