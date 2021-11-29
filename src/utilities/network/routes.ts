import { getRequest } from ".";
import { BASE_URL, CANDIDATES_URI } from "./config";

const getCandidatesList = async () => {
  const CANDIDATE_LIST_URL = `${BASE_URL}/${CANDIDATES_URI}`;
  const response = await getRequest(CANDIDATE_LIST_URL);
  return Object.keys(response).length !== 0 ? response : {};
};

export { getCandidatesList };
