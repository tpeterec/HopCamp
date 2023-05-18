import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button } from "react-bootstrap";
import "./ThingsNearby.css";
import BodegaHead from "./assets/Bodega Head.jpg"

const ThingsNearby = () => {
    const nearbyActivities = [
      {
        id: 1,
        title: 'Bodega Head',
        distance: '4 miles away',
        image: BodegaHead,
      },
      {
        id: 2,
        title: 'Armstrong Redwoods State Natural Reserve',
        distance: '12 miles away',
        image: './assets/Armstrong Redwoods State Natural Reserve.jpg',
      },
      // Add more activities...
    ];

    const breakpoints = [
        {width: 1, nearbyActivities:1},
        {width: 550, nearbyActivities:2},
        {width: 768, nearbyActivities:3},
        {width: 1200, nearbyActivities:4},
    ];
  
    return (
        <>
            <h1 className="Title">Things To Do Nearby</h1>
            <Carousel breakpoints={breakpoints} classname="carousel">
                {nearbyActivities.map((activity, index) => (
                    <Carousel.Item key={index}>
                        <Card className="card">
                            <Card.Img variant="top" className="card-image" src={activity.image} alt={activity.title} />
                            <Card.Body>
                                <Card.Title>{activity.title}</Card.Title>
                                <Card.Text>{activity.distance}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};
  

export default ThingsNearby;