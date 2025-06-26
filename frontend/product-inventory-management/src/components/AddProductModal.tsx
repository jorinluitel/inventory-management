import { Modal,FileInput,Input, Button } from "@mantine/core";
import { useState } from "react";
import {
    createNewProduct,
    updateProduct,
    uploadProductImage,
  } from "../api/product.ts";


export function AddProductModal({ isModalOpen, setIsModalOpen, getProducts, listOfCategory }: any) {
    const [currentProductId, setCurrentProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState<number>(0);
    const [productCategory, setProductCategory] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);

    async function handleAddProduct() {
        console.log(productCategory, productName, productDescription, productPrice);
        await createNewProduct({
          name: productName,
          description: productDescription,
          price: productPrice,
          category: productCategory,
        });
        console.log("created successfully");
    }

    async function handleFileChange(file: any) {
        const formData = new FormData();
        formData.append("file", file);
        const data = await uploadProductImage(formData);
        console.log(data);
    }

    async function handleUpdateProduct() {
        await updateProduct({
            _id: currentProductId,
            name: productName,
            description: productDescription,
            price: productPrice,
            category: productCategory,
        });
        getProducts();
        setIsEditMode(false);
        setCurrentProductId("");
        setProductName("");
        setProductDescription("");
        setProductPrice(0);
        setProductCategory("");
    }

    // function handleEditProduct(product: any) {
    //     setIsEditMode(true);
    //     setCurrentProductId(product._id);
    //     setProductName(product.name);
    //     setProductDescription(product.description);
    //     setProductPrice(product.price);
    //     setProductCategory(product.category._id);
    // }

  return (
    <Modal
        opened={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Create new product"
      >
        <div className="my-4 mx-4">
          <Input
            type="text"
            placeholder="Enter Product Name"
            className="my-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter Product Description"
            className="my-2"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Enter Product Price"
            className="my-2"
            value={productPrice}
            onChange={(e) => {
              console.log(e.target.value);
              setProductPrice(+e.target.value);
            }}
          />
          <select
            value={productCategory}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
          >
            {listOfCategory.map((category: any) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <FileInput
            label="Select Product Image"
            placeholder="Input placeholder"
            onChange={handleFileChange}
          />
          
          {isEditMode ? (
            <Button
              className="bg-green-500 text-white px-2 py-1 rounded-md"
              onClick={handleUpdateProduct}
            >
              Edit Product
            </Button>
          ) : (
            <Button
              onClick={handleAddProduct}
              className="bg-blue-500 text-white px-2 py-1 rounded-md"
            >
              Add Product
            </Button>
          )}
        </div>
      </Modal>
  );
}