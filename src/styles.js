import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "Center",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  heading: {
    color: "#333",
    fontFamily: "'Sacramento', cursive",
  },
  image: {
    marginLeft: "15px",
  },
}));
