import React from "react";
import { useParams } from "react-router-dom";

export const Detail = (props) => {
  console.log(props);
  let { id } = useParams();
  return <div>详情页面id:{id}</div>;
};
