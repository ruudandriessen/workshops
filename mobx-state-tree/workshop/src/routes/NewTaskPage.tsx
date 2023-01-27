import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRoot } from "../hooks/useRoot";

interface FormInput {
    name: string;
    epic?: string;
    description: string;
}

export function NewTaskPage() {
    const navigate = useNavigate();
    const { addTask, epics } = useRoot();
    const {
        control,
        handleSubmit,
    } = useForm<FormInput>({
        defaultValues: {
            name: '',
            epic: '',
            description: '',
        }
    });


    const createNewTask: SubmitHandler<FormInput> = (data) => {
        addTask(data.name, data.description, data.epic)
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

                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <TextField
                        {...field}
                        size="small"
                        multiline
                        label="description"
                        variant="outlined"
                    />}
                />

                <FormControl>
                    <InputLabel id="epic-label">Epic</InputLabel>
                    <Controller
                        name="epic"
                        control={control}
                        render={({ field }) => <Select
                            {...field}
                            size="small"
                            variant="outlined"
                            labelId="epic-label"
                        >
                            {epics.map(epic => {
                                return <MenuItem value={epic.id} key={epic.id}>{epic.title}</MenuItem>
                            })}
                            </Select>}
                    />
                </FormControl>
                <Button type="submit" value="Submit">Save</Button>
            </form>
        </header>
    </>
}
