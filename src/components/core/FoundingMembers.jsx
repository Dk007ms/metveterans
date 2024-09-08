import React from "react";

const FoundingMembers = () => {
  const foundingMembers = [
    {
      rank: "AVM",
      name: "Ajit Tyagi",
      address:
        "House no. 174, Sector-28, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201 301.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "Wg Cdr",
      name: "Sumant Chaturvedi",
      address:
        "A-61, Vishrantika CGHS, Plot no.-5A, Sector-3, Dwarka, South West Delhi, Delhi – 110 078.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "Wg Cdr",
      name: "Rajesh Kumar Dhingra",
      address:
        "Villa No. 133, MGF The Vilas, DLF City, DLF Phase 2, Nathupur (67), Gurgaon, Haryana – 122 002.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "Wg Cdr",
      name: "Atul Kumar Goel",
      address:
        "A-8, MCD Officers Flat R-Block, Greater Kailash -1, South Delhi, Delhi – 110 048.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "AVM",
      name: "G P Sharma",
      address:
        "413/7, Defence Officer Enclave, SP Marg, Chanakyapuri S.O, South West Delhi, Delhi – 110 021.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "Gp Capt",
      name: "Abnash Chander Sharma",
      address:
        "House No F-189, Pocket P-4, Builders Area, Jalvayu Vihar, Greater Noida, Noida, Gautam Buddha Nagar, Uttar Pradesh – 201 310.",
      occupation: "Indian Air Force Veteran",
    },
    {
      rank: "Air Cmde",
      name: "Neeraj Sharma",
      address:
        "N12-1203, 12th Floor, Tower-12, Jaypee Aman, Noida, Sector – 151, Gautam Buddha Nagar, Uttar Pradesh – 201 301.",
      occupation: "Indian Air Force Veteran",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Founding Members
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The Met Veterans Association was established by a group of dedicated
          retired Meteorological officers from the Indian Air Force. These
          founding members laid the foundation for our organization and its
          mission.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Our Esteemed Founding Members
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {foundingMembers.map((member, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {member.rank} {member.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> {member.address}
              </p>
              <p className="text-gray-700">
                <strong>Occupation:</strong> {member.occupation}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoundingMembers;
