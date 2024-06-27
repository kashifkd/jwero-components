import { Stack } from "@mui/material";
import JweroPrimaryButton from "./components/JweroPrimaryButton";

function App() {
  return (
    <>
      <h2>Jwero story book</h2>
      <Stack direction="row" alignItems="center" sx={{ gap: "1rem" }}>
        <h4>Buttons</h4>
        <JweroPrimaryButton title={"Confirm"}/>
      </Stack>
    </>
  );
}

export default App;
