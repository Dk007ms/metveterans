import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import AimsAndObjects from "./components/core/AimsAndObjects";
import Membership from "./components/core/Membership";
import ExecutiveCommittee from "./components/core/ExecutiveCommittee";
import Election from "./components/core/Election";
import Subscription from "./components/core/Subscription";
import FoundingMembers from "./components/core/FoundingMembers";
import Members from "./components/core/Members";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About"; // Assuming 'About' is also needed
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define layout as the parent route */}
        <Route path="/" element={<Layout />}>
          {/* Index route for default child (Home in this case) */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aims-and-objects" element={<AimsAndObjects />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/executive-committee" element={<ExecutiveCommittee />} />
          <Route path="/election" element={<Election />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/founding-members" element={<FoundingMembers />} />
          <Route path="/members" element={<Members />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
