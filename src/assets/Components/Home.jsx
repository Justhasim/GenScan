import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const ScanQrFunc = () => {
        navigate('/scanqr')
    }

    const GeneQrFunc = () => {
        navigate('/geneqr')
    }


  return (
    <>
    <div className="fixed top-0 left-0 w-full p-4 z-10">
   
        <h1 className="font-bold text-xl text-gray-800 dark:text-white">
          GenScan
        </h1>
     
      </div>
      <div className="flex flex-col sm:flex-row gap-5 w-full">
      

        {/* ---Scan QRCode */}
        <div className="flex-1 flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Scan QR Code 
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400">
            Quickly scan QR codes with your device to access information or perform actions instantly. Simplify your tasks with just a point and click
            </p>
            <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" onClick={ScanQrFunc}>
            Scan
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* ----Generate QRCode */}
        <div className="flex-1 flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Generate QR Code
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400">
            Quickly scan QR codes with your device to access information or perform actions instantly. Simplify your tasks with just a point and click.
            </p>
            <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" onClick={GeneQrFunc}>
            Generate
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
