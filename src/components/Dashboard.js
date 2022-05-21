import * as React from "react";
import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <Skeleton variant="rectangular" width={210} height={118} />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);

export default Dashboard;
