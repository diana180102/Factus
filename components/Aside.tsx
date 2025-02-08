import Link from "next/link";
import Image from 'next/image';

function Aside() {
    return ( 



<aside id="default-sidebar" className="w-[35%] md:w-[29%] lg:w-[20%] 2xl:w-[10%] pt-2  "  >
   
  <div className="overflow-y-auto py-1 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center justify-centerk pt-4">
        <Image src={`/factus-logo-dark.BlZunxaw.png`} alt="Factus logo" width={150} height={150} className="w-4/5" ></Image>
    </div> 
      <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li >
              <Link href={`/dashboard/`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                    <span className="ml-3">Crear Facturas</span>
              </Link>
          </li>
          <li>
              <Link href="/dashboard/InvoiceView" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  <span className="ml-3">Ver Facturas</span>
              </Link>
          </li>
          
      </ul>
  </div>
  
</aside>
    );
}

export default Aside;