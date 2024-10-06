import Link from 'next/link';

const initialItems = [
  {
    id: 1,
    path: '/pricing',
    label: 'Pricing',
  },
  {
    id: 2,
    path: 'customers',
    label: 'Customers',
  },
  {
    id: 3,
    path: '/blog',
    label: 'Blog',
  },
  {
    id: 4,
    path: '/docs',
    label: 'Docs',
  },
  {
    id: 5,
    path: 'extra',
    label: 'Extra',
  },
];

const MobileMenu = () => {
  return (
    <ul className="md:hidden flex flex-col flex-start px-5 bg-white h-full rounded-3xl leading-[0.4px] p-5 mt-[0.2px]">
      {initialItems.map((item) => (
        <li
          key={item.id}
          className=" hover:bg-slate-100 p-[8px] hover:rounded-[10px] py-4"
        >
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MobileMenu;
