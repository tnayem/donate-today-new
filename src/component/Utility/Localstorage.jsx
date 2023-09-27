import { json } from "react-router-dom"

const getDonationList = () => {
    const donationList = localStorage.getItem('added-donation')
    console.log(donationList);
    if (donationList) {
        return JSON.parse(donationList)
    }
    return [];
    
}
const storedDonation = []
const saveDonationList = (id) => {


    storedDonation.push(id)

    localStorage.setItem('added-donation', JSON.stringify(storedDonation))

}

export { saveDonationList, getDonationList }