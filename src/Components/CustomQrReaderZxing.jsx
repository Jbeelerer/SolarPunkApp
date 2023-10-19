import { useState } from "react";
import { useZxing } from "react-zxing";

export function QrReader({ onFormChange, onOpenQR }) {
  const [displayQR, setdisplayQR] = useState(false);
  // const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      //  setResult(result.getText());
      onFormChange(result.getText());
      setdisplayQR(false);
      onOpenQR(true);
    },
  });

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
          <video ref={ref} />
        </button>
      </div>
    </>
  );
}
