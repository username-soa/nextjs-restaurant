import React from "react";
import { useField } from "formik";
import styled from "styled-components";

const CustomInput = ({
  id,
  label,
  textarea,
  required,
  showError = true,
  ...props
}) => {
  const [field, meta] = useField(props);

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    if (input) {
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    }
  };

  return (
    <CustomWrap>
      {label ? (
        <label htmlFor={props.id || props.name}>
          {label} {required ? <span className="red">*</span> : null}
        </label>
      ) : null}
      {props.type === "password" ? (
        <div className="input-wrp">
          <input
            id={id}
            {...field}
            {...props}
            className="input extra-padding"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.875"
            height="14"
            viewBox="0 0 18.875 14"
            onClick={() => togglePassword(id)}
          >
            <g id="eye" transform="translate(-0.5 -3.5)">
              <path
                id="Path_17"
                data-name="Path 17"
                d="M1,10.5S4.25,4,9.938,4s8.937,6.5,8.937,6.5S15.625,17,9.938,17,1,10.5,1,10.5Z"
                fill="none"
                stroke="#393d46"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx="3"
                cy="3"
                r="3"
                transform="translate(7 7.5)"
                strokeWidth="1"
                stroke="#393d46"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </svg>
        </div>
      ) : !textarea ? (
        <input
          className={meta.touched && meta.error ? "input input-error" : "input"}
          id={id}
          {...field}
          {...props}
        />
      ) : (
        <textarea
          className={meta.touched && meta.error ? "input input-error" : "input"}
          {...field}
          {...props}
          rows="8"
        />
      )}
      {meta.touched && meta.error && showError ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </CustomWrap>
  );
};

export default CustomInput;

const CustomWrap = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 15px;
    font-weight: 600;
    color: #4d4d4d;
    margin-bottom: 0.35em;
    margin-top: 1em;
    padding: 0 17px;
  }
  input,
  textarea {
    font-size: 14px;
    resize: vertical;
    border-radius: 20px;
    padding: 10px 17px;
    width: clamp(300px, 100%, 100%);
    transition: all 0.3s ease-in-out;
    border: 1px solid hsla(0, 14%, 95%, 1);
    outline-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      border: 1px solid hsla(0, 21%, 90%, 1);
    }
  }
  .input-error {
    border: 1.5px solid red;
  }
  .error {
    font-size: 12px;
    color: red;
    opacity: 0.7;
    font-weight: 500;
    padding: 10px 10px 5px 10px;
  }
  .extra-padding {
    padding: 10px 35px 10px 17px !important;
  }
  .input-wrp {
    position: relative;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    input,
    textarea {
      width: clamp(250px, 100%, 100%);
    }
  }
  @media only screen and (max-width: 400px) {
    input,
    textarea {
      width: clamp(200px, 100%, 100%);
    }
  }
`;
