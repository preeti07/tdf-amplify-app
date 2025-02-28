import { useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";
import { fetchServiceRequestsApi } from "../apis/serviceRequestsApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

const ServiceRequestList = () => {
  const dispatch: AppDispatch= useDispatch();
  const dispatchRef = useRef(dispatch);
  const { items : serviceRequests } = useSelector((state: RootState) => state.serviceRequests);

  console.log('serviceRequests in list component:', serviceRequests);

  useEffect(() => {
    dispatchRef.current(fetchServiceRequestsApi());
  }, []);

  return (
      <Box mt={3}>
        {serviceRequests.map((request) => (
          <Typography key={request.id} variant="body1">
            {request.name} - {request.severity}
          </Typography>
        ))}
      </Box>
  );
};

export { ServiceRequestList };
