import Head from "next/head";
import Image from "next/image";
import homeOwners from '../public/page2/home-owners.svg';
import condoInsurance from '../public/page2/buildings-2.svg';
import rentersInsurance from '../public/page2/user-edit.svg';
import lifeInsurance from '../public/page2/life.svg' 
import autoInsurance from '../public/page2/auto.svg' 
import atvInsurance from '../public/page2/atv.svg' 
import boatInsurance from '../public/page2/boat.svg' 
import petInsurance from '../public/page2/pet.svg' 
import motorcycleInsurance from '../public/page2/motorcycle.svg' 

import ProgressNav from "../components/ProgressNav";
import Heading from "../components/Heading";
import progress2 from '../public/progress2.png';
import Link from "next/link";
import { useState } from "react";

function page2() {
    const [type, setType] = useState('HomeOwners')
    const handleClick = (card) => {
        setType(card)
    }

    const insuranceList = [
      {
        src: homeOwners,
        name: "HomeOwners"
      },
      {
        src: condoInsurance,
        name: "Condo"
      },
      {
        src: rentersInsurance,
        name: "Renters"
      },
      {
        src: autoInsurance,
        name: "Auto"
      },
      {
        src: motorcycleInsurance,
        name: "Motocycle"
      },
      {
        src: lifeInsurance,
        name: "Life"
      },
      {
        src: atvInsurance,
        name: "Atv"
      },
      {
        src: boatInsurance,
        name: "Boat"
      },
      {
        src: petInsurance,
        name: "Pet"
      },
    ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

        <ProgressNav progress={progress2} alt={'progress2'}/>

        <section className="my-10 text-white flex flex-col">
        <Heading />

        <p className="text-center font-bold my-8 mx-auto w-[470px]">Select Insurance Type</p>

        {/* Insurance Types */}
        <div className="flex gap-5 flex-wrap justify-center m-auto w-max-[]" style={{minWidth: '300px', maxWidth: '636.14px'}}>
          {
            insuranceList.map(list => {
              return(
                <div key={list.name} className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer bg-[#181818] hover:bg-[#954DEE] duration-300 ease-in-out" style={{background: `${type === list.name ? 'linear-gradient(#954DEE, #5D05CB)' : ''}`}}  onClick={() => handleClick(list.name)}>
                  <Image
                    src={list.src}
                    alt="pet insurance icon"
                    width="100px"
                  />
                  <p>{list.name} <br/>Insurance</p>
                </div>
              )
            })
          }
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
