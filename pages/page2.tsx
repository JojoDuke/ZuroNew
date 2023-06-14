import Head from "next/head";
import Image from "next/image";
import homeOwners from '../public/page2/home-owners.svg';
import condoInsurance from '../public/page2/buildings-2.svg';
import rentersInsurance from '../public/page2/user-edit.svg';

import ProgressNav from "../components/ProgressNav";
import Heading from "../components/Heading";
import progress1 from '../public/progress1.png';
import InsuranceType from '../components/Insurance'
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
            <Image
              src={homeOwners}
              alt="home owners icon"
              width="100px"
            />
            <p>Homeowners Insurance</p>
          </div>
          <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'condo' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}} onClick={() => handleClick('condo')}>
            <Image
              src={condoInsurance}
              alt="condo insurance icon"
              width="100px"
            />
            <p>Condo <br/>Insurance</p>
          </div>
          <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'rent' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('rent')}>
            <Image
              src={rentersInsurance}
              alt="renters insurance icon"
              width="100px"
            />
            <p>Renters <br/>Insurance</p>
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
