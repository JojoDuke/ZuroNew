import Head from "next/head";
import ProgressNav from "../component/ProgressNav";
import Heading from "../component/Heading";
import progress1 from '../public/progress1.png';
import InsuranceType from '../component/Insurance'
import Link from "next/link";
import { useState } from "react";

function page2() {
    const [type, setType] = useState('home')
    const handleClick = (card) => {
        setType(card)
    }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

        <ProgressNav progress={progress1} alt={'progress2'}/>

       <section className="mt-10 text-white flex flex-col">
        <Heading />

        <p className="text-center font-bold my-8 mx-auto w-[470px]">Select Insurance Type</p>

        {/* Insurance Types */}
        <div className="flex gap-5 flex-wrap justify-center m-auto" style={{minWidth: '300px', maxWidth: '550px'}}>
          <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'home' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('home')}>
            <p>icon</p>
            <p>Homeowners Insurance</p>
          </div>
          <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'condo' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}} onClick={() => handleClick('condo')}>
            <p>icon</p>
            <p>Condo Insurance</p>
          </div>
          <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'rent' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('rent')}>
            <p>icon</p>
            <p>Renters Insurance</p>
          </div>
        </div>

        {/* next button */}
        <Link href="/page3">
          <button className="bg-[#9750EF] hover:bg-[#cda7fc] duration-300 ease-in-out h-16 w-[465px] mt-20 rounded font-bold mx-auto">
            Next
          </button>
      </Link>
       </section>
      </main>
    </div>
  );
}

export default page2;
