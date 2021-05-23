import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import LightBulb from '../svg/LightBulb';
import { AppContext } from '../../src/context/state';

const NavBar = () => {
  const { pathname } = useRouter();
  const { user } = useContext(AppContext);

  const links = [
    { href: '/', name: 'ראשי', icon: <LightBulb /> },
    { href: '/Professions', name: 'זירת המקצועות', icon: <LightBulb /> },
    { href: '/School', name: 'מאגר הלימודים', icon: <LightBulb /> },
    { href: '/Jobs', name: 'משרות פנויות', icon: <LightBulb /> },
  ];

  const LinkButton = ({ link, isActive }) => (
    <li
      className={`transition-all rounded text-white text-base py-3 nav__button flex flex-col items-center justify-center ${
        isActive ? 'active' : 'disabled'
      }`}
    >
      <Link href={link.href}>
        <a>
          {link.icon}
          <span>{link.name}</span>
        </a>
      </Link>
    </li>
  );
  return (
    <aside className="nav flex flex-col h-screen justify-between bg-green-500 items-center">
      <div className="nav__profile">
        <Link href="/ProfilePage">
          <a>{user?.user_display_name}</a>
        </Link>
      </div>
      <ul className="nav__links flex flex-col items-center justify-center">
        {links.map((link) => (
          <LinkButton key={link.href} link={link} isActive={pathname === link.href} />
        ))}
      </ul>
      <div className="nav__logo">
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
    </aside>
  );
};
export default NavBar;