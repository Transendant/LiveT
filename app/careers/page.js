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
          Careers
        </div>
        <h1 className="text-[18px] lg:text-[32px] pt-4 pb-2 lg:pt-8 lg:pb-4 text-[#f2f2f2] font-semibold leading-[150%]">
          Current Job openings
        </h1>
        <p className="text-[#c4c4c4] text-[14px] lg:text-[20px] leading-[180%] lg:leading-[160%] max-w-[845px]">
          No matter if you’re a full stack developer, a banker or an astronaut:
          if you’re ready to change crypto, join our growing team. Learn more
          about working at LiveTraders by reaching out to us on our mail at
          support@livetraders.cc
        </p>
      </section>

      <section className="lg:px-[72px] lg:py-24 py-20 px-5 bg-[#1b1a1f]">
        {/* JOB OPENING */}
        <section className="pb-6 lg:pb-16">
          <h6 className="py-3 px-6 text-[12px] lg:text-[16px] leading-[119.2%] lg:leading-[24px] border border-[#f2f2f2] text-[#f2f2f2] rounded-full inline-block">
            Job directory
          </h6>
        </section>

        {/* OPEN ROLES (5) */}
        <section className="flex flex-col gap-4">
          {/* Header */}
          <h6 className="text-[#f2f2f2] text-[12px] lg:text-[16px] leading-[119.2%] font-bold uppercase">Open Roles (5)</h6>

          {/* TOP-3 AND BOTTOM-2 - 5 */}
          <div className="flex flex-col gap-6">
            {/* top-3 */}
            <div className="lg:justify-center lg:items-stretch gap-6 grid lg:grid-cols-3 lg:grid-rows-none">
              {/* item */}
              <div className="bg-[#0a0a0a] py-10 px-5 flex flex-col gap-2 lg:gap-4 leading-[119.2%] font-medium rounded-[16px]">
                <h6 className="text-[16px] lg:text-[20px] font-bold leading-[150%] lg:leading-[119.2%] text-[#f2f2f2]">
                  Customer Experience Advisor
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[16px]">Location: Remote</p>
              </div>
              {/* item */}
              <div className="bg-[#0a0a0a] py-10 px-5 flex flex-col gap-2 lg:gap-4 leading-[119.2%] font-medium rounded-[16px]">
                <h6 className="text-[16px] lg:text-[20px] font-bold leading-[150%] lg:leading-[119.2%] text-[#f2f2f2]">
                  Junior Legal Counsel (Complaints)
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[16px]">Location: Remote</p>
              </div>
              {/* item */}
              <div className="bg-[#0a0a0a] py-10 px-5 flex flex-col gap-2 lg:gap-4 leading-[119.2%] font-medium rounded-[16px]">
                <h6 className="text-[16px] lg:text-[20px] font-bold leading-[150%] lg:leading-[119.2%] text-[#f2f2f2]">
                  Sr. Manager User Acquisition
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[16px]">Location: Remote</p>
              </div>
            </div>

            {/* bottom-3 */}
            <div className="lg:justify-center lg:items-stretch gap-6 grid lg:grid-cols-2 lg:grid-rows-none">
              {/* item */}
              <div className="bg-[#0a0a0a] py-10 px-5 flex flex-col gap-2 lg:gap-4 leading-[119.2%] font-medium rounded-[16px]">
                <h6 className="text-[16px] lg:text-[20px] font-bold leading-[150%] lg:leading-[119.2%] text-[#f2f2f2]">
                  Business Development Manager - Cloud
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[16px]">Location: Remote</p>
              </div>
              {/* item */}
              <div className="bg-[#0a0a0a] py-10 px-5 flex flex-col gap-2 lg:gap-4 leading-[119.2%] font-medium rounded-[16px]">
                <h6 className="text-[16px] lg:text-[20px] font-bold leading-[150%] lg:leading-[119.2%] text-[#f2f2f2]">
                  Product Designer – Growth & Discovery
                </h6>
                <p className="text-[#c4c4c4] text-[12px] lg:text-[16px]">Location: Remote</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="pt-16 flex flex-col gap-4">
          <h6 className=" font-semibold text-[#f2f2f2] uppercase">How to apply</h6>
          <ol className="leading-[200%] text-[14px] lg:text-[16px] pl-8 list-decimal text-[#c4c4c4]">
            <li>Reach out to us at our email - support@livetraders.cc</li>
            <li>CV to the Email + Resume (If available)</li>
            <li>Using the job title as the subject of the mail</li>
          </ol>
        </section>
      </section>
    </>
  );
}
