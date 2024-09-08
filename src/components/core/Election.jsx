import React from "react";

const Election = () => {
  const electionProcedure = [
    "President, Vice President, Secretary, Treasurer and Members of the Executive Committee shall be elected in the Annual General Body Meeting through simple majority of votes.",
    "A notice of the General Body Meeting for the purpose of election may be served through ordinary post, newspaper advertisement or through electronic-mode.",
    "Elections shall be conducted by the Returning Officer, appointed 30 days in advance, by the outgoing Executive Committee.",
    "Every Member (Except Honorary Members) shall have right to vote.",
    "Executive Committee shall lay down the detailed guidelines for election.",
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Election of Office Bearers
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The election of office bearers is a crucial process in the Met
          Veterans Association. All office bearers of the Executive Committee
          are elected from amongst the regular members of the Association.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Election Procedure
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {electionProcedure.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Tenure</h2>
        <p className="text-lg text-gray-700">
          Normally no elected office bearer shall hold office for more than
          Three consecutive years except under exceptional circumstances
          approved by the General Body.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Vacancies</h2>
        <p className="text-lg text-gray-700">
          In the eventuality of any seat left vacant, the Executive Committee
          shall have the power to co-opt members to fill the vacancies.
        </p>
      </section>
    </div>
  );
};

export default Election;
