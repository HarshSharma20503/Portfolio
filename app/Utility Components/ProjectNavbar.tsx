import { FunctionComponent } from "react";
import { Category } from "@/types";
import { useTheme } from "next-themes";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer dark:hover:text-green hover:text-blue-400 ";
  // if (active === value ) 
  //   className += "text-blue-400";

    const { resolvedTheme } = useTheme();
    if(active === value && resolvedTheme === 'light')
    {
      className += " text-blue-400";
    } else if(active === value && resolvedTheme === 'dark') {
      className += " text-green";
    }

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value = "Next" {...props}/>
      <NavItem value = "RestApi" {...props}/>
      {/* <NavItem value="mongodb" {...props} /> */}
      {/* <NavItem value="express" {...props} /> */}
      <NavItem value= "android" {...props}/>
      <NavItem value = "firebase" {...props} />
      <NavItem value = "C++" {...props} />
      
      {/* <NavItem value="node" {...props} /> */}
    </div>
  );
};

export default ProjectsNavbar;