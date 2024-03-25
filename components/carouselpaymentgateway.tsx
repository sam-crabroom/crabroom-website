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
        
        <div className="rbd-core-ui  rounded-3xl">
            <h1 className='pt-10 h3 text-cyan-400 text-center pb-20'>Our Favourite Reviews</h1>
            <div className="rbd-review-slider">
                <div className="rbd-review-container">
                    <div className="rbd-review review1.1 rbd-curr">
                        {/* <h3 className="rbd-heading">The POS matchmaker simplified our selection process, ensuring we found the perfect fit for our business needs.</h3> */}
                        {/* <i className="renderSVG" data-icon="star" data-repeat="5"></i> */}
                        <div className="rbd-content text-slate-500">"Highly recommend! This efficiently reduced our time in searching and comparing POS solutions online, making it incredibly effective.""</div>
                        <div className="rbd-review-meta">- Michael Thompson, USA. on Jan 15, 2024</div>
                    </div>
                    <div className="rbd-review review1.2 rbd-next">
                        {/* <h3 className="rbd-heading">These blokes are payment whizzes </h3> */}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"While the tool gave us a fair go at making a decision, having a yarn for some advice turned out ace. The team led the way and chucked in the payment gateway quick smart."</div>
                        <div className="rbd-footing">
                        </div>
                        <div className="rbd-review-meta">- Emma Johnson, Australia. on Feb 8, 2024
</div>
                    </div>
                    <div className="rbd-review review1.3">
                        {/* <h3 className="rbd-heading">Thanks to the Payment Gateway matchmaking tool, we discovered an ideal solution tailored to our unique requirements.</h3> */}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"It's a game-changer for our business! Utilising this AI tool, we found a cheaper solution and saved thousands of dollars a month. Brilliant!"</div>
                        <div className="rbd-footing">
                            {/* <!-- <a class="rbd-button rbd-small" href="#">Read More</a> --> */}
                        </div>
                        <div className="rbd-review-meta">- Jessica Smith, Canada. on Feb 20, 2024
</div>
                    </div>
                    <div className="rbd-review review1.4">
                        {/* <h3 className="rbd-heading">This made finding the right payment solution effortless.</h3> */}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"It saved us time and resources while optimising our payment processes. I loved how this tool utilises AI to compare shortlisted gateways, focusing on my specific requirements. It's a game-changer!"</div>
                        <div className="rbd-review-meta">-Alexander Lee, UK. on Jan 20, 2024</div>
                    </div>
                    <div className="rbd-review review1.7">
                        {/* <h3 className="rbd-heading">The PG/POS tool exceeded our expectations.</h3> */}
                        <i className="renderSVG" data-icon="star" data-repeat="5"></i>
                        <div className="rbd-content text-slate-500">"It guided us to the perfect payment gateway, enhancing our business operations significantly. Initially, we spent a week choosing a payment gateway, but this tool helped me finish the task in 5 mins. The AI-powered tips were incredibly helpful!"</div>
                        <div className="rbd-review-meta">- Daniel Nguyen, Vietnam. on Mar 1, 2024</div>
                    </div>

                   

                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
