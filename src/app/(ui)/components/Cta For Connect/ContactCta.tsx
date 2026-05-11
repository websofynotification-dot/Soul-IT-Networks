import { ctaProps } from '@/types/ctaContext'
import { Cta } from '../Common/Cta'

export const ContactCta: React.FC<ctaProps> = ({ style, title, description, buttonText, nevigateUrl }) => {
    return (
        <section className={` ${style ? "bg-gray-50" : ""}`}>
            <div className='container'>
                <Cta title={title} description={description} buttonText={buttonText} nevigateUrl={nevigateUrl} />
            </div>
        </section>
    )
}
