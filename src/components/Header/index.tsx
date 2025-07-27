'use client';

import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="mx-auto w-full max-w-[1080px] px-4 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between py-4 relative">
        <div className="lg:hidden"></div>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
