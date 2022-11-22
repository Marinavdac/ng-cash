import Head from 'next/head';
import Image from 'next/image';
import NgImage from '../public/ngcard.ced5acb.svg';
import Link from 'next/link';


export default function SignUp() {

  return (
    <div className="h-full">
      <Head>
        <title>Ng-Cash App</title>
        <meta name="sign up page" content="sign up user ng-cash" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex justify-start m-4 gap-44">


          <Image className="" src={NgImage}  alt="Logo NG" />
         
        <form className="flex flex-col gap-3 items-center self-center">
          <h1 className="mb-10 text-black">Register</h1>
          <input
            className="border-2 text-center"
            type="text"
            placeholder="Name"
           
          />
          <input
            className="border-2 text-center"
            type="email"
            placeholder="E-mail"
           
          />
          <input
            className="border-2 text-center"
            type="password"
            placeholder="Password"
           
          />
          <input
            className="border-2 text-center"
            type="password"
            placeholder="Confirm Password"
    
          />

          <button
            className="rounded-full bg-lime-700 hover:bg-lime-500 text-neutral-50	 w-11/12 p-1 mt-8"
            type="submit"
          >
            Create Account
          </button>
          <p>
            Already have an account? <Link href="/" className="text-cyan-600">Sign in</Link>
          </p>
        </form>
      </main>
    </div>
  );
}
