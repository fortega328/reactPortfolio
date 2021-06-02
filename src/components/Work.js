import React from 'react';
// import ReactDOM from 'react-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
// import useWindowPosition from '../hook/useWindowPosition';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Work() {
  // const animated = useWindowPosition('header', 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis justify-center font-bold">{content.work.title}</h1>
      <p className="text-gray-600 justify-center text-2xl font-dosis mb-10">I have worked on</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">
 <div className="flex flex-col md:flex-row justify-center w-11/12 ">
 <Carousel showArrows={true} width="900px" infiniteLoop={true} height= "500px" dynamicHeight={true} showThumbs={false}  >
                <div>
                    <img src="/assets/budgegrub.png" alt="my app"/>
                    <a href="https://github.com/BudgeGrub/Budgegrub" className="legend">Click to see BudgeGrub</a>
                </div>
                <div>
                    <img src="/assets/notetaker.png" alt="my app1" />
                    <a href="https://github.com/fortega328/noteTaker" className="legend">Click to see NoteTaker</a>
                </div>
                <div>
                    <img src="/assets/findabuff.png" alt="my app2"/>
                    <a href="https://github.com/fortega328/kanf/tree/franko" className="legend">Click to see FindaBuff</a>
                </div>
                <div>
                    <img src="/assets/employeetracker.png" alt="my app3"/>
                    <a href="https://github.com/fortega328/EmployeeTracker" className="legend">Click to see EmployeeTracker</a>
                </div>
                <div>
                    <img src="/assets/ecommerce.png" alt="my app4"/>
                    <a href="https://github.com/fortega328/eCommerceBackend" className="legend">Click to see eCommerce</a>
                </div>
                <div>
                    <img src="/assets/mymdb.gif" alt="my app5"/>
                    <a href="https://floating-oasis-28235.herokuapp.com/profile" className="legend">Click to see MyMDB</a>
                </div>
            </Carousel> </div>
      </div>
    </div>
  );
}

