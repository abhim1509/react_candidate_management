import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CandidateCard from "./components/CandidateCard";
import JobPortal from "./components/JobPortal";
import NotFound from "./components/NotFound";
import FilteredPortal from "./components/FilteredPortal";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPortal />} />
        <Route path="/:id" element={<CandidateCard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/selected" element={<FilteredPortal />} />
        <Route path="/rejected" element={<FilteredPortal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
