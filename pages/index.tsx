import Head from 'next/head';
import Image from "next/image"
import Link from 'next/link';
import type { NextPage } from 'next';
import { useState } from 'react';

import progress1 from '../public/progress1.png';
import userImg from '../public/user.png';
import emailImg from '../public/envelope.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Heading from '../components/Heading';
import ProgressNav from '../components/ProgressNav';

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
    <div className="flex min-h-screen flex-col items-center justify-center">

      <Head>
        <title>Zuro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

        <ProgressNav progress={progress1} alt={'progress1'} />

        <section className="my-10 text-white flex flex-col">
          <Heading />

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
              <div className="mt-4 mx-auto w-[470px]">

                <div className="flex">
                  <div className="w-10 h-10 absolute z-10 ml-1 mt-3">
                    <Image src={userImg} alt="User" className="h-6 w-6" />
                  </div>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="bg-[#181818] w-[470px] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white placeholder-opacity-75 relative pl-12"
                    placeholder="Enter full name"
                  />
                </div>

                <ErrorMessage name="fullName" component="div" className="text-red-500" />
              </div>



              {/* Email field */}
              <div className="mt-4 mx-auto w-[470px]">

                <div className="flex">
                  <div className="w-10 h-10 absolute z-10 ml-1 mt-3">
                    <Image src={emailImg} alt="User" className="h-6 w-6" />
                  </div>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="bg-[#181818] w-[470px] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white placeholder-opacity-75 relative pl-12"
                    placeholder="Enter email address"
                  />
                </div>

                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>


              {/* Phone number field */}
              <div className="mt-4 mx-auto w-[470px]">

                <div className="flex">
                  <div className="w-10 h-10 absolute z-10 ml-1 mt-3">
                    <Image src={userImg} alt="User" className="h-6 w-6" />
                  </div>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="bg-[#181818] w-[470px] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white placeholder-opacity-75 relative pl-12"
                    placeholder="Enter phone number"
                  />
                </div>

                <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
              </div>

              {/* Phone number field */}
              <div className="mt-4 mx-auto w-[470px]">

                <div className="flex">
                  <div className="w-10 h-10 absolute z-10 ml-1 mt-3">
                    <Image src={userImg} alt="User" className="h-6 w-6" />
                  </div>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className="bg-[#181818] w-[470px] border-2 border-[#4A4754] p-4 rounded-md text-white placeholder-white placeholder-opacity-75 relative pl-12"
                    placeholder="Location"
                  />
                </div>

                <ErrorMessage name="Location" component="div" className="text-red-500" />
              </div>
            </Form>
          </Formik>


          {/* current provider ask */}
          <p className="text-left font-bold mt-16 mx-auto w-[470px]">Do you have a current provider</p>
          <div className="flex flex-row gap-5 justify-left items-center w-[470px] mx-auto mt-3">
            <button
              className={`${checkedButton === 'yes' ? 'bg-[#1DCD6D]' : 'bg-transparent'
                } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
              onClick={() => handleButtonClick('yes')}
            >Yes
            </button>
            <button
              className={`${checkedButton === 'no' ? 'bg-[#1DCD6D]' : 'bg-transparent'
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
                  className={`${checkedButton2 === 'y' ? 'bg-[#1DCD6D]' : 'bg-transparent'
                    } w-56 h-16 rounded font-bold border border-grey-200 outline-grey-200`}
                  onClick={() => handleButtonClick2('y')}
                >Select Provider
                </button>
                {/* Enter Manually Btn */}
                <button
                  className={`${checkedButton2 === 'n' ? 'bg-[#1DCD6D]' : 'bg-transparent'
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