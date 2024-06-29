import "./App.css";
import Card from "./components/Card";

function App() {
  // let details = {
  //   name: "Rahul",
  //   age: 22
  // }

  // let arr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-red-500 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card name="Sonia" btnText="Click Here" />
      <Card name="Sonia" />
    </>
  );
}

export default App;
