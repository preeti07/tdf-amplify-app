import { makeStyles } from "@mui/styles";

interface Styles {
  root: string;
};

const useStyles = makeStyles<Styles>(() => ({
  root: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "rgba(25, 118, 210, 0.5)",
  },
}));

export default useStyles;