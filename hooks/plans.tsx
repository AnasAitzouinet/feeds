"use client"

import { UUID } from "crypto";

import jwt from "jsonwebtoken"
export interface Plan {
    id?: UUID | string;
    fullNames?: string;
    email?: string;
    phone?: string;
    address?: string;
    plan?: string | string[];
    price?: number;
    status?: string;
}
export function LoadLocalStorage() {
    const data = localStorage.getItem("plan")
    const jwtSecret = 'test'

    if (data) {
        const jwtData = jwt.verify(JSON.parse(data), jwtSecret)
        return jwtData
    }else{
        return 'empty'
    }
}
export function SaveToLocalStorage({Plan}: {Plan: Plan}) {
    
    localStorage.setItem("plan", JSON.stringify(Plan))

}
