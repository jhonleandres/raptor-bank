import Link from 'next/link';
import { BiArchiveIn } from 'react-icons/bi';
import { CiHome, CiWallet } from 'react-icons/ci';
import { GrSync } from 'react-icons/gr';
import { MdPayment } from 'react-icons/md';
type Props = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
};
export const Mobile = ({ children }: Props) => {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col h-screen">
        <section className="flex-1 justify-between ">{children}</section>
        <nav className="rounded-t-lg bg-slate-400">
          {/* className={isAndroid === true ? 'sr-only' : 'hidden'} */}
          {/* w-full justify-items-center  */}
          <ul className="flex flex-row w-screen justify-center">
            <li className="p-3 ">
              <Link href={'#'} className="text-black cursor-pointer">
                <span className="flex justify-center">
                  <CiHome className="w-5 h-5 " />
                </span>
                <span className=" ">Início</span>
              </Link>
            </li>
            <li className="p-3 ">
              <Link href={'#'} className="text-black cursor-pointer">
                <span className="flex justify-center">
                  <GrSync className="w-5 h-5 " />
                </span>
                <span className="">Caixinha</span>
              </Link>
            </li>
            <li className="p-3 -translate-y-5 bg-slate-400 rounded-t-full">
              <Link href={'#'} className="text-black cursor-pointer">
                <span className="flex justify-center">
                  <MdPayment className="w-7 h-7  " />
                </span>
                <span className="">Pagar</span>
              </Link>
            </li>
            <li className="p-3 ">
              <Link href={'#'} className="text-black cursor-pointer">
                <span className="flex justify-center">
                  <BiArchiveIn className="w-5 h-5 " />
                </span>
                <span className="">Extrato</span>
              </Link>
            </li>
            <li className="p-3 ">
              <Link href={'#'} className="text-black cursor-pointer">
                <span className="flex justify-center">
                  <CiWallet className="w-5 h-5 " />
                </span>
                <span className="">Carteira</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};
