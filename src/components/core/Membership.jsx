import React from "react";

const Membership = () => {
  const membershipTypes = [
    {
      type: "Regular Members",
      description:
        "All Retired Officers of Meteorological Branch of Indian Air Force who have paid the membership fee.",
    },
    {
      type: "Honorary Members",
      description:
        "Meteorological professionals who have Served/Serving at any Meteorological institutions (Govt or Private), or eminent persons who have contributed immensely or have keen interest for the development of the Association and Meteorological profession.",
    },
    {
      type: "Associate Members",
      description:
        "All Serving Officers of Meteorological Branch of Indian Air Force who have paid the membership fee.",
    },
  ];

  const terminationReasons = [
    "On his/her death or insanity.",
    "Non-payment of Annual Subscription continuously for five years.",
    "On his/her written resignation.",
    "On his/her conviction by a court for any offence involving moral turpitude.",
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Membership</h1>
        <p className="text-lg text-gray-700 mb-4">
          Membership of the Society is open to any person fulfilling the terms &
          conditions of the Association without discrimination of religion,
          caste, colour or creed, subject to the approval of the Executive
          Committee.
        </p>
        <div className="space-y-6">
          {membershipTypes.map((membership, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">
                {membership.type}
              </h2>
              <p className="text-gray-700">{membership.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Termination of Membership
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The Executive Committee shall have the power to expel a member from
          the Association on satisfaction of any one of the following terms &
          conditions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          {terminationReasons.map((reason, index) => (
            <li key={index} className="text-gray-700">
              {reason}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-4">
          The reasons for expulsion shall be communicated to every member. Every
          such expelled member shall have a right to appeal before the general
          body which may or may not be accepted.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Re-admission</h2>
        <p className="text-gray-700">
          A member, whose name has been removed from the register of members
          solely on account of subscription and other dues, shall be allowed to
          be readmitted on paying all such dues to the Association. However, the
          decision of the Executive Committee in this regard, shall be final.
        </p>
      </section>
    </div>
  );
};

export default Membership;
