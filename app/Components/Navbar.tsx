'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('');

    const pathname = usePathname();

    useEffect(()=>{
        if(pathname === "/")setActiveItem('About')
    },[]);

    return (
        <div>
            <span className="font-bold text-green">{activeItem}</span>
            <div className="flex space-x-3 text-red-400 font-lg"> 
                {activeItem !== 'About' && (
                    <Link href="/">
                            <span onClick={()=> setActiveItem('About')}>About</span>
                    </Link>
                )}
                {activeItem !== 'Projects' && (
                    <Link href="/">
                            <span onClick={()=> setActiveItem('Projects')}>Projects</span>
                    </Link>
                )}
                {activeItem !== 'Resume' && (
                    <Link href="/">
                            <span onClick={()=> setActiveItem('Resume')}>Resume</span>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar