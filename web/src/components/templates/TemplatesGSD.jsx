import Navbar from '@/components/organisms/Navbar';
import SideBarGSD from '../organisms/SideBarGSD';


const TemplatesGSD = ({ children, contentSx }) => {
  return (
    <div className='flex flex-col min-h-screen bg-white text-gray-800'>
      <Navbar />
      <div className='flex-1 flex stretch'>
        <SideBarGSD />
        <div className={`px-4 py-4 w-full ${contentSx}`}>{children}</div>
      </div>
    </div>
  );
};

export default TemplatesGSD;
