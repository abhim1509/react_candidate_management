import { getValue } from "@/utilities/storage";
import {
  REJECTED_CANDIDATES,
  SELECTED_CANDIDATES,
} from "@/utilities/storage/config";

const FilteredPortal = () => {
  let getSelectedVal: any = getValue(SELECTED_CANDIDATES);
  let parsedSelectedVal = JSON.parse(getSelectedVal);
  let getRejectedVal: any = getValue(REJECTED_CANDIDATES);
  let parsedRejectedVal = JSON.parse(getRejectedVal);
  console.log(parsedRejectedVal);
  console.log(parsedSelectedVal);
  return (
    <div>
      <div>
        <p>Selected List</p>
        {parsedSelectedVal.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      <div>
        <p>Rejected List</p>
        {parsedRejectedVal.map((item: any) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default FilteredPortal;
