import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../FormElements/FormInputText';

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IFormInput {
    employeeId: string;
    password: string;
}

const defaultValues = {
    employeeId: "",
    password: ""
};
const Login: React.FC<Props> = ({ setIsAuth }) => {
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { handleSubmit, control, register } = methods;
    const onSubmit = (data: IFormInput) => console.log(data);
    return (<>
        <Typography style={{ margin: "10px 25%" }} variant='h3' color={"#12aaa2"}>Throttle Management System</Typography>
        <Paper elevation={0}
            style={{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
                margin: "10px 35%",
            }}
        >
            <FormInputText {...register('employeeId', { required: true })} control={control} label="Employee Id *" />
            <FormInputText {...register('password', { required: true })} control={control} label="Password *" />
            <Button style={{ margin: '0px 35%' }} onClick={handleSubmit(onSubmit)} variant={"contained"}>

                Sign In
            </Button>
        </Paper>
    </>
    )
}
export default Login;