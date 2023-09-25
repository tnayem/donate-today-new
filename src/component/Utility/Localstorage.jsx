import { json } from "react-router-dom"

const getDonationList = () =>{
    const donationList = localStorage.getItem('added-donation')
    if(donationList){
        return JSON.parse(donationList)
    }
    return [];
}
const saveDonationList =(id)=>{
    const storedDonation = []
    storedDonation.push(id)
    localStorage.setItem('added-donation', JSON.stringify(storedDonation))

}

export{saveDonationList , getDonationList}