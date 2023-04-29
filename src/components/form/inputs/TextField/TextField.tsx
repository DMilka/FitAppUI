import React from 'react';
import {TextField as TextFieldMUI} from "@mui/material";
interface TextFieldInterface {
    label: string | React.ReactElement;
    value: string;
    required?: boolean;
    name: string;
    placeholder?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    type?: 'password' | 'number' | 'text';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField:React.FC<TextFieldInterface> = (props) => {
    const {label, value, required, name, placeholder, helperText, disabled,error,onChange, type} = props;

    return (
        <TextFieldMUI InputLabelProps={{ shrink: true }} label={label} value={value} required={required} name={name} helperText={helperText} placeholder={placeholder} disabled={disabled} error={error} onChange={onChange} type={type ?? 'text'} fullWidth/>
    );
};

export default TextField;
