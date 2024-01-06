import {
  makeStyles,
  shorthands,
  FluentProvider,
  webDarkTheme,
} from "@fluentui/react-components";
import Top from "./components/Top";
import Profile from "./components/Profile";
import Bottom from "./components/Bottom";
import { Part } from "./Asset/Part";
import "./App.css";

const useStyles = makeStyles({
  container: {
    ...shorthands.gap("16px"),
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
});

function App() {
  const styles = useStyles();
  return (
    <FluentProvider theme={webDarkTheme} className={styles.container}>
      <Top />
      <Part />
      <Profile />
      <Part />
      <Bottom />
    </FluentProvider>
  );
}

export default App;
