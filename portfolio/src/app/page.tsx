'use client'
import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react'
import SplashScreen from "./splash";



export default function Home() {
 

  
  const [clickOne, setClickOne] = useState(false);
  const [clickTwo, setClickTwo] = useState(false);

  function fireOne(){
    setClickOne(true);
  };
  function firetwo(){
    setClickTwo(true);
  };


  const project = [
    {
      id: 1,
      Project: 'Dual Network',
      TagOne: null,
      TagTwo: 'Design',
      TagThree: 'Product Manager',
      Description: "Dual network is a modular blockchain built for verifiable on-chain AI inferences. I was the Designer and PM for Dual network at Martian Wallet  ",
      link: 'https://www.dual.network/',
      image: '/dual.png'
    },
    {
      id: 3,
      Project: 'Docmonster',
      TagOne: null,
      TagThree: 'Fullstack',
      TagTwo: 'Design',
      Description: "Docmonster is an AI chatbot that understands your API docs that you can embed in any website with 3 lines of code. ",
      link: "https://docmonster.ai",
      image: '/docmonster.png'
    },
    {
      id: 2,
      Project: 'Iggy AI',
      TagOne: null,
      TagTwo: 'Design',
      TagThree: null,
      Description: "Iggy Ai is a AI companion that user can chat with and earn $Rizz. Iggy was modelled after Rapper and Musician Iggy Azelea.",
      link: "https://x.com/martian_wallet/status/1798438538335436848",
      image: '/Iggy.png'
    },
   
    {
      id: 4,
      Project: 'Tatva Finance',
      TagOne: null,
      TagTwo: 'Design',
      TagThree: 'Frontend(some)',
      Description: "Tatva Finance is a DeFi Yield Farm Screener built to help long term investors make yield farming investment decisions",
      link: "https://www.figma.com/file/sqcUsiDw87zM2OgaiDIQXy/Tatva-V1?node-id=685%3A2385&t=7PpYUnjeHAvInhoy-1",
      image: '/tatva.png'
    },
  ]

  return (
  <>
  <SplashScreen/>
  <div className=" max-w-[300px]  bg-white border border-neutral-400 p-[20px] rounded-full mt-[32px] mx-auto">
   <ul className="flex ">
    <div className="flex mx-auto space-x-8">
  <li className="text-black  text-lg ">Home</li>
  <li className="text-gray-500  text-xl" ><Link href="#section1"></Link> About</li>
  <li className="text-gray-500  text-xl"><Link href="#section2"></Link> Projects</li>
  </div>
   </ul>   
  </div>
  
  
  <div className=" mx-4 lap-xl:mx-64 lap:mx-16 tab:mx-8"> 
    <h1 className=" lap-xl:text-[#1C1C1C] font-normal  mt-[162px]">Hi there, I’m  Srinath <span className="hover:animate__animated animate__swing">👋</span> </h1>
   <p className="text-black mt-4">I am a  
    
    <button className=" text-left flex-col   tab:flex-row tab:p-2    " onClick={fireOne}>
      <i className=" bg-gray-200 rounded-md p-3 leading-[50px]"> designer 
        <Image width={30} height={30} src={'/figma.svg'} alt="" className="inline-flex ml-1 hover:animate-bounce bg-gray-200"></Image>
        </i> {clickOne &&  <span className=" leading-[50px]"> <span className="bg-gray-200 p-3 rounded-md">making</span> <span className="bg-gray-200 p-3 rounded-md">thoughtful</span><span className="bg-gray-200 p-3 ml-1 rounded-md">experiences</span> <span className="bg-gray-200 p-3 rounded-md">on</span> <span className="bg-gray-200 p-3 rounded-md">Figma</span></span>}
        </button> <span className="mt-8">and</span> 
    <button className=" text-left flex-col mt-3 tab:flex-row tab:p-2 " onClick={firetwo}><i className="left-0 bg-gray-200 p-3 rounded-md">  developer <Image width={30} height={30} src={'/dev.svg'} alt="" className="inline-flex ml-1 hover:animate-bounce"></Image></i> {clickTwo &&  <span className=" leading-[50px]"> <span className="bg-gray-200 p-3 rounded-md ">writing</span> <span className="bg-gray-200 p-3 rounded-md">functional</span><span className="bg-gray-200 p-3 ml-1 rounded-md">code</span> <span className="bg-gray-200 p-3 rounded-md ml-1">with</span> <span className="bg-gray-200 p-3 rounded-md ml-1">Next.js</span><span className="bg-gray-200 p-3 rounded-md ml-1">Tailwind</span><span className="bg-gray-200 p-3 rounded-md ml-1">Firebase</span></span>}</button>  who likes building cool products.</p>
  
    </div>
 <div className="mx-64 mt-[185px] ">



      </div>
   

<div>

</div>
 



 <div
 
 className=" mx-4 mt-32  lap-xl:mx-64 lap:mx-16 tab:mx-8" >
<h1 className="text-[30px] font-bold">TL:DR</h1>
<p className="mt-4 text-lg ">
Hi I’m Srinath. Currently I work on product and growth at Martian Wallet. I recently graduated from Duke University’s Fuqua School of Business. I’ve been building things since I was in middle school, ranging from apps and games with tens of thousands of downloads. I briefly ran Tatva Finance - a DeFi analytics startup where we built a screener for DeFi Yield Farms. I also worked with Dave Nemetz as Employee #1 at his Web3 Syndicate. Post college I ran a growth marketing agency and wrote a book with Abhinav Arora. 
<br />
<br/>
If you think we should chat, DM me @srinathariharan on twitter or email me: srinathwork08@gmail.com
</p>



<div className="mx-auto">
      <h1 className="mt-32 text-[30px] font-bold mb-6">Past Experience</h1>
     
    </div>

    <section>
          <h2 className="text-xl mb-6">These links will take you directly to the live projects where available.</h2>
          <div className=" grid grid-cols-3 gap-3 tab:grid-cols-2  mob-l:grid-cols-1 mob-m:grid-cols-1  mob-s:grid-cols-1 ">
            {project.map((project) => (
              <div key={project.id} className="bg-gray-100 p-4 rounded-lg">
                <Image className="w-full  bg-gray-300 mb-4 rounded-lg" src= {project.image} width={'622'} height={'423'} alt=""></Image>
                <h2>{project.Project}</h2>
                <div className="flex flex-row gap-x-2 mt-1">
               {project.TagOne && <p className="text-black py-1 px-3 bg-[#FFCB13] rounded-xl text-[15px]">{project.TagOne}</p>} 
                {project.TagTwo && <p className="text-white py-1 px-3 bg-[#0066FF] rounded-xl text-[15px]">{project.TagTwo}</p>}
                {project.TagThree && <p className="text-black py-1 px-3 bg-[#FFCB13]  rounded-xl text-[15px]">{project.TagThree}</p>}
                </div>
                
                <p className="text-base text-gray-600 mb-4 mt-2">
                 {project.Description}
                </p>
                <Link href={project.link}>
                <button className="bg-black text-white text-sm px-4 py-2 rounded">
                  Explore More
                </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="mb-4 bg-black p-[15px] rounded-full mt-[150px] mx-4 lap-xl:mx-32 lap:mx-16 tab:mx-8">
    <p className="text-white ml-3 text-[15px] text-center ">You Have Reached End Of The Page</p>
   
  </div>
    </div>
  </>
  );
}
