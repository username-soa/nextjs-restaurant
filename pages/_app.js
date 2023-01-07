import "../styles/main.scss";
import Layout from "../layouts/DefaultLayout";
import { ThemeProvider } from "styled-components";
import { RestaurantLocationProvider } from "../contexts/RestaurantLocationContext";

const theme = {
  colors: {
    primary: "#1b1b1b",
    secondary: "#98694c",
    scrollbarBG: "#1b1b1b",
    scrollbarColor: "#393d46",
    textDescription: "#989898",
    textColor: "rgba(0, 0, 0, 0.8)",
    btnBackground: "rgb(27, 27, 27)",
    lightBrown: "rgb(152, 105, 76)",
    mainBackgroundColor: "#f3efef",
    boxShadow:
      "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%),0 12px 24px rgb(0 0 0 / 5%)",
  },
};

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider theme={theme}>
      <RestaurantLocationProvider>
        {getLayout(<Component {...pageProps} />)}
      </RestaurantLocationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
