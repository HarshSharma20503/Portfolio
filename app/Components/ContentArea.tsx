import { FunctionComponent } from 'react';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';

type ContentAreaProps = {
  active: string;
};

const ContentArea: FunctionComponent<ContentAreaProps> = ({ active }) => {
  return (
    <div>
      {active === 'About' && <About/>}
      {active === 'Resume' && <Resume/>}
      {active === 'Projects' && <Projects/>}
    </div>
  );
};

export default ContentArea;
