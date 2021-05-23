import React, { Component } from 'react';
import Carousel from 'react-grid-carousel'
import content from "../../content";


export default class Slider extends Component {
    render() {
        return (
            


            <div className="min-h-screen flex flex-col items-center justify-center font-dosis" style={{
                background: "#091c29",
              }}
            >

            <h1 className="text-5xl font-bold text-white">Projects</h1>
                <Carousel cols={3} row={1} gap={10} loop >
        <Carousel.Item>
        {
            <img alt="" src={content.header.img} />

        }
        </Carousel.Item>
        <Carousel.Item>
        {
            <img alt="" src={content.carousel.img} />

        }
        </Carousel.Item>
        <Carousel.Item>
        {
            <img alt="" src={content.header.img} />

        }
        </Carousel.Item>
        <Carousel.Item>
        {
            <img alt="" src={content.header.img} />

        }
        </Carousel.Item>
        <Carousel.Item>
        {
            <img alt="" src={content.header.img} />

        }
        </Carousel.Item>

        </Carousel>
            </div>
        );
    }
}

 