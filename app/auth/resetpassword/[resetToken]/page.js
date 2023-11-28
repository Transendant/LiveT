"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import jwt from "jsonwebtoken";

// IMAGE IMPORTATION
import logo from "@/public/Images/png/Logo.jpg";
import onboard from "@/public/Images/png/onboard.png";
import { useState, useEffect } from "react";

export default function LOGIN() {
  let router = useRouter();
  const params = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      window.location.replace("/dashboard");
    }
  }, []);

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setError("Password doesn't match");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      try {
        let token = params.resetToken;

        if (token) {
          const { data } = await axios.put(
            `http://localhost:5000/api/auth/resetpassword/${token}`,
            { password, token },
            config
          );
          setSuccess(data.message);
          setTimeout(() => {
            setSuccess("");
            router.push("/auth/login");
          }, 5000);
        }
      } catch (error) {
        setError(error.response.data.message || error.response.data.error || error.message);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      {error && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Account Setup</h2>
          <p class="text-sm text-left tracking-wider pt-1">{error}</p>
        </div>
      )}
      {success && (
        <div
          id="pop-up"
          style={{ zIndex: 9999, borderTopWidth: "6px" }}
          class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
        >
          <h2 class="font-bold tracking-wider">Account Setup</h2>
          <p class="text-sm text-left tracking-wider pt-1">{success}</p>
        </div>
      )}

      {/* NAVBAR */}
      <div className="bg-[#1b1a1f] z-10 fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-3 py-5 lg:py-6 lg:px-12">
        {/* IMAGE*/}
        <div>
          <Link href="/" className="logo hoverr inline-flex items-center gap-2">
            <Image
              className="shrink-0 max-w-[42px] rounded-full h-auto w-full"
              src={logo}
              alt="Company Logo"
            />
            <p className="font-semibold text-[#f2f2f2]">LiveTraders</p>
          </Link>
        </div>
      </div>

      {/* FORM */}
      <section className="lg:pt-[92px] pt-[82px] lg:h-screen px-6 bg-[#1b1a1f] relative w-full flex justify-center items-center">
        <form onSubmit={resetPasswordHandler} className="py-20 flex gap-8 justify-center items-center w-full">
          {/* LEFT OF THE FORM */}
          <div className="flex flex-col w-full max-w-[360px]">
            {/* LOGIN */}
            <h6 className="text-[24px] font-bold mb-8 text-[#f2f2f2]">Reset Password</h6>
            {/* INPUT FIELDS + CTA */}
            <div className="flex flex-col gap-4 pb-2">
              <div className="islot">
                <label>Password</label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="islot">
                <label>Confirm password</label>
                <input
                  id="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="flex mt-4">
                <button
                  className="rounded-[6px] hoverr bg-[#F56725] w-full py-4 px-8 font-bold"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "loading..." : "Submit"}
                </button>
              </div>
            </div>

            {/*  */}
            <div className="pt-4 text-[#f2f2f2]">
              <span>Don&apos;t have an account? </span>
              <Link className="underline" href="/auth/register">
                Register
              </Link>
            </div>
          </div>

          {/* RIGHT OF THE FORM */}
          <div className="shrink-0 hidden lg:block max-w-[567px] w-full h-auto">
            <Image
              quality={100}
              className="w-full h-auto"
              src={onboard}
              alt="Login"
            />
          </div>
        </form>
      </section>
    </>
  );
}
