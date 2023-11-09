import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState([new Values("#f15025").all(10)]);

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      console.log("Error: ", error);
      toast.error(error.message);
    }
  };
  toast.error;
  return (
    <main>
      <h2>Color Generator Starter</h2>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
