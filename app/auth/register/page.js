"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

// IMAGE IMPORTATION
import logo from "@/public/Images/png/Logo.jpg";
import onboard from "@/public/Images/png/onboard.png";

export default function LOGIN() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      router.push("/dashboard");
    }
  }, [router]);

  const registerHandler = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setTimeout(() => {
        setPassword("");
        setConfirmPassword("");
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE  + "/api/auth/register",
        { username, email, password },
        config
      );

      setSuccess(data.message);

      setTimeout(() => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        router.push("/dashboard");
      }, 5000);
    } catch (error) {
      setError(error.response.data.message || error.response.data.error || error.message);
      setIsSubmitting(false);
      setTimeout(() => {
        // setPassword("");
        // setConfirmPassword("");
        router.push("/auth/register");
      }, 5000);
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
      <section className="lg:pt-[92px] pt-[82px] px-6 bg-[#1b1a1f] relative w-full flex justify-center items-center">
        <form
          onSubmit={registerHandler}
          className="py-14 lg:py-20 flex gap-8 justify-center items-center w-full"
        >
          {/* LEFT OF THE FORM */}
          <div className="flex flex-col w-full max-w-[360px] lg:max-w-[380px]">
            {/* Register */}
            <h6 className="text-[24px] font-bold mb-8 text-[#f2f2f2]">Register</h6>
            {/* INPUT FIELDS + CTA */}
            <div className="flex flex-col gap-4 pb-3">
              <div className="islot">
                <label>Full name</label>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="islot">
                <label>Email</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="email"
                  placeholder="titan@example.com"
                />
              </div>
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
                  {isSubmitting ? "loading..." : "Login"}
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-[#c4c4c4]">
              <span>By signing up you agree to our </span>
              <Link className="underline" href="#">
                Terms and Conditions
              </Link>
            </div>
            {/*  */}
            <div className="pt-10 text-[#f2f2f2]">
              <span>Already have an account? </span>
              <Link className="underline" href="/auth/login">
                Login
              </Link>
            </div>
          </div>

          {/* RIGHT OF THE FORM */}
          <div className="shrink-0 hidden lg:block max-w-[567px] w-full h-auto">
            <Image
              quality={100}
              className="w-full h-auto"
              src={onboard}
              alt="Register"
            />
          </div>
        </form>
      </section>
    </>
  );
}
