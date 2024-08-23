import React, { useState, useEffect, useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import html2canvas from "html2canvas";

function GeneQr() {
  const [inputValue, setInputValue] = useState("");
  const qrCodeRef = useRef(null); // Ref to the QR code container

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  const handleDownloadClick = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "qrcode.png";
        link.click();
      });
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      if (qrCodeRef.current) {
        html2canvas(qrCodeRef.current).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          // Convert base64 data URL to Blob
          fetch(imgData)
            .then((res) => res.blob())
            .then((blob) => {
              const file = new File([blob], "qrcode.png", { type: "image/png" });

              navigator.share({
                title: "Check out my QR Code",
                text: "Here is a QR Code I generated.",
                files: [file],
              })
                .then(() => console.log("Share successful"))
                .catch((error) => console.log("Share failed", error));
            })
            .catch((error) => console.log("Error converting image to Blob", error));
        });
      }
    } else {
      alert("Share functionality is not supported on this device.");
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 p-4">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Generate QR Code
        </h3>
        <div ref={qrCodeRef}>
          <QRCode
            value={inputValue}
            size={200}
            qrStyle="dots"
            bgColor={isDarkMode ? "#333333" : "#ffffff"}
            fgColor={isDarkMode ? "#ffffff" : "#000000"}
            eyeRadius={9}
          />
        </div>
      </div>

      <div className="w-full max-w-xs mt-4">
        <input
          type="text"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Link Here"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex gap-5 mt-4">
        <button
          type="button"
          className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
          onClick={handleShareClick}
        >
          Share
        </button>

        <button
          type="button"
          className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          onClick={handleDownloadClick}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default GeneQr;
