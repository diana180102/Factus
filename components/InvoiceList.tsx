"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import Label from "./Label";
import { getInvoices } from "@/services/invoiceListService";

import { Client } from "@/types/client";
import { FileDown, ScanSearch } from 'lucide-react';
import { Bill } from "@/types/invoice";
import { getInvoice } from "@/services/invoiceService";
import { poppins } from "@/ui/font";


function InvoiceList() {
  //   const [loading, setLoading] = useState(false);
  const [filters, setFilter] = useState({
    identification: "",
    names: "",
    number: "",
  });
  const [invoices, setInvoices] = useState<Client[]>([]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const result = (await getInvoices(
        filters.identification,
        filters.names,
        filters.number
      )) as { data: { data: Client[] } };

      setInvoices(result.data.data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const result = (await getInvoices()) as { data: { data: Client[] } };

        setInvoices(result.data.data);
      } catch (error) {
        console.error("Error fetching get Invoices:", error);
      }
    };
    fetchInvoices();
  }, []);

  //Update state
  useEffect(() => {
    console.log("Invoices state has been updated:", invoices);
  }, [invoices]);


  const handleDownloadFactus = async (number: string) => {
    try {
      const result = (await getInvoice(number)) as { data: { bill: Bill } };
       
       if(result.data && result.data.bill){
          window.open(result.data.bill.public_url);
       }

      
    } catch (error) {
      console.error("Error getting invoice", error);
    }
  };

   const handleDownloadDian= async (number: string) => {
    try {
      const result = (await getInvoice(number)) as { data: { bill: Bill } };
       
       if(result.data && result.data.bill){
          window.open(result.data.bill.qr);
       }

      
    } catch (error) {
      console.error("Error getting invoice", error);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-8 bg-gray-100 h-[850px]">
      <div className="flex flex-row w-full gap-2 justify-between items-center">
        <div className="pb-4 bg-gray-100 dark:bg-gray-900">
          <Label forHTML="table-search" styles="">
            Número de Identificación
          </Label>
          <div className="relative mt-2">
            <div className="absolute right-2 top-0 bottom-0 flex items-center ps-3 pointer-events-none">
              <button type="button" onClick={handleSearch}>
                <ScanSearch className="text-slate-400" />
              </button>
            </div>
            <Input
              type="text"
              placeholder="Search for items"
              name="identification"
              value={filters.identification}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <div className="pb-4 bg-gray-100 dark:bg-gray-900">
          <Label forHTML="table-search" styles="">
            Nombre de cliente
          </Label>
          <div className="relative mt-2 ">
            <div className="absolute right-2 top-0 bottom-0   flex items-center ps-3 pointer-events-none">
              <button type="button" onClick={handleSearch}>
                <ScanSearch className="text-slate-400" />
              </button>
            </div>
            <Input
              type="text"
              placeholder="Search for items"
              name="names"
              value={filters.names}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        <div className="pb-4 bg-gray-100 dark:bg-gray-900">
          <Label forHTML="table-search" styles="">
            Número de Factura
          </Label>
          <div className="relative mt-2">
            <div className="absolute right-2 top-0 bottom-0 flex items-center ps-3 pointer-events-none">
              <button type="button" onClick={handleSearch}>
                <ScanSearch className="text-slate-400" />
              </button>
            </div>
            <Input
              type="text"
              placeholder="Search for items"
              name="number"
              value={filters.number}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg ">
        <thead className={`rounded-lg text-xs text-gray-200 uppercase bg-[#180636] dark:bg-gray-700 dark:text-gray-400 ${poppins.className}`}>
          <tr>
            <th scope="col" className="px-6 py-3">
              Identificación
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Número de Factura
            </th>

            <th scope="col" className="px-6 py-3">
              Factura Factus
            </th>
            <th scope="col" className="px-6 py-3">
              Factura DIAN
            </th>
          </tr>
        </thead>
        <tbody className={`${poppins.className}`}>
          {invoices.length > 0 && invoices.map((invoice, index) => (
            <tr
              key={`${invoice.identification}-${index}`}
              className="px-6 py-4"
            >
              <td className="px-6 py-4">{invoice.identification}</td>
              <td className="px-6 py-4">{invoice.names}</td>
              <td className="px-6 py-4">{invoice.email}</td>
              <td className="px-6 py-4">{invoice.number}</td>
              <td className="px-6 py-4 text-center">
                <button
                  type="button"
                  onClick={() => handleDownloadFactus(invoice.number)}
                >
                  <FileDown className="text-purple-900" />
                </button>
              </td>
             <td className="px-6 py-4  text-center "> 
              <button
                  type="button"
                  onClick={() => handleDownloadDian(invoice.number)}
                >
                  <FileDown className="text-purple-900" />
                </button>
              </td>
             
            </tr>
          ))
          }
        {invoices.length <= 0 && <tr>
            <td colSpan={6} className="text-center text-lg ">
              <p className="m-6 ">No encontrado</p>
            </td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceList;
