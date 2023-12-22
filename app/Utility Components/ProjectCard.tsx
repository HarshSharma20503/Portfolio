import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "@/types";
import { motion } from "framer-motion";

import Image from "next/image";
import { fadeinUP, stagger } from "@/animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: { id, name, image_path, category, deployed_url, description, github_url, key_techs, displayName
  },
  showDetail,
  setShowDetail,
}) => {

    return (
      <>
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(id)}
          style={{width: 'auto'}}
          height="150"
          width="300"
        />
        <p className="my-2 text-center flex flex-col justify-around">{name}</p>

        {showDetail === id && (
          <div className="fixed top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 grid w-5/6 lg:w-3/5 h-auto p-2 md:p-10 text-black bg-gray-300 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 rounded-lg">
            <motion.div
              variants={stagger}
              animate='animate'
              initial='initial'
            >
              {/* <img src={image_path} alt={name} /> */}
              <motion.div variants={fadeinUP} className="border-4 border-gray-100">
                <Image
                  src={image_path}
                  alt={name}
                  style = {{width:"100%"}}
                  height="150"
                  width="300"
                  className="item-center"
                />
              </motion.div>

              <motion.div variants={fadeinUP} className="flex justify-center my-4 space-x-3">
                <a
                  href={github_url}
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                {
                  displayName !== "None" && (
                    <a
                      href={deployed_url}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 rounded-lg"
                    >
                      <AiFillProject /> <span>{displayName}</span>
                    </a>
                  )
                }

              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              animate='animate'
              initial='initial'
            >
              <motion.h2 variants={fadeinUP} className="mb-3 text-xl font-medium md:text-2xl text-center">{name}</motion.h2>

              <motion.h3 variants={fadeinUP} className="mb-3 font-medium text-justify">{description}</motion.h3>

              <motion.div variants={fadeinUP} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </>
    );
  };

export default ProjectCard;