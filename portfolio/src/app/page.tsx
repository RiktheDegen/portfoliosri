import Image from "next/image";
import Link from 'next/link';


export default function Home() {
 
  const project = [
    {
      Project: 'Dual Network',
      TagTwo: 'Design',
      TagThree: 'Product Manager',
      Description: "Dual network is a modular blockchain built for verifiable on-chain AI inferences. I was the Designer and PM for Dual network at Martian Wallet  ",
      link: 'https://www.dual.network/'
    },
    {
      Project: 'Iggy AI',
      TagTwo: 'Design',
      Description: "Iggy Ai is a AI companion that user can chat with and earn $Rizz. Iggy was modelled after Rapper and Musician Iggy Azelea.",
      link: "",
    },
    {
      Project: 'Docmonster',
      TagThree: 'Fullstack Development',
      TagTwo: 'Design',
      Description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
    {
      Project: 'Tatva Finance',
      TagTwo: 'Design',
      TagThree: 'Frontend Development(some)',
      Description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "",
    },
  ]

  return (
  <>
  <div className=" bg-white border border-neutral-400 p-[20px] rounded-full mt-[32px] mx-4 lap-xl:mx-64 lap:mx-16 tab:mx-8">
    <p className="text-black ml-3 text-[20px]">Srinath Hariharan</p>
   
  </div>
  
  <div className=" mx-4 lap-xl:mx-64 lap:mx-16 tab:mx-8"> 
    <h1 className=" lap-xl:text-[#1C1C1C] font-normal  mt-[162px]">Hi there, I’m  Srinath 👋<br/> I like building things</h1>
   
  
    </div>
 <div className="mx-64 mt-[185px] ">



      </div>
   

<div>

</div>
 



 <div className=" mx-4 mt-32  lap-xl:mx-64 lap:mx-16 tab:mx-8">
<h1 className="text-[40px] font-bold">TL:DR</h1>
<p className="mt-4 text-l lap:text-xl ">
Hi I’m Srinath. Currently I work on product and growth at Martian Wallet. I recently graduated from Duke University’s Fuqua School of Business. I’ve been building things since I was in middle school, building apps and games with tens of thousands of downloads. I briefly ran Tatva Finance - a DeFi analytics startup where we built a screener for DeFi Yield Farms. I also worked with Dave Nemetz as Employee #1 at his Web3 Syndicate. Post college I ran a growth marketing agency and wrote a book with Abhinav Arora. 
<br />
<br/>
If you think we should chat, Dm me on X or email me: srinathwork08@gmail.com
</p>



<div className="mx-auto">
      <h2 className="mt-32 text-3xl font-bold mb-6">Past Expereince</h2>
     
    </div>

    <section>
          <h2 className="text-xl font-bold mb-6">Mix of professional and personal projects</h2>
          <div className=" grid grid-cols-3 gap-3 tab:grid-cols-2  mob-l:grid-cols-1 mob-m:grid-cols-1  mob-s:grid-cols-1 ">
            {project.map((project) => (
              <div key={project} className="bg-gray-200 p-4 rounded-lg">
                <div className="w-full h-64 bg-gray-300 mb-4 rounded-lg"></div>
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
        <div className="mb-4 bg-black p-[15px] rounded-full mt-[32px] mx-4 lap-xl:mx-32 lap:mx-16 tab:mx-8">
    <p className="text-white ml-3 text-[15px] text-center ">You Have Reached End Of The Page</p>
   
  </div>
    </div>
  </>
  );
}
