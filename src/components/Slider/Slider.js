import React, { Component } from 'react';
import Carousel from 'react-grid-carousel'
import content from "../../content";


export default class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel cols={3} row={1} gap={10} loop >
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

 