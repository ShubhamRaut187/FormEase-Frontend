import React from 'react';
import ApplicationCard from './ApplicationCard';
import './Component Styles/ApplicationSlider.css'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ApplicationSlider({Applications}) {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        // nextArrow:<SlickNextArrow/>,
        // prevArrow:<SlickPreviousArrow/>,
        vertical: true,
        verticalSwiping: true,
        
        beforeChange: function(currentSlide, nextSlide) {
        //   console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
        //   console.log("after change", currentSlide);
        }
    };


    return (
        <div className='applicationslider_main'>
            {
                Applications ? <Slider {...settings}>
                        {
                            Applications.map((elem,inde)=>{
                                return <ApplicationCard key={elem._id} elem={elem}/>
                            })
                        }
                </Slider> : <></>
            }
        </div>
    );
}

export default ApplicationSlider;