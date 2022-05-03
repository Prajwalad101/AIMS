import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import authImg from "../../public/login.png";

export default function SignIn({ providers }) {
  const router = useRouter();

  return (
    <div className="mx-5 sm:mx-auto text-center mt-14 border-[1.5px] px-5 sm:w-[60%] rounded-lg shadow-md">
      <p className="font-ibm text-3xl font-medium mb-3 mt-10">
        Welcome to AIMS
      </p>
      <p className="font-poppins text-gray-500">
        Please select one of the login providers to log into your account
      </p>
      <div className="sm:pr-16">
        <Image
          src={authImg}
          alt="login-image"
          width={400}
          height={300}
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-3 items-center mb-10">
        {Object.values(providers).map((provider) => {
          return (
            <div
              key={provider.name}
              className="flex items-center justify-center w-[250px] sm:w-[260px]"
            >
              <button
                type="button"
                className={`w-full flex gap-3 font-poppins items-center focus:ring-2 focus:outline-none focus:ring-blue-400 font-regular rounded-sm px-5 py-2.5 mb-2 ${
                  provider.id === "facebook"
                    ? "bg-[#4267B2] text-white hover:text-gray-100"
                    : "border-gray-400 border-[1.5px] hover:text-gray-500 "
                }`}
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: router.query.callbackUrl,
                  })
                }
              >
                {provider.id === "google" && <FcGoogle size={25} />}
                {provider.id === "facebook" && <FaFacebookF size={25} />}
                Log in with {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SignIn.auth = false;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
