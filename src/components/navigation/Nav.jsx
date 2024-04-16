import NavLinkItem from './NavLinkItem';
import { MdClose } from "react-icons/md"

const Nav = ({ isMenuOpen, setIsMenuOpen, links }) => {

    return (
        <nav>
            {/* Links for large screens */}
            <ul className='hidden sm:flex uppercase text-sm lg:text-lg gap-6'>
                {links.map(link => (
                    <NavLinkItem key={link.to} to={link.to} text={link.text} />
                ))}
            </ul>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className={`fixed top-0 left-0 h-full bg-neutral-900 w-full z-50 sm:hidden`}>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed top-0 right-0 text-white p-4">
                        <MdClose className="hover:text-cyan-500 text-2xl" />
                    </button>
                    <ul className="flex flex-col mt-10 gap-2 ml-4 uppercase text-white">
                        {links.map(link => (
                            <NavLinkItem key={link.to} to={link.to} text={link.text} setIsMenuOpen={setIsMenuOpen} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
