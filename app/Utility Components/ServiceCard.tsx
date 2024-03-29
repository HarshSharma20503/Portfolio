import { FunctionComponent } from 'react'
import { Service } from '@/types'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
   service: { Icon, title, about },
}) => {
   //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='h-20 w-20 text-blue-400 dark:text-green ' />
         <div className=''>
            <h4 className='font-bold text-lg'>{title}</h4>
            <p className='text-grey' dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard