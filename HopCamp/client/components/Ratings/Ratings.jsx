import React from "react";
import "./Ratings.css";
import hopcampLogo from "../../assets/hopcamp_logo.png"
import userPic1 from "../../assets/user_prof_pic-1.jpg"
import userPic2 from "../../assets/user_prof_pic-2.jpg"

const Ratings = () => {
    return (
        <>
            <div className="rating-root-container">
                <div className="rating-container-centered">
                    <div className="rating-summary-container">
                        <div className="d-flex align-items-baseline">
                            <svg className="rating-summary-thumb" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="brand2.500" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"/></svg>
                            <span className="rating-summary-text ps-1">97%</span>
                        </div>
                        <span className="rating-summary-text mt-2">1758 ratings · 1089 reviews</span>
                    </div>
                    <div className="rating-container">
                        <div className="rating-card">
                            <div className="rating-card-header">
                                <div className="user-pic-thumb">
                                    <img className="user-pic" src={userPic1}></img>
                                    <div className="review-thumb-wrapper-p">
                                    <svg className="review-thumb" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"/></svg>
                                    </div>
                                </div>
                                <div className="ps-3">
                                    <div>
                                        <span className="rating-card-user-name">Emma M.</span>
                                        <span className="ms-1">recommends</span>
                                    </div>
                                    <span>May 8, 2023</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Eagles Nest Treehouse Farmstay</span>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span className="rating-card-top-line">Great stay!</span>
                                </div>
                                <span className="rating-card-narrative">Lesley and John were lovely hosts. They are incredibly responsive and kindly showed us around the treehouse and answered questions about the property. Photos cannot do the treehouse justice. The craftsmanship and peaceful location are truly special.</span>
                            </div>
                        </div>
                        <div className="rating-card">
                            <div className="rating-card-header">
                                <div className="user-pic-thumb">
                                    <img className="user-pic" src={hopcampLogo}></img>
                                    <div className="review-thumb-wrapper-n">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="brand2.500" className="review-thumb" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"/></svg>
                                    </div>
                                </div>
                                <div className="ps-3">
                                    <div>
                                        <span className="rating-card-user-name">Karilyn O.</span>
                                        <span className="ms-1">doesn't recommend</span>
                                    </div>
                                    <span>May 2, 2023</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Site 2 - Creekside Camp</span>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span className="rating-card-top-line"></span>
                                </div>
                                <span className="rating-card-narrative">Sadly we were pressed for time driving up from LA and since they have a must arrive before 9pm notice, we headed straight to the site not realizing that we were not near any food options that were still open. We survived, but I wish I had known in advance that they have a 9pm arrival time (although I’m sure we would have thought we would arrive early anyway!) The sites are located literally right on the road, just separated by a few plants and a fence. It’s a quiet road, but it does just feel like you are in some random overgrown area to be honest. We were in a 22 foot camper and it was tough to fit it well. We had to leave quite early in the morning and were shocked to see someone sleeping on the ground near the gate. It was a bit unnerving as we didn’t see a vehicle so weren’t sure if they were legally staying or not. This was our first time to do Hipcamp and we were a bit disappointed. Considering the price of this site, I’m not sure I would recommend as it’s quite pricey for what you get, unless this is your destination and you plan to hike around the property more…</span>
                            </div>
                        </div>
                        <div className="rating-card">
                            <div className="rating-card-header">
                                <div className="user-pic-thumb">
                                    <img className="user-pic" src={userPic2}></img>
                                    <div className="review-thumb-wrapper-p">
                                    <svg className="review-thumb" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"/></svg>
                                    </div>
                                </div>
                                <div className="ps-3">
                                    <div>
                                        <span className="rating-card-user-name">Inbal B.</span>
                                        <span className="ms-1">recommends</span>
                                    </div>
                                    <span>May 2, 2023</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Site 2 - Creekside Camp</span>
                                </div>
                                <div className="mt-2 mb-2">
                                    <span className="rating-card-top-line">beautiful campsite, part of nature!</span>
                                </div>
                                <span className="rating-card-narrative">Such a beautiful camp! Close enough to home (bay area folks), but totally secluded - a part of nature...John and Lesley were very responsive to my many questions, we were 4 families and camped along the meadow of combined campsites #1, #2, #3 - had the creek to ourseleves and overall a wonderful time. Take note there is no running water - literally - that is good for dishwashing/ hydrating. BYO. We will definitely come back!</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="show-more-btn">Show More</button>
                    </div>               
                </div>
            </div>
            
        </>
    );
};

export default Ratings;
