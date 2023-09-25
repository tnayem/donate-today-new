import React, { useEffect, useState } from 'react';
import Donate from '../Donate/Donate';
import { useNavigate } from 'react-router-dom';

const Donates = () => {
    const navigate = useNavigate()
    const [donates,setDonetes] = useState([])
    useEffect(()=>{
        fetch('../../../public/donetsInfo.json')
        .then(res=>res.json())
        .then(data=>setDonetes(data))
    },[])
    const handleDonationDetails = (id)=>{
        console.log(id);
        navigate(`/donationDetails/${id}`)
    }
    return (
        <div className='my-6 grid-cols-1 grid md:grid-cols-4 gap-6'>
            {
                donates.map(donate=><Donate
                key={donate.id}
                donate={donate}
                handleDonationDetails={handleDonationDetails}
                ></Donate>)
            }
        </div>
    );
};

export default Donates;