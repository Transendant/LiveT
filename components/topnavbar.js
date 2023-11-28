"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import cancel from "@/public/Images/SVG/cancel.svg";
import logo2 from "@/public/Images/png/Logo.jpg";
// home
import homeF from "@/public/Images/SVG/dash/home-filled.svg";
import homeE from "@/public/Images/SVG/dash/home-empty.svg";
// trading
import tradingF from "@/public/Images/SVG/dash/trading-filled.svg";
import tradingE from "@/public/Images/SVG/dash/trading-empty.svg";
// mining
import miningF from "@/public/Images/SVG/dash/mining-filled.svg";
import miningE from "@/public/Images/SVG/dash/mining-empty.svg";
// staking
import stakingF from "@/public/Images/SVG/dash/staking-filled.svg";
import stakingE from "@/public/Images/SVG/dash/staking-empty.svg";
// history
import historyF from "@/public/Images/SVG/dash/history-filled.svg";
import historyE from "@/public/Images/SVG/dash/history-empty.svg";
// settings
import settingF from "@/public/Images/SVG/dash/setting-filled.svg";
import settingE from "@/public/Images/SVG/dash/setting-empty.svg";
import logout2 from "@/public/Images/SVG/logout.svg";
import menu from "@/public/Images/SVG/menu.svg";

import { useEffect } from "react";

function Topnavbar({ displayDashS, logout, user }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == "/dashboard") {
      document.querySelectorAll(".home").forEach((item) => {
        item.classList.add("active");
      });
    }
    if (pathname == "/dashboard/trading") {
      document.querySelectorAll(".trading").forEach((item) => {
        item.classList.add("active");
      });
    }
    if (pathname == "/dashboard/staking") {
      document.querySelectorAll(".staking").forEach((item) => {
        item.classList.add("active");
      });
    }
    if (pathname == "/dashboard/mining") {
      document.querySelectorAll(".mining").forEach((item) => {
        item.classList.add("active");
      });
    }
    if (pathname == "/dashboard/history") {
      document.querySelectorAll(".history").forEach((item) => {
        item.classList.add("active");
      });
    }
    if (pathname == "/dashboard/settings") {
      document.querySelectorAll(".settings").forEach((item) => {
        item.classList.add("active");
      });
    }
  });

  return (
    <>
      {/* MOBILE POPUP BAR */}
      <section
        id="dashboard-side"
        className="fixed z-20 hidden flex-col bg-[#1b1a1f] top-0 bottom-0 left-0 right-0 px-5 py-8"
      >
        {/* IMAGE + CANCEL */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Image  + Saluttions */}
          <Link href="/" className="flex items-center gap-2 font-semibold leading-[150%]">
            <Image className="w-8 rounded-full" src={logo2} alt="Logo" />
            <p>LiveTraders</p>
          </Link>
          {/* HAMBURGER MENU */}
          <div
            onClick={() => displayDashS()}
            className="inline-flex lg:hidden border border-[#EBEBEB] bg-[#EBEBEB] rounded-md p-[3px] justify-center items-center"
          >
            <Image src={cancel} alt="Close Modal" />
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="leftsidebar pt-10">
          {/* home - ACTIVE */}
          <Link className="home" href="/dashboard">
            {pathname == "/dashboard" ? (
              <Image src={homeF} alt="" />
            ) : (
              <Image src={homeE} alt="" />
            )}

            <p>home</p>
          </Link>

          {/* trading - INACTIVE */}
          <Link className="trading" href="/dashboard/trading">
            {pathname == "/dashboard/trading" ? (
              <Image src={tradingF} alt="" />
            ) : (
              <Image src={tradingE} alt="" />
            )}
            <p>trading</p>
          </Link>

          {/* mining - INACTIVE */}
          <Link className="mining" href="/dashboard/mining">
            {pathname == "/dashboard/mining" ? (
              <Image src={miningF} alt="" />
            ) : (
              <Image src={miningE} alt="" />
            )}
            <p>mining</p>
          </Link>

          {/* staking - INACTIVE */}
          <Link className="staking" href="/dashboard/staking">
            {pathname == "/dashboard/staking" ? (
              <Image src={stakingF} alt="" />
            ) : (
              <Image src={stakingE} alt="" />
            )}
            <p>staking</p>
          </Link>

          {/* history - INACTIVE */}
          <Link className="history" href="/dashboard/history">
            {pathname == "/dashboard/history" ? (
              <Image src={historyF} alt="" />
            ) : (
              <Image src={historyE} alt="" />
            )}
            <p>history</p>
          </Link>

          {/* settings - INACTIVE */}
          <Link className="settings" href="/dashboard/settings">
            {pathname == "/dashboard/settings" ? (
              <Image src={settingF} alt="" />
            ) : (
              <Image src={settingE} alt="" />
            )}
            <p>settings</p>
          </Link>
        </nav>

        {/* LOGOUT */}
        <div className=" mt-auto w-full justify-between flex gap-14 py-3 px-6 text-[#f2f2f2] bg-[#0a0a0a] border border-[#292929] shadow-sm rounded-[8px]">
          <p className="font-semibold">Hi, {user && user.username}</p>
          <article onClick={logout} className="flex gap-2">
            <Image src={logout2} alt="Logout" />
            <p>Logout</p>
          </article>
        </div>
      </section>

      <section className="px-5 py-8 flex lg:hidden items-center justify-between">
        {/* Image  + Saluttions */}
        <div className="flex items-center gap-2 font-semibold leading-[150%]">
          <Image className="w-8 rounded-full" src={logo2} alt="Logo" />
          <p>Hi, {user && user.username}</p>
        </div>
        {/* HAMBURGER MENU */}
        <div
          onClick={() => displayDashS()}
          className="p-2 bg-[#EBEBEB] rounded-[6px]"
        >
          <Image src={menu} alt="" />
        </div>
      </section>
    </>
  );
}

export default Topnavbar;
