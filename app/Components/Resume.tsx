import Bar from '../Utility Components/Bar'
import { languages, tools } from '@/data'
const Resume = () => {
  return (
    <div className='px-6 py-2'>
      {/* //! Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <div className='text-grey'>
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold '>
              Jaypee Institute of Information Technology (2021-2025)
            </h5>
            <p className='font-semibold'>
              Computer Science And Engineering
            </p>
            <p className='my-3'>
              CGPA : 8.7/10
            </p>
            <h5 className='my-2 text-xl font-bold '>
              ST. Joseph&apos;s School (2007-2021)
            </h5>
            <p className='font-semibold'>
              12th Class
            </p>
            <p className='my-3'>
              Percentage : 97.75%
            </p>
            <p className='font-semibold'>
              10th Class
            </p>
            <p className='my-3'>
              Percentage : 96.00%
            </p>
          </div>
        </div>
        <div className='text-grey'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              JIIT OPTICA Student Chapter 
            </h5>
            <p className='font-semibold'>Vice President (Aug 2022 - Present)</p>
            <p className='my-3'>
            Led efforts to get students involved, managed important projects, and organized exciting events.<br/>
            Contributed to the development and enhancement of the fully responsive Optica official website
            </p>
            <h5 className='my-2 text-xl font-bold'>
              Ask Senior 
            </h5>
            <p className='font-semibold'>Teaching Assistant (Aug 2023 - Sept 2023)</p>
            <p className='my-3'>
              Assisting students enrolled in their CP course by addressing their doubts and providing support.<br />
              Giving feedback to for improving the quality of the course content.
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className='grid gap-9 md:grid-cols-2'>
        <div className='text-grey'>
          <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
          <div className='my-2'>
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div className='text-grey'>
          <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
          <div className='my-2'>
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume