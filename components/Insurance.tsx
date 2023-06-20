import Image from 'next/image'
import { useState } from 'react';
import homeOwners from '../public/page2/home-owners.svg';
import condoInsurance from '../public/page2/buildings-2.svg';
import rentersInsurance from '../public/page2/user-edit.svg';
import lifeInsurance from '../public/page2/life.svg' 
import autoInsurance from '../public/page2/auto.svg' 
import atvInsurance from '../public/page2/atv.svg' 
import boatInsurance from '../public/page2/boat.svg' 
import petInsurance from '../public/page2/pet.svg' 
import motorcycleInsurance from '../public/page2/motorcycle.svg' 


const InsuranceType = (props) => {
    //destructring
    const { icon, description, title } = props
    //useState
    const [type, setType] = useState('home')

    //on click event
    const handleClick = (card) => {
        setType(card)
    }
    return(
        <div className="h-40 w-40 rounded-lg flex flex-col justify-center cursor-pointer" style={{background: `${type === title ? 'linear-gradient(#954DEE, #5D05CB)' : '#181818'}`}}  onClick={() => handleClick(title)}>
            <Image
              src={icon}
              alt={description}
              width="100px"
            />
            <p>{title}</p>
        </div>
    )
}

export default InsuranceType