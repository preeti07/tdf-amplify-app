import { useEffect, useMemo, useRef } from "react";
import { Paper } from "@mui/material";
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
      />
    </Paper>
  );
};

export { ServiceRequestList };
