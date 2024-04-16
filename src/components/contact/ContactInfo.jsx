// ContactInfo.jsx
import { CONTACT } from '../../constants';

const ContactInfo = () => (
    <div className="flex flex-col items-center text-neutral-400 mb-10 gap-4">
        <div className="flex flex-col items-center">
            <h3 className="mb-4 text-2xl  text-neutral-300">Get started today!</h3>
            <p className="mb-2 text-center">{CONTACT.intro}</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
            <div className='flex flex-col gap-1 text-center'>
                <p>IT Support</p>
                <p>Email:
                    <span className='mx-1 text-cyan-600 hover:underline'>{CONTACT.email}</span>
                </p>
            </div>
        </div>
    </div>
);

export default ContactInfo;
