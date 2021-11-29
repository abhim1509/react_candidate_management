import { useEffect, useState } from "react";
import { imageStyle, flex, card, anchorStyle } from "./PortalStyles";
import { Link } from "react-router-dom";
import { getValue } from "../utilities/storage";
import { getCandidatesList } from "@/utilities/network/routes";
import { parsedJSON, isArrEmpty } from "@/utilities/reusable";
import {
  REJECTED_CANDIDATES,
  SELECTED_CANDIDATES,
} from "@/utilities/storage/config";

export default function UserPortal() {
  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    console.log("useeffect called.");
    const _getCandidateDetails = async () => {
      const candidateListResponse = await getCandidatesList();

      const selectedCandidatesList: any = getValue(SELECTED_CANDIDATES);
      //console.log("selectedCandidatesList", selectedCandidatesList);
      const parsedCandidatesList = parsedJSON(selectedCandidatesList);
      const selectedListResult = parsedCandidatesList
        ? parsedCandidatesList
        : [];

      const rejectedCandidateList: any = getValue(REJECTED_CANDIDATES);
      const parsedRejectedList = parsedJSON(rejectedCandidateList);
      const rejectedListResult = parsedRejectedList ? parsedRejectedList : [];

      if (isArrEmpty(selectedListResult) && isArrEmpty(rejectedListResult)) {
        setCandidateList(candidateListResponse);
        //console.log("inside if block");
        return;
      }

      const usedList: any = [...rejectedListResult, ...selectedListResult];
      console.log("usedList", usedList);

      const updatedCandidateArr = candidateListResponse.filter((elem: any) => {
        return !usedList.find((item: any) => item.id === elem.id);
      });
      console.log("updatedCandidateArr", updatedCandidateArr);
      setCandidateList(updatedCandidateArr);
    };

    _getCandidateDetails();
  }, []);

  //  console.log(rejectedList); Too many renders?
  //console.log(selectedList); Loads once on reload, once because of setstate
  return (
    <>
      <h1>Job Portal</h1>
      <div style={flex}>
        {candidateList.map((candidate: any) => {
          return (
            <div key={candidate.id} style={anchorStyle}>
              <div style={card}>
                <div>
                  <img src={candidate.Image} alt="" style={imageStyle} />
                </div>
                <div>{candidate.id}</div>
                <div>
                  <Link to={`${candidate.id}`} state={candidate}>
                    {candidate.name}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Link to={`/selected`}>
          <button>Selected List</button>
        </Link>
      </div>
      <div>
        <Link to={`/rejected`}>
          <button>Rejected List</button>
        </Link>
      </div>
    </>
  );
}
