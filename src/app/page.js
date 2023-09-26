"use client";
import Image from "next/image";
import React from 'react'
import styles from "./page.module.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link";
import Navbar from "./navbar/page";
import {useRouter} from 'next/navigation';




export default function Home() {
  const [name,setName] = useState('Gaurav') 
  const apple = ()=>{
  setName("Sidhu")
  }

  return (
    <>
    <User></User>
    {/* <Navbar></Navbar> */}
  </>
  );
}


{/* <main classNameName={styles.main}> */}
{/* <h1>hellooo {name}</h1> */}
{/* <a onClick={() => console.log("wow")}>Click here</a> */}
{/* {User("Sir")}  */}
{/* <User name="Binda Enterprises"></User> */}
{/* <button onClick ={()=>apple()}>click this</button> */}
{/* <User name="Gaurav" about="about User"></User> */}
// </main>

const User = (porps) => {
  const router = useRouter();

  return (
    // <div>
    //   <h1>I am User {porps.name}</h1>
    //   <h1>{porps.about}</h1>
    // </div>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="#">{porps.name}</a>
  <button className="navbar-brand" onClick={()=>router.push("/login")}>Login</button>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" href="/login">Login/Sign Up</Link>
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
    </>
  );
};


