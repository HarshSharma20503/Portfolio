import { FunctionComponent } from 'react'
import { Skill } from '@/types'
import { motion } from 'framer-motion'

const Bar: FunctionComponent<{ value: Skill }> = ({
   value: { Icon, level, name },
}) => {
   const bar_width = `${level}%`

   const variants = {
      initial:{
         width:0
      },
      animate:{
         width:bar_width,
         transition:{
            duration:0.4,
            type:"spring",
            damping:10,
            stiffness:100,
         }
      }
   }

   return (
      <div className='my-2 text-white bg-gray-300 dark:bg-dark-300 rounded-full dark:bg-black-500'>
         <motion.div variants={variants} 
            initial = "initial"
            animate="animate"
            className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-800 to-blue-400 text-gray-800 dark:text-white dark:from-green dark:to-blue-500'
            style={{
               width: bar_width,
            }}>
            <Icon className='mr-3' /> {name}
         </motion.div>
      </div>
   )
}
export default Bar