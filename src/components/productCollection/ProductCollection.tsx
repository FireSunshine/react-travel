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
                id={products?.[0]?.id}
                size={"large"}
                title={products?.[0]?.name}
                imageSrc={products?.[0]?.images}
                price={products?.[0]?.price}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products?.[1]?.id}
                    size={"small"}
                    title={products?.[1]?.name}
                    imageSrc={products?.[1]?.images}
                    price={products?.[1]?.price}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products?.[2]?.id}
                    size={"small"}
                    title={products?.[2]?.name}
                    imageSrc={products?.[2]?.images}
                    price={products?.[2]?.price}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products?.[3]?.id}
                    size={"small"}
                    title={products?.[3]?.name}
                    imageSrc={products?.[3]?.images}
                    price={products?.[3]?.price}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products?.[4]?.id}
                    size={"small"}
                    title={products?.[4]?.name}
                    imageSrc={products?.[4]?.images}
                    price={products?.[4]?.price}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products?.[5]?.id}
                size={"small"}
                title={products?.[5]?.name}
                imageSrc={products?.[5]?.images}
                price={products?.[5]?.price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products?.[6]?.id}
                size={"small"}
                title={products?.[6]?.name}
                imageSrc={products?.[6]?.images}
                price={products?.[6]?.price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products?.[7]?.id}
                size={"small"}
                title={products?.[7]?.name}
                imageSrc={products?.[7]?.images}
                price={products?.[7]?.price}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products?.[8]?.id}
                size={"small"}
                title={products?.[8]?.name}
                imageSrc={products?.[8]?.images}
                price={products?.[8]?.price}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </ProductCollectionBox>
  );
};
