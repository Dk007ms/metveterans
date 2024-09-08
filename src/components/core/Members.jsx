import React from "react";

const Members = () => {
  const membersList = [
    {
      membershipNo: "R-001",
      rank: "AVM",
      name: "Ajit Tyagi",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-002",
      rank: "Wg Cdr",
      name: "Rajesh Kumar Dhingra",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-003",
      rank: "Wg Cdr",
      name: "Atul Kumar Goel",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-004",
      rank: "Wg Cdr",
      name: "Sumant Chaturvedi",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-005",
      rank: "Air Cmde",
      name: "Neeraj Sharma",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-006",
      rank: "Gp Capt",
      name: "Abnash Chander Sharma",
      dateOfMembership: "12th May 2024",
    },
    {
      membershipNo: "R-007",
      rank: "AVM",
      name: "G P Sharma",
      dateOfMembership: "12th May 2024",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Members Directory
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Our association is proud to have a diverse group of retired
          Meteorological officers from the Indian Air Force. Below is a list of
          our esteemed members.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Current Members
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left text-blue-800">
                  Membership No
                </th>
                <th className="py-3 px-4 text-left text-blue-800">Rank</th>
                <th className="py-3 px-4 text-left text-blue-800">Name</th>
                <th className="py-3 px-4 text-left text-blue-800">
                  Date of Membership
                </th>
              </tr>
            </thead>
            <tbody>
              {membersList.map((member, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-4 text-gray-700">
                    {member.membershipNo}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{member.rank}</td>
                  <td className="py-3 px-4 text-gray-700">{member.name}</td>
                  <td className="py-3 px-4 text-gray-700">
                    {member.dateOfMembership}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Course-wise List of Veterans
        </h2>
        <p className="text-lg text-gray-700">
          We are currently working on compiling a course-wise list of our
          veteran members. This section will be updated soon with more detailed
          information about our members' backgrounds and expertise.
        </p>
      </section>
    </div>
  );
};

export default Members;
