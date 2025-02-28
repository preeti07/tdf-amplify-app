import { CreateServiceRequestInput, Severity } from "../API";
import { ServiceRequestFormDataType } from "../types";
import { calculateResolutionDate } from "./calculateResolutionDate";
import { generateCaseNumber } from "./generateCaseNumber";

const getMappedServiceRequestFromFormData = (formData: ServiceRequestFormDataType) => {
  const newRequest: CreateServiceRequestInput = {
    name: formData.serviceRequestName,
    description: formData.serviceRequestDescription,
    contactEmail: formData.contactInformation,
    severity: formData.severity as Severity,
    caseNumber: generateCaseNumber(), // uuidv4(), I could use uuid here, but it was not looking user friendly to me, hence did this way
    location: formData.location,
    reporterName: formData.reporterName,
    creationDate: new Date().toISOString().split("T")[0],
    resolutionDate: calculateResolutionDate(formData.severity),
  };
  return newRequest;
}

export { getMappedServiceRequestFromFormData };