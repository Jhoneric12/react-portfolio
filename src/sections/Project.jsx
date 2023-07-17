import React from 'react'
import ProjectList from '../components/ProjectList'
import SectionTitle from '../components/SectionTitle'

function Project() {
  return (
    <div className="container" id='projects'>
      <SectionTitle title = 'Projects'/>
      <div className="projects">
        <ProjectList/>
      </div>
    </div>
  )
}

export default Project

 





























// <div className="container">
    //     <div className="project-title mb-24">
    //         <h1 className='text-fonts text-3xl font-extrabold py-2 border-solid border-secondary border-b-2 w-[8rem]'>Projects</h1>
    //     </div>
    //     <div className="projects-container flex justify-between mb-32">
    //         <div className="first-section flex flex-col py-16">
    //             <h1 className='text-fonts font-bold text-xl mb-6'>University of Rizal System Library Management</h1>
    //             <div className="languages flex mb-6">
    //                 <div className="cSharp bg-[#627486] text-fonts text-based font-medium rounded  text-center px-4 py-1 mr-5">Csharp</div>
    //                 <div className="MySql bg-[#627486] text-fonts text-based font-medium rounded  text-center px-4 py-1">MySql</div>
    //             </div>
    //             <div className="project-description mb-6 w-2/3">
    //                 <p className='text-fonts text-based font-regular'>This system was created during our finals in computer programming II. It allows a user to manage book transations.</p>
    //             </div>
    //             <div>
    //             <button className="btn-project text-fonts text-based font-semibold rounded-lg border-solid border bg-primary border-secondary py-4 px-12 outline-2 hover:bg-secondary hover:ease-in transition duration-150">Source</button>
    //             </div>
    //         </div>
    //         <div className="image-section">
    //             <div className="image">
    //                 <img className='rounded w-[40rem] h-[20rem]' src= {URSBLibrary} alt="URSB Library" />
    //             </div>
    //         </div>  
    //     </div>

    //     <div className="projects-container flex justify-between w-[100%]">
    //         <div className="first-section flex flex-col py-16">
    //             <h1 className='text-fonts font-bold text-xl mb-6'>Mellontikos Website</h1>
    //             <div className="languages flex mb-6">
    //                 <div className="cSharp bg-[#627486] text-fonts text-based font-medium rounded  text-center px-4 py-1 mr-5">HTML</div>
    //                 <div className="MySql bg-[#627486] text-fonts text-based font-medium rounded  text-center px-4 py-1 mr-5">CSS</div>
    //                 <div className="MySql bg-[#627486] text-fonts text-based font-medium rounded  text-center px-4 py-1">Javascript</div>
    //             </div>
    //             <div className="project-description mb-6 w-2/3">
    //                 <p className='text-fonts text-based font-regular'>This system was created during our finals in computer programming II. It allows a user to manage book transations.</p>
    //             </div>
    //             <div>
    //             <button className="btn-project text-fonts text-based font-semibold rounded-lg border-solid border bg-primary border-secondary py-4 px-12 outline-2 hover:bg-secondary hover:ease-in transition duration-150">Source</button>
    //             </div>
    //         </div>
    //         <div className="image-section">
    //             <div className="image">
    //                 <img className='rounded w-[40rem] h-[20rem]' src= {Mellontikos} alt="URSB Library" />
    //             </div>
    //         </div>  
    //     </div>
    // </div>