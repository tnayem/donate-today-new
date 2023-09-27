import { useState } from 'react';
import Banner from '../Banner/Banner';
import Donates from '../Donates/Donates';

const Home = () => {
    const [query,setQuery] = useState("")
    
    return (
        <div>
            <Banner setQuery={setQuery} ></Banner>
            <Donates query = {query} setQuery={setQuery} ></Donates>
        </div>
    );
};

export default Home;