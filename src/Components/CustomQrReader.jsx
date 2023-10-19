import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

function CustomQrReader({ onFormChange, onOpenQR }) {
  const [displayQR, setdisplayQR] = useState(false);
  const [data, setData] = useState("No result");
  // onFormChange("fromWorktime");
  //onOpenQR(true);
  return (
    <>
      <div className={displayQR ? "QRCodeContainer isOpen" : "QRCodeContainer"}>
        <button
          onClick={() => {
            setdisplayQR(true);
            onOpenQR(displayQR);
          }}
          className="QRCodeButton"
        >
          Scan
          {displayQR ? (
            <div className="QRCode">
              <QrReader
                constraints={{
                  facingMode: "environment",
                }}
                style={{ width: "100%" }}
                onResult={(result, error) => {
                  if (!!result) {
                    // setData(result?.text);
                    setdisplayQR(!displayQR);
                    onOpenQR(displayQR);
                    setData(result?.text);
                    console.log(data);
                    onFormChange(data);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
              />
            </div>
          ) : null}
        </button>
      </div>
    </>
  );
}
export default CustomQrReader;
