import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Block } from 'baseui/block';
import Container from '../components/UiElements/Container/Container';

function getData() {
  return document.getElementById('username').value;
}

function getData2() {
  return document.getElementById('username').value;
}

const Login = () => {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);
  const [userType, setUserType] = useState('workshop');
  const [isSignUp, setIsSignUp] = useState(false); 

  useEffect(() => {
    setUserType(router.query.type);
  }, [router.query.type]);

  const handleSignUpToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isSignUp) {
      const userData = { username, password };
      
      const response = await fetch('https://MongooseAPI.erenyea.repl.co/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (result.success) {
        console.log('User created successfully:', result.data);
        setIsSignUp(!isSignUp);
        alert('User created successfully!');
      } else {
        console.log('User creation failed:', result.message);
        alert('User creation failed: ' + result.message);
      }
      
    } else {
      // Handle login logic
      try {
        const response = await fetch(`https://MongooseAPI.erenyea.repl.co/getUser?username=${username}&password=${password}&type=${userType}`);
        const result = await response.json();

        if (result.data.length > 0) {

          document.cookie = "sessionToken=mySessionTokenValue; path=/";

          if (userType === 'oem') {
            router.push('/oem')
          } else if (userType === 'retailer') {
            router.push('/retailer')
          } else if (userType === 'workshop') {
            router.push('/')
          }

        } else {
          alert('Invalid Username or password');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };
    
  return (
    <>
      <Head>
        <title>Login | Portal</title>
        <meta name="Description" content="Login page" />
      </Head>

      <Container key={isSignUp}>
        <Block>
          <div className="mx-auto mt-16 bg-[#FFFFFF]">
            <div className="flex flex-col items-center justify-center max-w-screen h-1/2">
              <div className="p-3 lg:mt-12 bg-[#f6f6f6] border-b-2 w-full lg:w-5/6 items-center justify-center flex flex-col border-2 EmailPasswordborder-[#000000] rounded-xl">
                
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-5 items-center justify-center">
                  <li className='w-full'>
                    <a
                      href='?type=workshop'
                      className={` ${
                        userType === 'workshop'
                          ? 'bg-[#000000] text-white'
                          : 'bg-gray-400 font-black'
                      } inline-block w-full text-center px-4 py-2 text-white-600 rounded leading-2 cursor-pointer`}
                    >
                      Workshop
                    </a>
                  </li>
                  <li className='w-full'>
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
                      } inline-block w-full text-center px-4 py-2 text-white-600 rounded leading-2 cursor-pointer`}
                    >
                      Manufacturer/OEMs
                    </a>
                  </li>
                  <li className='w-full'>
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
                      } inline-block w-full text-center px-4 py-2 text-white-600 rounded leading-2 cursor-pointer`}
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

                      <form className="mt-6" onSubmit={handleFormSubmit}>
                        <div className="mb-2">
                          <label htmlFor="username" className="block text-sm leading-3 gap-1 text-black">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="password" className="block text-sm text-black">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-blue-600"
                          >
                            {isSignUp ? 'Sign Up' : 'Login'}
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block w-full' : 'hidden'}>
                  <div className="relative flex flex-col justify-center h-1/2 overflow-hidden  ">
                    <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-[#f6f6f6]">
                      <h1 className="text-4xl font-bold text-center text-black ">
                        Sign in
                      </h1>

                      <form className="mt-6" onSubmit={handleFormSubmit}>
                        <div className="mb-2">
                          <label htmlFor="username" className="block text-sm leading-3 gap-1 text-black">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="password" className="block text-sm text-black">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-blue-600"
                          >
                            {isSignUp ? 'Sign Up' : 'Login'}
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? 'block w-full' : 'hidden'}>
                  <div className="relative flex flex-col justify-center h-1/2 overflow-hidden  ">
                    <div className="w-full p-6 m-auto rounded-md shadow-xl lg:max-w-xl bg-[#f6f6f6]">
                      <h1 className="text-4xl font-bold text-center text-black">
                        Sign in
                      </h1>

                      <form className="mt-6" onSubmit={handleFormSubmit}>
                        <div className="mb-2">
                          <label htmlFor="username" className="block text-sm leading-3 gap-1 text-black">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="password" className="block text-sm text-black">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            required
                          />
                        </div>
                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 ease-in  duration-30  bg-[#000000] tracking-wide text-white font-bold transition-colors0 transform  rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-blue-600"
                          >
                            {isSignUp ? 'Sign Up' : 'Login'}
                          </button>
                        </div>
                      </form>

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
  
  const sessionToken = context.req.headers.cookie?.split(';').find(cookie => cookie.trim().startsWith('sessionToken='));
  const { type } = context.query;

  const redirects = {
    oem: "/oem",
    retailer: "/retailer",
    workshop: "/"
  };

  if (sessionToken) {
    return { redirect: { destination: redirects[type] || "/" } };
  } else {
    return {
      props: {}
    };
  }
}
