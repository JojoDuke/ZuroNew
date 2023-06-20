import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import progress2 from '../public/progress2.png';
import Link from 'next/link';
import Heading from '../components/Heading';
import ProgressNav from '../components/ProgressNav';
import next from '../public/page4/next.svg'
import AutoInsurance from '../components/auto-insurance';
import MotocycleInsurance from '../components/motocycle-insurance';
import LifeInsurance from '../components/life-insurance';
import AtvInsurance from '../components/atv-insurance';
import BoatInsurance from '../components/boat-insurance';
import HomeownersInsurance from '../components/homeowners-insurance';
import CondoInsurance from '../components/condo-insurance';
import RentersInsurance from '../components/renters-insurance';
import PetInsurance from '../components/pet-insurance';



const Page4 = () => {
    const [currentValue, setCurrentValue] = useState('')

    // handlechange
    const handleChange = e => {
        setCurrentValue(e.target.value)
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
                <h3 className=''>Insurance type</h3>
                <select name="" id="" value={currentValue} onChange={handleChange} className='w-[80%] px-5 bg-[#181818] h-[60px] rounded-xl my-5 outline-none cursor-pointer'>
                    
                    <option value="">Select Insurance type</option>
                    <option value="Homeowners Insurance">Homeowners Insurance</option>
                    <option value="Condo Insurance">Condo Insurance</option>
                    <option value="Renters Insurance">Renters Insurance</option>
                    <option value="Auto Insurance">Auto Insurance</option>
                    <option value="Motocycle Insurance">Motocycle Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="ATV Insurance">ATV Insurance</option>
                    <option value="Boat Insurance">Boat Insurance</option>
                    <option value="Pet Insurance">Pet Insurance</option>
                </select>

                {
                    //no value selected
                    currentValue === '' &&
                    <p className='text-[#FA8F21]'>** Select Insurance type to see the complete form **</p>
                }

                {
                    //homeowners insurance
                    currentValue.toLowerCase().includes('home') &&
                    <HomeownersInsurance />
                }

                {   
                    //condo insurance
                    currentValue.toLowerCase().includes('condo') &&
                    <CondoInsurance />
                }

                {
                    //renters insurance
                    currentValue.toLowerCase().includes('renters') &&
                    <RentersInsurance />
                }

                {
                    //auto insurance
                    currentValue.toLowerCase().includes('auto') &&
                    <AutoInsurance />
                }
                {
                    //motocycle insurance
                    currentValue.toLowerCase().includes('motocycle') &&
                    <MotocycleInsurance />
                }
                {
                    //life insurance
                    currentValue.toLowerCase().includes('life') &&
                    <LifeInsurance />
                }
                {
                    //atv insurance
                    currentValue.toLowerCase().includes('atv') &&
                    <AtvInsurance />
                }
                {
                    //boat insurance
                    currentValue.toLowerCase().includes('boat') &&
                    <BoatInsurance />
                }

                {
                    //pet insurance
                    currentValue.toLowerCase().includes('pet') &&
                    <PetInsurance />
                }

                <Link href="/page2">
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

export default Page4