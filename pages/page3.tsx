import Head from "next/head";
import ProgressNav from "../components/ProgressNav";
import Heading from "../components/Heading";
import progress3 from '../public/progress3.png';
import calls from '../public/page3/calls.svg'
import email from '../public/page3/email.svg'
import textMessage from '../public/page3/text-message.svg'
import online from '../public/page3/online.svg'
import inPerson from '../public/page3/in-person.svg'
import chatbot from '../public/page3/chatbot.svg'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function page3() {
  //useState
    const [type, setType] = useState('Calls')
    const [schedule, setSchedule] = useState('')
    //handleSchdedule
    const handleSchedule = value => {
      setSchedule(value)
    }
    //handleClick
    const handleClick = (card) => {
        setType(card)
    }

    const quotingMethodList = [
      {
        src: calls,
        name: "Calls",
      },
      {
        src: online,
        name: "Online",
      },
      {
        src: inPerson,
        name: "In -person",
      },
      {
        src: email,
        name: "E-mail",
      },
      {
        src: textMessage,
        name: "Text Message",
      },
      {
        src: chatbot,
        name: "Chatbot",
      },
    ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

        <ProgressNav progress={progress3} alt={'progress3'}/>

      <section className="my-10 text-white flex flex-col">
        <Heading />

        <p className="text-center font-bold my-8 mx-auto w-[470px]">Preferred Quoting Method</p>

        {/* Preferred Quoting Types */}
        <div className="flex gap-5 flex-wrap justify-center m-auto" style={{minWidth: '300px', maxWidth: '636.14px'}}>
          {
            quotingMethodList.map(list => {
              return(
                <div key={list.name} className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer bg-[#181818] hover:bg-[#954DEE] duration-300 ease-in-out" style={{background: `${type === list.name ? 'linear-gradient(#954DEE, #5D05CB)' : ''}`}}  onClick={() => handleClick(list.name)}>
                  <Image
                    src={list.src}
                    alt="pet insurance icon"
                    width="100px"
                  />
                  <p>{list.name}</p>
                </div>
              )
            })
          }
        </div>

        {/* contact */}
        <div >
            <p className="my-8">Would you preferred to be contacted?</p>
            <div className="flex gap-5 justify-center mt-[20px]">
                <button
                  onClick={() => handleSchedule('n')}
                  className={`${schedule === 'n' ? "bg-[#E5AD3E]" : ""} hover:bg-[#E5AD3E] duration-300 ease-in-out w-[190px] h-[64.42px] rounded-lg border`}>Now</button>
                <button 
                  onClick={()=> handleSchedule('y')}
                  className={`${schedule === 'y' ? "bg-[#1DCD6D]" : ""} hover:bg-[#1DCD6D] duration-300 ease-in-out w-[190px] h-[64.42px] rounded-lg border`}>Schedule quote</button>
            </div>
        </div>

        {/* next button */}
        <Link href="/signup">
          <button className="bg-[#9750EF] hover:bg-[#cda7fc] duration-300 ease-in-out h-16 w-[465px] mt-20 rounded font-bold mx-auto">
            Submit
          </button>
      </Link>
       </section>
      </main>
    </div>
  );
}

export default page3;
