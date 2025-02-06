"use client";

import { poppins } from "@/ui/font";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import { getInvoiceType } from "@/services/invoiceTypeService";
import React, { useEffect, useState } from "react";
import { InvoiceType } from "@/types/invoiceType";
import { getIdentityDocument } from "@/services/identityDocumentService";
import { Document } from "@/types/identityDocument";
import { getOrganization } from "@/services/organization";
import { Organization } from "@/types/organization";
import { Municipios } from "@prisma/client";
import { getMunicipios } from "@/services/municipiosService";
import { getTributeClient } from "@/services/tributeClientService";
import { TributeClient } from "@/types/tributeClient";
import { Standard } from "@/types/standard";
import { getStandard } from "@/services/standarsService";
import { getMeasure } from "@/services/measureService";
import { Measure } from "@/types/measure";
import { TributeProduct } from "@/types/tributeProduct";
import { getTributeProduct } from "@/services/tributeProduct";
import { MethodPayment } from "@/types/methodPayment";
import { PaymentType } from "@/types/paymentType";
import { getPaymentType } from "@/services/paymentTypeService";
import { getMethodPayment } from "@/services/methodPaymentService";
import { FormDataType} from "@/types/invoice";
import { createInvoice } from "@/services/createInvoice";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";


export default function InvoiceForm() {

  const [invoiceType, setInvoiceType] = useState<InvoiceType[]>([]);
  const [identityDocument, setIdentityDocument] = useState<Document[]>([]);
  const [organization, setOrganization] = useState<Organization[]>([]);
  const [municipios, setMunicipios] = useState<Municipios[]>([]);
  const [tributeClient, setTributeClient] = useState<TributeClient[]>([]);
  const [tributeProduct, setTributeProduct] = useState<TributeProduct[]>([]);
  const [standard, setStandard] = useState<Standard[]>([]);
  const [measure, setMeasure] = useState<Measure[]>([]);
  const [methodPayment, setMethodPayment] = useState<MethodPayment[]>([]);
  const [paymentType, setPaymentType] = useState<PaymentType[]>([]);
  
  
  const initialState: FormDataType = {
  numbering_range_id: 8,  
  reference_code: "",
  observation: "",
  payment_form: "1",
  payment_due_date: "2024-12-30",
  payment_method_code: "10",
  billing_period: {
    start_date: "2024-01-10",
    start_time: "00:00:00",
    end_date: "2024-02-09",
    end_time: "23:59:59",
  },
  customer: {
    identification: "",
    dv: "",
    company:"",
    trade_name:"",
    names: "",
    address: "",
    email: "",
    phone: "",
    legal_organization_id: "",
    tribute_id: "",
    identification_document_id: "",
    municipality_id: "",
  },
  items: [],
  
 
 
  
  
  };
  
  const [formData, setFormData] = useState<FormDataType>(initialState);
  const [newItem, setNewItem] = useState({
    code_reference: "",
    name: "",
    quantity: 0,
    discount_rate: 0,
    price: 0,
    tax_rate: "0.00",
    unit_measure_id: 0,
    standard_code_id: 0,
    is_excluded: 0,
    tribute_id: "",
    withholding_taxes: [],
  });

  const [isRequired, setIsRequired] = useState<{ [key: string]: boolean }>({});
  const [showPopup, setShowPopup] = useState(false);

 


   
  
 
  

  useEffect(() => {
    const fetchDataInvoice = async () => {
      try {
        const data = await getInvoiceType();

        setInvoiceType(data.data);
      } catch (error) {
        console.error("Error fetching invoice types:", error);
      }
    };

    fetchDataInvoice();
  }, []);

  useEffect(() => {
    const fetchIdentityDocument = async () => {
      try {
        const result = await getIdentityDocument();
        setIdentityDocument(result.data);
      } catch (error) {
        console.error("Error fetching identity document: ", error);
      }
    };
    fetchIdentityDocument();
  }, []);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const result = await getOrganization();
        setOrganization(result.data);
      } catch (error) {
        console.error("Error fetching organization: ", error);
      }
    };
    fetchOrganization();
  }, []);

  useEffect(() => {
    const fetchMunicios = async () => {
      try {
        const result = await getMunicipios();
        setMunicipios(result.data);
      } catch (error) {
        console.error("Error fetching municipios", error);
      }
    };
    fetchMunicios();
  }, []);

  useEffect(() => {
    const fetchTributeClient = async () => {
      try {
        const result = await getTributeClient();

        setTributeClient(result.data);
      } catch (error) {
        console.error("Error fetching tribute client", error);
      }
    };
    fetchTributeClient();
  }, []);

  useEffect(() => {
    const fetchStandard = async () => {
      try {
        const result = await getStandard();
        console.log(result);
        setStandard(result.data);
      } catch (error) {
        console.error("Error fetching standard ", error);
      }
    };
    fetchStandard();
  }, []);

  useEffect(() => {
    const fetchMeasure = async () => {
      try {
        const result = await getMeasure();
        console.log(result);
        setMeasure(result.data);
      } catch (error) {
        console.error("Error fetching measure ", error);
      }
    };
    fetchMeasure();
  }, []);

  useEffect(() => {
    const fetchTributeProduct = async () => {
      try {
        const result = await getTributeProduct();

        setTributeProduct(result.data);
      } catch (error) {
        console.error("Error fetching tribute product", error);
      }
    };
    fetchTributeProduct();
  }, []);

  useEffect(() => {
    const fetchPaymentType = async () => {
      try {
        const result = await getPaymentType();

        setPaymentType(result.data);
      } catch (error) {
        console.error("Error fetching payment type", error);
      }
    };
    fetchPaymentType();
  }, []);

  useEffect(() => {
    const fetchMethodPayment = async () => {
      try {
        const result = await getMethodPayment();

        setMethodPayment(result.data);
      } catch (error) {
        console.error("Error fetching method payment", error);
      }
    };
    fetchMethodPayment();
  }, []);
  
   const addItem = () =>{
    setFormData((prev) =>({
      ...prev,
      items:[...prev.items, {
        ...newItem,
         quantity: Number(newItem.quantity),
         discount_rate: Number(newItem.discount_rate), 
         price: Number(newItem.price),
         unit_measure_id: Number(newItem.unit_measure_id),
         standard_code_id: Number(newItem.standard_code_id),
         tribute_id: Number(newItem.tribute_id),
         is_excluded: Number(newItem.is_excluded),
         

      }]
    }));

     setNewItem({
      code_reference: "",
      name: "",
      quantity: 1,
      discount_rate: 0,
      price: 0,
      tax_rate: "0.00",
      unit_measure_id: 0,
      standard_code_id: 0,
      is_excluded: 0,
      tribute_id: "",
      withholding_taxes: [],
    });

    
  };
 
 //  Values of Products
  const handleNewItemChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
     }));
   };

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    
    const {name, value} = e.target;

    setFormData((prev)=>({
      ...prev,
       customer:{
        ...prev.customer,
        [name]:value
       },
      [name]:value,
    }));

    //Campos requeridos
    setIsRequired(prev =>({
      ...prev,
      [name]: value.trim() === '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     const body = {
      ...formData,
      numbering_range_id: Number(formData.numbering_range_id)
     };

     try {
       const result = await createInvoice(body);
       console.log(result);
       if(result){
         ;
         setShowPopup(true);

       }
     } catch (error) {
       console.error("Error creating invoice", error);
     }

     console.log(body);
  }



  return (
    <section className="">
      
      <div className="max-w-3xl px-4 py-8 mx-auto lg:py-16">
        <h1 className={`mb-8 text-2xl font-bold  ${poppins.className}`}>
          Crear Factura
        </h1>
        <form action="#" onSubmit={handleSubmit} className="flex flex-col">
          {/* invoice */}
          <div className="invoice mb-5 bg-[#e3e3f3] p-8 rounded-lg shadow-lg">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Información de la Factura
            </h2>

            <div className="flex flex-row w-full gap-4 mb-4">
              <div className="w-full">
                <Label forHTML="numbering_range_id" styles="">
                  Tipo de Factura
                </Label>

                <Select
                  onChange={handleChange}
                  value={formData.numbering_range_id}
                  name="numbering_range_id"
                >
                  {invoiceType.map((invoiceType: InvoiceType) => (
                    <option key={invoiceType.id} value={invoiceType.id}>
                      {invoiceType.description}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="reference_code" styles="">
                  Código de Referencia
                </Label>
                <Input
                  onChange={handleChange}
                  value={formData.reference_code}
                  name="reference_code"
                  required = {isRequired.reference_code}
                ></Input>
                  {
                    isRequired.reference_code && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
              </div>
            </div>

            <div className="w-full">
              <Label forHTML="observation" styles="">
                Observaciones
              </Label>
              <Input
                onChange={handleChange}
                value={formData.observation}
                name="observation"
              ></Input>
            </div>
          </div>
          {/* Customer */}
          <div className="customer mb-5 bg-[#e3e3f3] p-8 rounded-lg shadow-lg">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Información de Cliente
            </h2>

            <div className="flex flex-row   gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="identification_document_id" styles="">
                  Tipo Identificación
                </Label>
                <Select
                  onChange={handleChange}
                  value={formData.customer.identification_document_id}
                  name="identification_document_id"
                >
                  <option value="">Seleccione identificación</option>
                  {identityDocument.map((document: Document) => (
                    <option key={document.id} value={document.id}>
                      {document.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="identification" styles="">
                  Número de identificación
                </Label>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={formData.customer.identification}
                  name="identification"
                  required = {isRequired.identification}
                ></Input>
                 {
                    isRequired.identification && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
              </div>
              <div className="w-full">
                <Label forHTML="names" styles="">
                  Nombres y Apellidos
                </Label>
                <Input
                  type="text"
                  onChange={handleChange}
                  value={formData.customer.names}
                  name="names"
                ></Input>
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="legal_organization_id" styles="">
                  Tipo de Organización
                </Label>
                <Select
                  name="legal_organization_id"
                  value={formData.customer.legal_organization_id}
                  onChange={handleChange}
                >
                  <option value="">Seleccione organización</option>
                  {organization.map((organization: Organization) => (
                    <option key={organization.id} value={organization.id}>
                      {organization.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="company" styles="">
                  Razón social
                </Label>
                <Input
                  type="text"
                  name="company"
                  value={formData.customer.company}
                  onChange={handleChange}
                  required={formData.customer.legal_organization_id === "1"}
                ></Input>
                  {
                    formData.customer.legal_organization_id === "1" ? 
                    <span className="text-red-400 text-xs">*field required</span> : <></>
                  }
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="email" styles="">
                  Email
                </Label>
                <Input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.customer.email}
                ></Input>
              </div>
              <div className="w-full">
                <Label forHTML="phone" styles="">
                  Telefono
                </Label>
                <Input
                  type="text"
                  name="phone"
                  value={formData.customer.phone}
                  onChange={handleChange}
                ></Input>
              </div>
              <div className="w-full">
                <Label forHTML="municipality_id" styles="">
                  Municipio
                </Label>
                <Select name="municipality_id" onChange={handleChange}>
                  <option value="">Seleccione municipio</option>
                  {municipios.map((municipio: Municipios) => (
                    <option key={municipio.code} value={municipio.id}>
                      {municipio.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="tribute_id" styles="">
                  ¿Aplica IVA?
                </Label>

                <Select name="tribute_id" onChange={handleChange}>
                  {tributeClient.map((tribute: TributeClient) => (
                    <option key={tribute.id} value={tribute.id}>
                      {tribute.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="dv" styles="">
                  Número de verificación de Cliente
                </Label>
                <Input type="text" name="dv" onChange={handleChange} required={formData.customer.identification_document_id === "6"}></Input>
                {
                    formData.customer.identification_document_id === "6" ? 
                    <span className="text-red-400 text-xs">*field required</span> : <></>
                  }
              </div>
            </div>
          </div>

          {/* Products */}

          <div className="addItems bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4">
            <div className="flex flex-row justify-between mb-2">
              <h2
                className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
              >
                Productos
              </h2>
              <button
               type="button"
                onClick={addItem}
                className="text-white bg-gradient-to-r bg-[#180636] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                add Product
              </button>
            </div>

            <div className=" flex flex-row w-full gap-4 mb-4 ">
              <div>
                <Label forHTML="code_reference" styles="">
                  Referencia del Producto
                </Label>
                <Input
                  name="code_reference"
                  value={newItem.code_reference}
                  onChange={handleNewItemChange}
                  required = {isRequired.code_reference}
                ></Input>
                 {
                    isRequired.code_reference && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
                
              </div>
              <div>
                <Label forHTML="name" styles="">
                  Nombre del Producto
                </Label>
                <Input
                  name="name"
                  value={newItem.name}
                  onChange={handleNewItemChange}
                  required = {isRequired.name}
                ></Input>
                {
                    isRequired.name && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
              </div>
              <div>
                <Label forHTML="quantity" styles="">
                  Cantidad
                </Label>
                <Input
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleNewItemChange}
                ></Input>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 mb-4 ">
              <div>
                <Label forHTML="price" styles="">
                  Precio
                </Label>
                <Input
                  name="price"
                  value={newItem.price}
                  onChange={handleNewItemChange}
                  required = {isRequired.price}
                ></Input>
                {
                    isRequired.price && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
              </div>
              <div>
                <Label forHTML="discount_rate" styles="">
                  Descuento %
                </Label>
                <Input
                  name="discount_rate"
                  value={newItem.discount_rate}
                  onChange={handleNewItemChange}
                ></Input>
              </div>
              <div>
                <Label forHTML="standard_code_id" styles="">
                  Código Estándar
                </Label>
                <Select
                  name="standard_code_id"
                  value={newItem.standard_code_id}
                  onChange={handleNewItemChange}
                  required={isRequired.standard_code_id}
                >
                  <option value="">Seleccione un estandar</option>
                  {standard.map((standard: Standard) => (
                    <option key={standard.id} value={standard.id}>
                      {standard.name}
                    </option>
                  ))}
                </Select>
                {
                    isRequired.reference_code && 
                    <span className="text-purple-800 text-xs ml-2">field required</span> 
                  }
              </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
              <div className="w-full">
                <Label forHTML="unit_measure_id" styles="">
                  Unidad de Medida
                </Label>
                <Select
                  name="unit_measure_id"
                  value={newItem.unit_measure_id}
                  onChange={handleNewItemChange}
                >
                  <option value="">Seleccione una medida</option>
                  {measure.map((measure: Measure) => (
                    <option key={measure.id} value={measure.code}>
                      {measure.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-[40%]">
                <Label forHTML="is_excluded" styles="">
                  ¿Incluye IVA?
                </Label>
                <Select
                  name="is_excluded"
                  value={newItem.is_excluded}
                  onChange={handleNewItemChange}
                >
                  <option key={1} value={1}>
                    Si
                  </option>
                  <option key={2} value={0}>
                    No
                  </option>
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="tribute_id" styles="">
                  Tributo sobre Productos
                </Label>

                <Select
                  name="tribute_id"
                  value={newItem.tribute_id}
                  onChange={handleNewItemChange}
                >
                  <option value="">Seleccione el tributo</option>
                  {tributeProduct.map((tributo: TributeProduct) => (
                    <option key={tributo.id} value={tributo.id}>
                      {tributo.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-[30%]">
                <Label forHTML="tax_rate" styles="">
                  IVA(%)
                </Label>
                <Input
                  name="tax_rate"
                  value={newItem.tax_rate}
                  onChange={handleNewItemChange}
                ></Input>
              </div>
            </div>
          </div>

          {/* Products list */}

          <div className="ListProducts bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4 ">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Lista de Productos
            </h2>

            <div className="relative overflow-x-auto rounded-md">
              <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                  className={`text-xs text-white uppercase bg-[#12093a] dark:bg-gray-700 dark:text-gray-400 ${poppins.className}`}
                >
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cantidad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Precio
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Descuento
                    </th>
                  </tr>
                </thead>
                <tbody>
                
                  {formData.items.map((item) => (
                    <tr className={`bg-[#edebf5] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ${poppins.className} text-[#0b063a]`} key={item.code_reference}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      > {item.name}</th>
                      <td className="px-6 py-4">{item.quantity}

                      </td>
                      <td className="px-6 py-4">{item.price}
                        
                      </td>
                      <td className="px-6 py-4">{item.discount_rate} %
                        
                      </td>
                    </tr>
                    
                  ))}
                </tbody>
              </table>
               
            </div>
          </div>

          {/* pay forms */}

          <div className="pago bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4 ">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Forma de Pago
            </h2>

            <div className=" flex flex-row w-full gap-4 mb-4 ">
              <div className="w-full">
                <Label forHTML="payment_form" styles="">
                  Forma de Pago
                </Label>
                <Select
                  name="payment_form"
                  value={formData.payment_form}
                  onChange={handleChange}
                >
                  {paymentType.map((pay: PaymentType) => (
                    <option key={pay.id} value={pay.id}>
                      {pay.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-full">
                <Label forHTML="payment_method_code" styles="">
                  Metodo de Pago
                </Label>
                <Select
                  name="payment_method_code"
                  value={formData.payment_method_code}
                  onChange={handleChange}
                >
                  {methodPayment.map((pay: MethodPayment) => (
                    <option key={pay.id} value={pay.id}>
                      {pay.name}
                    </option>
                  ))}
                </Select>
              </div>
              
            </div>
          </div>
          
          <button
            type="submit"
            className="self-end text-white bg-gradient-to-r bg-[#180636] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            crear
          </button>
          
        </form>
      </div>
    </section>
  );
}
