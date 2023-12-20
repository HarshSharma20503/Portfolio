'use client';
import { FunctionComponent } from 'react';
import Link from 'next/link';

type NavItemProps = {
  active: string;
  setActive: (name: string) => void;
  name: string;
};
type NavbarProps = {
   active : string;
   setActive: (name : string) => void;
}

const NavItem: FunctionComponent<NavItemProps> = ({ active, setActive, name }) => {
  return active !== name ? (
      <a>
        <span
          className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
          onClick={() => setActive(name)}>
          {name}
        </span>
      </a>
  ) : null;
};

const Navbar: FunctionComponent<NavbarProps> = ({ active, setActive }) => {

  return (
    <div className='flex items-center justify-between px-5 py-3 my-3 '>
      <span className='text-xl font-bold border-b-4 md:text-2xl text-green '>{active}</span>

      <div className='text-base text-red-400 font-normal md:text-xl'>
        <NavItem active={active} setActive={setActive} name='About' />
        <NavItem active={active} setActive={setActive} name='Resume' />
        <NavItem active={active} setActive={setActive} name='Projects' />
      </div>
    </div>
  );
};

export default Navbar;
