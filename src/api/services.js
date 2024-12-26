import axios from "axios";

export const BASE_URL = "http://localhost:8080/api";

export const fetchAllPatients = async () => {
  const data = await axios.get(BASE_URL + "/patients");
  return data.data;
};

export const allocateBed = async (bedAllocation) => {
  const response = await axios.post(
    `${BASE_URL}/bed-allocation`,
    bedAllocation
  );
  return response.data;
};

export const getBedAvailability = async () => {
  const response = await axios.get(`${BASE_URL}/bed-availability`);
  return response.data;
};

export const getPatientByBedId = async (bedId) => {
  const response = await axios.get(`${BASE_URL}/bed/${bedId}/patient`);
  return response.data;
};

export const getAllBedsWithPatients = async () => {
  const response = await axios.get(`${BASE_URL}/beds-with-patients`);
  return response.data;
};

export const fetchQueueTokensService = async () => {
  const response = await axios.get(BASE_URL + "/queue-status");
  console.log(response.data);
  return response.data;
};

export const allocateTokenService = async (specialization, patientId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/queue-token/${specialization}`,
      null,
      {
        params: { patientId },
      }
    );
    console.log(`Allocate service response: ${response.data}`);
    return response.data;
  } catch (error) {
    console.error("Error allocating token:", error);
    throw error; // Rethrow the error if you want to handle it further up the call stack
  }
};
export const notifyPatientService = async (queueTokenId) => {
  const response = await axios.post(
    BASE_URL + `/notify-patient/${queueTokenId}`
  );
  return response.data;
};

export const checkAvailabilityService = async (doctorId) => {
  const response = await axios.get(
    BASE_URL + `/doctor-availability/${doctorId}`
  );
  return response.data;
};
