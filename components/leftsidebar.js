"use client";
import Image from "next/image";
import Link from "next/link";
import logout from "@/public/Images/SVG/logout.svg";
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
import { useEffect } from "react";

function Leftsidebar({displayDashS}) {
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
      <nav className="leftsidebar">
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
    </>
  );
}

export default Leftsidebar;
