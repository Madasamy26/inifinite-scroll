import { useCallback, useEffect, useState } from "react";
import "./styles.css";
import ModalComponent from "./modal-component.js";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [prodId, setProdId] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  //need to handle error
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");

    let resolvedRes = await res.json();
    setProducts(resolvedRes.products);
    //console.log(resolvedRes);
  };

  useEffect(() => {
    console.log("products", products);
  }, [products]);
  useEffect(() => {
    console.log("prodId", prodId);
    const data = products.find((el) => el.id == prodId);
    setSelectedProduct(data);
  }, [prodId]);

  const handleClick = useCallback((id) => {
    //console.log("selected id " + id);
    setProdId(id);
  }, []);

  //const renderProduct

  return (
    <div className="App">
      <h1>Products</h1>
      {selectedProduct ? (
        <ModalComponent data={selectedProduct}></ModalComponent>
      ) : null}
      <></>
      <table>
        <tbody>
          {products.map((el) => {
            return (
              <tr key={el.id}>
                <td
                  onClick={(e) => {
                    handleClick(el.id);
                  }}
                >
                  {el.title}
                </td>
                <td>{el.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
