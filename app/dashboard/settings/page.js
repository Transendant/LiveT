"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect, useNavigate } from "react";

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
import success from "@/public/Images/png/success.png";
import info from "@/public/Images/SVG/info.svg";
import error from "@/public/Images/png/error.png";
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
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [houseAddress, setHouseAddress] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const res = axios.get(process.env.NEXT_PUBLIC_API_BASE + "/private", config);
      res
        .then(async (response) => {
          console.log(response.data.user);
          setUser(response.data.user);
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
  const submitSettings = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE + "/api/auth/settings",
        { user, phoneNumber, houseAddress },
        config
      );

      setSuccesss("Successful request for profile update. We're reviewing it and will update your profile if approved. Kindly be patient.");

      setIsSubmitting(false);

    } catch (e) {
      console.log(e)
      setErrorr(
        e.response.data.message ||
        e.response.data.error ||
        e.message
      );
      setSuccesss("");
      setIsSubmitting(false);
      setTimeout(() => {
        router.push("/auth/login");
      }, 5000);
    }

  }

  return (
    <>
      {errorr && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Profile Update Failed</h2>
          <p class="text-sm text-left tracking-wider pt-1">{errorr}</p>
        </div>
      )}
      {successs && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Profile Update Successful</h2>
          <p class="text-sm text-left tracking-wider pt-1">{successs}</p>
        </div>
      )}

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
                <option value="100-mini-entry-plan">
                  100$ Mini Entry Plan
                </option>
                <option value="300-mini-inter-plan">
                  300$ Mini Intermediate Plan
                </option>
                <option value="500-mini-pro-plan">500$ Mini Pro Plan</option>
                <option value="1000-mega-entry-plan">
                  1,000$ Mega Entry Plan
                </option>
                <option value="5000-mega-inter-plan">
                  5,000$ Mega Intermediate Plan
                </option>
                <option value="10000-mega-pro-plan">
                  10,000$ Mega Pro Plan
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
                deposit
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
        <section className="hidden xl:flex flex-col gap-12 sticky top-0 bottom-0 h-screen pt-24 px-6 pb-0 border-r border-[#E8E8E8]">
          {/* IMAGE */}
          <div className="max-w-[64px]">
            <Image className="w-full h-auto rounded-full" src={logo2} alt="LOGO" />
          </div>

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
            
            className="interact-button inline-flex text-[14px] font-semibold bg-[#B45309] text-[#f2f2f2] rounded-[8px] p-3 text-center justify-center"
          >
            <p>Make a withdrawal</p>
          </div>
        </article>

        {/* Right - 3 SECTIONS */}
        <section className="py-6 px-5 lg:py-10 lg:px-[72px]">
          {/* TOP - WITHDRAWAL + NAMEandLOGOUT */}
          <section className="w-full hidden lg:flex gap-8 items-end justify-end">
            {/* WITHDRAWL */}
            <div
              
              className=" interact-button tithov withdrawal-CTA cursor-pointer"
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

          <form onSubmit={submitSettings} className="py-14 lg:py-20 flex gap-8 w-full">
            {/* LEFT OF THE FORM */}
            <div className="flex flex-col w-full lg:max-w-[380px]">
              {/* Profile */}
              <h6 className="text-[24px] font-bold mb-8 text-[#f2f2f2]">Profile</h6>

              {/* INPUT FIELDS + CTA */}
              <div className="flex flex-col gap-6 pb-3">
                <div className="islot">
                  <p className="text-[14px] font-semibold">Full name</p>
                  <input disabled className="rounded-md py-3 px-4 bg-[#ebebeb]" type="text" placeholder={user.username} />
                </div>
                <div className="islot">
                  <p className="text-[14px] font-semibold">Email</p>
                  <input disabled className="rounded-md py-3 px-4 bg-[#ebebeb]" type="email" placeholder={user.email} />
                </div>
                <div className="islot">
                  <p className="text-[14px] font-semibold">Phone number</p>
                  <input required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="rounded-md py-3 px-4 bg-[#ebebeb]" type="text" placeholder={user.phoneNumber && user.phoneNumber} />
                </div>
                <div className="islot">
                  <p className="text-[14px] font-semibold">Home Address</p>
                  <input required value={houseAddress} onChange={e => setHouseAddress(e.target.value)} className="rounded-md py-3 px-4 bg-[#ebebeb]" type="text" placeholder={user.houseAddress && user.houseAddress} />
                </div>
                <div className="flex mt-4">
                  <button
                    className="rounded-[6px] hoverr bg-[#F56725] text-[#1b1a1f] w-full py-4 px-8 font-bold"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "loading..." : "Update"}
                  </button>
                </div>
              </div>
            </div>
          </form>

        </section>
      </main>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
