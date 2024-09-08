import React from "react";

const SubscriptionDetails = () => {
  const subscriptionRates = [
    { type: "Life Membership Fee", amount: "Rs. 5000.00" },
    { type: "Annual Membership Fee", amount: "Rs. 1000.00" },
  ];

  const subscriptionRules = [
    "The rates of subscription fee shall be decided by the Executive Committee.",
    "Any other charges to be levied on to members shall be approved by the General Body.",
    "The membership fee shall be charged by the Association at the time of application for membership.",
    "Honorary members shall not pay any subscription fee.",
  ];

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Subscription Charges
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The Met Veterans Association has set subscription charges for its
          members to support the organization's activities and objectives.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Subscription Rates
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {subscriptionRates.map((rate, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {rate.type}
              </h3>
              <p className="text-2xl font-bold text-blue-600">{rate.amount}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Subscription Rules
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {subscriptionRules.map((rule, index) => (
            <li key={index} className="text-gray-700">
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Payment Information
        </h2>
        <p className="text-lg text-gray-700">
          For information on how to pay your subscription fees or to update your
          membership status, please contact our Treasurer or visit the Contact
          page for more details.
        </p>
      </section>
    </div>
  );
};

export default SubscriptionDetails;
