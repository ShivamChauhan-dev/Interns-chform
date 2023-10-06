import React, { Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserDashboard from "./components/User/UserDashboard";
import CHForm2nd from "./components/User/Components/Main/2ndCHform";
import CHForm4th from "./components/User/Components/Main/4thCHform";
import CHForm5th from "./components/User/Components/Main/5thCHform";
import CHForm5thB from "./components/User/Components/Main/5thBChform";
import CHForm6th from "./components/User/Components/Main/6thCHform";
import CHForm6thA from "./components/User/Components/Main/6thACHform";
import CHForm6thB from "./components/User/Components/Main/6thBCHform";
import CHForm6thC from "./components/User/Components/Main/6thCCHform";
import CHForm7th from "./components/User/Components/Main/7thCHform";
import CHForm7thB from "./components/User/Components/Main/7thBCHform";
import CHForm10th from "./components/User/Components/Main/10thCHform";
import CHForm10thA from "./components/User/Components/Main/10thACHform";
import CHForm11th from "./components/User/Components/Main/11thCHform";
import CHForm2ndA from "./components/User/Components/Main/2ndACHform";
import CHForm18th from "./components/User/Components/Main/18thCHform";
import CHForm21th from "./components/User/Components/Main/21thCHform";
import CHForm23rd from "./components/User/Components/Main/23ndCHform";
import CHForm23rdpart2 from "./components/User/Components/Main/23rdpart2CHform";
import CHForm23rdpart3 from "./components/User/Components/Main/23rdpart3CHform";
import CHForm23rdApart1 from "./components/User/Components/Main/23rdApart1CHform";
import CHForm23rdApart2 from "./components/User/Components/Main/23rdApart2CHfrom";
import CHForm23rdBpart1 from "./components/User/Components/Main/23rdBpart1";
import CHForm23rdBpart2 from "./components/User/Components/Main/23rdBpart2";
import CHForm23rdBpart3 from "./components/User/Components/Main/23rdBpart3";
// import CH1Dashboard from "./components/User/Components/Main/1stACHform";
import Chroutes from "./components/User/Chroutes"
function App() {

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={ <UserDashboard  />}
        />
        <Route path="/2-CH-Form" element={<CHForm2nd  />} />
        <Route path="/2-A-CH-Form" element={<CHForm2ndA  />} />
        <Route path="/4-CH-Form" element={<CHForm4th  />} />
        <Route path="/5-CH-Form" element={<CHForm5th  />} />
        <Route path="/5-CH-Form-B" element={<CHForm5thB  />} />
        <Route path="/6-CH-Form" element={<CHForm6th  />} />
        <Route path="/6-A-CH-Form" element={<CHForm6thA  />} />
        <Route path="/6-B-CH-Form" element={<CHForm6thB  />} />
        <Route path="/6-C-CH-Form" element={<CHForm6thC  />} />
        <Route path="/7-CH-Form" element={<CHForm7th  />} />
        <Route path="/7-B-CH-Form" element={<CHForm7thB  />} />
        <Route path="/10-CH-Form" element={<CHForm10th  />} />
        <Route path="/10-A-CH-Form" element={<CHForm10thA  />} />
        <Route path="/11-CH-Form" element={<CHForm11th  />} />
        <Route path="/18-CH-Form" element={<CHForm18th  />} />
        <Route path="/21-CH-Form" element={<CHForm21th  />} />
        <Route path="/23-CH-Form" element={<CHForm23rd  />} />
        <Route path="/23-part2-CH-Form" element={<CHForm23rdpart2  />} />
        <Route path="/23-part3-CH-Form" element={<CHForm23rdpart3  />} />
        <Route path="/23-A-part1-CH-Form" element={<CHForm23rdApart1  />} />
        <Route path="/23-A-part2-CH-Form" element={<CHForm23rdApart2  />} />
        <Route path="/23-B-part1-CH-Form" element={<CHForm23rdBpart1  />} />
        <Route path="/23-B-part2-CH-Form" element={<CHForm23rdBpart2  />} />
        <Route path="/23-B-part3-CH-Form" element={<CHForm23rdBpart3  />} />
      </Routes>
      <Chroutes/>
    </Fragment>
  );
}

export default App;
