import { Col, Divider, Row } from "antd";
import React from "react";
import { ProductImage } from "./ProductImage";
import { ProductCollectionBox } from "./ProductCollection.style";

interface PropsTypes {
  title: JSX.Element;
  sideImage: string;
  products: any;
}

export const ProductCollection: React.FC<PropsTypes> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <ProductCollectionBox>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} className="side-image" alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size={"large"}
                title={products[0].title}
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size={"small"}
                    title={products[1].title}
                    imageSrc={products[1].touristRoutePictures[0].url}
                    price={products[1].price}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[2].id}
                    size={"small"}
                    title={products[2].title}
                    imageSrc={products[2].touristRoutePictures[0].url}
                    price={products[2].price}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[3].id}
                    size={"small"}
                    title={products[3].title}
                    imageSrc={products[3].touristRoutePictures[0].url}
                    price={products[3].price}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[4].id}
                    size={"small"}
                    title={products[4].title}
                    imageSrc={products[4].touristRoutePictures[0].url}
                    price={products[4].price}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products[4].id}
                size={"small"}
                title={products[4].title}
                imageSrc={products[4].touristRoutePictures[0].url}
                price={products[4].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[4].id}
                size={"small"}
                title={products[4].title}
                imageSrc={products[4].touristRoutePictures[0].url}
                price={products[4].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[4].id}
                size={"small"}
                title={products[4].title}
                imageSrc={products[4].touristRoutePictures[0].url}
                price={products[4].price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products[4].id}
                size={"small"}
                title={products[4].title}
                imageSrc={products[4].touristRoutePictures[0].url}
                price={products[4].price}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </ProductCollectionBox>
  );
};
