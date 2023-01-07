import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Footer from "../components/layoutElements/Footer";
import Header from "../components/layoutElements/Header";
import SideMenu from "../components/layoutElements/SideMenu";

const Layout = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <>
      <Header state={open} setState={setOpen} />
      {open && <SideMenu state={open} setState={setOpen} />}
      <Container className="body">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

const Container = styled.main`
  background: #fff;
  position: relative;
  z-index: 10;
`;
