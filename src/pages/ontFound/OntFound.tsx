import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

export const OntFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundBox
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};

const NotFoundBox = styled(Result)`
  min-height: 100vh;
  font-family: "IBMPlexSerif-Regular";
`;
