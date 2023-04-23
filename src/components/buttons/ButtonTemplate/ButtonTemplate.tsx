import React, {MouseEventHandler} from 'react';
import {Button as ButtonMUI} from "@mui/material";

export interface ButtonTemplateInterface {
    label: string | number
    onClick: MouseEventHandler
    disabled?: boolean,
    variant?: 'text' | 'default'
}
const ButtonTemplate: React.FC<ButtonTemplateInterface> = (props) => {
    const {label, onClick,disabled,variant} = props;

    const type = variant === 'default' ? 'contained' : variant

    return (
        <ButtonMUI onClick={onClick} disabled={disabled} variant={type}>
            {label}
        </ButtonMUI>
    );
};

export default ButtonTemplate;
