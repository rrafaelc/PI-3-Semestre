import Image from 'next/image';
import Link from 'next/link';
import HeaderIcon from './HeaderIcon';

export default function Header() {
  return (
    <header className="bg-[#001C39] text-white h-[36px] flex items-center">
      <HeaderIcon />
      <Link href="/" className="flex-1 flex justify-center">
        <Image src="/images/logo.png" alt="Logo" width="33" height="33" />
      </Link>
    </header>
  );
}
