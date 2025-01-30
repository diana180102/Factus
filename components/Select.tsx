
import { poppins } from "@/ui/font";

interface Option {
  value: string;
  label: string;
}

interface SelectProps{
    options: Option []
}

function Select({options }:SelectProps) {
    return (
        <select 
            id="tributo" 
            className={`select ${poppins.className}`}>
               {options.map((option:Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        </select>
    );
}

export default Select;