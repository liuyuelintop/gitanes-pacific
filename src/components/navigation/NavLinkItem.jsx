import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, text, setIsMenuOpen }) => (
    <li className='text-neutral-300 '>
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'text-cyan-500' : ''}
            onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
        >
            <span className='hover:underline decoration-cyan-500'>
                {text}
            </span>
        </NavLink>
    </li>
);

export default NavLinkItem;
