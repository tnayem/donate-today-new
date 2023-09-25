import React from 'react';
import banner from '../BannerImage/bannerimg.jpg'

const Banner = () => {
    const myColor = 'red';
    return (
        <div className="hero h-96 bg-cover bg-[url(https://i.postimg.cc/pXmL0r2r/bannerimg.jpg)]">
            <div class="w-full h-full flex  justify-center items-center backdrop-brightness-150 opacity-95 bg-white">
                <div className="text-center ">
                    <h2 style={{color:myColor}} className='text-4xl font-bold mb-6'>I Grow By Helping People In Need</h2>
                    <div class="mb-3">
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-red-600 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon3" />


                            <button
                                class="relative z-[2] rounded-r border-2 border-red-600  px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out bg-red-600"
                                type="button"
                                id="button-addon3"
                                data-te-ripple-init>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;