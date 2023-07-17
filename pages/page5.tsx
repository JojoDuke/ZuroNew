import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import progress3 from '../public/progress3.png';
import Link from 'next/link';
import Heading from '../components/Heading';
import ProgressNav from '../components/ProgressNav';
import next from '../public/page4/next.svg'
import calender from '../public/page5/calendar-plus.svg'
import tick from '../public/page5/tick-circle.svg'
import complete from '../public/page5/complete.svg'
const Page5 = () => {
    const [currentValue, setCurrentValue] = useState('')
    const [schedule, setSchedule] = useState(false)
    const [active, setActive] = useState(false)
    const [scheduleComplete, setScheduleComplete] = useState(false)
    const [date, setDate] = useState('')
    const [contact, setContact] = useState('')
    // handleSelectchange
    const handleSelectChange = e => {
        setCurrentValue(e.target.value)
    }

    //handleSchedule Quote Btn
    const handleScheduleClick = value => {
        setSchedule(!schedule)
        setScheduleComplete(false)
        setActive(false)
        setContact(value)
    }

    //handleNow Btn
    const handleNowClick = value => {
        setContact(value)
        setSchedule(false)
    }

    //handleSubmit
    const handleSubmit = e => {
        e.preventDefault()
        setScheduleComplete(true)
        setDate(e.target[0].value)
    }

    //handleDateChange
    const handleDateChange = e => {
        if(e.target.value.length){
            return setActive(true)
        }
        return setActive(false)
    }

    const reset = () => {
        setSchedule(false)
        setScheduleComplete(false)
        setActive(false)
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
            <title>Zuro</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full h-full flex-1 flex-col text-center bg-black">

            <ProgressNav progress={progress3} alt={'progress3'}/>

        <section className="my-10 text-white">
            <Heading />

            <div className='w-[460px] text-left mt-10 flex flex-col mx-auto'>
                <h3 className=''>Preferred Quoting Method</h3>
                <select name="" id="" value={currentValue} onChange={handleSelectChange} className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none cursor-pointer'>
                    
                    <option value="">Select contacting method</option>
                    <option value="Calls">Calls</option>
                    <option value="Online">Online</option>
                    <option value="In-person">In-person</option>
                    <option value="E-mail">E-mail</option>
                    <option value="Text message">Text message</option>
                    <option value="Chatbot">Chatbot</option>
                </select>
                
                <h3>When would you preferred t be contacted?</h3>
                {/* now and schedule quote button */}
                <div className='flex gap-3 mt-5'>
                    <button onClick={() => handleNowClick('n')} className={`${contact === 'n' ? "bg-[#E5AD3E]" : ""} hover:bg-[#E5AD3E] duration-300 ease-in-out h-[64px] rounded border w-[180px] flex justify-center items-center gap-3`}>
                        <Image src={tick} />
                        Now
                    </button>
                    <button onClick={()=>handleScheduleClick('y')} className={`${contact === 'y' ? "bg-[#1DCD6D]" : ""} hover:bg-[#1DCD6D] duration-300 ease-in-out h-[64px] rounded border w-[180px] flex justify-center items-center gap-3`}>
                        <Image src={calender} />
                        Schedule quote
                    </button>
                </div>

                {
                    //schedule quote
                    schedule &&

                    <div className='w-[80%] mt-5 bg-[#181818] text-center p-10 rounded-xl'>
                        {
                            !scheduleComplete ?
                            //set schedule
                            <>
                                <h2 className='mb-3 text-[40px]'>Schedule Quote</h2>
                                <p className='text-[14px]'>When would you preferred to be contacted</p>
                                {/* form */}
                                <form onSubmit={handleSubmit} className='mt-10'>
                                    <input 
                                        type="date" 
                                        name="" 
                                        id="date" 
                                        onChange={handleDateChange}
                                        className='text-[20px] text-black w-[100%] rounded h-[50px] p-3 my-5 outline-none '
                                    />
                                    <div className='flex gap-3 justify-center'>
                                        {/* cancel button */}
                                        <button type='reset' onClick={reset} className="hover:bg-[#882020] duration-300 ease-in-out h-[51px] border rounded w-[155px] flex justify-center items-center gap-3">
                                            Cancel
                                        </button>
                                        {/* schedule button */}
                                        <button 
                                            type='submit' 
                                            disabled={!active}
                                            className="disabled:cursor-no-drop hover:bg-[#1DCD6D] duration-300 ease-in-out h-[51px] border rounded w-[155px] flex justify-center items-center gap-3">
                                            Schedule
                                        </button>
                                    </div>
                                </form>
                            </>
                            :
                            //schedule complete
                            <div className='flex flex-col items-center'>
                                <div className='bg-[#1DCD6D] rounded-[50%] h-[170px] w-[170px] flex items-center justify-center mb-5'>
                                    <Image src={complete} />
                                </div>
                                <h2 className='mb-3 text-[35px]'>Quote Scheduled</h2>
                                <p className='text-[14px] mt-5 mb-20'>You have successfully scheduled a quote for <span>{date}</span></p>
                                <button onClick={reset} className="hover:bg-[#882020] duration-300 ease-in-out h-[51px] border rounded w-[100%] flex justify-center items-center gap-3">
                                    Cancel
                                </button>
                            </div>
                        }
                    </div>
                }

                <Link href="/page6">
                    <button className="bg-[#9750EF] hover:bg-[#cda7fc] duration-300 ease-in-out h-16 w-[80%] mt-20 rounded font-bold flex items-center justify-center">
                        Submit
                        <Image src={next} />
                    </button>
                </Link>
            </div>


        </section>
        </main>
        </div>
    )
}

export default Page5