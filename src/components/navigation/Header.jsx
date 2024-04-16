import { useState } from 'react';
import Nav from './Nav';
import { MdMenu } from 'react-icons/md';
import HeaderIcon from './HeaderIcon';
import { COMPANY_NAME } from '../../constants';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { to: '/', text: 'Home' },
        { to: '/services', text: 'Services' },
        { to: '/contact', text: 'Contact us' }
    ];

    return (
        <header className='fixed w-full overflow-hidden bg-neutral-900 left-0 top-0 z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
                {/* Branding */}
                <HeaderIcon
                    firstWord={COMPANY_NAME.firstWord}
                    secondWord={COMPANY_NAME.secondWord}
                />

                {/* Navigation for larger screens */}
                <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} links={links} />

                {/* Hamburger Icon for mobile screens */}
                <div className="sm:hidden ml-auto">
                    <MdMenu
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-4xl text-neutral-300 hover:text-cyan-300 cursor-pointer"
                    />
                </div>
            </div>
        </header>
    );
}
