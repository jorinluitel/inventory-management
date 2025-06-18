import { useState } from "react";
import { createNewCategory } from "../../api/Category";
import { Container, Fieldset, TextInput, Button, Group } from '@mantine/core';


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
            <h1>Categories Page</h1>
            <Container size="xs">
                <Fieldset legend="Add Category">
                    <TextInput
                        label="Category Name"
                        type="text"
                        placeholder="Enter category name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                    <TextInput
                        label="Category Description"
                        type="text"
                        placeholder="Enter category description"
                        value={categoryDescription}
                        onChange={(e) => setCategoryDescription(e.target.value)}
                        mt="md"
                    />
                    <Group justify="flex-end" mt="md">

                        <Button
                        onClick={handleAddCategory}
                        >
                        {" "}
                            Add Category
                        </Button>
                    </Group>
                </Fieldset>
            </Container>
        </div>
    );
}