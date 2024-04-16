// Contact.jsx
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Hero from '../components/Hero';
import Policy from '../components/Policy';
import { HERO } from '../constants';

export default function Contact() {

    return (
        <div className="text-white p-8 flex flex-col justify-center items-center min-h-screen">
            <div className="max-w-2xl w-full">
                <Hero hero={HERO[1]} />
                <h2 className="text-2xl font-bold text-center mb-6">CONTACT US</h2>
                <ContactForm />
                <Policy />
                <ContactInfo />
            </div>
        </div>
    );
}
