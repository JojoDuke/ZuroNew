import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import progress2 from '../public/progress2.png';
import Link from 'next/link';
import Heading from '../components/Heading';
import ProgressNav from '../components/ProgressNav';
import next from '../public/page4/next.svg'
import calender from '../public/page5/calendar-plus.svg'
import crossSvg from '../public/page6/crossSvg.svg'
import edit from '../public/page6/edit.svg'
import bank from '../public/page6/bank.svg'
import clock from '../public/page6/clock.svg'
import coverageSvg from '../public/page6/coverageSvg.svg'
import markSvg from '../public/page6/markSvg.svg'
import ganttChart from '../public/page6/gantt-chart.svg'
const Page6 = () => {
    const [insurance, setinsurance] = useState('')
    const [accidents, setaccidents] = useState(false)
    const [health, sethealth] = useState(false)

    //handleInsurance
    const handleInsurance = (value) => {
        setinsurance(value)
    }
    //handleAccidents
    const handleAccidents = (value) => {
        setaccidents(value)
    }
    //handleHealth
    const handleHealth = (value) => {
        sethealth(value)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
            <title>Zuro</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

            <ProgressNav progress={progress2} alt={'progress2'}/>

        <section className="my-10 text-white">
            <Heading />

            <div className='w-[460px] text-left mt-10 flex flex-col mx-auto'>
                <h3 className=''>Coverage Needs</h3>

                <select name="" id="" className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none cursor-pointer'>
                    <option value="">Type of Insurance</option>
                </select>

                {/* amount of coverage needed */}
                <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3">
                    <label htmlFor="coverage">
                        <Image src={coverageSvg} />
                    </label>
                    <input 
                        type="text"
                        id='coverage'
                        placeholder='Amount of coverage needed'
                        className='w-[100%] p-3 bg-transparent outline-none'
                    />
                </div>
                {/* deductible preference */}
                <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3 my-5">
                    <label htmlFor="preference">
                        <Image src={ganttChart} />
                    </label>
                    <input 
                        type="text" 
                        id="preference" 
                        placeholder='Deductible Preference'
                        className='w-[100%] p-3 bg-transparent outline-none'
                    />
                </div>

                <>
                {/* >>>>>>> insurance <<<<<<< */}
                    <h3>Do you currently have insurance?</h3>
                    <div className='flex gap-3 my-5'>
                        <button 
                            onClick={()=>handleInsurance('y')}
                            className={`${insurance === 'y'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                            <Image src={markSvg} />
                            Yes
                        </button>
                        <button 
                            onClick={()=>handleInsurance('n')}
                            className={`${insurance === 'n'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                            <Image src={crossSvg} />
                            No
                        </button>
                    </div>

                    {
                        insurance === 'y' &&
                        <>
                        <h3>If yes, with which company</h3>
                        {/* company name */}
                        <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3 mt-5">
                            <label htmlFor="companyName">
                                <Image src={bank} />
                            </label>
                            <input 
                                type="text"
                                id='companyName'
                                placeholder='Enter company name'
                                className='w-[100%] p-3 bg-transparent outline-none'
                                />
                        </div>
                        {/* insurance duration */}
                        <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3 my-5">
                            <label htmlFor="duration">
                                <Image src={clock} />
                            </label>
                            <input 
                                type="text" 
                                id="duration" 
                                placeholder='How long have you been insured'
                                className='w-[100%] p-3 bg-transparent outline-none'
                                />
                        </div>
                        </>
                    }
                </>

                <>
                {/* >>>>>>> driving / health record <<<<<<<< */}
                    <h3>Driving / Health Record</h3>
                    <div className="mt-5">
                        {/* accidents or tickets */}
                        <h3>Have you had any recent accidents or tickets?</h3>
                        <div className='flex gap-3 my-5'>
                            <button 
                                onClick={()=>handleAccidents('y')}
                                className={`${accidents === 'y'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                                <Image src={markSvg} />
                                Yes
                            </button>
                            <button 
                                onClick={()=>handleAccidents('n')}
                                className={`${accidents === 'n'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                                <Image src={crossSvg} />
                                No
                            </button>
                        </div>

                        {
                            accidents === 'y' &&
                            <>
                            <h3>If yes, please describe</h3>
                            {/* describe */}
                            <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3 my-5">
                                <label htmlFor="accident">
                                    <Image src={edit} />
                                </label>
                                <input 
                                    type="text" 
                                    id="accident" 
                                    placeholder='Enter description'
                                    className='w-[100%] p-3 bg-transparent outline-none'
                                />
                            </div>
                            </>
                        }
                    </div>
                </>

                <>
                {/* >>>>>>>>> health concerns <<<<<<<<<< */}
                    <h3>Do you have any health concerns?</h3>
                    <div className='flex gap-3 my-5'>
                        <button 
                            onClick={()=>handleHealth('y')}
                            className={`${health === 'y'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                            <Image src={markSvg} />
                            Yes
                        </button>
                        <button 
                            onClick={()=>handleHealth('n')}
                            className={`${health === 'n'? 'bg-[#1DCD6D]' : ''} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] border rounded w-[180px] flex justify-center items-center gap-3`}>
                            <Image src={crossSvg} />
                            No
                        </button>
                    </div>

                    {
                        health === 'y' &&
                        <>
                        <h3>If yes, please describe</h3>
                        {/* describe */}
                        <div className="w-[80%] flex border rounded gap-3 justify-center items-center pl-3 mt-5">
                            <label htmlFor="health">
                                <Image src={edit} />
                            </label>
                            <input 
                                type="text" 
                                id="health" 
                                placeholder='Enter description'
                                className='w-[100%] p-3 bg-transparent outline-none'
                            />
                        </div>
                    </>
                    }
                </>

                {/* >>>>> submit <<<<<< */}
                <Link href="/page6">
                    <button className="bg-[#9750EF] hover:bg-[#cda7fc] duration-300 ease-in-out h-16 w-[80%] mt-20 rounded font-bold flex items-center justify-center">
                        Next
                        <Image src={next} />
                    </button>
                </Link>
            </div>


        </section>
        </main>
        </div>
    )
}

export default Page6