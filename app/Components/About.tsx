import { services } from "@/data";
import { Service } from "@/types";
import {motion} from 'framer-motion'
import ServiceCard from "../Utility Components/ServiceCard";
import { fadeinUP, stagger } from "@/animations";

const About = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium text-grey">
      🚀 Aspiring Software Developer (SDE) currently in pre-final year pursuing a B.Tech in Computer Science and Engineering. Grateful for the journey of learning and excited about the opportunities ahead in the world of software development.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-100 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide text-center">
          Summary of my Proficiency
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" 
          variants={stagger}
          initial = "initial"
          animate = 'animate'
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service, index) => (
            <motion.div
              variants={fadeinUP}

              className={`col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ${index >= services.length - 2 ? 'hidden md:block' : ''}`}
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About