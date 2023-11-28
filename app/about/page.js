"use client";
import Image from "next/image";
import Link from "next/link";

// IMAGE IMPORTATION
import about1 from "@/public/Images/png/about1.png";
import cancel from "@/public/Images/SVG/cancel.svg";
import logo from "@/public/Images/png/Logo.jpg";
import logo2 from "@/public/Images/png/Logo.jpg";
import menu from "@/public/Images/SVG/menu.svg";
import wwa from "@/public/Images/png/wwa.png";
import wah from "@/public/Images/png/wah.webp";
import checkBlack from "@/public/Images/SVG/check-black.svg";
import trophyBlack from "@/public/Images/SVG/trophy-black.svg";
import arrowRight2 from "@/public/Images/SVG/arrow-right2.svg";
import arrowRight from "@/public/Images/SVG/arrow-right.svg";
// INVESTORS
import inv1 from "@/public/Images/png/about/inv1.png";
import inv2 from "@/public/Images/png/about/inv2.png";
import inv3 from "@/public/Images/png/about/inv3.png";
import inv4 from "@/public/Images/png/about/inv4.png";
import inv5 from "@/public/Images/png/about/inv5.png";
import inv6 from "@/public/Images/png/about/inv6.png";
import inv7 from "@/public/Images/png/about/inv7.png";
import inv8 from "@/public/Images/png/about/inv8.png";
import inv9 from "@/public/Images/png/about/inv9.png";
import inv10 from "@/public/Images/png/about/inv10.png";
import inv11 from "@/public/Images/png/about/inv11.png";
import inv12 from "@/public/Images/png/about/inv12.png";

export default function Home() {
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
      <section className="text-left lg:text-center flex justify-start items-start lg:justify-center lg:items-center flex-col bg-[#1b1a1f] relative px-5 pt-[146px] pb-[64px] lg:pt-[200px] lg:pb-[108px]">
        <div className="text-[12px] lg:text-[16px] bg-[#F56725] py-3 px-6 rounded-full font-semibold">
          About us
        </div>
        <h1 className="text-[18px] lg:text-[32px] text-[#f2f2f2] pt-4 pb-2 lg:pt-8 lg:pb-4 font-semibold leading-[150%]">
          We make it easy to invest in cryptocurrency
        </h1>
        <p className="text-[#c4c4c4] mt-1 lg:mt-0 text-[14px] lg:text-[20px] leading-[180%] lg:leading-[160%] max-w-[845px]">
          At LiveTraders, we believe that cryptocurrency has the potential to
          revolutionize the financial world. That&apos;s why we&apos;re committed to
          making it easy for everyone to invest in crypto, regardless of their
          experience level.
        </p>
      </section>

      {/* NUMBERS OR METRIC + CTA SIGN UP */}
      <section className="flex justify-center items-center bg-[#1b1a1f]">
        <div className="inline-flex flex-col gap-10 py-20 lg:py-32 px-6">
          {/*  LIST OF METRICS */}
          <div className="text-center w-full flex flex-wrap justify-between items-center gap-10 lg:gap-x-48 gap-y-10">
            {/* */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                500k+
              </h6>
              <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                Personal Users
              </p>
            </div>
            {/* */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                9,201
              </h6>
              <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                Business Users
              </p>
            </div>
            {/* */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                200+
              </h6>
              <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                Countries Supported
              </p>
            </div>
            {/* */}
            <div className="flex flex-col gap-4">
              <h6 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[119.2%]">
                72+
              </h6>
              <p className="text-[#c4c4c4] text-[12px] lg:text-[14px] leading-[119.2%]">
                Supported currencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our MISSION */}
      <section className="flex flex-col lg:flex-row items-center bg-[#1b1a1f] py-14 px-5 gap-8 lg:py-[72px] lg:px-[120px] lg:gap-[72px]">
        {/* Text */}
        <div className="flex flex-col gap-8">
          {/* Intro Text */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex justify-start items-start">
              <div className="text-[12px] lg:text-[16px] bg-[#F56725] py-3 px-6 rounded-full font-semibold">
                Our Mission
              </div>
            </div>
            <p className="text-[14px] lg:text-[16px] leading-[180%] lg:leading-[180%] text-[#c4c4c4] flex flex-col gap-3">
              <span>
                At LiveTraders, we believe in the power of cryptocurrency to
                change the world. We&apos;re on a mission to make cryptocurrency
                accessible and easy to use for everyone, so that we can all
                create a more equitable and prosperous future.
              </span>
              <span>
                We&apos;re building a community of crypto enthusiasts who are
                passionate about making a difference. Together, we&apos;re creating a
                new financial system that&apos;s more inclusive, more transparent,
                and more efficient.
              </span>
              <span>
                Join us on our mission to revolutionize the financial world with
                cryptocurrency.
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="shrink-0 w-full max-w-[480px] xl:max-w-[567px] h-auto">
          <Image className="w-full h-auto" src={about1} alt="About" />
        </div>
      </section>

      {/* OUR INVESTORS */}
      <section className="py-20 lg:py-32 px-5 bg-[#1b1a1f] flex flex-col justify-center items-center gap-8">
        {/* INTRO TEXT */}
        <div className="flex flex-col text-center gap-3 lg:gap-4">
          <h2 className="text-[18px] lg:text-[48px] text-[#f2f2f2] font-semibold leading-[119.2%]">
            Our Investors
          </h2>
          <p className="text-[14px] lg:text-[16px] max-w-[609px] leading-[160%] text-[#c4c4c4]">
            We are backed by international, renowned investors, and has raised a
            total of more than EUR 390 million in funding.
          </p>
        </div>

        {/* 12 IMAGES */}
        <div className="xxx py-[108px] px-[56px] rounded-[16px] lg:rounded-[32px] bg-[#0a0a0a] flex max-w-[990px]">
          {/* FIRST FOUR */}
          <div className="xxx2">
            <div>
              <Image src={inv1} alt="" />
            </div>
            <div>
              <Image src={inv2} alt="" />
            </div>
            <div>
              <Image src={inv3} alt="" />
            </div>
            <div>
              <Image src={inv4} alt="" />
            </div>
            <div>
              <Image src={inv5} alt="" />
            </div>
            <div>
              <Image src={inv6} alt="" />
            </div>
            <div>
              <Image src={inv7} alt="" />
            </div>
            <div>
              <Image src={inv8} alt="" />
            </div>
            <div>
              <Image src={inv9} alt="" />
            </div>
            <div>
              <Image src={inv10} alt="" />
            </div>
            <div>
              <Image src={inv11} alt="" />
            </div>
            <div>
              <Image src={inv12} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE HAVE DONE */}
      <section className="pb-20 lg:pb-32 px-5 lg:px-[120px] bg-[#1b1a1f] gap-6 lg:gap-10 flex flex-col justify-center items-center">
        <div>
          <h2 className="text-[24px] lg:text-[48px] text-[#fcfcfc] font-semibold">
            What we’ve done
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* TOP 1 */}
          <div className="bg-[#0a0a0a] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-[72px] rounded-[16px] lg:rounded-[32px] overflow-hidden lg:pl-20">
            {/* LEFT */}
            <div className="flex flex-col pt-[56px] px-5 gap-10">
              <h5 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2] leading-[100%]">
                2022
              </h5>
              <div className="flex flex-col gap-6 text-[#c4c4c4]">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0">
                    <Image src={checkBlack} alt="" />
                  </div>
                  <p className="text-[14px] lg:text-[16px]">
                    Reached 1 million active users and facilitated $7 billion in
                    cryptocurrency trades.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0">
                    <Image src={checkBlack} alt="" />
                  </div>
                  <p className="text-[14px] lg:text-[16px]">
                    Raised $72 million in Series E funding to continue building
                    the platform and expanding globally.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0">
                    <Image src={checkBlack} alt="" />
                  </div>
                  <p className="text-[14px] lg:text-[16px]">
                    Launched LiveTraders into a one-stop shop for
                    cryptocurrency mining, trading, and staking.
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE */}
            <div className="max-w-[567px] h-auto">
              <Image className="w-full h-auto" src={wwa} alt="" />
            </div>
          </div>

          {/* BOTTOM 3 */}
          <div className="flex-col lg:flex-row justify-center items-stretch gap-6 grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none">
            {/* ONE ITEM */}
            <div className="bg-[#0a0a0a] rounded-[16px] lg:rounded-[32px] py-6 px-5 lg:p-6">
              <div>
                <Image src={trophyBlack} alt="" />
              </div>
              <h1 className="pt-6 pb-8 lg:pb-10 text-[18px] lg:text-[32px] text-[#f2f2f2] font-semibold leading-[100%]">
                2021
              </h1>
              <p className="flex flex-col gap-3 text-[14px] lg:text-[16px] leading-[180%] text-[#c4c4c4]">
                <span>
                  Expanded to 50 new countries, including Japan, Australia, and
                  Singapore.
                </span>
                <span>
                  Launched LiveTraders Mining, allowing users to mine their
                  favorite cryptocurrencies with powerful mining hardware.
                </span>
                <span>
                  Launched LiveTraders Staking, allowing users to earn rewards
                  by staking their cryptocurrencies.
                </span>
              </p>
            </div>
            {/* ONE ITEM */}
            <div className="bg-[#0a0a0a] rounded-[16px] lg:rounded-[32px] py-6 px-5 lg:p-6">
              <div>
                <Image src={trophyBlack} alt="" />
              </div>
              <h1 className="pt-6 pb-8 lg:pb-10 text-[18px] lg:text-[32px] text-[#f2f2f2] font-semibold leading-[100%]">
                2020
              </h1>
              <p className="flex flex-col gap-3 text-[14px] lg:text-[16px] leading-[180%] text-[#c4c4c4]">
                <span>
                  Launched LiveTraders Trading, allowing users to trade
                  cryptocurrencies on a secure and user-friendly platform.
                </span>
                <span>
                  Partnered with leading cryptocurrency exchanges to offer users
                  access to a wide range of cryptocurrencies.
                </span>
                <span>
                  Supported coinbase build their crypto educational resource.
                </span>
              </p>
            </div>
            {/* ONE ITEM */}
            <div className="bg-[#0a0a0a] rounded-[16px] lg:rounded-[32px] py-6 px-5 lg:p-6">
              <div>
                <Image src={trophyBlack} alt="" />
              </div>
              <h1 className="pt-6 pb-8 lg:pb-10 text-[18px] lg:text-[32px] text-[#f2f2f2] font-semibold leading-[100%]">
                2019
              </h1>
              <p className="flex flex-col gap-3 text-[14px] lg:text-[16px] leading-[180%] text-[#c4c4c4]">
                <span>
                  Founded LiveTraders with a mission to make cryptocurrency
                  accessible and easy to use for everyone.
                </span>
                <span>
                  Assembled a team of experienced cryptocurrency professionals
                  to build the platform.
                </span>
                <span>
                  Assembled a team of experienced cryptocurrency professionals
                  to build the platform.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEARE HIRING */}
      <section className="lg:px-[120px] px-5 pb-20 lg:pb-32 bg-[#1b1a1f]">
        <div className="bg-[#0a0a0a] rounded-[16px] lg:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between">
          {/* LEFT */}
          <div className="inline-flex flex-col gap-6 py-16 lg:pl-20">
            <h1 className="max-w-[200px] lg:max-w-[434px] text-[32px] lg:text-[64px] text-[#fcfcfc] font-semibold">
              Good news. We’re hiring.
            </h1>
            {/* CTA BUTTON */}
            <div>
              <Link
                href="/careers"
                className="bg-[#F56725] hoverr rounded-[8px] inline-flex items-center justify-center py-3 px-6 gap-2"
              >
                <span>Explore open roles</span>
                <Image
                  className="shrink-0"
                  src={arrowRight}
                  alt="Explore open roles"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-[414px] w-full h-auto">
            <Image className="w-full h-auto" src={wah} alt="" />
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PLANs */}
      <section className="bg-[#1B1A1F] py-20 px-5 lg:py-16 lg:px-[120px] flex flex-col gap-10">
        <h2 className="text-[24px] lg:text-[48px] text-center lg:text-left text-[#fcfcfc] font-bold">
          Choose your plan
        </h2>

        {/* PLANS */}
        <div className="flex flex-col gap-6">
          {/*  TOP 3 */}
          <div className="justify-center items-stretch gap-6 grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none">
            {/* Item */}
            <Link href="/dashboard" className="bg-[#0a0a0a] hover:opacity-90 rounded-[12px] lg:rounded-[16px] py-8 px-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  mining
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  trading
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  staking
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 leading-[119.2%] pt-8">
                  <h2 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2]">
                    Standard
                  </h2>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#c4c4c4]">
                    $100 Minimum
                  </p>
                </div>

                <p className="text-[#c4c4c4] text-[14px] leading-[160%]">
                  Perfect for beginners, with a $100 minimum investment, you can choose to either start mining, trading, and staking with ease.
                </p>

              </div>
            </Link>

            {/* Item */}
            <Link href="/dashboard" className="bg-[#0a0a0a] hover:opacity-90 rounded-[12px] lg:rounded-[16px] py-8 px-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  mining
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  trading
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  staking
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 leading-[119.2%] pt-8">
                  <h2 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2]">Plus</h2>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#c4c4c4]">
                    $300 Minimum
                  </p>
                </div>

                <p className="text-[#c4c4c4] text-[14px] leading-[160%]">
                  Unlock enhanced features and superior earning potential with the Plus plan, starting at a $300 minimum investment.
                </p>

              </div>
            </Link>

            {/* Item */}
            <Link href="/dashboard" className="bg-[#0a0a0a] hover:opacity-90 rounded-[12px] lg:rounded-[16px] py-8 px-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  mining
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  trading
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  staking
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 leading-[119.2%] pt-8">
                  <h2 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2]">
                    Premium
                  </h2>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#c4c4c4]">
                    $500 Minimum
                  </p>
                </div>

                <p className="text-[#c4c4c4] text-[14px] leading-[160%]">
                  For a $500 minimum investment, you&apos;ll gain access to premium features and maximize your crypto success.
                </p>

              </div>
            </Link>
          </div>

          {/* Bottom 2 */}
          <div className="justify-center items-stretch gap-6 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
            {/* Item */}
            <Link href="/dashboard" className="bg-[#0a0a0a] hover:opacity-90 rounded-[12px] lg:rounded-[16px] py-8 px-6 overflow-hidden">
              <div className="flex items-center lg:justify-start lg:gap-6 justify-between">
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  mining
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  trading
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  staking
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 leading-[119.2%] pt-8">
                  <h2 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2]">Meta</h2>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#c4c4c4]">
                    $1000 Minimum
                  </p>
                </div>

                <p className="text-[#c4c4c4] text-[14px] leading-[160%]">
                  With a $1000 minimum investment, you&apos;ll unlock exceptional benefits and elevate your crypto mastery.
                </p>

              </div>
            </Link>

            {/* Item */}
            <Link href="/dashboard" className="bg-[#0a0a0a] hover:opacity-90 rounded-[12px] lg:rounded-[16px] py-8 px-6 overflow-hidden">
              <div className="flex items-center lg:justify-start lg:gap-6 justify-between">
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  mining
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  trading
                </p>
                <p className="bg-[#f56725] py-3 px-4 lg:px-6 leading-[119.2%] rounded-full text-[12px] tracking-wider font-medium lg:font-semibold uppercase">
                  staking
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 leading-[119.2%] pt-8">
                  <h2 className="text-[18px] lg:text-[32px] font-bold text-[#f2f2f2]">
                    Ultra
                  </h2>
                  <p className="text-[14px] lg:text-[16px] font-medium text-[#c4c4c4]">
                    unlimited
                  </p>
                </div>

                <p className="text-[#c4c4c4] text-[14px] leading-[160%]">
                  Tailor your LiveTraders experience to your specific needs with our customizable plan, designed for those seeking a personalized approach to cryptocurrency investing.
                </p>

              </div>
            </Link>
          </div>
        </div>
      </section>

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
