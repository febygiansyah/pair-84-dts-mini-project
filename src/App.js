import HomePage from "./containers/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./containers/RegisterPage";
// import MovieDetailPage from "./containers/MovieDetailPage";
import theme from "./themes/theme";
import LoginPage from "./containers/LoginPage";
// import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./containers/NotFound";
// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* <ScrollToTop> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {/* <Layout> */}
                <HomePage />
                {/* </Layout> */}
              </ProtectedRoute>
            }
          />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/movie/:movieId"
            element={
              <ProtectedRoute>
                {/* <Layout><MovieDetailPage /></Layout> */}
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
