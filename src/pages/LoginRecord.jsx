import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import RecordCard from "../components/RecordCard";
import RecordTable from "../components/RecordTable";

const LoginRecord = () => {
  return (
    <Grid container padding={2} marginTop={4}>
      <Grid item sm={12}>
        <RecordCard flag="login"/>
      </Grid>
      <Grid container marginTop={4}>
          <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <RecordTable />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default LoginRecord;
