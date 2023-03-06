import { useHistory } from "react-router-dom";

const MyComponent = () => {
  const history = useHistory();

  const deleteProduct = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setProds(values => {
           {values.filter(item => item.id !== id);
          console.log('fetch eliminar');}
        })
        AppToaster.show({
          message: "Product deleted successfully",
          intent: "success",
          timeout: 3000,
        });
        // Redirect to a different route after deleting the product
        history.push("/products");
      })
      .then(()=>{
        console.log("llamada inicio")
      });
  };

  // Render the rest of the component...
};