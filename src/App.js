import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import IndoPage from "./pages/covid/IndoPage";
import ProvPage from "./pages/covid/ProvPage";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
   /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/Indonesia" element={<IndoPage />} />
            <Route path="/covid/Provinsi" element={<ProvPage />} />
          </Routes>
        </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
