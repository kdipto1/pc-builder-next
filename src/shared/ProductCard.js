import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { Meta } = Card;
  return (
    <Link href={`/product-detail/${product._id}`}>
      <Card
        key={product._id}
        hoverable
        style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
        cover={
          <Image
            width={400}
            height={200}
            responsive="true"
            src={product.image}
            alt="pc components"
          />
        }
      >
        <Meta title={product.productName} />
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Status: {product.status}</p>
        <p>Rating: {product.averageRating}/5</p>
      </Card>
    </Link>
  );
};

export default ProductCard;
