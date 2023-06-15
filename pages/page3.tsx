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
    const [type, setType] = useState('calls')
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

        <ProgressNav progress={progress3} alt={'progress3'}/>

       <section className="mt-10 text-white flex flex-col">
        <Heading />

        <p className="text-center font-bold my-8 mx-auto w-[470px]">Preferred Quoting Method</p>

        {/* Preferred Quoting Types */}
        <div className="flex gap-5 flex-wrap justify-center m-auto" style={{minWidth: '300px', maxWidth: '636.14px'}}>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'calls' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('calls')}>
            <Image
              src={calls}
              alt="calls icon"
              width="100px"
            />
            <p>Calls</p>
          </div>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'online' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('online')}>
            <Image
              src={online}
              alt="online icon"
              width="100px"
            />
            <p>Online</p>
          </div>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'in-person' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('in-person')}>
            <Image
              src={inPerson}
              alt="in-person icon"
              width="100px"
            />
            <p>In-person</p>
          </div>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'email' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('email')}>
            <Image
              src={email}
              alt="email icon"
              width="100px"
            />
            <p>E-mail</p>
          </div>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'text-message' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('text-message')}>
            <Image
              src={textMessage}
              alt="text message icon"
              width="100px"
            />
            <p>Text Message</p>
          </div>
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === 'chatbot' ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick('chatbot')}>
            <Image
              src={chatbot}
              alt="chatbot icon"
              width="100px"
            />
            <p>Chatbot</p>
          </div>
          
        </div>

        {/* contact */}
        <div >
            <p className="my-8">Would you preferred to be contacted?</p>
            <div className="flex gap-5 justify-center mt-[20px]">
                <button className="bg-[#E5AD3E] w-[190px] h-[64.42px] rounded-lg">Now</button>
                <button className="bg-[#1DCD6D] w-[190px] h-[64.42px] rounded-lg">Schedule quote</button>
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
