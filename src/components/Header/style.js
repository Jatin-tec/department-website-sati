import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  
  menuButton: {
    marginRight: theme.spacing(1),
    color: "black",
  },
  
  title: {
    fontSize: "1.38rem",
    color: "white",
    marginLeft: "10px",
    cursor: "pointer",
  },
  
  appBar: {
    backgroundColor: "Black",
    color: "white",
  },
  
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    marginRight: "10px",
    color: "white",
    cursor: "pointer",
  },
  
}));
