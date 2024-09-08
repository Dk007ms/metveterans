import React from "react";

const ExecutiveCommittee = () => {
  const committeeComposition = [
    {
      position: "President",
      description: "To be elected from amongst the Regular Members",
      count: 1,
    },
    {
      position: "Vice President",
      description: "To be elected from amongst the Regular Members",
      count: 1,
    },
    {
      position: "Secretary",
      description: "To be elected from amongst the Regular Members",
      count: 1,
    },
    {
      position: "Treasurer",
      description: "To be elected from amongst the Regular Members",
      count: 1,
    },
    {
      position: "Members",
      description: "To be elected from amongst the Regular Members",
      count: "Not more than Fifteen (including above stated members)",
    },
  ];

  const committeeFunctions = [
    "The Executive Committee shall have all the powers with regard to management and promotion of objectives of the Association according to directives, if any, of the General Body.",
    "The Executive Committee shall manage the affairs of the Association by majority vote in the Committee Meeting provided that in case of tie, the President shall have the casting vote.",
    "The Executive Committee shall take necessary steps for the implementation of the programmes and policies drawn by the general body.",
    "The Executive Committee shall pass necessary to meet the day-to-day requirements of the society.",
    "The Executive Committee shall take all such other steps which may appear beneficial for the smooth and better management of the Association.",
  ];

  const currentCommittee = [
    { rank: "Air Vice Marshal", name: "AJIT TYAGI", designation: "President" },
    {
      rank: "Wing Commander",
      name: "SUMANT CHATURVEDI",
      designation: "Vice President",
    },
    {
      rank: "Wing Commander",
      name: "RAJESH KUMAR DHINGRA",
      designation: "Secretary",
    },
    {
      rank: "Wing Commander",
      name: "ATUL KUMAR GOEL",
      designation: "Treasurer",
    },
    { rank: "Air Vice Marshal", name: "G. P. SHARMA", designation: "Member" },
    {
      rank: "Group Captain",
      name: "ABNASH CHANDER SHARMA",
      designation: "Member",
    },
    { rank: "Air Commodore", name: "NEERAJ SHARMA", designation: "Member" },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Executive Committee
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The Executive Committee manages the affairs of the Met Veterans
          Association. It consists of a minimum of 7 members and a maximum of 15
          members.
        </p>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Composition
        </h2>
        <div className="space-y-4">
          {committeeComposition.map((position, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mr-3">
                {position.count}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {position.position}
                </h3>
                <p className="text-gray-700">{position.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Functions</h2>
        <ul className="list-disc list-inside space-y-2">
          {committeeFunctions.map((function_, index) => (
            <li key={index} className="text-gray-700">
              {function_}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Current Executive Committee Members
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-4 text-left text-blue-800">Rank</th>
                <th className="py-2 px-4 text-left text-blue-800">Name</th>
                <th className="py-2 px-4 text-left text-blue-800">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {currentCommittee.map((member, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-2 px-4 text-gray-700">{member.rank}</td>
                  <td className="py-2 px-4 text-gray-700">{member.name}</td>
                  <td className="py-2 px-4 text-gray-700">
                    {member.designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveCommittee;
