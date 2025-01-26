import React, { useState } from "react";
import axios from "axios";

const Loan = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuarantorChange = (index, e) => {
    const { name, value } = e.target;
    const updatedGuarantors = [...formData.guarantors];
    updatedGuarantors[index][name] = value;
    setFormData({ ...formData, guarantors: updatedGuarantors });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/api/v1/loans" , formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };


  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Create Loan</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          User ID:
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
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

        <label className="block mb-2">
          Subcategory:
          <input
            type="text"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Amount (PKR):
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Period (Years):
          <select
            name="period"
            value={formData.period}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          >
            <option value="">Select a period</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5">5 Years</option>
          </select>
        </label>

        <h3 className="text-xl font-bold mt-4">Guarantors</h3>
        {formData.guarantors.map((guarantor, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                value={guarantor.name}
                onChange={(e) => handleGuarantorChange(index, e)}
                className="w-full p-2 border rounded mt-1"
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
                className="w-full p-2 border rounded mt-1"
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
                className="w-full p-2 border rounded mt-1"
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
                className="w-full p-2 border rounded mt-1"
                required
              />
            </label>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {responseMessage && (
        <p className="mt-4 text-center text-green-600">{responseMessage}</p>
      )}
    </div>
  );
};

export default Loan;
