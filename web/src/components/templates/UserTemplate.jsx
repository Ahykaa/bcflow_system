import Navbar from '@/components/organisms/Navbar';
import SideBarUser from '../organisms/SideBarUser';

const UserTemplate = ({ children, contentSx }) => {
  return (
    <div className='flex flex-col min-h-screen bg-white text-gray-800'>
      <Navbar />
      <div className='flex-1 flex stretch'>
        <SideBarUser />
        <div className={`px-4 py-4 w-full ${contentSx}`}>{children}</div>
      </div>
    </div>
  );
};

export default UserTemplate;
