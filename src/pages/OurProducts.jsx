import React from "react";
import Footer from './Footer'

import useCustomGallery from '../CustomHooks/useCustomGallery';




const OurProducts = () => {

    const images = [
        {
            original: 'assets/Rajababu.webp',
            thumbnail: 'assets/Rajababu.webp',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/lajawab.jpeg',
            thumbnail: 'assets/lajawab.jpeg',
            originalAlt: 'Image 2',
            thumbnailAlt: 'Image 2 Thumbnail'
        },
        {
            original: 'assets/banshkathi.jpeg',
            thumbnail: 'assets/Gal3.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        {
            original: 'assets/pr.jpeg',
            thumbnail: 'assets/pr.jpeg',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];
    const image = [
        {
            original: 'assets/sonachur.jpeg',
            thumbnail: 'assets/sonachur.jpeg',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/steamkatarni.jpeg',
            thumbnail: 'assets/steamkatarni.jpeg',
            originalAlt: 'Image 2',
            thumbnailAlt: 'Image 2 Thumbnail'
        },
        {
            original: 'assets/miniket.jpeg',
            thumbnail: 'assets/miniket.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];
    const imagez = [
        {
            original: 'assets/sonachur.jpeg',
            thumbnail: 'assets/sonachur.jpeg',
            originalAlt: 'Image 1',
            thumbnailAlt: 'Image 1 Thumbnail'
        },
        {
            original: 'assets/banshkathi.jpeg',
            thumbnail: 'assets/Gal3.JPG',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        {
            original: 'assets/babuji.jpeg',
            thumbnail: 'assets/babuji.jpeg',
            originalAlt: 'Image 3',
            thumbnailAlt: 'Image 3 Thumbnail'
        },
        
    ];

    return (
        <div className="">
            <div className="relative overflow-hidden pt-24 ">
                {/* Background image */}
                <img
                    src="https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZSUyMGZpZWxkfGVufDB8fDB8fHww"
                    alt=""
                    className="w-full h-[400px] shadow-lg "
                />
                <div className="absolute inset-0 bg-black opacity-40 shadow-lg"></div>
                {/* Overlay text */}
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[180px] text-white font-semibold text-xl bg-opacity-70 p-2 cursor-pointer font-serif whitespace-nowrap">
                    Home &middot; <span className="text-blue-500 hover:text-blue-300 whitespace-nowrap">Our Products</span>
                </span>
            </div>

            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="swiper-container pt-8">
                           
                                {useCustomGallery('5xl', '3xl', images)} 
                    </div>
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Parboiled rice</h1>
                        <p className="text-[20px] text-gray-800 font-serif text-justify ">
                            Processing of rice begins with picking the best-quality paddy from the highly maintained fields of Chattisgarh and Jharkhand, numerous quality checks, washing, and filtration ensure the cleanest rice before stoneless grinding. The unmatched taste of these grains will help you cherish the special moments in life. Every pack of our Product goes through quality standardisation. They are cleaned with hygiene as priority consideration. The packaging of these rice products is emphasised to ensure they stay fresh with the aroma locked in them safely until you unleash it. The taste,  softness, sweet aroma, and fluffiness makes it special. Raja Babu, Lajawab, Babuji and Pavitra Rishta rice are the top products in the Parboiled Rice category that has  high fiber content. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 25 kg, 50 kg.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 lg:space-x-32">
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Steam Rice</h1>
                        <p className=" text-gray-800 font-serif text-justify text-[20px]  ">
                            Processing of rice begins with picking the best-quality paddy from the highly maintained fields of Chattisgarh and Jharkhand, numerous quality checks, washing, and filtration ensure the cleanest rice before stoneless grinding. The unmatched taste of these grains will help you cherish the special moments in life. Every pack of our Product goes through quality standardisation. They are cleaned with hygiene as priority consideration. The packaging of these rice products is emphasised to ensure they stay fresh with the aroma locked in them safely until you unleash it. The taste,  softness, sweet aroma, and fluffiness makes it special. Kaka(Sonam, Miniket, Katarni) rice are the top products in the Steam Rice category that has  high fiber content. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 25 kg, 50 kg.
                        </p>
                    </div>
                    
                    <div className="swiper-container translate-y-16 translate-x-4">
                        {useCustomGallery('5xl', '3xl', image)} 
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 ">
                    <div className="swiper-container pt-12 pl-4">
                        {useCustomGallery('5xl', '3xl', imagez)} 
                    </div>
                    <div className="translate-y-12">
                        <h1 className="text-3xl font-bold mb-4 font-serif text-blue-700">Special Rice</h1>
                        <p className="text-[20px]  text-gray-800 font-serif text-justify ">
                            Processing of rice begins with picking the best-quality paddy from the highly maintained fields of Chattisgarh and Jharkhand, numerous quality checks, washing, and filtration ensure the cleanest rice before stoneless grinding. The unmatched taste of these grains will help you cherish the special moments in life. Every pack of our Product goes through quality standardisation. They are cleaned with hygiene as priority consideration. The packaging of these rice products is emphasised to ensure they stay fresh with the aroma locked in them safely until you unleash it. The taste,  softness, sweet aroma, and fluffiness makes it special. Sonachur, Banshkathi, BPT rice are the top products in the Special Rice category that has  high fiber content. We pack and supply in various pack sizes viz., 1 kg, 5 kg, 10 kg, 25 kg, 50 kg.
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-16">
               <Footer/>
            </div>
        </div>
    );
}

export default OurProducts;
