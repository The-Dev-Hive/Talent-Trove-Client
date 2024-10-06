import { initialItems } from '@/data';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className="md:hidden ">
      <ul className="flex flex-col flex-start px-5 bg-white h-full rounded-3xl leading-[0.4px] p-5 mt-[0.2px]">
        {initialItems.map((item) => (
          <li
            key={item.id}
            className=" hover:bg-slate-100 p-[8px] hover:rounded-[10px] py-4"
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex  gap-4 space-x-2">
        <button
          className="w-[60px] h-[32px] rounded-md text-[16px] text-[#111827] border
            "
        >
          Login
        </button>
        <button
          className="w-[70px] h-[34px] rounded-md text-[14px]  border bg-black text-white
            "
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default MobileMenu;
