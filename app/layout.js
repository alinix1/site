import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { GRID_DATA_ITEMS } from './data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex justify-center items-center min-h-screen`}
      >
        <div className="w-[1000px] flex flex-col items-center pt-4 pb-4">
          <div className="text-2xl mb-5 underline decoration-3 decoration-blue-400">
            DAVID KANDO MUSIC
          </div>
          <div className="w-full bg-slate-100 flex flex-col item-center pb-10 pt-10">
            <div className="grid grid-cols-4 gap-1">
              {GRID_DATA_ITEMS.map((gridDataItem) => {
                const { id, attributes } = gridDataItem;

                return (
                  <Link key={id} href={attributes.href}>
                    <div
                      className={`${attributes.background} w-52 h-52 flex items-end border-black border-[2px]`}
                    >
                      <div
                        className={`bg-slate-200/75 w-full text-center mb-2 hover:text-white hover:bg-slate-700/75`}
                      >
                        {attributes.text}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <br />
          {children}
        </div>
      </body>
    </html>
  );
}
