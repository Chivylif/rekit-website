import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import styled from "styled-components";

const ComingSoon = () => {
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
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <h1 className="text-4xl md:text-6xl text-orange-500 font-bold mb-4 text-center">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center">
            We are working hard to bring you an amazing Web App.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center">
            Stay tuned!
          </p>
        </div>
      </AppLayout>
    </div>
  );
};

export default ComingSoon;
