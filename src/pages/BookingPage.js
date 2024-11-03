// import React from "react";
// import Heading from "../components/common/Heading";

// export default function Booking() {
//   return (
//     <>
//       <Heading heading="Booking" title="Home" subtitle="Booking" />
//     </>
//   );
// }

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Booking() {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    room: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    date: Yup.date().required("Booking Date is required"),
    room: Yup.string().required("Room Type is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data:", values);
    alert("Booking submitted successfully!");
  };

  return (
    <div
      className="booking-container mt-4"
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Book Your Room
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="name"
                style={{ display: "block", marginBottom: "5px", color: "#555" }}
              >
                Full Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "5px", color: "#555" }}
              >
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="date"
                style={{ display: "block", marginBottom: "5px", color: "#555" }}
              >
                Booking Date:
              </label>
              <Field
                type="date"
                id="date"
                name="date"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <ErrorMessage
                name="date"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="room"
                style={{ display: "block", marginBottom: "5px", color: "#555" }}
              >
                Room Type:
              </label>
              <Field
                as="select"
                id="room"
                name="room"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select room type</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
              </Field>
              <ErrorMessage
                name="room"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                backgroundColor: "orange",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Book Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
