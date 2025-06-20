import Input from "./components/Input";
import Select from "./components/Select";
import Result from "./components/Result";
import { CalcProvider } from "./context/CalcContext";
import { useReducer } from "react";

const Example = () => {
  return (
    <>
      <CalcProvider>
        <Input name="a" />
        <Input name="b" />
        <Select />
        <Result />
      </CalcProvider>
    </>
  );
};

export default Example;
