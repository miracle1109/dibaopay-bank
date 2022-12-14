import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

import DashboardCard from "../components/DashboardCard";
import ReportTable from "../components/ReportTable";
import ReportCard from "../components/ReportCard";

const dashboardcarddata = [
  {
    background: "#268bd2",
    title: "Number of orders",
    count: "70",
    introduction: "The total number of orders under search conditions",
  },
  {
    background: "#2aa198",
    title: "Number of successful orders",
    count: "68",
    introduction:
      "The total number of successful orders under search conditions",
  },
  {
    background: "#d33682",
    title: "Number of failed orders",
    count: "2",
    introduction:
      "The total number of failed orders under the search conditions",
  },
  {
    background: "#2aa198",
    title: "Number of successful orders",
    count: "68",
    introduction:
      "The total number of successful orders under the search conditions",
  },
  {
    background: "#d33682",
    title: "Amount of failed payment",
    count: "2",
    introduction:
      "The total number of failed orders under the search conditions",
  },
  {
    background: "#ff9800",
    title: "Amount of successful payment",
    count: "89,693,000",
    introduction:
      "The total amount of the orders that have been successfully paid under the search conditions",
  },
];

const PaymentReport = () => {
  return (
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <ReportCard />
        </Grid>
        <Grid container spacing={2} marginTop={2}>
          {dashboardcarddata.map((data, index) => (
            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
              <DashboardCard
                background={data.background}
                title={data.title}
                count={data.count}
                introduction={data.introduction}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container marginTop={4}>
          <Grid item sm={12}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <ReportTable />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default PaymentReport;
