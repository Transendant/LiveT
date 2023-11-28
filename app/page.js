"use client";
import Image from "next/image";
import Link from "next/link";

// IMAGE IMPORTATION
import cancel from "@/public/Images/SVG/cancel.svg";
import logo from "@/public/Images/png/Logo.jpg";
import logo2 from "@/public/Images/png/Logo.jpg";
import menu from "@/public/Images/SVG/menu.svg";
import arrowRight from "@/public/Images/SVG/arrow-right.svg";
import humanLeft from "@/public/Images/SVG/hero-left.svg";
import humanRight from "@/public/Images/SVG/hero-right.svg";
// Trusted by European
import trust1 from "@/public/Images/png/trust1.png";
import trust2 from "@/public/Images/png/trust2.png";
import trust3 from "@/public/Images/png/trust4.png";
import trust4 from "@/public/Images/png/trust3.png";
// WHO WE ARE
import whoweare from "@/public/Images/png/whoweare.png";
// Mining
import mining from "@/public/Images/png/mining.png";
// Trading
import trading from "@/public/Images/png/trading.png";
// Staking
import staking from "@/public/Images/png/staking.png";
// SECURE AND TRUSTED
import lockST from "@/public/Images/png/lock-st.png";
import st1 from "@/public/Images/SVG/st1.svg";
import st2 from "@/public/Images/SVG/st2.svg";
import st3 from "@/public/Images/SVG/st3.svg";
import expand from "@/public/Images/SVG/arrowDown.svg";
// COmmunity
import community from "@/public/Images/png/community.png";

