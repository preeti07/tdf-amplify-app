import { useState } from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import { ServiceRequestList } from "./components/ServiceRequestList";
import { CreateServiceRequest } from "./components/CreateServiceRequest";
import { fetchServiceRequestsApi } from "./apis/serviceRequestsApi";

const ServiceRequestsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerCloseHandler = () => {
    setIsDrawerOpen(false); 
    fetchServiceRequestsApi(); 
  };

  return (
    <>
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Service Requests
      </Typography>

      {/* Create Button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="contained" color="primary" onClick={() => setIsDrawerOpen(true)}>
          Create Service Request
        </Button>
      </Box>
      <ServiceRequestList />
      {/* Drawer for Creating Service Requests */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <CreateServiceRequest onClose={onDrawerCloseHandler} />
      </Drawer>
    </Box>
    </>
  )
};

export { ServiceRequestsPage };