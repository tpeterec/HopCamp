import { useState, useEffect } from "react";
import "./Ratings.css";

const Ratings = () => {
    const defaultReviewsAmount = 6;
    const [ratingsData, setRatingsData] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(defaultReviewsAmount);
    console.log(ratingsData);
    
    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/ratings");
                if (response.ok) {
                    const data = await response.json();
                    setRatingsData(data);
                } else {
                    throw new Error('Request failed');
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchRatings();
    }, []);
    
    const allReviewsAmount = ratingsData.length;

    const handleShowMore = () => {
        if (visibleReviews === defaultReviewsAmount) {
            setVisibleReviews(allReviewsAmount);
        } else {
            setVisibleReviews(defaultReviewsAmount);
        }
    };

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
                        {ratingsData.slice(0, visibleReviews).map((ratingData) => (
                            <RatingCard
                                key={ratingData.id}
                                username={ratingData.username}
                                pic_url={ratingData.pic_url}
                                date={ratingData.date}
                                campsite={ratingData.campsite}
                                recommend={ratingData.recommend}
                                top_line={ratingData.top_line}
                                narrative={ratingData.narrative}
                            />
                        ))}
                    </div>
                    <div className="d-flex">
                        <button className="show-more-btn" onClick={handleShowMore}>{visibleReviews === defaultReviewsAmount ? 'Show More' : 'Show Less'}</button>
                        <button className="show-more-btn ms-2">
                            <a href="https://www.hipcamp.com/en-US/land/california-salmon-creek-ranch-4kk9hl90/reviews?shareid=7cjfmw8j3&adults=1&children=0&arrive=2023-05-17&depart=2023-05-20" target="_blank" rel="noopener noreferrer" className="no-underline">Show all 1092 reviews</a>
                        </button>
                    </div>               
                </div>
            </div>
            
        </>
    );
};

const RatingCard = (props) => {
    const recommendText = props.recommend ? "recommends" : "doesn't recommend" ;
    
    const originalDateString = props.date;
    const originalDate = new Date(originalDateString);

    const month = originalDate.getMonth() + 1; // Adding 1 because months are zero-based
    const day = originalDate.getDate();
    const year = originalDate.getFullYear();

    const reformattedString = `${month.toString().padStart(2, '0')}, ${day.toString().padStart(2, '0')} ${year}`;

    return (
        <>
            <div className="rating-card">
                <div className="rating-card-header">
                    <div className="user-pic-thumb">
                        <img className="user-pic" src={props.pic_url}></img>
                        <div className="review-thumb-wrapper-p">
                        <svg className="review-thumb" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"/></svg>
                        </div>
                    </div>
                    <div className="ps-3">
                        <div>
                            <span className="rating-card-user-name">{props.username}</span>
                            <span className="ms-1">{recommendText}</span>
                        </div>
                        <span>{reformattedString}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>{props.campsite}</span>
                    </div>
                    <div className="mt-2 mb-2">
                        <span className="rating-card-top-line">{props.top_line}</span>
                    </div>
                    <span className="rating-card-narrative">{props.narrative}</span>
                </div>
            </div>
        </>
    );
};

export default Ratings;
