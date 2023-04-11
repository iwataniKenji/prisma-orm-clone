import { ThemeProvider } from "@mui/material";
import { HomePage } from "./pages/HomePage";

import defaultTheme from "./data/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
