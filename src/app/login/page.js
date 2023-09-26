"use client";
import Image from "next/image";
import React from "react";
import styles from "../page.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./page.css";

// export default function Page(){
//     return (
//         <div classNameName={styles.main}>
//             <h1 >Login Page</h1>
//         </div>
//     )
// }

const LoginPage = () => {
  return (
    // <section className="text-center text-lg-start">
    //   <style jsx>{`
    //     .cascading-right {
    //       margin-right: -50px;
    //     }
    //     @media (max-width: 991.98px) {
    //       .cascading-right {
    //         margin-right: 0;
    //       }
    //     }
    //   `}</style>

    //   <div className="container py-4">
    //     <div className="row g-0 align-items-center">
    //       <div className="col-lg-6 mb-5 mb-lg-0">
    //         <div className="card cascading-right">
    //           <div className="card-body p-5 shadow-5 text-center">
    //             <h2 className="fw-bold mb-5">Sign up now</h2>
    //             <form>
    //               <div className="row">
    //                 <div className="col-md-6 mb-4">
    //                   <div className="form-outline">
    //                     <input
    //                       type="text"
    //                       id="form3Example1"
    //                       className="form-control"
    //                     />
    //                     <label className="form-label" htmlFor="form3Example1">
    //                       First name
    //                     </label>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 mb-4">
    //                   <div className="form-outline">
    //                     <input
    //                       type="text"
    //                       id="form3Example2"
    //                       className="form-control"
    //                     />
    //                     <label className="form-label" htmlFor="form3Example2">
    //                       Last name
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="form-outline mb-4">
    //                 <input
    //                   type="email"
    //                   id="form3Example3"
    //                   className="form-control"
    //                 />
    //                 <label className="form-label" htmlFor="form3Example3">
    //                   Email address
    //                 </label>
    //               </div>

    //               <div className="form-outline mb-4">
    //                 <input
    //                   type="password"
    //                   id="form3Example4"
    //                   className="form-control"
    //                 />
    //                 <label className="form-label" htmlFor="form3Example4">
    //                   Password
    //                 </label>
    //               </div>

    //               <div className="form-check d-flex justify-content-center mb-4">
    //                 <input
    //                   className="form-check-input me-2"
    //                   type="checkbox"
    //                   value=""
    //                   id="form2Example33"
                       
    //                 />
    //                 <label className="form-check-label" htmlFor="form2Example33">
    //                   Subscribe to our newsletter
    //                 </label>
    //               </div>

    //               <button type="submit" className="btn btn-primary btn-block mb-4">
    //                 Sign up
    //               </button>

    //               <div className="text-center">
    //                 <p>or sign up with:</p>
    //                 <button
    //                   type="button"
    //                   className="btn btn-link btn-floating mx-1"
    //                 >
    //                   <i className="fab fa-facebook-f"></i>
    //                 </button>

    //                 <button
    //                   type="button"
    //                   className="btn btn-link btn-floating mx-1"
    //                 >
    //                   <i className="fab fa-google"></i>
    //                 </button>

    //                 <button
    //                   type="button"
    //                   className="btn btn-link btn-floating mx-1"
    //                 >
    //                   <i className="fab fa-twitter"></i>
    //                 </button>

    //                 <button
    //                   type="button"
    //                   className="btn btn-link btn-floating mx-1"
    //                 >
    //                   <i className="fab fa-github"></i>
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-6 mb-5 mb-lg-0">
    //         <img
    //           src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
    //           className="w-100 rounded-4 shadow-4"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <section className="vh-100" style={{ color: 'red' }}>
          <style jsx>{`
         .gogl {
            background-color: #dd4b39;
         }
         .fb {
            background-color: #3b5998;
         }
         .vh-100 {
            background-color: #508bfc;
         }
       
       `}</style>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">
        
            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="typePasswordX-2">Password</label>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4" />

    

          </div>
        </div> 
      </div>
    </div>
  </div>
</section>
    </>

  
  );
};
export default LoginPage;
