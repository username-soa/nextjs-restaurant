import React from "react";
import styled from "styled-components";

const SocialLink = ({ SvgIcon, href }) => {
  return (
    <CustomLink href={href} target="_blank">
      <SvgIcon />
    </CustomLink>
  );
};

export default SocialLink;

const CustomLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  border: 1px solid #dadada;
  text-align: center;
  border-radius: 50%;

  svg {
    width: 14px;
    fill: rgb(152, 105, 76);
    path {
      fill: rgb(152, 105, 76) !important;
    }
    circle {
      fill: rgb(152, 105, 76) !important;
    }
  }
  &:hover {
    background-color: rgb(152, 105, 76);
    svg {
      fill: #fff;
      path {
        fill: #fff !important;
      }
      circle {
        fill: #fff !important;
      }
    }
  }
`;
