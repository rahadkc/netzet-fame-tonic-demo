'use client';

import Link from 'next/link';
import useToggle from '@/hooks/useToggle';
import IconBurger from './IconBurger';

const navItems = [
  { label: 'About us', href: '#' },
  { label: 'Contact', href: '#' },
];

function Navigation() {
  const [open, toggle] = useToggle(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:flex lg:gap-10">
        {navItems.map(({ label, href }) => (
          <Link key={label} href={href} className="text-lg font-semibold text-gray-300">
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile burger */}
      <div className="lg:hidden">
        <button
          onClick={toggle}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="focus:outline-none"
        >
          <IconBurger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-4 right-4 top-full z-10 flex flex-col items-center gap-4  bg-black py-4 lg:hidden"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={`mobile-${label}`}
              href={href}
              className="text-lg font-semibold text-gray-300"
              onClick={() => toggle()}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}

export default Navigation;
