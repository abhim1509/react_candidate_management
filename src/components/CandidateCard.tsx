import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { imageStyle } from "./PortalStyles";
import { setValue, getValue } from "../utilities/storage";
import {
  REJECTED_CANDIDATES,
  SELECTED_CANDIDATES,
} from "@/utilities/storage/config";

const CandidateCard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state) return <p>No user data found.</p>;

  const _updateSelectList = (isSelected: boolean) => {
    const listKeyName = isSelected ? SELECTED_CANDIDATES : REJECTED_CANDIDATES;
    // second operand is empty array in string. because empty array will throw runtime.
    console.log(listKeyName);
    const selectedList = getValue(listKeyName) || "[]";
    console.log("list", selectedList);

    let parsedData: any = JSON.parse(selectedList);
    parsedData.push(state);
    //console.log(parsedData);
    setValue(listKeyName, parsedData);
    navigate("/");
  };

  return (
    <div>
      <div>
        <img src={state.Image} style={imageStyle} />
      </div>
      <div>{state.name}</div>

      <button
        onClick={() => {
          _updateSelectList(true);
        }}
      >
        Select
      </button>

      <button
        onClick={() => {
          _updateSelectList(false);
        }}
      >
        Reject
      </button>
    </div>
  );
};

export default CandidateCard;
