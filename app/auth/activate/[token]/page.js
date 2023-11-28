"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";
import jwt from "jsonwebtoken";

// IMAGE IMPORTATION
import logo from "@/public/Images/png/Logo.jpg";
import onboard from "@/public/Images/png/onboard.png";
import { useState, useEffect } from "react";

export default function LOGIN() {

  const params = useParams()
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      window.location.replace("/dashboard");
    }
  }, []);

  const [success, setSuccess] = useState("");
  const [error, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    token: "",
    show: true,
  });


  useEffect(() => {
    let token = params.token;
    if (token) {
      let decodedToken = jwt.decode(token);
      let email = decodedToken.email;
      if (email) {
        setFormData({ ...formData, email, token });
      }
      console.log(token, email);
    }
  }, []);

  const { email, token, show } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE + "/api/auth/activation",
        { token },
        config
      );

      localStorage.setItem("authToken", data.Token);
      localStorage.setItem("authUser", JSON.stringify(data.user));

      setFormData({
        ...formData,
        show: false,
      });

      setSuccess(
        "You have successfully been verified and registered with us! You're being redirected to your dashboard"
      );

      setTimeout(() => {
        setSuccess("");
        router.push("/auth/login");
      }, 5000);

    } catch (error) {
      setErrors(error.response.data.message || error.response.data.error || error.message);
      setIsSubmitting(false);
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
        <form onSubmit={handleSubmit} className="py-20 flex gap-8 justify-center items-center w-full">
          {/* LEFT OF THE FORM */}
          <div className="flex flex-col w-full max-w-[360px]">
            {/* LOGIN */}
            <h6 className="text-[24px] text-[#f2f2f2] font-bold mb-4 py-0 leading-[119.2%]">Verify your email</h6>

            {/* INPUT FIELDS + CTA */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#c4c4c4] leading-[180%]">
                  Dear <span className="underline text-[#f2f2f2]">{email}</span>, please click on verify email for your
                  account confirmation and setup. Once clicked you’ll be
                  redirected to your dashboard.
                </p>
              </div>
              <div className="flex mt-2">
                <button
                  className="rounded-[6px] hoverr bg-[#F56725] w-full py-4 px-8 font-bold"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "loading..." : "Proceed"}
                </button>
              </div>
              <div className="text-sm pt-2 lg:pt-3 text-[#f2f2f2]">After verification if you&apos;re not redirected, <Link className="underline" href="/auth/login">Login</Link></div>

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
