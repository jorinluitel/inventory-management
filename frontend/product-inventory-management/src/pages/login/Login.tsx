import { TextInput, PasswordInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";

const USER = {
    email: "john@gmail.com",
    password: "admin"
}

export default function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          email: '',
          password: '',
          termsOfService: false,
        },
        // validate: {
        //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        //     password: (value) => (value.length < 6 ? 'Password must be at least 6 characters long' : null),
        // },
    });

    const navigate = useNavigate();

    const handleSubmit = (values: any) => {
        console.log(values);

        if (values.email === USER.email && values.password === USER.password){
            console.log("login successful");
            localStorage.setItem("token", "1234");
            navigate("/dashboard")
        } else {
            console.log("error");
        }
    };

    return (
        <div className="flex flex-col justify-center align-middle mt-10 p-10">
            <h1 className="text-center">Login Form</h1>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    withAsterisk
                    label="Email"
                    className="my-3"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    withAsterisk
                    label="Password"
                    placeholder="Your password"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Login</Button>
                </Group>
            </form>
        
        </div>
    );
}