import React, { useState } from "react";
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { addServiceRequestApi } from "../apis/serviceRequestsApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";

const CreateServiceRequest: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    serviceRequestName: "",
    serviceRequestDescription: "",
    severity: "LOW",
    reporterName: "",
    contactInformation: "",
    location: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      dispatch(addServiceRequestApi(formData));
      onClose(); // Close drawer and refresh list
    } catch (error) {
      console.error("Error creating service request", error);
    }
  };

  return (
    <Box p={3} width={400}>
      <Typography variant="h6" gutterBottom>
        Create Service Request
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Service Request Name"
          value={formData.serviceRequestName}
          onChange={(e) => setFormData({ ...formData, serviceRequestName: e.target.value })}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Description"
          multiline
          rows={3}
          value={formData.serviceRequestDescription}
          onChange={(e) => setFormData({ ...formData, serviceRequestDescription: e.target.value })}
          required
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Severity"
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
          required
          margin="normal"
        >
          <MenuItem value="LOW">Low</MenuItem>
          <MenuItem value="MEDIUM">Medium</MenuItem>
          <MenuItem value="HIGH">High</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Reporter Name"
          value={formData.reporterName}
          onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Contact Information"
          type="email"
          value={formData.contactInformation}
          onChange={(e) => setFormData({ ...formData, contactInformation: e.target.value })}
          required
          margin="normal"
        />

        <TextField
          fullWidth
          label="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
          margin="normal"
        />

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export { CreateServiceRequest };
