import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import closeIcon from '../public/close.png';
import zuroLogo from '../public/zuro_logo.png'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">
    <nav className="flex flex-row items-center justify-between px-20 pt-5 bg-green">
      <Image
        src={zuroLogo}
        alt="close_icon"
        width="70px"
        height="20px"
    />
      <p className="text-white">Progress</p>
      <Image
        src={closeIcon}
        className="invert cursor-pointer"
        alt="close_icon"
        width="12px"
        height="12px"
    />
    </nav>

       <section className="mt-10 text-white flex flex-col">
  <h1 className="font-bold text-6xl text-center mb-4">Get a Free Quote</h1>
  <h3 className="text-md text-left mx-auto w-[470px]">Fill out the form below to receive a personalized insurance quote tailored to your unique needs and preferences. Our experienced team will review your information and provide you with the best coverage options available.</h3>

        <p className="text-left font-bold mt-3 mx-auto w-[470px]">Personal Information</p>
      </section>

      </main>
    </div>
  )
}

export default Home