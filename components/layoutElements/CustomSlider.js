import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import BlurredImage from "../elements/BlurredImage";

const swipeConfidenceThreshold = 10000;

const variants = {
  toLeft: ({ width, index }) => ({
    x: -index * width,
  }),
  toRight: ({ width, index }) => ({
    x: -(width * index - width),
  }),
};

const CustomSlider = ({ data }) => {
  const containerRef = useRef();
  const sliderRef = useRef();
  const parentRef = useRef();
  const animation = useAnimation();
  const [width, setWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleDragEnd = (e, { offset, velocity }) => {
    //calculate swipe direction power
    const swipe = Math.abs(offset.x) * velocity.x;
    console.log("swipe is : ", swipe);
    if (swipe < -swipeConfidenceThreshold && sliderIndex > data.length - 1) {
      console.log("end reached");
      return;
    }
    if (swipe > swipeConfidenceThreshold && sliderIndex === 0) {
      console.log("this is the first element ");
      return;
    }
    if (swipe < -swipeConfidenceThreshold) {
      animation.stop();
      console.log("swiping left");
      animation.start("toLeft");
      setSliderIndex(sliderIndex + 1);
    } else if (swipe > swipeConfidenceThreshold) {
      animation.stop();
      console.log("swiping right");
      animation.start("toRight");
      setSliderIndex(sliderIndex - 1);
    }
  };

  useEffect(() => {
    const calcConstraint = () => {
      //   const w =
      //     containerRef?.current?.scrollWidth - containerRef?.current?.offsetWidth;
      //   setWidth(w);
      setSliderWidth(parentRef?.current?.offsetWidth);
      //   console.log("setSliderWidth is : ", parentRef?.current?.offsetWidth);
    };

    calcConstraint();
    window.addEventListener("resize", calcConstraint);

    return () => window.removeEventListener("resize", calcConstraint);
  }, [containerRef.current]);

  return (
    <Container
      ref={parentRef}
      sliderItems={data.length}
      sliderWidth={sliderWidth * data.length}
    >
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={parentRef}
        // dragConstraints={{ right: 0, left: 0 }}
        // dragDirectionLock
        onDragEnd={handleDragEnd}
        variants={variants}
        animate={animation}
        whileTap={{ cursor: "grabbing" }}
        custom={{
          width: sliderWidth,
          index: sliderIndex,
        }}
        className="custom-slider-content"
      >
        {data.map((item, index) => {
          return (
            <div
              className="slider-item"
              ref={sliderRef}
              key={`custom-slider-item-${index}`}
            >
              <BlurredImage
                image={item.image}
                width="100%"
                height="100%"
                alt={`gallery-image-${item.id}`}
              />
            </div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default CustomSlider;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-x: hidden; */
  .custom-slider-content {
    width: ${(props) => `${props.sliderWidth}px`};
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${(props) => props.sliderItems}, 1fr);
  }
  .slider-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
