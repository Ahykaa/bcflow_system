import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <div className={inter.className}>
      <Head>
        <title>BC Flow </title>
        <link rel='icon' href='/bc-seal.png' alt='bc-seal' />
      </Head>
      {children}
    </div>
  );
};

export default RootLayout;
