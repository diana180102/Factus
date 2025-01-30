"use client"
import { poppins } from "@/ui/font";
import Input from "./Input";
import Label from "./Label";
import { ChangeEvent, FormEvent, useState } from "react";
import { signIn} from "next-auth/react";

import { useRouter } from "next/navigation";

function LoginForm() {

  
    const router =  useRouter();

    


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

   const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    
    const {name, value} = e.target;
    setFormData((prev) =>({
        ...prev,
        [name]:value
    }));
  } 
    
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false
      });

      console.log("Resultado de signIn:", result);

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        console.log("Autenticación fallida");
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  };

    
    
    return ( 
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-[#180636] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex flex-col mb-8 ">
                        <h1 className={`text-4xl font-bold leading-tight tracking-tight text-[#3e3cff]  dark:text-[#3e3cff] ${poppins.className} font-bold`}>
                            Factus
                        </h1>
                        <p className={`${poppins.className} text-white`}>Factura Electrónica</p>
                    </div>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <Label 
                                forHTML="email"
                                styles="text-white">Email
                            </Label>
                            <Input 
                                type="email" 
                                name="email" 
                                id="email" 
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="name@sanbox.com" 
                                required> 
                            </Input>
                        </div>
                        <div>
                            <Label 
                                forHTML="password"
                                styles="text-white"
                            >Password
                            </Label>
                            <Input 
                                type="password" 
                                name="password" 
                                id="password" 
                                onChange={handleChange}
                                value={formData.password}
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required> 
                            </Input>
                        </div>
                        
                        <button className="w-full text-white bg-[#282847] hover:bg-[#3e3cff] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800  shadow-md">Login In</button>
                        
                    </form>
                </div>
            </div>
        </div>
        </section>
     );
}

export default LoginForm;