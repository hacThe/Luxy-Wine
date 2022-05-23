import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductComponent} from "../product-component/ProductComponent";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-product-wrapper">
        <Slider {...settings}>
          {this.props.products.map((product,key) => (
            <div key={key}>
              <ProductComponent product={product} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}