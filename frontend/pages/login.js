import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Block } from 'baseui/block';
import Container from '../components/UiElements/Container/Container';
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]";

function getData() {
  return document.getElementById('emailBrand').value;
}

function getData2() {
  return document.getElementById('emailBrand2').value;
}

const Login = ({ providers }) => {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);
  const [userType, setUserType] = useState('workshop');
  const [isSignUp, setIsSignUp] = useState(false); 

  useEffect(() => {
    setUserType(router.query.type);
  }, [router.query.type]);

  const handleTabClick = (tabIndex) => {
    setOpenTab(tabIndex);
    setIsSignUp(false); // Reset to login mode when switching tabs
  };

  const handleSignUpToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement your login or signup logic here based on userType and isSignUp
    if (isSignUp) {
      // Handle signup logic
    } else {
      // Handle login logic
    }
  };

  return (
    <>
      <Head>
        <title>Login | Portal</title>
        <meta name="Description" content="Login page" />
      </Head>

      <Container>
        <Block>
          <div className="mx-auto mt-16 bg-[#FFFFFF]">
            <div className="flex flex-col items-center justify-center max-w-screen">
              <div className="p-3 mt-12 bg-[#f6f6f6] border-b-2 w-5/6 items-center justify-center flex flex-col border-2 border-[#000000] rounded-xl">
                <ul className="flex space-x-2 mt-5">
                  <li>
                    <a
                      href='?type=workshop'
                      
                      className={` ${
                        userType === 'workshop'
                          ? 'bg-[#000000] text-white'
                          : 'bg-gray-400 font-black'
                      } inline-block  px-4 py-2 text-white-600 rounded leading-2 cursor-pointer`}
                    >
                      Workshop
                    </a>
                  </li>
                  <li>
                    <a
                      href='?type=oem'
                      onClick={() => {
                        sessionStorage.setItem('user', '1');
                        sessionStorage.setItem('emailType', `${getData()}`);
                      }}
                      className={` ${
                        userType === 'oem'
                          ? 'bg-[#000000] text-white'
                          : 'bg-gray-400 font-black'
                      } inline-block px-4 py-2  text-white-600  rounded leading-2 cursor-pointer`}
                    >
                      Manufacturer/OEMs
                    </a>
                  </li>
                  <li>
                    <a
                      href='?type=retailer'
                      onClick={() => {
                        sessionStorage.setItem('user', '1');
                        sessionStorage.setItem('emailType', `${getData2()}`);
                      }}
                      className={` ${
                        userType === 'retailer'
                          ? 'bg-[#000000] text-white'
                          : 'bg-gray-400 font-black'
                      } inline-block px-4 py-2  text-white-600  rounded leading-2 cursor-pointer`}
                    >
                      Retailer/Dealership
                    </a>
                  </li>
                </ul>
                <div className={openTab === 1 ? 'block w-full' : 'hidden'}>
                  <div className="relative flex flex-col justify-center h-1/2 overflow-hidden">
                    <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-[#f6f6f6]">
                      <h1 className="text-4xl font-bold text-center text-black ">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                      </h1>

                      <form className="mt-6">
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="block text-sm  text-black leading-3 gap-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="password"
                            className="block text-sm  text-black"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <a
                          href="#"
                          className="text-xs text-black hover:underline"
                        >
                          Forget Password?
                        </a>
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              sessionStorage.setItem('user', '1');
                              router.push('/');
                            }}
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-blue-600"
                          >
                            {isSignUp ? 'Sign Up' : 'Login'}
                          </button>
                        </div>
                      </form>
                      <div className="relative flex items-center justify-center w-full mt-6 border">
                        <div className="absolute px-5 bg-[#000000] text-white  w-fit rounded-xl">
                          Or
                        </div>
                      </div>
                      <div className="flex mt-4 gap-x-2 w-full">
                        <button
                          onClick={() => signIn(providers.google.id)}
                          type="button"
                          className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                          </svg>
                        </button>
                      </div>

                      <p className="mt-8 text-xs font-light text-center">
                        {' '}
                        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
                        <p
                          onClick={handleSignUpToggle}
                          className="font-medium text-originalColor hover:underline cursor-pointer"
                        >
                          {isSignUp ? 'Login' : 'Sign Up'}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block w-full' : 'hidden'}>
                  <div className="relative flex flex-col justify-center h-1/2 overflow-hidden  ">
                    <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-[#f6f6f6]">
                      <h1 className="text-4xl font-bold text-center text-black ">
                        Sign in
                      </h1>

                      <form
                        className="mt-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          sessionStorage.setItem('user', '1');
                          sessionStorage.setItem('emailType', `${getData()}`);
                          router.push('/oem');
                        }}
                      >
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="block text-sm  leading-3 gap-1 text-black"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="emailBrand"
                            className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="password"
                            className="block text-sm  text-black"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <a
                          href="#"
                          className="text-xs text-black hover:underline"
                        >
                          Forget Password?
                        </a>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-non"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="relative flex items-center justify-center w-full mt-6 border">
                        <div className="absolute px-5 bg-[#000000] text-white  w-fit rounded-xl">
                          Or
                        </div>
                      </div>
                      <div className="flex mt-4 gap-x-2 w-full">
                        <button
                          onClick={() => signIn(providers.google.id)}
                          type="button"
                          className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                          </svg>
                        </button>
                      </div>

                      <p className="mt-8 text-xs font-light text-center">
                        {' '}
                        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
                        <p
                          onClick={handleSignUpToggle}
                          className="font-medium text-originalColor hover:underline cursor-pointer"
                        >
                          {isSignUp ? 'Login' : 'Sign Up'}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? 'block w-full' : 'hidden'}>
                  <div className="relative flex flex-col justify-center h-1/2 overflow-hidden  ">
                    <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-[#f6f6f6]">
                      <h1 className="text-4xl font-bold text-center text-black">
                        Sign in
                      </h1>

                      <form
                        className="mt-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          sessionStorage.setItem('user', '1');
                          sessionStorage.setItem('emailType', `${getData2()}`);
                          router.push('/retailer');
                        }}
                      >
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="block text-sm  text-black leading-3 gap-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="emailBrand2"
                            className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="password"
                            className="block text-sm  text-black"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <a
                          href="#"
                          className="text-xs text-black hover:underline"
                        >
                          Forget Password?
                        </a>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-non"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="relative flex items-center justify-center w-full mt-6 border">
                        <div className="absolute px-5 bg-[#000000] text-white  w-fit rounded-xl">
                          Or
                        </div>
                      </div>
                      <div className="flex mt-4 gap-x-2 w-full">
                        <button
                          onClick={() => signIn(providers.google.id)}
                          type="button"
                          className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                          </svg>
                        </button>
                      </div>

                      <p className="mt-8 text-xs font-light text-center">
                        {' '}
                        {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}{' '}
                        <p
                          onClick={handleSignUpToggle}
                          className="font-medium text-originalColor hover:underline cursor-pointer"
                        >
                          {isSignUp ? 'Login' : 'Sign Up'}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Block>
      </Container>
    </>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  
  const { type } = context.query;

  if (session) {
    if (type === 'oem') {
      return { redirect: { destination: "/oem" } };
    } else if (type === 'retailer') {
      return { redirect: { destination: "/retailer" } };
    } else if (type === 'workshop') {
      return { redirect: { destination: "/" } };
    }
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}