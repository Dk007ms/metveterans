import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MembershipPurchase = () => {
  const initialValues = {
    photo: null,
    rank: "",
    name: "",
    serviceNumber: "",
    fathersName: "",
    dateOfBirth: "",
    dateOfCommission: "",
    dateOfRetirement: "",
    permanentAddress: "",
    mobileNumber: "",
    pan: "",
    membershipType: "",
    dateOfSubmission: "",
    paymentMethod: "",
    subscriptionPaid: "",
    transfererBankName: "",
    transactionId: "",
    dateOfTransfer: "",
    undertakingAgreed: false,
  };

  const validationSchema = Yup.object({
    photo: Yup.mixed().required("Photo is required"),
    rank: Yup.string().required("Rank is required"),
    name: Yup.string().required("Name is required"),
    serviceNumber: Yup.string().required("Service number is required"),
    fathersName: Yup.string().required("Father's name is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    dateOfCommission: Yup.date().required("Date of commission is required"),
    dateOfRetirement: Yup.date().required("Date of retirement is required"),
    permanentAddress: Yup.string().required("Permanent address is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    pan: Yup.string()
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN")
      .required("PAN is required"),
    membershipType: Yup.string().required("Membership type is required"),
    dateOfSubmission: Yup.date().required("Date of submission is required"),
    paymentMethod: Yup.string().required("Payment method is required"),
    subscriptionPaid: Yup.string().when("paymentMethod", {
      is: "offline",
      then: Yup.string().required("Subscription type is required"),
    }),
    transfererBankName: Yup.string().when("paymentMethod", {
      is: "offline",
      then: Yup.string().required("Transferer bank name is required"),
    }),
    transactionId: Yup.string().when("paymentMethod", {
      is: "offline",
      then: Yup.string().required("Transaction ID is required"),
    }),
    dateOfTransfer: Yup.date().when("paymentMethod", {
      is: "offline",
      then: Yup.date().required("Date of transfer is required"),
    }),
    undertakingAgreed: Yup.boolean().oneOf(
      [true],
      "You must agree to the undertaking"
    ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.paymentMethod === "online") {
      console.log("Redirecting to payment gateway...");
    } else {
      console.log("Submitting offline application...", values);
    }
    setSubmitting(false);
  };

  const personalInfoFields = [
    { name: "rank", label: "RANK", type: "text" },
    { name: "name", label: "NAME", type: "text" },
    { name: "serviceNumber", label: "SERVICE NUMBER", type: "text" },
    { name: "fathersName", label: "Father's Name", type: "text" },
    { name: "dateOfBirth", label: "DATE OF BIRTH", type: "date" },
    { name: "dateOfCommission", label: "DATE OF COMMISSION", type: "date" },
    { name: "dateOfRetirement", label: "DATE OF RETIREMENT", type: "date" },
    { name: "mobileNumber", label: "MOBILE NUMBER", type: "tel" },
    { name: "pan", label: "PAN", type: "text" },
  ];

  const membershipTypes = ["REGULAR", "ASSOCIATE", "HONORARY"];
  const subscriptionTypes = [
    { value: "LIFE", label: "LIFE (RS 5000)" },
    { value: "ANNUAL", label: "ANNUAL (RS 1000)" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        APPLICATION FOR MEMBERSHIP - MET VETERANS ASSOCIATION
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Kindly provide the following details and submit.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Add Photo (jpg/jpeg)
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/jpeg,image/jpg"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload 1 supported file: image. Max 1 MB.
                  </p>
                </div>
                {personalInfoFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <Field
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="permanentAddress"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    PERMANENT ADDRESS
                  </label>
                  <Field
                    as="textarea"
                    id="permanentAddress"
                    name="permanentAddress"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  />
                  <ErrorMessage
                    name="permanentAddress"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Membership Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    TYPE OF MEMBERSHIP (SELECT ANY ONE)
                  </label>
                  <div className="space-y-2">
                    {membershipTypes.map((type) => (
                      <label key={type} className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="membershipType"
                          value={type}
                          className="form-radio h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">{type}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="membershipType"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dateOfSubmission"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    DATE OF SUBMISSION
                  </label>
                  <Field
                    type="date"
                    id="dateOfSubmission"
                    name="dateOfSubmission"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="dateOfSubmission"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">UNDERTAKING</h2>
              <p className="text-sm text-gray-700">
                I do hereby apply for the membership of Met Veterans
                Association, Registration No. HR/018/2023/02596.
                <br />
                <br />
                I undertake to abide by the Rules & Regulations of Met Veterans
                Association and make payment of Membership Fee as applicable
                from time to time.
                <br />
                <br />I also undertake to intimate the Association Office on
                change in my permanent address and/or mobile number.
              </p>
              <div className="mt-4">
                <label className="inline-flex items-center">
                  <Field
                    type="checkbox"
                    name="undertakingAgreed"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to the above undertaking
                  </span>
                </label>
                <ErrorMessage
                  name="undertakingAgreed"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">PAYMENT DETAILS</h2>
              <p className="text-sm text-gray-700 mb-4">
                NOTE: ASSOCIATE & HONORARY MEMBERS ARE TO PAY ANNUAL
                SUBSCRIPTION ONLY.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAYMENT METHOD
                  </label>
                  <div className="space-y-2">
                    <label className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Online Payment</span>
                    </label>
                    <label className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="paymentMethod"
                        value="offline"
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Offline Payment</span>
                    </label>
                  </div>
                  <ErrorMessage
                    name="paymentMethod"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {values.paymentMethod === "offline" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        SUBSCRIPTION PAID (SELECT ANY ONE)
                      </label>
                      <div className="space-y-2">
                        {subscriptionTypes.map((type) => (
                          <label
                            key={type.value}
                            className="inline-flex items-center"
                          >
                            <Field
                              type="radio"
                              name="subscriptionPaid"
                              value={type.value}
                              className="form-radio h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2">{type.label}</span>
                          </label>
                        ))}
                      </div>
                      <ErrorMessage
                        name="subscriptionPaid"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="transfererBankName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        TRANSFERER BANK NAME
                      </label>
                      <Field
                        type="text"
                        id="transfererBankName"
                        name="transfererBankName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="transfererBankName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="transactionId"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        NEFT/UPI TRANSACTION ID
                      </label>
                      <Field
                        type="text"
                        id="transactionId"
                        name="transactionId"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="transactionId"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dateOfTransfer"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        DATE OF TRANSFER
                      </label>
                      <Field
                        type="date"
                        id="dateOfTransfer"
                        name="dateOfTransfer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="dateOfTransfer"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </>
                )}
              </div>
              {values.paymentMethod === "offline" && (
                <p className="text-sm text-red-600 mt-4">
                  Note: Offline payments via branch transfer may take longer to
                  verify. Online payments are preferred for faster processing.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {values.paymentMethod === "online"
                ? "Proceed to Payment"
                : "Submit Application"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MembershipPurchase;