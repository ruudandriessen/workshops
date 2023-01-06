import { Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormInput {
    name: string;
}

export function NewTaskPage() {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
    } = useForm<FormInput>({
        defaultValues: {
            name: ''
        }
    });


    const createNewTask: SubmitHandler<FormInput> = (data) => {
        console.log('create new task', data);
        navigate('/')
    }

    return <>
        <header>
            <h1>New Task</h1>

            <form onSubmit={handleSubmit(createNewTask)} style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                gap: '8px'
            }}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <TextField
                        {...field}
                        size="small"
                        label="Name"
                        variant="outlined"
                    />}
                />
                <Button type="submit" value="Submit">Save</Button>
            </form>
        </header>
    </>
}
