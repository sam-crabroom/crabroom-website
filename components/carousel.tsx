// ReviewSlider.js

import React, { useEffect, useState } from 'react';
// import './ReviewSlider.css'; // Import the CSS file

const ReviewSlider = () => {
    const [pause, setPause] = useState(false);

    useEffect(() => {
        console.log("loaded successfully");

        const slider = document.querySelector('.rbd-review-slider')! as HTMLElement;
        const slides = slider.querySelectorAll('.rbd-review');
        const total = slides.length;

        function pauseSlide() {
            slider.onmouseleave = function () {
                setPause(false);
            };

            slider.onmouseenter = function () {
                setPause(true);
            };

            return pause;
        }


        function slide() {
            if (pauseSlide()) return;
          
            const activeSlide = document.querySelector('.rbd-review-slider .rbd-review.rbd-curr');
          
            // Check if activeSlide is not null before performing operations
            if (activeSlide) {
              let prev, curr, next, soon;
          
              curr = activeSlide;
              prev = activeSlide.previousElementSibling;
              next = activeSlide.nextElementSibling;
          
              if (next !== null) {
                soon = next.nextElementSibling == null ? slides[0] : next.nextElementSibling;
              } else {
                next = slides[0];
                soon = slides[1];
              }
          
              // Check if the previous and next elements are not null before accessing classList
              if (prev !== null) {
                prev.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
              }
          
              curr.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
              curr.classList.add('rbd-prev');
          
              if (next !== null) {
                next.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
                next.classList.add('rbd-curr');
              }
          
              if (soon !== null) {
                soon.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
                soon.classList.add('rbd-next');
              }
            }
          }
          


        const slideTimer = setInterval(() => {
            slide();
        }, 3000);

        return () => {
            clearInterval(slideTimer);
        };
    }, []);

    return (
        <div className="rbd-core-ui">
            <div className="rbd-review-slider sm:mx-4">
                <div className="rbd-review-container">
                    
                    <div className="rbd-review review1.1 rbd-curr">
                       {/* <h3 className="rbd-heading">Stripe Checkout Integration with Wordpress Website</h3>*/}
                        {/* <i className="renderSVG" data-icon="star" data-repeat="5"></i> */}
                        <div className="rbd-content text-slate-500">"Bhavesh was one of the only applicants who truly understood what I was asking for in my job posting. He and his team implemented Stripe Checkout very quickly and answered all of my questions I had along the way. He is truly an expert and I will be looking to him for all of my Stripe needs."</div>
                        <div className="text-base text-center text-sky-500">- Tom Martin, United States. on Feb 16, 2021</div>
                    </div>
                    <div className="rbd-review review1.2 rbd-next">
                        {/*<h3 className="rbd-heading">API for Credit Card Authorization in BlueSnap </h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"Bhavesh is prompt, communicative, and helpful - working with him was a great experience. He was working with a product he had not worked with before, and he learned it effectively, interfaced with the manufacturer on our behalf, and ensured a quality project was completed."</div>
                        <div className="rbd-footing">
                        </div>
                        <div className="text-base text-center text-sky-500">- Jordan Weyenberg, United States. on May 20, 2021</div>
                    </div>
                    <div className="rbd-review review1.3">
                       {/* <h3 className="rbd-heading">Consulting on Stripe integration on landing page</h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"I posted a very complicated job and it was solved perfect by Bhavesh and his team. From the first message he understood the project and was able to guide and optimize on it from the start. With great communication and fast execution, I ended up with the ideal end product. He really goes above and beyond for his clients. I truly recommend you to let Bhavesh help you reach your goal on your project!"</div>
                        <div className="rbd-footing">
                            {/* <!-- <a class="rbd-button rbd-small" href="#">Read More</a> --> */}
                        </div>
                        <div className="text-base text-center text-sky-500">- Oliver Skytte, Denmark. on Mar 9, 2021</div>
                    </div>
                    <div className="rbd-review review1.4">
                       {/* <h3 className="rbd-heading">Stripe customer portal integration on Squarespace site</h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"Excellent and prompt communicator. Also extremely fair, advised I use a lesser expensive resource for a portion of the project. Would not hesitate at all to use Bhavesh's skills and expertise in the future."</div>
                        <div className="text-base text-center text-sky-500">- Karin McKercher, United States. on Jul 13, 2021</div>
                    </div>
                    <div className="rbd-review review1.7">
                        {/*<h3 className="rbd-heading">Stripe Payments API for integration project </h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"Prompt response and helped tackle the problem methodically and to a high standard."</div>
                        <div className="text-base text-center text-sky-500">- Jeremy Ullrich, New Zealand. on Sep 12, 2021</div>
                    </div>

                    <div className="rbd-review review1.5">
                        {/*<h3 className="rbd-heading">Stripe Connect & Plaid Integration with Wordpress</h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"Bhavesh is extremely knowledgeable and communicative. He's successfully completed several difficult projects for me quickly. I would highly recommend working with him!"</div>
                        <div className="text-base text-center text-sky-500">- Damien St John, United States. on Aug 7, 2022</div>
                    </div>
                    <div className="rbd-review review1.6">
                        {/*<h3 className="rbd-heading">Split Payment using WordPress + WooCommerce + Stripe </h3>*/}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"Bhavesh was great to work with! He is very knowledgeable of Stripe and helped us problem solve and think through a solution for our project. He was very communicative and helpful. Thanks!"</div>
                        <div className="text-base text-center text-sky-500">- Andi Thieman, United States. on Jul 12, 2021</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
