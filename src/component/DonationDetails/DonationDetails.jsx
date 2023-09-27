import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { getDonationList, saveDonationList } from '../Utility/Localstorage';

const DonationDetails = () => {
    const donations = useLoaderData()
    const { id } = useParams()
    const idParse = parseInt(id)
    const donation = donations.find(donation => donation.id === idParse)
    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description,price } = donation
    const handleAddDonation = (id)=>{
        saveDonationList(id)
        toast("Donation Added Successfully")
    }
    return (
        <div className='pb-20'>
            <div className="card w-full pb-20">
                <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                <div className='-mt-20'>
                    <button onClick={()=>handleAddDonation(id)} style={{background:text_button_bg_color}} className='ms-10 px-6 py-3 font-semibold text-white'>Donate: ${price}</button>
                </div>
            </div>
            <div>
                <h2 className='text-5xl font-semibold py-4'>{title}</h2>
                <p>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;