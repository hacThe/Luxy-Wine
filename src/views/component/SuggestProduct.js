import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { productServices } from "../../services";
import SliderProduct from "./SliderProducts";
import "./SuggestProduct.scss";

function SuggestProduct(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productServices.getListSpecialProduct().then((data) => {
      setProducts(data.data.slice(0, 10));
    });
  }, []);

  return (
    <div className="suggest-product-wrapper">
      <Container>
        <h1>Đề xuất cho bạn</h1>
      </Container>
      <div className="slider-product">
        <SliderProduct products={products} />
      </div>
    </div>
  );
}

export { SuggestProduct };
