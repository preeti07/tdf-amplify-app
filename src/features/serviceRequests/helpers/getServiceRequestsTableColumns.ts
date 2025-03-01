import { GridColDef } from "@mui/x-data-grid";

const getServiceRequestsTableColumns = () => {
  const columns: GridColDef[] = [
    { field: 'caseNumber', headerName: 'Case Number', width: 150, description: "Case number of service request" },
    { field: 'contactEmail', headerName: 'Contact', width: 200, description: "Contact info"},
    { field: 'description', headerName: 'Description', width: 130, description: "Request info"},
    { field: 'creationDate', headerName: 'Create At', width: 130, description: "Request creation date"},
    { field: 'location', headerName: 'Location', width: 130, description: "Request location info"},
    { field: 'name', headerName: 'Request Name', width: 130, description: "Request title info"},
    { field: 'reporterName', headerName: 'Reporter', width: 130, description: "Request reporter"},
    { field: 'severity', headerName: 'Severity', width: 130, description: "Request severity"},
  ];
  return columns;
}

export { getServiceRequestsTableColumns };