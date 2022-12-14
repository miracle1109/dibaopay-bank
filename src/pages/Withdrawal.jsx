import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  CardContent,
  TextField,
  NativeSelect,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CampaignIcon from "@mui/icons-material/Campaign";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "12px 13px 7px 12px",
    borderRadius: "4px",
  },
};
const notificationstyle = {
  main: {
    background: "white",
    position: "absolute",
    marginTop: "-35px",
    padding: "5px 6px 0 5px",
    borderRadius: "50%",
  },
};
const Withdrawal = () => {
  const selectionTime = [
    { value: "interval", title: "Interval" },
    { value: "today", title: "Today" },
    { value: "lastday", title: "Last Day" },
    { value: "thisweek", title: "This Week" },
    { value: "lastweek", title: "Last Week" },
    { value: "thismonth", title: "This Month" },
    { value: "lastmonth", title: "Last Month" },
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [card, setCard] = useState("");
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleStartDate = (newDate) => {
    setStartDate(newDate);
  };
  const handleEndDate = (newDate) => {
    setEndDate(newDate);
  };
  const handleCard = (e) => {
    setCard(e.target.value);
  };
  const handleSelectTime = (e) => {
    let date = new Date();
    const currentDate = e.currentTarget.value;
    switch (currentDate) {
      case "today": {
        setStartDate(
          `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} 23:59:59`
        );
        break;
      }
      case "lastday": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1
          } 23:59:59`
        );
        break;
      }
      case "thisweek": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - date.getDay()
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() + 6 - date.getDay()
          } 23:59:59`
        );
        break;
      }
      case "lastweek": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - date.getDay() - 7
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1 - date.getDay()
          } 23:59:59`
        );
        break;
      }
      case "thismonth": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-01 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate()} 23:59:59`
        );
        break;
      }
      case "lastmonth": {
        setStartDate(`${date.getFullYear()}-${date.getMonth()}-01 00:00:00`);
        setEndDate(
          `${date.getFullYear()}-${date.getMonth()}-${new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate()} 23:59:59`
        );
        break;
      }
      default:
        break;
    }
    console.log(currentDate);
  };

  return (
    <div className="withdrawal" style={{ width: "100%" }}>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent>
              <Box sx={styles.main}>
                <AddIcon
                  sx={{
                    fontSize: "40px",
                    color: "white",
                    borderRadius: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "action.active",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                Apply for withdrawal
              </Typography>
              <Typography
                sx={{
                  color: "action.active",
                  marginLeft: 3,
                }}
                gutterBottom
              >
                card
              </Typography>
              <Grid container spacing={5} padding={2}>
                <Grid item lg={4} md={12}>
                  <NativeSelect
                    value={card}
                    onChange={handleCard}
                    sx={{
                      background: "#9C27B0",
                      color: "white",
                      border: "2px solid black",
                      width: "100%",
                      marginTop: "14px",
                      borderRadius: 1,
                    }}
                  >
                    <option
                      value="DUONGVULONG"
                      style={{ color: "black", paddingTop: "10px" }}
                    >
                      DUONGVULONG (9017041457062 - DUONGVULONG)
                    </option>
                    <option value="LENGOCGIAO" style={{ color: "black" }}>
                      LENGOCGIAO (19038113408012 - LENGOCGIAO)
                    </option>
                  </NativeSelect>
                </Grid>
                <Grid item lg={4} md={12}>
                  <TextField
                    variant="standard"
                    label="existing amount"
                    id="exist"
                    type="number"
                    value={amount}
                    sx={{ width: "100%" }}
                    onChange={handleAmount}
                  />
                </Grid>
                <Grid item lg={4} md={12}>
                  <TextField
                    variant="standard"
                    label="withdraw password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Typography
                    sx={{
                      color: "action.active",
                    }}
                    gutterBottom
                  >
                    * Existing amount 30,710,093 , withdrawable amount is
                    30,710,093
                  </Typography>
                </Grid>
                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="success">
                      SEND
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "#00BCD4" }}>
            <CardContent>
              <Box sx={notificationstyle.main}>
                <PriorityHighIcon
                  sx={{
                    fontSize: "25px",
                    color: "#00BCD4",
                    borderRadius: "50% !important",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 30,
                  color: "white",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                Withdrawal rules
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                The minimum amount that can be withdrawn is: 100000, the
                withdrawal fee is charged: 0%, and the minimum amount to be kept
                in the platform: 0
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent>
              <Box sx={styles.main}>
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                    color: "white",
                    borderRadius: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "action.active",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                Search
              </Typography>
              <Typography
                sx={{
                  color: "action.active",
                  marginLeft: 3,
                }}
                gutterBottom
              >
                selection time
              </Typography>
              <Grid container spacing={5} padding={2}>
                <Grid item lg={4} md={12}>
                  <NativeSelect
                    defaultValue={"interval"}
                    // value={card}
                    onChange={(e) => handleSelectTime(e)}
                    variant="standard"
                    sx={{
                      border: "none",
                      width: "100%",
                      marginTop: "16px",
                    }}
                  >
                    {selectionTime.map((data, idx) => (
                      <option value={data.value} key={idx}>
                        {data.title}
                      </option>
                    ))}
                  </NativeSelect>
                </Grid>
                <Grid item lg={4} md={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      value={startDate}
                      onChange={handleStartDate}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      value={endDate}
                      onChange={handleEndDate}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      sx={{ marginRight: 2, backgroundColor: "#ec407a" }}
                    >
                      CLEAR
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#00BCD4" }}
                    >
                      SEARCH
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent
              sx={{
                background: "#FFA21A",
                margin: "5rem 1.5rem 3rem 1.5rem",
                borderRadius: 1,
              }}
            >
              <Box sx={notificationstyle.main}>
                <CampaignIcon
                  sx={{
                    fontSize: "25px",
                    color: "#FFA21A",
                    borderRadius: "50% !important",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                There is no information!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Withdrawal;
