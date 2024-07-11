import React from 'react'
import { projects } from './data';

export default function Projects({setActiveMenu}) {
  return (
    <div className='relative mix-blend-difference z-10 text-black h-full container'>
      <ul onMouseLeave={() => {setActiveMenu(null)}} className='border-b'>
        {
          projects.map( (project, i) => {
            return (
              <li onMouseOver={() => {setActiveMenu(i)}} key={project.title} className='relative text-[4vw] mb-12 p-5 border-t border-black-100 group/item'>
                <p className='text-4xl'>{project.title}</p>
                <p className='h-0 group-hover/item:h-full duration-300'>{project.description}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
