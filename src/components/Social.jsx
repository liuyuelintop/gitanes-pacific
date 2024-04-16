import { FaFacebook, FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Social() {
    return (
        <div className="text-center py-6">
            <h2 className="text-neutral-300 font-semibold text-2xl lg:text-4xl mb-4">SOCIAL</h2>
            {/* Assume you have FontAwesome or similar for icons */}
            <div className="m-8 flex items-center gap-4 text-2xl justify-center">
                <a className="mx-2" href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="mt-6 text-blue-300 lg:text-4xl" />
                </a>
                <a className="mx-2" href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="mt-6 text-cyan-500 lg:text-4xl" />
                </a>
                <a className="mx-2" href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="mt-6 text-red-400 lg:text-4xl" />
                </a>
                <a className="mx-2" href="#" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter className="mt-6 text-slate-300 lg:text-4xl" />
                </a>
            </div>
        </div >
    );
}
