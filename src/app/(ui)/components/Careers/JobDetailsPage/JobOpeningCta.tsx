import Link from 'next/link'

import { MdOutlineArrowRightAlt } from 'react-icons/md'

export const JobOpeningCta = () => {
  return (
    <section className="bg-gray-50">
        <div className="container">
          <div className="bg-white flex flex-col items-center justify-center text-primary rounded-3xl p-12 text-center border border-secondary shadow-md shadow-secondary">

            <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
              Still Looking for the Right Role?
            </p>
            <p className="mt-6 text-SlateBlueText font-normal text-19  text-center m-auto">
              Send your resume—we’re always on the lookout for great talent.
            </p>

            <Link href={`mailto:anubhav@soulitnetworks.com?subject=General Application - Soul IT Careers`}
              className="mt-10 w-auto px-10 py-4 bg-white  font-semibold rounded-md
                     hover:text-white transition duration-300 shadow-lg justify-center 
                     items-center gap-2 text-primary border border-secondary  hover:bg-primary">
              <span className="flex items-center gap-2">Send Your Resume
                <MdOutlineArrowRightAlt size={25} /> </span>
            </Link>
          </div>
        </div>
      </section>
  )
}
