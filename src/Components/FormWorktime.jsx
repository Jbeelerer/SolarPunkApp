import { useRef, useState } from "react";
import { ref, set } from "@firebase/database";
import { firebase } from "../firebase_setup/firebase";

function FormWorktime() {
  /*
      <p><BasicForm/></p>
  <FirebaseIntegration/>
    */
  const dataRef = useRef();
  const [isSend, setIsSend] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setIsSend(true);
    await set(
      ref(
        firebase,
        "users/" +
          document.getElementById("name").value +
          document.getElementById("lastName").value
      ),
      {
        startSleeptime: "",
        endSleeptime: "",
        startWorktime: "",
        endWorktime: "",
      }
    );
  };
  return (
    <>
      {!isSend ? (
        <div className="infoForm Form1">
          <form onSubmit={submithandler}>
            <input type="text" id="name" />
            <input type="text" id="lastName" />
            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div>Thank you for submitting</div>
      )}
    </>
  );
}

export default FormWorktime;
