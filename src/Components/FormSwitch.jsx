import Form1 from "../Components/FormWorktime";

function FormSwitch({ data }) {
  switch (data) {
    case "fromWorktime":
      return <Form1 />;
    case "form2":
      return <Form1 />;
    default:
      return null;
  }
}
export default FormSwitch;
