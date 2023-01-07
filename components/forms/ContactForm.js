import React, { useRef } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { Formik, Form } from "formik";
import { motion, useInView } from "framer-motion";
import CustomInput from "../elements/CustomInput";

const parentAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.2 },
  },
};

const childAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const ContactForm = ({ handleSubmit }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        <div>
          <motion.h3 variants={childAnimations} className="contact-h3">
            Bonjour
          </motion.h3>
          <motion.p
            variants={childAnimations}
            className="contact-title-description"
          >
            Comment pouvons-nous vous aider ?
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={parentAnimations}
      >
        <Formik
          enableReinitialize={true}
          initialValues={{
            fname: "",
            lname: "",
            phone: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            fname: Yup.string().required("(*) Obligatoire"),
            lname: Yup.string().required("(*) Obligatoire"),
            phone: Yup.string()
              .matches(
                /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm,
                "Phone number is not valid"
              )
              .min(10)
              .max(13)
              .required("(*) Obligatoire"),
            email: Yup.string()
              .email("(*) Doit être un e-mail")
              .required("(*) Obligatoire"),
            message: Yup.string().required("(*) Obligatoire"),
          })}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            await handleSubmit(data);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form className="form first-form">
              <motion.div
                variants={childAnimations}
                className="form-row column-2"
              >
                <CustomInput
                  id="fname"
                  type="text"
                  name="fname"
                  label="Prénom"
                  placeholder="Entrer votre Email"
                />
                <CustomInput
                  id="lname"
                  type="text"
                  name="lname"
                  label="Nom"
                  placeholder="Entrer votre Email"
                />
              </motion.div>
              <motion.div
                variants={childAnimations}
                className="form-row column-2"
              >
                <CustomInput
                  id="email"
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Entrer votre Email"
                />
                <CustomInput
                  id="phone"
                  type="text"
                  name="phone"
                  label="Téléphone"
                  placeholder="Entrer votre Email"
                />
              </motion.div>
              <motion.div
                variants={childAnimations}
                className="form-row column-1"
              >
                <CustomInput
                  textarea
                  id="message"
                  type="text"
                  name="message"
                  label="Message"
                  placeholder="Entrer votre Email"
                />
              </motion.div>
              <motion.div
                variants={childAnimations}
                className="form-row column-1"
              >
                <button onClick={handleSubmit}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </Container>
  );
};

export default ContactForm;

const Container = styled.section`
  padding: 2em;
  margin: 2em 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-gap: 0.5em;
  form {
    gap: 1em;
    display: flex;
    flex-direction: column;
    .form-row {
      width: 100%;
      gap: 1em;
      display: grid;
    }
    .column-1 {
      grid-template-columns: 1fr;
    }
    .column-2 {
      grid-template-columns: 1fr 1fr;
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
      width: 150px;
      margin: 1em auto;
      &:hover {
        color: #fff;
        text-decoration: none;
        background-position: right center;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 100%;
    grid-gap: 1.5em;
    form {
      button {
        padding: 10px 2em;
        width: fit-content;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-gap: 0.75em;
    padding: 1em;
    form {
      .column-2 {
        grid-template-columns: 1fr;
      }
    }
  }
`;
