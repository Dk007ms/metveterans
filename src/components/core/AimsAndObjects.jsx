import React from "react";

const AimsAndObjects = () => {
  const aimsAndObjects = [
    "To promote and foster mutually beneficial interaction among retired Meteorological (MET) officers of Indian Air Force.",
    "To undertake activities of nation building including those of charitable nature.",
    "To foster linkages amongst the MET Veterans and to promote personal and friendly relations through meetings and get-togethers among members of the Association.",
    "To facilitate and encourage MET Veterans to contribute towards improvement in the body of knowledge of Meteorological profession, interactions among other institutions engaged in similar vocation.",
    "To generate corpus for the MET Veterans for creating better residential/educational/ recreational facilities for the members of the Association.",
    "To exchange professional knowledge, organize conferences, seminars, workshops & training courses.",
    "To raise or collect funds by subscriptions, contributions, donations, loans or by any other legal means for furtherance of the above objectives of the Association.",
    "To undertake all such lawful activities which are conducive to the attainment of the above objectives.",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Aims and Objects
      </h1>
      <ul className="space-y-4">
        {aimsAndObjects.map((aim, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">{index + 1}.</span>
            <p className="text-gray-700">{aim}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-800 mb-3">
          Important Note
        </h2>
        <p className="text-gray-700">
          All the income, earning, moveable, immovable properties of the society
          shall be solely utilized and applied towards the promotion of its aims
          and objects only as set forth in the memorandum of association. No
          profit thereof shall be paid or transferred directly or indirectly by
          way of dividends, bonus, profits or in any manner whatsoever to the
          present and past members of the society or to any person claiming
          through any or more of the present or past members.
        </p>
        <p className="text-gray-700 mt-4">
          No member of the society shall have any personal claim on any moveable
          or immovable properties of the society or make any profit, whatsoever
          by virtue of his/her membership.
        </p>
      </div>
    </div>
  );
};

export default AimsAndObjects;
