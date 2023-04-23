import React from 'react';
import {TextField as TextFieldMUI} from "@mui/material";
interface TextFieldInterface {
    label: string;
    value: string;
    required?: boolean;
    name: string;
    placeholder?: string;
    helperText?: string;
    disabled?: boolean;

}

const TextField:React.FC<TextFieldInterface> = (props) => {
    const {label, value, required, name, placeholder, helperText, disabled} = props;

    return (
        <TextFieldMUI label={label} value={value} required={required} name={name} helperText={helperText} placeholder={placeholder} disabled={disabled}/>
    );
};

export default TextField;
