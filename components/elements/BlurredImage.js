import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const BlurredImage = ({
  alt,
  image,
  width,
  height,
  handleClick,
  clickable = false,
  ...extra
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Container width={width} height={height} style={{ ...extra }}>
      <Image
        fill
        alt={alt ? alt : "image"}
        src={image}
        className={
          isLoading
            ? "blurred-image image-loading"
            : "blurred-image image-loaded"
        }
        onClick={() => {
          clickable ? handleClick() : null;
        }}
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
      />
    </Container>
  );
};

export default BlurredImage;

const Container = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  background: #edf2f7;
  width: ${(props) =>
    props.width.toString().includes("%") ? props.width : `${props.width}px`};
  height: ${(props) =>
    props.height.toString().includes("%") ? props.height : `${props.height}px`};
  .blurred-image {
    object-fit: cover;
    transition: all 0.7s ease-in-out;
  }
  .image-loading {
    transform: scale(1.1);
    filter: blur(40px) grayscale(50%);
  }
  .image-loaded {
    transform: scale(1);
    filter: blur(0) grayscale(0);
  }
`;
