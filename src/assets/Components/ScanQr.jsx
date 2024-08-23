import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';

function ScanQr() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner('box', {
      fps: 5,
      qrbox: {
        width: 250,
        height: 250,
      },
      
    });

    qrScanner.render(
      (result) => {
        setScanResult(result);
        qrScanner.clear();
      },
      (error) => {
        console.error('QR code scan error:', error);
        console.log(error);
      }
    );

    return () => {
      qrScanner.clear(); 
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 p-4">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Scan QR Code
        </h3>
        {scanResult ? (
          <div>
            Result: <a href={scanResult}>{scanResult}</a>
          </div>
        ) : (
          <div id="box"></div>
        )}
      </div>
    </div>
  );
}

export default ScanQr;
