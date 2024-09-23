import ProductBox from "./props/ProductBox";

function App() {
  
  const hello = () => {
    alert("Hello Reactjs!");
  };

  return (
    <>
      <ProductBox
        name="IPhone"
        description="Apple..."
        price={5500}
        points={[8, 1, 5]}
        hello={hello}
      />
    </>
  );
}

export default App;
