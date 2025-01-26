import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Jahez"],
      maxLoan: "PKR 5 Lakh",
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Finishing"],
      maxLoan: "PKR 10 Lakh",
    },
    {
      name: "Business Startup Loans",
      subcategories: ["Shop Assets", "Machinery", "Place"],
      maxLoan: "PKR 10 Lakh",
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees", "College Fees"],
      maxLoan: "Based on Requirement",
    },
  ];

  const [formData, setFormData] = useState({
    userId: "",
    category: "",
    subcategory: "",
    amount: "",
    period: "",
    guarantors: [
      { name: "", email: "", cnic: "", location: "" },
      { name: "", email: "", cnic: "", location: "" },
    ],
  });

  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle guarantor input changes
  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...formData.guarantors];
    updatedGuarantors[index][name] = value;
    setFormData({ ...formData, guarantors: updatedGuarantors });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/loans", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h3 className="text-5xl font-bold text-center mb-6">Loan Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-4 shadow-lg p-4 mt-5 rounded"
            >
              <h4 className="text-2xl font-bold mb-2">{category.name}</h4>
              <ul className="mb-2">
                {category.subcategories.map((item, i) => (
                  <li key={i} className="text-gray-600 text-xl">
                    - {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xl">
                Max Loan: {category.maxLoan}
              </p>
              <div className="card-actions flex justify-end"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  mx-auto mt-10 p-6  shadow rounded bg-white border-8">
        <h2 className="text-2xl font-bold mb-4">Create Loan</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
          {/* User ID */}
          <label className="block mb-2">
            User ID:
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="input-bordered w-full p-2 border rounded mt-1"
              required
            />
          </label>

          {/* Category */}
          <label className="block mb-2">
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input-bordered w-full p-2 border rounded mt-1"
              required
            >
              <option value="">Select a category</option>
              <option value="Wedding Loans">Wedding Loans</option>
              <option value="Home Construction Loans">
                Home Construction Loans
              </option>
              <option value="Business Startup Loans">
                Business Startup Loans
              </option>
              <option value="Education Loans">Education Loans</option>
            </select>
          </label>

          {/* Subcategory */}
          <label className="block mb-2">
            Subcategory:
            <input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="input-bordered w-full p-2 border rounded mt-1"
              required
            />
          </label>

          {/* Amount */}
          <label className="block mb-2">
            Amount (PKR):
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="input-bordered w-full p-2 border rounded mt-1"
              required
            />
          </label>

          {/* Period */}
          <label className="block mb-2">
            Period (Years):
            <select
              name="period"
              value={formData.period}
              onChange={handleChange}
              className="input-bordered w-full p-2 border rounded mt-1"
              required
            >
              <option value="">Select a period</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
            </select>
          </label>
          <div></div>
          {/* Guarantors */}
          {/* <h3 className="text-xl font-bold mt-4">Guarantors</h3> */}
          {formData.guarantors.map((guarantor, index) => (
            <div key={index} className="mb-4 mt-3 pt-3">
              <label className="block mb-2">
                Guarantor-Name:
                <input
                  type="text"
                  name="name"
                  value={guarantor.name}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="input-bordered w-full p-2 border rounded mt-1"
                  required
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  value={guarantor.email}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="input-bordered w-full p-2 border rounded mt-1"
                  required
                />
              </label>
              <label className="block mb-2">
                CNIC:
                <input
                  type="text"
                  name="cnic"
                  value={guarantor.cnic}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="input-bordered w-full p-2 border rounded mt-1"
                  required
                />
              </label>
              <label className="block mb-2">
                Location:
                <input
                  type="text"
                  name="location"
                  value={guarantor.location}
                  onChange={(e) => handleGuarantorChange(index, e)}
                  className="input-bordered w-full p-2 border rounded mt-1"
                  required
                />
              </label>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#c81b3e] text-white  px-4 py-2  hover:bg-[#a11632]"
          >
            Submit
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-center text-green-600">{responseMessage}</p>
        )}
      </div>

      {/* Response Message */}
      {responseMessage && (
        <p className="mt-4 text-center text-green-600">{responseMessage}</p>
      )}
      <Footer />
    </>
  );
};

export default About;
