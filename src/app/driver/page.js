"use client";
import Image from "next/image";
import React from "react";
// import styles from "../page.module.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
// import "./page.css";


export default function Driver(){
    return (
        <>
            <div>
            <ul>
                <li>
                <Link href="/driver/1">Driver 1</Link>

                </li>
                <li>
                <Link href="/driver/2">Driver 2</Link>

                    </li>
            </ul>

</div>
        </>
    
    )
}