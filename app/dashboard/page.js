"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Script from "next/script";
import { useState, useEffect } from "react";

// IMAGE IMPORTATION
import cancel from "@/public/Images/SVG/cancel.svg";
import logo2 from "@/public/Images/png/Logo.jpg";
import logout from "@/public/Images/SVG/logout.svg";

// DEPOSIT AND WITHDRAWAL
import withdrawal from "@/public/Images/png/Withdrawal.png";
import subscription from "@/public/Images/png/subscription.png";
import deposit from "@/public/Images/png/deposit.png";
import waarn from "@/public/Images/png/waarn.png";
import spinner from "@/public/Images/SVG/spinner.svg";
import info from "@/public/Images/SVG/info.svg";
import error from "@/public/Images/png/error.png";
import success from "@/public/Images/png/success.png";
import close from "@/public/Images/png/close.png";
import Leftsidebar from "@/components/leftsidebar";
import Topnavbar from "@/components/topnavbar";

export default function Home() {
  const router = useRouter();

  const [time, setTime] = useState("");
  const [txns, setTxns] = useState("");
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [rad, setRad] = useState("");
  const [token, setToken] = useState("");
  const [network, setNetwork] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");

  // information if any
  const [infoinfo, setinfoinfo] = useState("");
  const [stakinginfoinfo, setstakinginfoinfo] = useState("");
  const [tradinginfoinfo, settradinginfoinfo] = useState("");
  const [mininginfoinfo, setmininginfoinfo] = useState("");

  // Warning if any
  const [warnwarn, setwarnwarn] = useState("");
  const [stakingwarnwarn, setstakingwarnwarn] = useState("");
  const [tradingwarnwarn, settradingwarnwarn] = useState("");
  const [miningwarnwarn, setminingwarnwarn] = useState("");

  // SHOW if any
  const [showshow, setshowshow] = useState("");
  const [stakingshowshow, setstakingshowshow] = useState("");
  const [tradingshowshow, settradingshowshow] = useState("");
  const [miningshowshow, setminingshowshow] = useState("");

  const [successs, setSuccesss] = useState("");
  const [errorr, setErrorr] = useState("");
  const [warn, setWarn] = useState("");

  useEffect(() => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      const res = axios.get(
        process.env.NEXT_PUBLIC_API_BASE + "/private",
        config
      );
      res
        .then(async (response) => {
          console.log(response.data.user);
          setUser(response.data.user);
          const feth = async () => {
            try {
              const { data } = axios
                .get(process.env.NEXT_PUBLIC_API_BASE + "/api/auth/getTxn")
                .then(async (d) => {
                  const fb = await d.data;
                  const ffb = await fb.filter(
                    (res) => res.email == response.data.user.email
                  );
                  console.log(ffb[0].txn);
                  setTxns(ffb[0].txn);
                });
              // const datat = await axios.get(
              //   process.env.NEXT_PUBLIC_API_BASE  + "/api/auth/getnum"
              // );
              // setTime(datat.data);
            } catch (error) {
              console.log(error);
            }
          };

          const infoFind = async () => {
            try {
              const { data } = axios
                .get(process.env.NEXT_PUBLIC_API_BASE + "/api/auth/getInfo")
                .then(async (w) => {
                  const xb = await w.data;
                  const fxb = await xb.filter(
                    (res) => res.email == response.data.user.email
                  );
                  // const fxbs = fxb[0].txn.filter(
                  //   (res) => res.service == "trading"
                  // );
                  console.log(fxb[0].info);
                  // information if any
                  setinfoinfo(fxb[0].info.general.information);
                  setstakinginfoinfo(fxb[0].info.staking.information);
                  settradinginfoinfo(fxb[0].info.trading.information);
                  setmininginfoinfo(fxb[0].info.mining.information);

                  // Warning if any
                  setwarnwarn(fxb[0].info.general.warning);
                  setstakingwarnwarn(fxb[0].info.staking.warning);
                  settradingwarnwarn(fxb[0].info.trading.warning);
                  setminingwarnwarn(fxb[0].info.mining.warning);

                  // SHOW if any
                  setshowshow(fxb[0].info.general.show);
                  setstakingshowshow(fxb[0].info.staking.show);
                  settradingshowshow(fxb[0].info.trading.show);
                  setminingshowshow(fxb[0].info.mining.show);
                });
            } catch (error) {
              console.log(error);
            }
          };
          infoFind();

          feth();
        })
        .catch((error) => {
          console.log(error);
          setErrorr(
            error.response.data.message ||
              error.response.data.error ||
              error.message
          );
          localStorage.removeItem("authToken");
          localStorage.removeItem("authUser");
          router.push("/auth/login");
        });
    } catch (error) {
      setErrorr(error.response.data.error);
      console.log(error.response.data.error);
    }
  }, [router]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    router.push("/auth/login");
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getcharge = async (e) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const dataa = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge",
        user
      );

      document.getElementById("process").style.display = "block";
      document.getElementById("not-process").style.display = "none";
      document.getElementById("blurr").style.backgroundColor =
        "rgb(147, 197, 253)";

      setTimeout(() => {
        document.getElementById("kolsa").style.display = "none";
        document.getElementById("coinbase-pay").style.display = "block";
      }, 1000);

      console.log(dataa.data);

      document.getElementById(
        "amena"
      ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
    }
  };

  const deposithandler = () => {
    const deposit = document.getElementById("sssd");
    setErrorr("");
    setSuccesss("");

    if (deposit.style.display == "none") {
      deposit.style.display = "flex";
    } else {
      deposit.style.display = "none";
    }
  };
  const withdrawalhandler = () => {
    const withdrawal = document.getElementById("sssw");
    setErrorr("");
    setSuccesss("");

    if (withdrawal.style.display == "none") {
      withdrawal.style.display = "flex";
    } else {
      withdrawal.style.display = "none";
    }
  };
  const depositSubmission = async (e) => {
    e.preventDefault();

    try {
      if (rad === "") {
        setErrorr("Kindly select an option.");
      }

      if (rad === "customD") {
        if (amount === "") {
          setErrorr("Kindly input an amount, amount cannot be empty.");
        }
        if (amount < 1) {
          setErrorr("Kindly input an amount greater than $0");
        }
        if (amount > 0) {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createChargeany",
            { user, amount }
          );

          if (dataa) {
            setSuccesss(
              `Transaction Initiated for $${amount}. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
      }

      if (rad === "subP") {
        if (plan === "100-mini-entry-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-100",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $100 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
        if (plan === "300-mini-inter-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-300",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $300 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
        if (plan === "500-mini-pro-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-500",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $500 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
        if (plan === "1000-mega-entry-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-1000",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $1000 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
        if (plan === "5000-mega-inter-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-5000",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $5000 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }

        if (plan === "10000-mega-pro-plan") {
          const dataa = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/payment/createCharge-10000",
            { user }
          );
          if (dataa) {
            setSuccesss(
              `Transaction Initiated for a $10000 subscription plan. Kindly click the "Pay Now" button.`
            );
            setErrorr(``);
            document.getElementById(
              "deepp"
            ).innerHTML = `<a target="_blank" class=" px-5 bg-blue-600 text-white font-bold py-3 text-lg rounded-md" href="${dataa.data.hosted_url}">Pay now</a>`;
          } else {
            setSuccesss();
            setErrorr(`Oops, something went wrong. Try again.`);
          }
        }
      }
    } catch (error) {
      console.log(error);
      setErrorr("Oops, something went wrong. Try again.");
    }
  };
  const withdrawalSubmission = async (e) => {
    e.preventDefault();

    if (time == "0") {
      setWarn(
        "Kindly make a deposit of $500 to extend your monthly limit by an additional $5,000. Your subscription has expired, you can make a deposit of $1,500 to restore all account limits."
      );
    } else {
      document.getElementById("ww").style.display = "none";
      document.getElementById("ww2").style.display = "block";

      try {
        if (amount < 1) {
          setErrorr("Kindly input an amount greater than $0");
        }
        if (amount > 0) {
          console.log(token + network + amount + address);

          const { data } = await axios.post(
            process.env.NEXT_PUBLIC_API_BASE + "/api/auth/withdrawal",
            { user, token, network, amount, address },
            config
          );

          if (data.success) {
            document.getElementById("ww").style.display = "block";
            document.getElementById("ww2").style.display = "none";
            setSuccesss(
              "Transaction Submitted. Check for a confirmation email in your Inbox."
            );
            setErrorr("");
            setToken("");
            setAmount("");
            setNetwork("");
            setAddress("");
          } else {
            setErrorr(
              "Transaction Failed, something went wrong. Please try again."
            );
            setSuccesss("");
          }
          console.log(data);
        }
      } catch (error) {
        console.log(error);
        setErrorr("Oops, something went wrong. Try again.");
      }
    }
  };
  const displayDashS = () => {
    document.getElementById("dashboard-side").classList.toggle("active");
  };

  return (
    <>
      {/* DEPOSIT POPUP */}
      <div
        id="sssd"
        class="flex overflow-auto text-sm lg:text-base flex-col gap-6 z-50 px-6 justify-center items-center w-full h-full"
      >
        {errorr && (
          <div class="bg-white errror flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={error}
              alt=""
              priority
              quality={100}
            />
            <p>{errorr}</p>
          </div>
        )}

        {warn && (
          <div class="bg-white border-l-8 border-amber-900 flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={waarn}
              alt=""
              priority
              quality={100}
            />
            <p className=" leading-7">
              <span class="font-semibold pr-1">Limit Reached:</span>
              {warn}
            </p>
          </div>
        )}

        {successs && (
          <div class="bg-white successs flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={success}
              alt=""
              priority
              quality={100}
            />
            <p>{successs}</p>
          </div>
        )}

        <div class="max-w-xl success w-full justify-start items-start rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-8 lg:gap-12">
          <div class=" w-full">
            <div className="flex w-full items-center flex-row justify-between">
              <h3 className="text-2xl">Deposit</h3>
              <Image
                className="w-10 h-10 cursor-pointer"
                
                src={close}
                alt=""
                priority
                quality={100}
              />
            </div>
            <p className="opacity-70 pt-2">
              Almost done! Choose only one option to make a deposit:
            </p>
          </div>

          <form onSubmit={depositSubmission} class="flex flex-col gap-8 w-full">
            <div class="flex flex-col gap-4">
              <div class="flex gap-2 items-center">
                <input
                  className="w-5 radio h-5"
                  type="radio"
                  name="rad"
                  id="subP"
                  onChange={(e) => {
                    setRad(e.target.value);
                  }}
                  value="subP"
                />
                <label className="" for="subP">
                  Choose a subscription plan
                </label>
              </div>

              <select
                name="plan"
                id="plan"
                class="dddf flex gap-2 flex-col rounded-lg px-4 py-4 outline-none"
                onChange={(e) => {
                  setPlan(e.target.value);
                }}
                value={plan}
              >
                <option value="" selected disabled>
                  Select an option
                </option>
                <option value="100-mini-entry-plan">100$ Standard Plan</option>
                <option value="300-mini-inter-plan">300$ Plus Plan</option>
                <option value="500-mini-pro-plan">500$ Premium Pro Plan</option>
                <option value="1000-mega-entry-plan">
                  1,000$ Meta Entry Plan
                </option>
                <option value="5000-mega-inter-plan">
                  5,000$ Meta Intermediate Plan
                </option>
                <option value="10000-mega-pro-plan">
                  10,000$ Meta Pro Plan
                </option>
              </select>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex gap-2 items-center">
                <input
                  className="w-5 h-5 radio text-green-600"
                  type="radio"
                  name="rad"
                  id="customD"
                  onChange={(e) => {
                    setRad(e.target.value);
                  }}
                  value="customD"
                />
                <label for="customD">Make a custom deposit</label>
              </div>
              <input
                class="dddf rounded-lg p-4 outline-none"
                placeholder="100"
                type="number"
                name="amount"
                id="amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                value={amount}
              />
            </div>

            <div
              id="deepp"
              class="w-full lg:pt-4 flex justify-center items-center"
            >
              <button
                type="submit"
                class="px-8 py-3 cursor-pointer hover:bg-green-900 rounded-lg text-white bg-green-700"
              >
                Deposit
              </button>
            </div>
            <div id="deepp2" class=" hidden  lg:pt-4 lg:justify-center ">
              <div class="px-8 py-3 flex gap-2 items-center cursor-pointer hover:bg-green-900 rounded-lg text-white bg-green-700">
                deposit
                <img class="w-6 h-6 spinner" src="/spinner.svg" alt="spinner" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* WITHDRAWAL POPUP */}
      <div
        id="sssw"
        class="flex overflow-auto text-sm lg:text-base flex-col gap-6 z-50 px-6 justify-center items-center w-full h-full"
      >
        {errorr && (
          <div class="bg-white errror flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={error}
              alt=""
              priority
              quality={100}
            />
            <p>{errorr}</p>
          </div>
        )}

        {warn && (
          <div class="bg-white border-l-8 border-amber-900 flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={waarn}
              alt=""
              priority
              quality={100}
            />
            <p className=" leading-7">
              <span class="font-semibold pr-1">Limit Reached:</span>
              {warn}
            </p>
          </div>
        )}

        {successs && (
          <div class="bg-white successs flex flex-row gap-3 px-4 py-3 items-center rounded-2xl max-w-xl w-full">
            <Image
              className="w-12 h-12"
              src={success}
              alt=""
              priority
              quality={100}
            />
            <p>{successs}</p>
          </div>
        )}

        <div class="max-w-xl success w-full justify-start items-start rounded-2xl bg-white flex flex-col px-4 lg:px-6 py-10 gap-8 lg:gap-12">
          <div class=" w-full">
            <div className="flex w-full items-center flex-row justify-between">
              <h3 className="text-2xl">Withdrawal</h3>
              <Image
                className="w-10 h-10 cursor-pointer"
                
                src={close}
                alt=""
                priority
                quality={100}
              />
            </div>
            <p className="opacity-70 pt-2">
              Send funds to any specified crypto address
            </p>
          </div>

          <form
            onSubmit={withdrawalSubmission}
            class="flex flex-col gap-8 w-full"
          >
            <div class="flex gap-4 flex-1">
              <div class="flex flex-col gap-4 w-full">
                <div class="flex gap-2 items-center">
                  <label for="option2">Token</label>
                </div>
                <input
                  class="dddf rounded-lg p-4 outline-none"
                  placeholder="e.g Tron"
                  type="text"
                  name="dropdown2"
                  id="dropdown2"
                  required
                  onChange={(e) => {
                    setToken(e.target.value);
                  }}
                  value={token}
                />
              </div>
              <div class="flex flex-col gap-4 w-full">
                <div class="flex gap-2 items-center">
                  <label for="option2">Network</label>
                </div>
                <input
                  class="dddf rounded-lg p-4 outline-none"
                  placeholder="e.g Tron (TRX)"
                  type="text"
                  name="dropdown2"
                  id="dropdown2"
                  required
                  onChange={(e) => {
                    setNetwork(e.target.value);
                  }}
                  value={network}
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex gap-2 items-center">
                <label for="option2">Recipient Address</label>
              </div>
              <input
                class="dddf rounded-lg p-4 outline-none"
                placeholder="e.g Public Address (Tp)"
                type="text"
                name="dropdown2"
                required
                id="dropdown2"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex gap-2 items-center">
                <label for="option2">Amount (USD)</label>
              </div>
              <input
                class="dddf rounded-lg p-4 outline-none"
                placeholder="0.00"
                required
                type="number"
                name="dropdown2"
                id="dropdown2"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                value={amount}
              />
            </div>

            <div
              id="ww"
              class="w-full lg:pt-4 flex justify-center items-center"
            >
              <button class="px-8 py-3 cursor-pointer hover:bg-amber-900 rounded-lg text-white bg-amber-700">
                Withdraw
              </button>
            </div>
            <div id="ww2" class=" hidden  lg:pt-4 lg:justify-center ">
              <div class="px-8 py-3 flex justify-center gap-2 items-center cursor-pointer hover:bg-amber-900 rounded-lg text-white bg-amber-700">
                processing
                <Image
                  class="w-6 h-6 spinner"
                  src={spinner}
                  alt="spinner"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {user !== "" ? (
        <main className="bg-[#1b1a1f] grid xl:grid-cols-[20%_80%] w-full text-[#f2f2f2]">
          {/* Left */}
          <section className="hidden xl:flex flex-col gap-12 sticky top-0 bottom-0 h-screen pt-24 px-6 pb-0 border-r border-[#292929]">
            {/* IMAGE */}
            <Link href="/dashboard" className="hoverr max-w-[64px]">
              <Image
                className="w-full h-auto rounded-full"
                src={logo2}
                alt="LOGO"
              />
            </Link>

            {/* NAVBAR */}
            <Leftsidebar displayDashS={displayDashS} />
          </section>

          {/* TOP - MOBILE NAVBAR */}
          <Topnavbar
            logout={logoutHandler}
            user={user}
            displayDashS={displayDashS}
          />

          {/* BOTTOM - MOBILE NAVBAR */}
          <article className="fixed z-10 p-5 bg-[#1b1a1f] bottom-0 left-0 right-0 lg:hidden grid grid-cols-2 gap-4">
            <div
              
              className="interact-button inline-flex text-[14px] font-semibold bg-[#067938] text-[#f2f2f2] rounded-[8px] p-3 text-center justify-center"
            >
              <p>Change your plan</p>
            </div>
            <div
              // 
              className="interact-button inline-flex text-[14px] font-semibold bg-[#B45309] text-[#f2f2f2] rounded-[8px] p-3 text-center justify-center"
            >
              <p>Make a withdrawal</p>
            </div>
          </article>

          {/* Right - 3 SECTIONS */}
          {user && (
            <section className="py-6 px-5 lg:py-10 lg:px-[72px]">
              {/* TOP - WITHDRAWAL + NAMEandLOGOUT */}
              <section className="w-full hidden lg:flex gap-8 items-end justify-end">
                {/* WITHDRAWL */}
                <div
                  // 
                  className="interact-button tithov withdrawal-CTA cursor-pointer"
                >
                  <p>Make a withdrawal</p>
                </div>

                {/* NAME + LOGOUT */}
                <div className="flex gap-14 py-3 px-6 text-[#f2f2f2] bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[8px]">
                  <p className="font-semibold">Hi, {user.username}</p>
                  <article
                    onClick={() => logoutHandler()}
                    className="flex gap-2 cursor-pointer hover:bg-[rgba(0,0,0,0.05)]"
                  >
                    <Image src={logout} alt="Logout" />
                    <p>Logout</p>
                  </article>
                </div>
              </section>

              {/* CENTER - DASHBOARD PRICE */}
              <section className="lg:pt-16 flex flex-col lg:gap-6 gap-4">
                {/* TEXT */}
                <h2 className="text-[#f2f2f2] text-[18px] lg:text-[24px] font-semibold">
                  Dashboard
                </h2>

                {/* Warning alert */}
                {showshow && showshow == "w" && (
                  <article className="mt-2 flex text-[#b45309] text-[14px] font-medium bg-[#F3E9E2] px-4 py-[10px] rounded-[12px] gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z"
                        fill="#B45309"
                      />
                    </svg>
                    <p>{warnwarn}</p>
                  </article>
                )}
                {stakingshowshow && stakingshowshow == "w" && (
                  <article className="mt-2 flex text-[#b45309] text-[14px] font-medium bg-[#F3E9E2] px-4 py-[10px] rounded-[12px] gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z"
                        fill="#B45309"
                      />
                    </svg>
                    <p>{stakingwarnwarn}</p>
                  </article>
                )}
                {tradingshowshow && tradingshowshow == "w" && (
                  <article className="mt-2 flex text-[#b45309] text-[14px] font-medium bg-[#F3E9E2] px-4 py-[10px] rounded-[12px] gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z"
                        fill="#B45309"
                      />
                    </svg>
                    <p>{tradingwarnwarn}</p>
                  </article>
                )}
                {miningshowshow && miningshowshow == "w" && (
                  <article className="mt-2 flex text-[#b45309] text-[14px] font-medium bg-[#F3E9E2] px-4 py-[10px] rounded-[12px] gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z"
                        fill="#B45309"
                      />
                    </svg>
                    <p>{miningwarnwarn}</p>
                  </article>
                )}

                {/* Info alert */}
                {showshow && showshow == "i" && (
                  <article className="mt-2 flex text-[#0961B4] text-[14px] font-medium bg-[#E2EBF3] px-4 py-[10px] rounded-[12px] gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM10.9562 10.5584C12.1025 9.98533 13.3931 11.0206 13.0823 12.2639L12.3733 15.0999L12.4148 15.0792C12.7852 14.894 13.2357 15.0441 13.421 15.4146C13.6062 15.7851 13.4561 16.2356 13.0856 16.4208L13.0441 16.4416C11.8979 17.0147 10.6072 15.9794 10.9181 14.7361L11.6271 11.9001L11.5856 11.9208C11.2151 12.1061 10.7646 11.9559 10.5793 11.5854C10.3941 11.2149 10.5443 10.7644 10.9148 10.5792L10.9562 10.5584ZM12 9C12.4142 9 12.75 8.66421 12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25C11.25 8.66421 11.5858 9 12 9Z"
                        fill="#0961B4"
                      />
                    </svg>
                    <p>{infoinfo}</p>
                  </article>
                )}

                {/* Prices - 2 sections */}
                <article>
                  {/* top - 2 */}
                  <article className="grid gap-4 lg:grid-cols-2 lg:gap-8">
                    {/* TOTAL ASSETS */}
                    <article className="bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[12px] p-4 lg:p-6">
                      <p className="text-[#c4c4c4] text-[12px] lg:text-[16px] font-meidum leading-[119.2%]">
                        Total Assets
                      </p>
                      <p className="text-[#f2f2f2] text-[20px] lg:text-[24px] font-semibold leading-[150%] pt-3 pb-4">
                        {user &&
                          user.total_assets.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                      </p>
                      <button
                        
                        className="text-[#c4c4c4] text-[14px] lg:text-[16px] underline leading-[119.2%]"
                      >
                        withdraw
                      </button>
                    </article>
                    {/* WITHDRAWALS */}
                    <article className="bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[12px] p-4 lg:p-6">
                      <p className="text-[#c4c4c4] text-[12px] lg:text-[16px] font-meidum leading-[119.2%]">
                        Total Withdrawals
                      </p>
                      <p className="text-[#f2f2f2] text-[20px] lg:text-[24px] font-semibold leading-[150%] pt-3 pb-4">
                        {user &&
                          user.total_withdrawals.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                      </p>
                      <button
                        
                        className="text-[#c4c4c4] text-[14px] lg:text-[16px] underline leading-[119.2%]"
                      >
                        withdraw
                      </button>
                    </article>
                  </article>
                  {/* bottom - 3 */}
                  <article className="grid gap-4 pt-4 lg:grid-cols-3 lg:gap-8 lg:pt-8">
                    {/* Trading gains */}
                    <article className="bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[12px] p-4 lg:p-6">
                      <p className="text-[#c4c4c4] text-[12px] lg:text-[16px] font-meidum leading-[119.2%]">
                        Trading balance
                      </p>
                      <p className="text-[#f2f2f2] text-[20px] lg:text-[24px] font-semibold leading-[150%] pt-3 pb-4">
                        {user &&
                          user.trading.balance.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                      </p>
                      <Link
                        href="/dashboard/trading"
                        className="text-[#c4c4c4] text-[14px] lg:text-[16px] underline leading-[119.2%]"
                      >
                        view trading dashboard
                      </Link>
                    </article>
                    {/* Mining gains */}
                    <article className="bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[12px] p-4 lg:p-6">
                      <p className="text-[#c4c4c4] text-[12px] lg:text-[16px] font-meidum leading-[119.2%]">
                        Mining balance
                      </p>
                      <p className="text-[#f2f2f2] text-[20px] lg:text-[24px] font-semibold leading-[150%] pt-3 pb-4">
                        {user &&
                          user.mining.balance.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                      </p>
                      <Link
                        href="/dashboard/mining"
                        className="text-[#c4c4c4] text-[14px] lg:text-[16px] underline leading-[119.2%]"
                      >
                        view mining dashboard
                      </Link>
                    </article>
                    {/* Staking Gains */}
                    <article className="bg-[#0A0A0A] border border-[#292929] shadow-sm rounded-[12px] p-4 lg:p-6">
                      <p className="text-[#c4c4c4] text-[12px] lg:text-[16px] font-meidum leading-[119.2%]">
                        Staking balance
                      </p>
                      <p className="text-[#f2f2f2] text-[20px] lg:text-[24px] font-semibold leading-[150%] pt-3 pb-4">
                        {user &&
                          user.staking.balance.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                          })}
                      </p>
                      <Link
                        href="/dashboard/staking"
                        className="text-[#c4c4c4] text-[14px] lg:text-[16px] underline leading-[119.2%]"
                      >
                        view staking dashboard
                      </Link>
                    </article>
                  </article>
                </article>

                {/* DEPOSIT - CTA */}
                <div>
                  <div
                    // 
                    className="cursor-pointer tithov hidden lg:inline-flex font-semibold bg-[#D4EDE0] text-[#044E24] rounded-[8px] py-3 px-6"
                  >
                    <p className="interact-button">Make a deposit</p>
                  </div>
                </div>
              </section>

              {/* BOTTOM - TRANSACTION HISTORY */}
              <div id="transactions" class="pt-16 pb-24 lg:py-24">
                {/* TRANSACTIONS - DESKTOP */}
                <h2 class="text-[24px] mb-6 font-semibold hidden lg:block">
                  Transaction History ({txns ? txns.length : "0"})
                </h2>

                <table class="w-full hidden lg:table">
                  {/* HEAD */}
                  <thead class="bg-[#0A0A0A] border-[#292929] border overflow-hidden shadow-sm rounded-[12px] text-[#f2f2f2]">
                    <tr>
                      <th class="px-5 py-5 font-medium text-sm">&nbsp;</th>
                      <th class="px-5 py-5 font-medium text-sm table-cell">
                        Type
                      </th>
                      <th class="px-5 py-5 font-medium text-sm ">Date</th>
                      <th class="px-5 py-5 font-medium text-sm hidden xl:table-cell">
                        Status
                      </th>
                      <th class="px-5 py-5 font-medium text-sm hidden xl:table-cell">
                        Recipient
                      </th>
                    </tr>
                  </thead>

                  {/* BODY -  */}
                  {txns
                    ? txns.map((txn, index) => {
                        return (
                          <tbody key={index} class="font-bold text-sm">
                            <tr class="text-center text-[#f2f2f2] font-normal text-sm mb-8 lg:mb-0">
                              <td class="px-5 py-5 items-center table-cell">
                                <div class="flex items-center">
                                  <div class="pr-4">
                                    {txn.type === "Withdrawal" ? (
                                      <Image
                                        class="h-10 w-10 items-start self-start"
                                        src={withdrawal}
                                        alt="coin"
                                      />
                                    ) : (
                                      <Image
                                        class="h-10 w-10 items-start self-start"
                                        src={deposit}
                                        alt="coin"
                                      />
                                    )}
                                  </div>
                                  <div class="flex ">
                                    <p>{txn.type}</p>
                                  </div>
                                </div>
                              </td>
                              <td class="px-5 min-w-[130px] py-5 table-cell">
                                <div>
                                  {txn.amount.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                    minimumFractionDigits: 2,
                                  })}
                                </div>
                              </td>
                              <td class="px-5 min-w-[130px] py-5 table-cell">
                                <div>{txn.date}</div>
                              </td>
                              <td class="px-5 min-w-[130px] py-5 hidden xl:table-cell">
                                <div className="inline-flex gap-2 items-center">
                                  <span className="w-2 h-2 bg-[#005B33] shrink-0 rounded-full"></span>
                                  {txn.status}
                                </div>
                              </td>
                              <td class="px-5 min-w-[130px] py-5 hidden lg:table-cell">
                                <div>{txn.address}...</div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })
                    : "no transactions"}
                </table>

                {/* TRANSACTIONS - MOBILE */}
                <section class="block lg:hidden">
                  <h2 class="pb-1 font-semibold">
                    Transaction History ({txns ? txns.length : "0"})
                  </h2>
                  <div id="container" className="flex flex-col gap-0">
                    {txns
                      ? txns.map((txn, index) => {
                          return (
                            <div
                              key={index}
                              id="cont-op"
                              class="flex flex-col gap-4 border-b py-4 mb-4"
                            >
                              <div class="text-xs font-medium opacity-70">
                                {txn.date}
                              </div>
                              <div class="flex justify-between">
                                <span class="flex gap-3">
                                  <div>
                                    {txn.type === "Withdrawal" ? (
                                      <Image
                                        class="h-10 w-10 items-start self-start"
                                        src={withdrawal}
                                        alt="coin"
                                      />
                                    ) : (
                                      <Image
                                        class="h-10 w-10 items-start self-start"
                                        src={deposit}
                                        alt="coin"
                                      />
                                    )}
                                  </div>
                                  <div class="flex flex-col gap-2">
                                    <p class="text-sm font-medium">
                                      {txn.type}
                                    </p>
                                    <p class="text-xs font-medium opacity-70">
                                      {txn.status}
                                    </p>
                                  </div>
                                </span>
                                <div class="flex flex-col gap-2">
                                  <p class="text-sm font-medium">
                                    {txn.amount.toLocaleString("en-US", {
                                      style: "currency",
                                      currency: "USD",
                                      minimumFractionDigits: 2,
                                    })}
                                  </p>
                                  <p class="text-xs font-medium opacity-70">
                                    {txn.service}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : "no transactions"}
                  </div>
                </section>
              </div>
            </section>
          )}
        </main>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
