// import Button from "./components/Button";
// import Container from "./components/Container";
import { useRef } from "react";
import Button from "./components/Button";
import Form, { FormHandle } from "./components/Form";
import Input from "./components/Input";

function App() {
  const formRef = useRef<FormHandle>(null);
  const onSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    formRef.current?.clear();
  };
  return (
    <Form onSave={onSave} ref={formRef}>
      <Input type="text" label="Your name" id="name" />
      <Input type="number" label="Your age" id="age" />
      <Button>Save</Button>
    </Form>
  );
}
export default App;
