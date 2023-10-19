import Sheet from "react-modal-sheet";
//import QrReader from "./CustomQrReader";
import { QrReader } from "./CustomQrReaderZxing";

import { useContext, useState } from "react";
import { QRCodeFormContext } from "./QRCodeFormContext";
// import for some reason not working :/
//import { FormSwitch } from "./FormSwitch";
import Form1 from "../Components/FormWorktime";
import OnBoarding from "../Components/OnBoarding";

export default function BottomDrawer() {
  const QRCodeContext = useContext(QRCodeFormContext);
  const [isOpen, setOpen] = useState(true);
  const [formContent, setFormContent] = useState("");
  const [initialSnapP, setInitialSnapP] = useState(0);

  /*const onFormChange = (e) => {
    console.log(e); 
    //setFormContent({ newContent });
  };
  
  
  function onFormChange(content) {
    console.log(content);
    setFormContent({ newContent });
  }
  */

  function onFormChange(content) {
    console.log(content);
    setFormContent(content);
  }

  function onOpenQR(b) {
    //snapTo();
    setInitialSnapP(b ? 0 : 1);
    console.log(" ---> " + b);
    setOpen(false);
    setOpen(true);
    // close/open Bottom drawer
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>
      <Sheet
        snapPoints={[0.6, 0.1]}
        initialSnap={initialSnapP}
        isOpen={isOpen}
        onSnap={(snapIndex) =>
          console.log("> Current snap point index:", snapIndex)
        }
        onClose={() => {
          console.log("doNothing");
        }}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <QrReader onFormChange={onFormChange} onOpenQR={onOpenQR} />
            <FormSwitch data={formContent} />
            {/* Your sheet content goes here */}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
/*
function FormSwitch({ formContent }) {
  console.log(formContent + " --- ");
  switch (formContent) {
    case "fromWorktime":
      return <Form1 />;
    case "form2":
      return <Form1 />;
    default:
      return "test";
  }
}*/
const FormSwitch = (test) => {
  console.log(test.data);
  var text = test.data + "";
  switch (text) {
    case "fromWorktime":
      return <Form1 />;
    case "form2":
      return <Form1 />;
    default:
      return <OnBoarding />;
  }
};
