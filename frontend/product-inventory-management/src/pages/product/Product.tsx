import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category.ts";
import {
    getAllProducts,
  } from "../../api/product.ts";
import { Button } from "@mantine/core";
import { AddProductModal } from "../../components/AddProductModal.tsx";

export default function Product() {
  const [listOfCategory, setListOfCategory] = useState<any>([]);
  const [listOfProduct, setListOfProduct] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function getProducts() {
    const data = await getAllProducts();
    console.log(data, "@data");
    setListOfProduct(data);
  }

  useEffect(() => {
    async function getCategory() {
      const allCategory = await getAllCategories();
      setListOfCategory(allCategory);
    }

    getCategory();
    getProducts();
  }, []);

  

  return (
    <div>
      <h1>Product</h1>

      <Button variant="filled" onClick={() => setIsModalOpen(true)}>
        Open Add Product Modal
      </Button>
      <table className="border-1 border-solid border-slate-300 rounded-md w-full text-center">
        <thead>
          <tr className="p-2">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listOfProduct.map((product: any) => (
            <tr key={product._id} className="p-2">
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product?.category?.name}</td>
              <td>
                <button
                  className=" px-2 py-1 rounded-md bg-gray-500 mx-2 text-white"
                //   onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      { <AddProductModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        getProducts={getProducts}
        listOfCategory={listOfCategory}
      />}
    </div>
  );
}