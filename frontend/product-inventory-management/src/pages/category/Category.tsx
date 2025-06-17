import { useState } from "react";
import { createNewCategory } from "../../api/Category";


export default function Category(){
    const [categoryName, setCategoryName] =  useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    async function handleAddCategory() {
        await createNewCategory({
          name: categoryName,
          description: categoryDescription,
        });
        setCategoryName("");
        setCategoryDescription("");
        console.log("Created successfully");
    }

    return(
        <div>
            <h1>Category </h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter category name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Enter category description"
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                />
                <button
                onClick={handleAddCategory}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                {" "}
                Add Category
                </button>
            </div>
        </div>
    );
}