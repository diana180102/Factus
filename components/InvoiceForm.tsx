import { poppins } from "@/ui/font";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

const options = [
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
];

export default function InvoiceForm() {
  return (
    <section className="">
      <div className="max-w-3xl px-4 py-8 mx-auto lg:py-16">
        <h1 className={`mb-8 text-2xl font-bold  ${poppins.className}`}>
          Crear Factura
        </h1>
        <form action="#">
          <div className="invoice mb-5 bg-[#e3e3f3] p-8 rounded-lg shadow-lg">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Información de la Factura
            </h2>

            <div className="flex flex-row w-full gap-4 mb-4">
              <div className="w-full">
                <Label forHTML="TipoFacturas" styles="">
                  Tipo de Factura
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="refFacturas" styles="">
                  Código de Referencia
                </Label>
                <Input></Input>
              </div>
            </div>

            <div className="w-full">
              <Label forHTML="observaciones" styles="">
                Observaciones
              </Label>
              <Input></Input>
            </div>
          </div>

          <div className="customer mb-5 bg-[#e3e3f3] p-8 rounded-lg shadow-lg">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Información de Cliente
            </h2>
            {/* Customer */}
            <div className="flex flex-row   gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="id" styles="">
                  Tipo Identificación
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="identy" styles="">
                  Número de identificación
                </Label>
                <Input type="text"></Input>
              </div>
              <div className="w-full">
                <Label forHTML="fullname" styles="">
                  Nombres y Apellidos
                </Label>
                <Input type="text"></Input>
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="id" styles="">
                  Tipo Persona
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="identy" styles="">
                  Razón social
                </Label>
                <Input type="text"></Input>
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="identy" styles="">
                  Email
                </Label>
                <Input type="text"></Input>
              </div>
              <div className="w-full">
                <Label forHTML="identy" styles="">
                  Telefono
                </Label>
                <Input type="text"></Input>
              </div>
              <div className="w-full">
                <Label forHTML="id" styles="">
                  Municipio
                </Label>
                <Select options={options}></Select>
              </div>
            </div>

            <div className="flex flex-row w-full  gap-4 mb-4  sm:gap-6 sm:mb-5">
              <div className="w-full">
                <Label forHTML="tributo" styles="">
                  Tributo
                </Label>

                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="identy" styles="">
                  Número de verificación de Cliente
                </Label>
                <Input type="text"></Input>
              </div>
            </div>
          </div>

          <div className="addItems bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Productos
            </h2>

            <div className=" flex flex-row w-full gap-4 mb-4 ">
              <div>
                <Label forHTML="refProducto" styles="">
                  Referencia del Producto
                </Label>
                <Input></Input>
              </div>
              <div>
                <Label forHTML="nameProducto" styles="">
                  Nombre del Producto
                </Label>
                <Input></Input>
              </div>
              <div>
                <Label forHTML="cantidadProducto" styles="">
                  Cantidad{" "}
                </Label>
                <Input></Input>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 mb-4 ">
              <div>
                <Label forHTML="descuentoProducto" styles="">
                  Precio
                </Label>
                <Input></Input>
              </div>
              <div>
                <Label forHTML="nameProducto" styles="">
                  Descuento %
                </Label>
                <Input></Input>
              </div>
              <div>
                <Label forHTML="cantidadProducto" styles="">
                  Código Estándar
                </Label>
                <Input></Input>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 mb-4">
              <div className="w-full">
                <Label forHTML="descuentoProducto" styles="">
                  Unidad de Medida
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="nameProducto" styles="">
                  Tributo
                </Label>
                <Input></Input>
              </div>
              <div className="w-full">
                <Label forHTML="cantidadProducto" styles="">
                  IVA(%)
                </Label>
                <Input></Input>
              </div>
            </div>

            <div className="flex flex-row w-full gap-4 mb-4">
              <div className="w-full">
                <Label forHTML="retencion" styles="">
                  {" "}
                  ¿Aplica retención?
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="retencion" styles="">
                  {" "}
                  Tipo de retención
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="cantidadProducto" styles="">
                  Retención(%)
                </Label>
                <Input></Input>
              </div>
            </div>
          </div>

          <div className="pago bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4 ">
            <h2
              className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}
            >
              Forma de Pago
            </h2>

            <div className=" flex flex-row w-full gap-4 mb-4 ">
              <div className="w-full">
                <Label forHTML="formaPago" styles="">
                  Forma de Pago
                </Label>
                <Select options={options}></Select>
              </div>
              <div className="w-full">
                <Label forHTML="metodoPago" styles="">
                  Metodo de Pago
                </Label>
                <Select options={options}></Select>
              </div>
            </div>
          </div>

          <div className="ListProducts bg-[#e3e3f3] p-8 rounded-lg shadow-lg mb-4 ">
                        <h2 className={`mb-4 text-xl font-semibold text-gray-900 dark:text-white ${poppins.className}`}>Lista de Productos</h2>



                        <div className="relative overflow-x-auto rounded-md">
                            <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className={`text-xs text-white uppercase bg-[#12093a] dark:bg-gray-700 dark:text-gray-400 ${poppins.className}`}>
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
                                    <tr className={`bg-[#edebf5] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ${poppins.className} text-[#0b063a]`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                    <tr className={`bg-[#edebf5] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ${poppins.className} text-[#0b063a]`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>
                                        <td className="px-6 py-4">
                                            White
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>
                                    </tr>
                                    <tr className={`bg-[#edebf5] border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ${poppins.className} text-[#0b063a]`}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>
                                        <td className="px-6 py-4">
                                            Black
                                        </td>
                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4">
                                            $99
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>
        </form>
      </div>
    </section>
  );
}
