import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="flex justify-center lg:justify-start">
      <Image src="/logo.svg" width={174} height={74} alt="FameTonic Logo" className="hidden md:block" />
      <Image src="/logo-sm.svg" width={108} height={47} alt="FameTonic Logo" className="md:hidden" />
    </Link>
  );
}

export default Logo;
