import React from "react";
import ContainerArea from "./Container.styled";

const Container: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <ContainerArea className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      {children}
    </ContainerArea>
  );
};

export default Container;
