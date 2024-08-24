"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import Section from "@/components/Section";
import Head from "next/head";
import Banner from "@/components/Banner";
import BouncingBall from "@/components/BouncingBall";
import ImageTextComponent from "@/components/ImageText";
import SkillPercentage from "@/components/SkillsPercentage";
import ContactUs from "@/components/contact/ContactUs";
import Feedback from "@/components/feedback";
import Portfolio from "@/components/Portfolio";
import Revalidate from "@/components/Revalidate";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>Animated Banner</title>
        <meta
          name="description"
          content="Animated Banner with Typing and Bouncing Text"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageTextComponent />
        <Banner />
        <SkillPercentage />
        <Feedback />
        <Portfolio />
        <ContactUs />
      </main>
    </>
  );
}
