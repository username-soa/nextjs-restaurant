import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { motion } from "framer-motion";
import CustomInput from "../elements/CustomInput";

const NewsLetterForm = ({ handleSubmit, isInView, animations }) => {
  return (
    <Container
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={animations}
    >
      <Formik
        enableReinitialize={true}
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("(*) Doit être un e-mail")
            .required("(*) Obligatoire"),
        })}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          await handleSubmit(data);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, errors }) => (
          <Form className="form first-form">
            <div className="form-row">
              <CustomInput
                id="email"
                type="text"
                name="email"
                showError={false}
                placeholder="Entrer votre Email"
              />
              <button onClick={handleSubmit}>
                {isSubmitting ? "S'abonner..." : "S'abonner"}
              </button>
            </div>
            {errors.email && <div className="error">{errors.email}</div>}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default NewsLetterForm;

const Container = styled(motion.div)`
  width: 50%;
  form {
    .form-row {
      gap: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    button {
      color: white;
      display: block;
      font-size: 14px;
      transition: 0.5s;
      text-align: center;
      padding: 10px 17px;
      border-radius: 20px;
      box-shadow: 0 0 20px #eee;
      text-transform: uppercase;
      background-size: 200% auto;
      background-image: linear-gradient(
        to right,
        #232526 0%,
        #414345 51%,
        #232526 100%
      );
      &:hover {
        color: #fff;
        text-decoration: none;
        background-position: right center;
      }
    }
    .error {
      font-size: 12px;
      color: red;
      opacity: 0.7;
      font-weight: 500;
      padding: 5px 10px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;
