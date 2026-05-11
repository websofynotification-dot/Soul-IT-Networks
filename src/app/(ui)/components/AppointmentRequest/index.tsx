import { AppointmentRequestForm } from "./AppointmentRequestForm";

export const AppointmentRequest = () => {

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-primary">
                    RML Appointment{" "}<span className="text-MidnightNavyText">Request Service</span>
                </h1>
                <p className="mt-5 sm:text-19 text-MidnightNavyText sm:text-center text-justify m-auto">
                    Bringing trusted pathology services to your doorstep with care and precision
                </p>
            </div>
            <AppointmentRequestForm />
        </div>
    );
};








