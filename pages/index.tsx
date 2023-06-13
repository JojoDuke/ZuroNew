import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import closeIcon from '../public/close.png';
import zuroLogo from '../public/zuro_logo.png';
import progress1 from '../public/progress1.png';
import user from '../public/user.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Link from 'next/link';

const Home: NextPage = () => {
  const [checkedButton, setCheckedButton] = useState('');
  const [checkedButton2, setCheckedButton2] = useState('');

  const handleButtonClick = (button) => {
    setCheckedButton(button);
  }

  const handleButtonClick2 = (button) => {
    setCheckedButton2(button);
  };
  
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
      <Image
        src={progress1}
        alt="progress1"
        width="238px"
        height="19px"
    />
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

         {/* Main Form */}
        <Formik 
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              location: '',
            }}
            onSubmit={(values) => {
              alert(values)
            }}
          >
          <Form>
            {/* Fullname field */}
            <div className="flex flex-col mt-4 w-[470px] mx-auto">
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="bg-[#181818] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white"
                placeholder="Enter full name"
              />
              
              <ErrorMessage name="fullName" component="div" className="text-red-500" />
            </div>

            {/* Email field */}
            <div className="flex flex-col mt-4 w-[470px] mx-auto">
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-[#181818] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white"
                placeholder="Enter email address"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            {/* Phone number field */}
            <div className="flex flex-col mt-4 w-[470px] mx-auto">
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="bg-[#181818] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white"
                placeholder="Enter phone number"
              />
              <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
            </div>
            {/* Location field */}
            <div className="flex flex-col mt-4 w-[470px] mx-auto">
              <Field
                type="text"
                id="location"
                name="location"
                className="bg-[#181818] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white"
                placeholder="Location"
              />
              <ErrorMessage name="Location" component="div" className="text-red-500" />
            </div>
          </Form>
        </Formik>
         

         {/* current provider ask */}
         <p className="text-left font-bold mt-16 mx-auto w-[470px]">Do you have a current provider</p>
         <div className="flex flex-row gap-5 justify-left items-center w-[470px] mx-auto mt-3">
           <button 
             className={`${
            checkedButton === 'yes' ? 'bg-[#1DCD6D]' : 'bg-transparent'
          } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
          onClick={() => handleButtonClick('yes')}
             >Yes
           </button>
           <button
          className={`${
            checkedButton === 'no' ? 'bg-[#1DCD6D]' : 'bg-transparent'
          } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
          onClick={() => handleButtonClick('no')}
        >
          No
        </button>
         </div>

         {/* select provider ask */}
         {checkedButton === 'yes' && (
         <div>
          <p className="text-left font-bold mt-16 mx-auto w-[470px]">Select provider</p>

             <div className="flex flex-row gap-5 justify-left items-center w-[470px] mx-auto mt-3">
             <button 
             className={`${
            checkedButton2 === 'y' ? 'bg-[#1DCD6D]' : 'bg-transparent'
          } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
          onClick={() => handleButtonClick2('y')}
             >Select Provider
           </button>
               {/* Enter Manually Btn */}
             <button 
             className={`${
            checkedButton2 === 'n' ? 'bg-[#1DCD6D]' : 'bg-transparent'
          } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
          onClick={() => handleButtonClick2('n')}
             >Enter Manually
           </button>
           </div>
           <Formik>
            <Form>
              {/* FieldOne */}
              <div className="flex flex-col mt-20 w-[470px] mx-auto">
                <Field
                  type="text"
                  id="selectProvider"
                  name="selectProvider"
                  className="bg-[#181818] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white"
                  placeholder="Select Provider"
                />
                
                <ErrorMessage name="selectProvider" component="div" className="text-red-500" />
              </div>
            </Form>
           </Formik>
         </div>
         )}
         <Link href="/page2">
        <a>
          <button className="bg-[#9750EF] hover:bg-[#cda7fc] duration-300 ease-in-out h-16 w-[465px] mt-20 rounded font-bold mx-auto">
            Next
          </button>
        </a>
      </Link>
       </section>
      </main>
    </div>
  )
}

export default Home