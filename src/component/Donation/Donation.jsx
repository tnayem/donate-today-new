import React from 'react';
import { getDonationList } from '../Utility/Localstorage';
import { useLoaderData, useParams } from 'react-router-dom';

const Donation = () => {
    const totalDonation = getDonationList()
    const allDonetionInfo = useLoaderData()
    // const singleDonationInfo =

    return (
        <div>
            <h1>Total Donation Quantity: {totalDonation.length}</h1>
            <h1>{allDonetionInfo.length}</h1>
        </div>
    );
};

export default Donation;