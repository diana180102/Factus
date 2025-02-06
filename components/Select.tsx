
import { poppins } from "@/ui/font";
import React from "react";

// interface Option {
//   value: string;
//   label: string;
// }

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    children: React.ReactNode
}

function Select({children, ...props}:SelectProps) {
    return (
        <select 
            {...props} 
            className={`select ${poppins.className}`}>
             {children} 
        
        </select>
    );
}

export default Select;