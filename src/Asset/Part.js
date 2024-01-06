import * as React from "react";
import { makeStyles, tokens, Divider } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  customWidth: {
    width: "800px",
  },
});

export const Part = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider className={styles.customWidth} appearance="brand">
          My Divider
        </Divider>
      </div>
    </div>
  );
};
