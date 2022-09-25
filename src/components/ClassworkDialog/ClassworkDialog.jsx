import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LinkIcon from "@mui/icons-material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, TextField } from "@material-ui/core";
import "./Style.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import Cookies from "js-cookie";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs/locale/fr";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function ClassworkDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [topic, setTopic] = React.useState("No Topic");
  const [value, setValue] = React.useState(Dayjs);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });

  const styles = (theme) => ({
    root: {
      backgroundColor: "blue",
      // Match [0, md)
      //       [0, 900px)
      [theme.breakpoints.down("md")]: {
        backgroundColor: "red",
      },
    },
  });

  const topics = [{ label: "topic 1" }, { label: "topic 2" }];

  return (
    <div>
      <MenuItem onClick={handleClickOpen} disableRipple>
        {props.typeIcon}
        {props.type}
      </MenuItem>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar color="action" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            {props.typeIcon}
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.type}
            </Typography>
            <Button color="primary" variant="contained" component="label">
              Assign
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="AssignmentHeading">
              <h2 className="Assignment-color">{props.type} Details</h2>
            </div>
            <div className="Assignment--Main">
              <div className="">
                <div className="">
                  <div className="Announcement-Section">
                    <TextField
                      id="TextFeild"
                      multiline
                      label="Title"
                      variant="filled"
                      // value
                      // onChange={(e) => setInput(e.target.value)}
                    />
                    <ThemeProvider theme={myTheme}>
                      <MUIRichTextEditor
                        label="Instructions (Optional)."
                        controls={[
                          "bold",
                          "italic",
                          "underline",
                          "link",
                          "bulletList",
                          "numberList",
                          "code",
                        ]}
                      />
                    </ThemeProvider>
                  </div>
                </div>
              </div>
            </div>

            <div className="AssignmentHeading">
              <h2 className="Assignment-color">Attach</h2>
            </div>
            <div className="Assignment-Main">
              <span className="Assignment-Buttons">
                <span className="button-1">
                  <Button color="action" variant="contained" component="label">
                    <LinkIcon color="primary" sx={{ fontSize: 50 }} />
                  </Button>
                </span>
                <span className="button-1">
                  <Button color="action" variant="contained" component="label">
                    <FileUploadIcon color="primary" sx={{ fontSize: 50 }} />
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </span>
                <span className="button-1">
                  <Button color="action" variant="contained" component="label">
                    <YouTubeIcon color="primary" sx={{ fontSize: 60 }} />
                  </Button>
                </span>
              </span>
            </div>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Grid container sx={{ px: 5 }}>
              <Grid container spacing={2} sx={{ flexDirection: "column" }}>
                <Grid item sx={{ my: 5 }}>
                  <p>Points</p>
                  <TextField
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    id="marks"
                    label="Marks"
                    size="small"
                    variant="filled"
                  />
                </Grid>
                <Grid item sx={{ my: -2 }}>
                  <p>Due</p>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale={"fr"}
                  >
                    <DatePicker
                      label=""
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item sx={{ my: 5 }}>
                  <p>Topic</p>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={topics}
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="" />}
                  />
                  <FormControl variant="filled">
                    <Select
                      labelId="simple-select-filled-label-topic"
                      id="simple-select-filled-topic"
                      value={topic}
                      onChange={(e) => {
                        setTopic(e.target.value);
                      }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
