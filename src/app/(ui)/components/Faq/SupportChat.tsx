import Link from 'next/link'
import { FaEnvelope, FaHeadset, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export const SupportChat = () => {
    const whatsappNumber = "7991602001"
    const whatsAppApi = `https://wa.me/${whatsappNumber}?text=Hi%20Support%2C%20I%20need%20help`

    return (
        <section className="bg-primary/5">
            <div className="bg-white container border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-right">
                <div className="flex items-center gap-4">
                    <FaHeadset className="text-learning text-4xl" />
                    <div>
                        <h3 className="text-MidnightNavyText font-semibold text-lg">Can't find{" "}
                            <span className='text-skyBlue'>your questions?</span></h3>
                        <p className="text-16 text-SlateBlueText text-opacity-80 text-justify">
                            Need help? Drop us your queries!
                        </p>
                        <div className='flex items-center mt-2 gap-6'>
                            <Link href="tel:+917991602001" className="text-MidnightNavyText flex items-center gap-2 font-medium"><FaPhoneAlt className="text-error" /> <span>7991602001</span> </Link>
                            <Link href="mailto:rmllabs@rmlpathology.com" className="font-medium text-MidnightNavyText flex items-center gap-2"><FaEnvelope className="text-learning" /> <span>rmllabs@rmlpathology.com</span> </Link>
                        </div>
                    </div>
                </div>
                <Link
                    href={whatsAppApi}
                    target="_blank"
                    className="flex items-center gap-2 bg-success text-white px-6 py-3 rounded-lg shadow-md hover:bg-success/80 transition"
                >
                    <FaWhatsapp className="text-2xl" />
                    WhatsApp
                </Link>
            </div>
        </section>
    )
}