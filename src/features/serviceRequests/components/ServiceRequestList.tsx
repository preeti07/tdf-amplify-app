import { useEffect, useMemo, useRef } from "react";
import { Box, Paper } from "@mui/material";
import { fetchServiceRequestsApi } from "../apis/serviceRequestsApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { DataGrid } from "@mui/x-data-grid";
import { paginationModel } from "../constants";
import { getServiceRequestsTableColumns } from "../helpers/getServiceRequestsTableColumns";
import { paperStyles } from "./ServiceRequestListStyles";

const ServiceRequestList = () => {
  const dispatch: AppDispatch= useDispatch();
  const dispatchRef = useRef(dispatch);
  const { items : serviceRequests } = useSelector((state: RootState) => state.serviceRequests);
  const columns = useMemo(() => getServiceRequestsTableColumns(), []);

  useEffect(() => {
    dispatchRef.current(fetchServiceRequestsApi());
  }, []);

  return (
    <Paper sx={paperStyles}>
      <DataGrid
        rows={serviceRequests}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        slots={{ noRowsOverlay: NoRowsOverlay }} 
      />
    </Paper>
  );
};

const NoRowsOverlay = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        p: 2,
      }}
    >
      No service requests found. 
    </Box>
  );
};

export { ServiceRequestList };