export default function Home() {
  const displayFaq = (id) => {
    document.getElementById(`faqD` + id).classList.toggle("active");
  };
  const displaySidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  return (
    <>
      {/* Mobile SIDEBAR */}
      <div
        id="sidebar"
        className="fixed hidden bg-[#1b1a1f] text-[#f2f2f2] z-20 top-0 left-0 right-0 bottom-0 flex-col"
      >
        {/* Logo and cancel */}
        <div className="p-5 flex justify-between shrink-0">
          <div className="flex items-center">
            <div className="logo inline-flex items-center gap-2">
              <Image
                className="shrink-0 max-w-[42px] rounded-full h-auto w-full"
                src={logo}
                alt="Company Logo"
              />
              <p className="font-semibold text-[#f2f2f2]">LiveTraders</p>
            </div>
          </div>

          {/* cancel */}
          <div
            onClick={() => displaySidebar()}
            className="inline-flex lg:hidden border border-[#EBEBEB] bg-[#EBEBEB] rounded-md p-[5px] justify-center items-center"
          >
            <Image src={cancel} alt="Close Modal" />
          </div>
        </div>

        {/* NAV LINK and login + register */}
        <div className="px-5 h-full justify-between flex flex-col border-t border-[#F0F0F0] py-10">
          {/* Nav Links */}
          <nav className="">
            <ul className="flex flex-col gap-12 text-[16px] leading-[119.2%] text-[#f2f2f2] underline">
              <Link href="/about">About</Link>
              <Link onClick={() => displaySidebar()} href="/#mining">
                Mining
              </Link>
              <Link onClick={() => displaySidebar()} href="/#trading">
                Trading
              </Link>
              <Link onClick={() => displaySidebar()} href="/#staking">
                Staking
              </Link>
            </ul>
          </nav>

          {/* LOGIN AND REGISTER */}
          <div className="flex flex-col items-center gap-3 text-[16px] leading-[119.2%] font-semibold">
            {/* LOGIN */}
            <Link
              className="flex w-full text-center justify-center items-center border border-[#F56725] bg-[] py-3 px-6 rounded-[8px]"
              href="/auth/login"
            >
              Login
            </Link>

            {/* REGISTER */}
            <Link
              className="flex w-full text-center justify-center items-center text-[#1b1a1f] border border-[#F56725] bg-[#F56725] py-3 px-6 rounded-[8px]"
              href="/auth/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-[#1B1A1F] z-10 fixed top-0 left-0 right-0 flex flex-row justify-between items-center p-5 lg:py-6 lg:px-12">
        {/* IMAGE AND NAV LINKS */}
        <div className="flex gap-24 items-center">
          <Link href="/" className="logo hoverr inline-flex items-center gap-2">
            <Image
              className="shrink-0 max-w-[42px] h-auto w-full rounded-full"
              src={logo}
              alt="Company Logo"
            />
            <p className="font-semibold text-[#f2f2f2]">LiveTraders</p>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-14 text-[16px] leading-[119.2%] text-[#c4c4c4]">
              <Link className="hoverr links" href="/about">
                About
              </Link>
              <Link className="hoverr links" href="/#mining">
                Mining
              </Link>
              <Link className="hoverr links" href="/#trading">
                Trading
              </Link>
              <Link className="hoverr links" href="/#staking">
                Staking
              </Link>
            </ul>
          </nav>
        </div>

        {/* LOGIN AND SIGNUP */}
        <div className="hidden lg:flex items-center gap-3 text-[16px] leading-[119.2%] font-semibold">
          {/* LOGIN */}
          <Link
            className="border hoverr hover:bg-[#F56725] hover:text-[#1B1A1F] border-[#F56725] text-[#F56725] py-3 px-6 rounded-[8px]"
            href="/auth/login"
          >
            Login
          </Link>

          {/* REGISTER */}
          <Link
            className="border hoverr border-[#F56725] bg-[#F56725] py-3 px-6 rounded-[8px]"
            href="/auth/register"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => displaySidebar()}
          className="inline-flex lg:hidden border border-[#EBEBEB] bg-[#EBEBEB] rounded-md p-2 justify-center items-center"
        >
          <Image src={menu} alt="Menu" />
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="lg:h-screen bg-[#1B1A1F] relative">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 pt-[162px] pb-[320px] lg:pt-[248px] px-5 lg:px-0">
          {/* Header and Paragraph */}
          <div className="flex flex-col items-center gap-4 lg:gap-8 justify-center text-center">
            <h2 className="max-w-[1290px] text-[#f2f2f2] text-[24px] lg:text-[64px] lg:leading-[119.2%] font-semibold">
              One platform, All Things Crypto Mining, Staking and trading
            </h2>
            <p className="max-w-[850px] text-[14px] lg:text-[20px] leading-[180%] lg:leading-[180%] text-[#c4c4c4]">
              Start mining your favorite cryptocurrencies easily, stake your
              coins to earn rewards, and trade cryptocurrencies on a secure and
              user-friendly platform.
            </p>
          </div>
          {/* CTA BUTTON */}
          {/* <Link href="/dashboard" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
            <span className="font-medium">Get started</span>
            <Image className="shrink-0" src={arrowRight} alt="get started" />
          </Link> */}
          <div className="bg-[#F56725] interact-button text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
            <span className="font-medium">Get started</span>
            <Image className="shrink-0" src={arrowRight} alt="get started" />
          </div>
        </div>

        {/* Some Image Placements */}
        <div className="absolute flex justify-between items-baseline bottom-0 left-5 right-5 xl:left-[56px] xl:right-[56px]">
          <Image
            className="max-w-[94px] lg:max-w-none"
            src={humanLeft}
            alt=""
          />
          <Image
            className="max-w-[124px] lg:max-w-none"
            src={humanRight}
            alt=""
          />
        </div>
      </header>

      {/* Main Body Content */}
      <main className="bg-[#1B1A1F]">
        {/* Trusted by European Companies */}
        <section className="py-20 lg:py-32 flex flex-col justify-center items-center gap-10">
          <h6 className="text-[#f2f2f2] font-semibold">
            Trusted by European Companies
          </h6>
          {/* Four Images */}
          <div className="w-full flex flex-wrap justify-center items-center gap-10 lg:gap-x-48 gap-y-10">
            <div className="max-w-[90px] lg:max-w-[144px] shrink-0 w-full h-auto">
              <Image className="w-full h-auto" src={trust1} alt="Coinbase" />
            </div>
            <div className="max-w-[90px] lg:max-w-[144px] shrink-0 w-full h-auto">
              <Image className="w-full h-auto" src={trust2} alt="Tomorrow" />
            </div>
            <div className="max-w-[90px] lg:max-w-[144px] shrink-0 w-full h-auto">
              <Image
                className="w-full h-auto"
                src={trust3}
                alt="American Express"
              />
            </div>
            <div className="max-w-[90px] lg:max-w-[144px] shrink-0 w-full h-auto">
              <Image className="w-full h-auto" src={trust4} alt="Coinbase" />
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="flex flex-col lg:flex-row items-center bg-[#1B1A1F] py-14 px-5 gap-8 lg:py-[72px] lg:px-[120px] lg:gap-[72px]">
          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            {/* Intro Text */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] lg:text-[32px] text-[#f2f2f2] font-semibold leading-[119.2%]">
                Who We Are
              </h2>
              <p className="text-[14px] lg:text-[16px] text-[#c4c4c4] leading-[180%] lg:leading-[180%] flex flex-col gap-3">
                <span>
                  LiveTraders is a leading cryptocurrency platform that offers
                  a wide range of features and services to its users. We are
                  committed to making cryptocurrency accessible and easy to use
                  for everyone. We believe that crypto has the potential to
                  create a more equitable and prosperous world for everyone.
                </span>
                <span>
                  We offer a variety of services to our users, including
                </span>
              </p>
            </div>

            {/* NUMBER 1-3 */}
            <div className="flex flex-col gap-8 lg:gap-6">
              {/* Number 1 */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5">
                <div className="font-bold text-[14px] lg:text-[16px] w-12 h-12 lg:w-auto lg:h-auto lg:p-9 flex justify-center items-center bg-white border border-[#F5ECD5] lg:self-stretch rounded-md lg:rounded-[12px]">
                  01
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h6 className="text-[14px] lg:text-[16px] font-bold leading-[119.2%] text-[#f2f2f2]">
                    Cryptocurrency mining
                  </h6>
                  <p className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4]">
                    LiveTraders makes it easy to mine your favorite
                    cryptocurrencies with our powerful mining tools.
                  </p>
                </div>
              </div>
              {/* Number 2 */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5">
                <div className="font-bold text-[14px] lg:text-[16px] w-12 h-12 lg:w-auto lg:h-auto lg:p-9 flex justify-center items-center bg-white border border-[#F5ECD5] lg:self-stretch rounded-md lg:rounded-[12px]">
                  02
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h6 className="text-[14px] lg:text-[16px] font-bold leading-[119.2%] text-[#f2f2f2]">
                    Cryptocurrency staking
                  </h6>
                  <p className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4]">
                    Stake your coins to earn rewards and support the networks
                    you love.
                  </p>
                </div>
              </div>
              {/* Number 3 */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5">
                <div className="font-bold text-[14px] lg:text-[16px] w-12 h-12 lg:w-auto lg:h-auto lg:p-9 flex justify-center items-center bg-white border border-[#F5ECD5] lg:self-stretch rounded-md lg:rounded-[12px]">
                  03
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h6 className="text-[14px] lg:text-[16px] font-bold leading-[119.2%] text-[#f2f2f2]">
                    Cryptocurrency trading
                  </h6>
                  <p className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4]">
                    Trade cryptocurrencies on a secure and user -friendly
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 shrink-0 w-full max-w-[480px] xl:max-w-[567px] h-auto">
            <Image className="w-full h-auto" src={whoweare} alt="" />
          </div>
        </section>

        {/* NUMBERS OR METRIC + CTA SIGN UP */}
        <section className="flex justify-center items-center">
          <div className="inline-flex flex-col gap-10 py-20 lg:py-32 px-6">
            {/*  LIST OF METRICS */}
            <div className="w-full flex flex-wrap justify-between items-center gap-10 lg:gap-x-48 gap-y-10">
              {/* */}
              <div className="flex flex-col gap-4">
                <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                  675,764
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                  Registered Users
                </p>
              </div>
              {/* */}
              <div className="flex flex-col gap-4">
                <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                  52,426,764
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                  24H Trading Volume (USD)
                </p>
              </div>
              {/* */}
              <div className="flex flex-col gap-4">
                <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                  2,513,911
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                  Total Staked Assets
                </p>
              </div>
              {/* */}
              <div className="flex flex-col gap-4">
                <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                  101,426,764
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                  24H Mining Volume (USD)
                </p>
              </div>
            </div>
            {/* CTA */}
            <div>
              <Link href="/dashboard" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
                <span>Sign up now</span>
                <Image
                  className="shrink-0"
                  src={arrowRight}
                  alt="get started"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* MINING, TRADING AND STAKING */}
        <section>
          {/* Mining */}
          <section
            id="mining"
            className="bg-[#1B1A1F] flex flex-col lg:flex-row items-center py-14 px-5 gap-8 lg:py-[72px] lg:px-[120px] lg:gap-[72px]"
          >
            {/* Image */}
            <div className="shrink-0 w-full max-w-[480px] xl:max-w-[567px] h-auto">
              <Image className="w-full h-auto" src={mining} alt="Mining" />
            </div>
            {/* Text + CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] lg:text-[32px] font-semibold leading-[119.2%] text-[#f2f2f2]">
                  Mining
                </h2>
                <div className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4] flex flex-col gap-3">
                  <span>
                    At LiveTraders, we offer mining as a service. This means
                    that we provide all the hardware and software you need to
                    mine cryptocurrencies, without the hassle of having to set
                    up and manage your own mining operation. For miners of all
                    levels, we offer a variety of features and benefits that
                    make our mining service the best choice:
                  </span>
                  <ul className=" list-disc pl-8 leading-[180%]">
                    <li>
                      Powerful mining hardware: We use the latest and greatest
                      mining hardware to ensure that our customers can mine
                      cryptocurrencies efficiently and profitably.
                    </li>
                    <li>
                      Easy to use: Our mining service is easy to use, even for
                      beginners. We provide all the necessary software and
                      support to get you started quickly and easily.
                    </li>
                    <li>
                      Secure: Our mining service is secure and reliable. We use
                      industry-leading security measures to protect our
                      customers&apos; funds and data.
                    </li>
                    <li>
                      Affordable: Our mining service is affordable and
                      competitive. We offer a variety of pricing plans to fit
                      your budget.
                    </li>
                  </ul>
                </div>
              </div>
              {/* CTA */}
              <div>
                <Link href="/dashboard/mining" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
                  <span>Start mining</span>
                  <Image
                    className="shrink-0"
                    src={arrowRight}
                    alt="get started"
                  />
                </Link>
              </div>
            </div>
          </section>

          {/* Trading */}
          <section
            id="trading"
            className="bg-[#1b1a1f] flex flex-col lg:flex-row items-center py-14 px-5 gap-8 lg:py-[72px] lg:px-[120px] lg:gap-[72px]"
          >
            {/* Text + CTA */}
            <div className="lg:order-1 order-2 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] lg:text-[32px] font-semibold leading-[119.2%] text-[#f2f2f2]">
                  Trading
                </h2>
                <div className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4] flex flex-col gap-3">
                  <span>
                    At LiveTraders, we offer a secure and user-friendly
                    platform for cryptocurrency trading. We offer a wide range
                    of cryptocurrencies to trade, including Bitcoin, Ethereum,
                    Litecoin, and many more. For traders of all levels, we offer
                    a variety of features and benefits that make our
                    cryptocurrency trading platform the best choice :
                  </span>
                  <ul className=" list-disc pl-8 leading-[180%]">
                    <li>
                      Deep liquidity: We offer deep liquidity on all of our
                      cryptocurrency pairs, which means that you can always get
                      the price you want when you want it.
                    </li>
                    <li>
                      Low fees: We offer low fees on all of our cryptocurrency
                      trades.
                    </li>
                    <li>
                      Advanced charting and trading tools: We offer a variety of
                      advanced charting and trading tools to help you make
                      informed trading decisions.
                    </li>
                    <li>
                      24/7 customer support: We offer 24/7 customer support to
                      help you with any questions or problems you may have.
                    </li>
                  </ul>
                </div>
              </div>
              {/* CTA */}
              <div>
                <Link href="/dashboard/trading" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
                  <span>Start trading</span>
                  <Image
                    className="shrink-0"
                    src={arrowRight}
                    alt="get started"
                  />
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2 shrink-0 w-full max-w-[480px] xl:max-w-[567px] h-auto">
              <Image className="w-full h-auto" src={trading} alt="Trading" />
            </div>
          </section>

          {/* Staking */}
          <section
            id="staking"
            className="bg-[#1b1a1f] flex flex-col lg:flex-row items-center py-14 px-5 gap-8 lg:py-[72px] lg:px-[120px] lg:gap-[72px]"
          >
            {/* Image */}
            <div className="shrink-0 w-full max-w-[480px] xl:max-w-[567px] h-auto">
              <Image className="w-full h-auto" src={staking} alt="staking" />
            </div>
            {/* Text + CTA */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px] lg:text-[32px] font-semibold leading-[119.2%] text-[#f2f2f2]">
                  Staking
                </h2>
                <div className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4] flex flex-col gap-3">
                  <span>
                    At LiveTraders, we offer a variety of cryptocurrency
                    staking options. We support staking for a wide range of
                    cryptocurrencies, including Bitcoin, Ethereum, Cardano, and
                    many more. we also offer a variety of features and benefits
                    that make our cryptocurrency staking platform the best
                    choice for stakers of all levels:
                  </span>
                  <ul className=" list-disc pl-8 leading-[180%]">
                    <li>
                      Easy to use: Our staking platform is easy to use, even for
                      beginners. We provide all the necessary software and
                      support to get you started quickly and easily.
                    </li>
                    <li>
                      Secure: Our staking platform is secure and reliable. We
                      use industry-leading security measures to protect our
                      customers&apos; funds and data.
                    </li>
                    <li>
                      Competitive rewards: We offer competitive rewards on all
                      of our cryptocurrency staking options.
                    </li>
                    <li>
                      24/7 customer support: We offer 24/7 customer support to
                      help you with any questions or problems you may have.
                    </li>
                  </ul>
                </div>
              </div>
              {/* CTA */}
              <div>
                <Link href="/dashboard/staking" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
                  <span>Start staking</span>
                  <Image
                    className="shrink-0"
                    src={arrowRight}
                    alt="get started"
                  />
                </Link>
              </div>
            </div>
          </section>
        </section>

        {/* Secure and Trusted */}
        <section className="flex flex-col gap-10 py-10 lg:py-[96px] px-5 lg:px-12">
          {/* left */}
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="order-2 lg:order-1">
              <h2 className="pt-10 lg:pt-0 font-bold text-[24px] lg:text-[48px] leading-[119.2%] text-[#f2f2f2]">
                Secure & trusted
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[180%] text-[#c4c4c4] max-w-[560px] pb-4 lg:pb-8 pt-2">
                Every month, our customers trust us to move around $1 billion of
                their money. Here are some of the important ways we protect
                them.
              </p>
              <div className="text-[14px] lg:text-[16px] inline-flex font-semibold py-3 px-6 rounded-md lg:rounded-[16px] bg-[#F56725]">
                How we keep your money safe
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2 shrink-0 w-full max-w-[280px] lg:max-w-[332px] h-auto">
              <Image className="w-full h-auto" src={lockST} alt="Secure" />
            </div>
          </div>

          {/* 3 TRI */}
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
            <div className="inline-flex flex-col">
              <div>
                <Image src={st1} alt="" />
              </div>
              <h2 className="pt-6 pb-2 font-semibold text-[#f2f2f2]">
                We are fully regulated
              </h2>
              <p className="text-[#c4c4c4] leading-[180%] max-w-[360px]">
                US-Listed Registered Securities on Public are offered by our
                SEC- and FINRA-registered broker-dealer.
              </p>
            </div>
            <div className="inline-flex flex-col">
              <div>
                <Image src={st2} alt="" />
              </div>
              <h2 className="pt-6 pb-2 font-semibold text-[#f2f2f2]">
                Your assets are protected
              </h2>
              <p className="text-[#c4c4c4] leading-[180%] max-w-[360px]">
                LiveTraders is a member of SIPC. Securities in your account
                protected up to $500,000.
              </p>
            </div>
            <div className="inline-flex flex-col">
              <div>
                <Image src={st3} alt="" />
              </div>
              <h2 className="pt-6 pb-2 font-semibold text-[#f2f2f2]">We’re here to help</h2>
              <p className="text-[#c4c4c4] leading-[180%] max-w-[360px]">
                Our award-winning customer experience team is ready to answer
                your questions 7 days a week.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-[#1B1A1F] py-[56px] px-5 gap-8 lg:py-[160px] lg:px-20 flex flex-col lg:flex-row justify-center items-start lg:gap-[72px]">
          {/* INFO */}
          <div className="text-[#f9f9f9] max-w-[340px] grid gap-y-4 lg:gap-y-10">
            <h2 className="text-[24px] lg:text-[36px] font-semibold leading-[119.2%]">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] lg:text-[20px] leading-[180%]">
              Have a question that is not answered? You can contact us at
              support@livetraders.cc.
            </p>
          </div>

          {/* QUESTIONS */}
          <div className="flex flex-col gap-6 w-full text-white max-w-[767px]">
            {/* FAQ item - 1 */}
            <div
              id="faqD1"
              onClick={() => displayFaq(1)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  What is LiveTraders ?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <p className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>LiveTraders is a comprehensive cryptocurrency platform that simplifies cryptocurrency investment through its accessible and diverse services. With secure cryptocurrency mining, trading, and staking options, LiveTraders empowers users of all levels to navigate the crypto landscape with confidence.
                  Sign up today and experience the ease and convenience of crypto investing with LiveTraders.
                </span>
              </p>
            </div>

            {/* FAQ item - 2 */}
            <div
              id="faqD2"
              onClick={() => displayFaq(2)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How do I create an account with LiveTraders?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <div className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>

                  Creating an account with LiveTraders is a simple and straightforward process that can be completed in just a few minutes. Here&apos;s a step-by-step guide to help you get started:
                  <ol className="list-decimal pt-2 pl-6">
                    <li className="pt-3">Visit the LiveTraders website: Head over to the official LiveTraders website using your preferred web browser.</li>
                    <li className="pt-3">Navigate to the &quot;Register&quot; page: Once you&apos;re on the LiveTraders homepage, locate and click on the &quot;Get Started&quot; button or link. This will initiate the account creation process.</li>
                    <li className="pt-3">Provide necessary nformation: On the registration page, enter your full name, email address, and create a strong password for your account. Ensure that your email address is valid and accessible as it will be used for verification purposes.</li>
                    <li className="pt-3">Review and agree to the terms and conditions: Carefully read and understand the LiveTraders terms and conditions, which outline the company&apos;s policies and user agreements. Once you&apos;ve reviewed and agree to the terms, check the corresponding box to proceed.</li>
                    <li className="pt-3">Complete email verification: After reviewing the terms and conditions, you will receive an email from LiveTraders containing a verification link. Click on the link provided in the email to verify your email address and activate your account.</li>
                    <li className="pt-3">Fund your account: Once your account is fully activated, you can proceed to fund it with your preferred payment method. LiveTraders supports various payment options, including crypto, credit cards, debit cards, and bank transfers.</li>
                    <li className="pt-3">Start exploring the platform: With your account funded, you can now explore the various features and services offered by LiveTraders. You can start mining cryptocurrencies, trading on the secure platform, or staking your coins to earn rewards.</li>
                    <li className="pt-3">Remember to keep your account credentials safe and never share them with anyone. Also, regularly check your email for important updates and notifications from LiveTraders.</li>
                  </ol>
                </span>
              </div>
            </div>

            {/* FAQ item - 3 */}
            <div
              id="faqD3"
              onClick={() => displayFaq(3)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How do I deposit and withdraw funds on LiveTraders?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <p className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>
                  Login and after redirection to your dashboard, locate and click on the &quot;Deposit&quot; button for making deposits. In addition, locate and click on the &quot;Withdrawal&quot; button for making withdrawals.
                </span>
              </p>
            </div>

            {/* FAQ item - 4 */}
            <div
              id="faqD4"
              onClick={() => displayFaq(4)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How do I trade cryptocurrencies on LiveTraders?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <p className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>
                  Create an account if you don&apos;t already have one or Login if you already have one,
                  proceed to your dashboard then click on trading to enter your personalized trading dashboard.
                </span>
              </p>
            </div>

            {/* FAQ item - 5 */}
            <div
              id="faqD5"
              onClick={() => displayFaq(5)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How do I stake cryptocurrencies on LiveTraders?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <p className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>
                  Create an account if you don&apos;t already have one or Login if you already have one,
                  proceed to your dashboard then click on staking to enter your personalized staking dashboard.
                </span>
              </p>
            </div>

            {/* FAQ item - 6 */}
            <div
              id="faqD6"
              onClick={() => displayFaq(6)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How do I mine cryptocurrencies on LiveTraders?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <p className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <span>
                  Create an account if you don&apos;t already have one or Login if you already have one,
                  proceed to your dashboard then click on mining to enter your personalized mining dashboard.
                </span>
              </p>
            </div>

            {/* FAQ item - 7 */}
            <div
              id="faqD7"
              onClick={() => displayFaq(7)}
              className="faqD flex flex-col gap-6 w-full border border-[#302E35] bg-[#1F1E23] rounded-[4px] lg:py-6 p-5 lg:px-7"
            >
              {/* label + dropdown */}
              <div className="w-full flex items-center justify-between gap-6">
                <h6 className="text-[14px] lg:text-[20px] font-bold leading-[180%] lg:leading-[119.2%]">
                  How does LiveTraders comply with regulations?
                </h6>
                <Image className="rotate" src={expand} alt="Expand" />
              </div>
              {/* Body Text */}
              <div className="text-[14px] lg:text-[14px] body text-white leading-[180%] opacity-70 font-normal hidden">
                <p>LiveTraders prioritizes compliance with regulatory requirements to ensure the security and integrity of its platform.</p>
                <p className="pt-3">The company adheres to a comprehensive compliance framework that encompasses:</p>
                <ol className="list-decimal pt-2 pl-6">
                  <li className="pt-3">Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures: LiveTraders verifies the identities of its users and monitors transactions to prevent illicit activities.</li>
                  <li className="pt-3">Licensing and registration: LiveTraders operates under relevant licenses and registrations in jurisdictions where it conducts business.</li>
                  <li className="pt-3">Data protection and privacy: LiveTraders implements robust data security measures to protect user information and complies with data privacy regulations.</li>
                  <li className="pt-3">Regulatory updates and reviews: LiveTraders continuously monitors regulatory changes and adapts its practices accordingly.</li>
                  <li className="pt-3">Transparent communication: LiveTraders openly communicates its regulatory compliance efforts to its users and stakeholders.</li>
                </ol>
                <p className="pt-3">LiveTraders&apos;s commitment to compliance ensures a safe and trustworthy environment for its users to engage in cryptocurrency activities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 lg:py-32 px-5 lg:px-6 flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-6 lg:gap-[72px] justify-center items-center text-center">
            <div className="max-w-[200px] w-full h-auto shrink-0 grow-0">
              <Image
                className="w-full h-auto"
                src={community}
                alt="community"
              />
            </div>
            <h1 className="text-[24px] text-[#fcfcfc] lg:text-[92px] font-semibold max-w-[1179px]">
              Join millions of investors on LiveTraders
            </h1>
            <p className="max-w-[754px] leading-[180%] text-[#c4c4c4] ">
              When you invest in Cryptocurrency, do it with a local. Get
              on-the-ground insights from a community of investors, creators,
              and analysts across the USA and beyond.
            </p>
          </div>
          <div>
            <Link href="/dashboard" className="bg-[#F56725] text-[#1B1A1F] hoverr relative z-[1] font-medium rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2">
              <span>Get started</span>
              <Image className="shrink-0" src={arrowRight} alt="get started" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#1B1A1F] py-[56px] px-5 lg:p-[160px] text-[#DCD8EB] leading-[119.2%]">
        {/* TOP */}
        <div className="flex flex-col gap-12 lg:flex-row items-start justify-between">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            <Image
              className="w-[72px] h-[72px] rounded-full lg:w-[96px] lg:h-[96px]"
              src={logo2}
              alt=""
            />
            <h6 className="pt-2 text-[20px] font-medium text-[#FFF]">
              LiveTraders
            </h6>
            <p className="leading-[180%] max-w-[340px] lg:max-w-none">
              One platform, all things crypto mining, staking and trading
            </p>
            <p className="">support@livetraders.cc</p>
          </div>

          {/* RIGHT */}
          <nav className="flex gap-8 flex-col underline underline-offset-4">
            <Link className="block" href="/about">
              About
            </Link>
            <Link className="block" href="/dashboard/mining">
              Mining
            </Link>
            <Link className="block" href="/dashboard/trading">
              Trading
            </Link>
            <Link className="block" href="/dashboard/staking">
              Staking
            </Link>
            <Link className="block" href="/careers">
              Careers
            </Link>
          </nav>
        </div>

        {/* LAST LINE LINKS */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:items-center justify-between pt-20">
          {/* LEFT */}
          <nav className="flex flex-col lg:flex-row gap-8 underline underline-offset-4">
            <Link className="block" href="#">
              Terms of Service
            </Link>
            <Link className="block" href="#">
              Privacy Policy
            </Link>
            <Link className="block" href="#">
              Your Privacy Choices
            </Link>
          </nav>

          {/* rIGHT */}
          <p>© 2023 LiveTraders Inc.</p>
        </div>
      </footer>
    </>
  );
}
