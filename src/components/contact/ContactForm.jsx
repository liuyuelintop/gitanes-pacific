import { useState } from 'react';
import { CONTACT } from '../../constants';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyURL, setCompanyURL] = useState('');
    const [message, setMessage] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const isFormValid = email && contactNumber; // Validation for email and contact number
    const mailtoLink = `mailto:${CONTACT.email}?subject=Contact from ${name}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany URL: ${companyURL}\nPhone Number: ${contactNumber}\n\nMessage:\n${message}`
    )}`;

    return (
        <div className="mb-10 mx-2">
            <form className="flex flex-col gap-6" action={mailtoLink} method="post" encType="text/plain">
                <h3 className='text-center text-lg text-neutral-300'>Let's Talk about Your IT Needs!</h3>
                <input
                    className="p-2 rounded-md bg-neutral-700 text-neutral-400"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="p-2 rounded-md bg-neutral-700 text-neutral-400"
                    type="email"
                    placeholder="Email*"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="p-2 rounded-md bg-neutral-700 text-neutral-400"
                    type="text"
                    placeholder="Company URL"
                    value={companyURL}
                    onChange={(e) => setCompanyURL(e.target.value)}
                />
                <textarea
                    className="p-2 rounded-lg w-full bg-neutral-700 text-neutral-400"
                    placeholder="Tell us how we can help."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    className="p-2 rounded-md bg-neutral-700 text-neutral-400"
                    type="text"
                    placeholder="Contact Phone Number*"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                {isFormValid ? (
                    <a
                        href={mailtoLink}
                        className='bg-cyan-600 font-semibold text-center p-3 uppercase rounded-lg hover:opacity-95'
                    >
                        Get help
                    </a>
                ) : (
                    <a
                        className='bg-cyan-600 font-semibold text-center p-3 uppercase rounded-lg opacity-50 cursor-not-allowed'
                    >
                        Get help
                    </a>
                )}
            </form>
        </div>
    );
}
