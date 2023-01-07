import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import Portal from "../elements/Portal";
import BlurredImage from "../elements/BlurredImage";
import ImageModal from "../layoutElements/ImageModal";

const IMAGES_PADDING = 16;
const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const GallerySection = ({ images }) => {
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const [active, setActive] = useState(false);

  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [tempImage, setTempImage] = useState({
    id: images[0].id,
    url: images[0].image,
  });

  const getNextImage = (id) => {
    const tempImg = images.find((element) => element.id === id);
    setTempImage({ id: id, url: tempImg.image });
  };
  const handleClick = (url, id) => {
    setActive(true);
    setTempImage({ id: id, url: url });
  };

  //detecting if click or drag
  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };

  const clickOrDrag = (e, url, index) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 6 &&
      mouseUp > window.checkForDrag - 6
    ) {
      handleClick(url, index);
    }
  };

  return (
    <Container itemsGap={IMAGES_PADDING} ref={ref}>
      <motion.div
        exit="hidden"
        initial="hidden"
        className="gallery-top"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        <motion.h3 variants={childAnimations} className="main-h3">
          nous images
        </motion.h3>
        <motion.p variants={childAnimations} className="main-title-description">
          Suis nous sur Instagram, pour ne pas manquer aucun actualités
        </motion.p>
      </motion.div>
      <motion.div className="gallery-images-wrp" ref={sliderRef}>
        <motion.div
          drag="x"
          dragConstraints={sliderRef}
          className="slider-container"
        >
          {images.map((item, index) => {
            return (
              <div
                key={`gallery-image-${index}`}
                onMouseDown={(e) => mouseDownCoords(e)}
                onMouseUp={(e) => clickOrDrag(e, item.image, item.id)}
              >
                <BlurredImage
                  width={300}
                  height={400}
                  image={item.image}
                  alt={`gallery-image-${index}`}
                />
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      {active && (
        <Portal>
          <ImageModal
            img={tempImage.url}
            imgId={tempImage.id}
            handleClose={setActive}
            handleNext={getNextImage}
            imagesLength={images.length}
          />
        </Portal>
      )}
    </Container>
  );
};

export default GallerySection;

const Container = styled.section`
  padding: 2em 0;
  .gallery-top {
    padding-bottom: 1.25em;
  }
  .gallery-images-wrp {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }
  .slider-container {
    cursor: grab;
    display: inline-flex;
    gap: ${(props) => `${props.itemsGap}px`};
    > div {
      flex-shrink: 0;
      img {
        pointer-events: none;
        transition: transform 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.02);
        }
      }
    }
  }
`;
