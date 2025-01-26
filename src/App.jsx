import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
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

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-12 text-center">
        <h2 className="text-5xl font-bold mb-4 text-[#a11632]">
          Welcome to Saylani Microfinance
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Empowering lives with interest-free loans for weddings, homes,
          education, and businesses.
        </p>
      </div>

      <div className="container mx-auto py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Loan Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow p-4 rounded">
              <h4 className="text-xl font-bold mb-2">{category.name}</h4>
              <ul className="mb-2">
                {category.subcategories.map((sub, i) => (
                  <li key={i} className="text-gray-600">
                    - {sub}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">
                Max Loan: {category.maxLoan}
              </p>
              <div className="card-actions flex justify-end">
                <Link to="/about">
                  <button className="btn btn-sm bg-[#a11632] text-white">
                    Show more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
