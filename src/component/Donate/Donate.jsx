import React from 'react';

const Donate = ({ donate ,handleDonationDetails}) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, description } = donate;
    return (
        <div onClick={()=>handleDonationDetails(id)} style={{background:card_bg_color}} className="card cursor-pointer">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <p style={{color:text_button_bg_color}}><button className='px-5 py-1 rounded' style={{background:category_bg_color}}>{category}</button></p>
                <h2 style={{color:text_button_bg_color}} className="card-title py-0">{title}!</h2>
            </div>
        </div>
    );
};

export default Donate;