import { poppins } from "@/ui/font";
import React from "react";

interface labelProps {
    forHTML: string,
    children: React.ReactNode,
    styles: string
    
}

function Label({forHTML, children, styles}: labelProps) {
    
    return ( 
        <label htmlFor={forHTML} className={`block mb-2 text-xs font-normal ${poppins.className} ${styles} `}>{children}</label>
     );

}

export default Label;