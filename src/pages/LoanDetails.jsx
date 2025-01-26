import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

const LoanDetail = () => {

  const [data , setData] = useState([])

    const  getData= () => {
      axios
        .get("http://localhost:3000/api/v1/loans")
        .then((response) => {
          console.log(response.data);
          data.push(response.data)
          setData(...data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    useEffect(() => {
      getData();
    }, []);


  return (
    <>
    <Navbar/>
    <div className='text-center text-4xl m-3 '>
      <h1>List of Loans</h1>
    </div>
    {data ? data.map((item , index) => {
      return(
        <div key={index} className='border-4 m-3 p-3 text-xl'>
          <h1>Category: {item.category}</h1>
          <h1>Subcategory: {item.subcategory}</h1>
          <h1>Amount: {item.amount}</h1>
          <h1>Period: {item.period}</h1>
          <h1>Status{item.status}</h1>
          <h1>
          {item.guarantors.map((guarantor, index) => (
        <div key={index} className="guarantor-item pt-3 mt-3">
          <p><strong>Guarantor :</strong> {guarantor.name}</p>
          <p><strong>Email:</strong> {guarantor.email}</p>
          <p><strong>CNIC:</strong> {guarantor.cnic}</p>
          <p><strong>Location:</strong> {guarantor.location}</p>
        </div>
      ))}</h1> 
        </div>
      )
    }) : <h1>Not Found</h1>}
    <Footer/> 
    </>
  );
};

export default LoanDetail;
