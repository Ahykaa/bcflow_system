import Image from 'next/image';
import Link from 'next/link';
import { HiLogout, HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className='p-3 px-8 flex justify-between  items-center bg-green-200'>
      <Link href='/' className='font-bold flex items-center'>
        <Image src='/bc-seal.png' width={30} height={30} alt='logo' />
        <span className='px-2'>BC Flow System</span>
      </Link>

      <div className='flex gap-5 '>
        {/* <Link href="/profile">
          <HiOutlineUserCircle className="cursor-pointer hover:text-orange-600 text-xl" />
        </Link> */}
        <Link href='/logout'>
          <HiLogout className='cursor-pointer hover:text-orange-600 text-xl'>
            Logout
          </HiLogout>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
