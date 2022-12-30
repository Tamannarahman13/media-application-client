import React, { useEffect, useState } from 'react';
const About = () => {
const [skillSet,setSkillSet]= useState([])
    useEffect(()=>{

        fetch('https://media-gules.vercel.app/about')
        .then(res=>res.json())
        .then(data=>setSkillSet(data[0]))

    },[])

   const {name,email,adress,experience,phone,feeelance,nationality,skills}= skillSet
    return (
        <div className='min-h-[60vh]  bg-[#7C4AA9]'>
            <h1 className='text-center py-5 uppercase text-4xl font-bold'>about ME</h1>

<div className="aboutContainer container mx-auto">
    <div className="grid grid-cols-3 gap-10 items-center py-12">

<div className="img-container col-span-1">
    <img className='rounded-full h-96 w-96  border-[#23DED6] border-[4px] ' src='/profile.jpg' alt="" />
</div>
<div className="main-container col-span-2">
    <h2 className='text-4xl font-bold text-white'>Hi! I am
    Tammanna Rahaman
     </h2>
     <h3 className='text-white text-2xl font-bold my-3 '>MERN Stack Web Developer</h3>
     <p className='text-justify  text-[#ddd] text-lg mt-2'>Passionate junior front-end developer with a desire to learn and grow in a collaborating
team environment. A curious learner of website technologies. Regularly learning about MERN
stack development and now looking forward to starting my career as a junior web developer
and exploring web technologies continuously.</p>

{/* skills section */}

<div className="skillSection grid grid-cols-2 gap-x-12 gap-y-5 pt-8">
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Name :{name}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Email :{email}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Adress :{adress}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Nationality :{nationality}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Phone :{phone}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Experience :{experience}</p>
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>Skills :{skills}</p>
  
   <p className='text-[#ddd] border-b-2 border-[#fff]   text-lg font-medium'>{feeelance}</p>
   

</div>





</div>

    </div>
</div>

        </div>
    );
};

export default About;