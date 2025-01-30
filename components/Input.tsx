import { poppins } from "@/ui/font";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    classname?: string;
    type?: string;
 }

function Input({type, ...delegated}: InputProps) {
    
    return ( 
       <input 
       type={type}
       
       
       className={`input ${poppins.className} `} 
       {...delegated}
       />
  
     );

}

export default Input;