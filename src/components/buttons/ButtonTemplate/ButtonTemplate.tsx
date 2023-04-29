import React, {MouseEventHandler} from 'react';
import {Button as ButtonMUI} from "@mui/material";

export interface ButtonTemplateInterface {
    label: string | number | React.ReactElement
    onClick?: MouseEventHandler
    disabled?: boolean,
    variant?: 'text' | 'default'
    type?: 'submit'
}
const ButtonTemplate: React.FC<ButtonTemplateInterface> = (props) => {
    const {label, onClick,disabled,variant,type} = props;

    const buttonType = variant === 'default' ? 'contained' : variant

    return (
        <ButtonMUI onClick={onClick} disabled={disabled} variant={buttonType} type={type}>
            {label}
        </ButtonMUI>
    );
};

export default ButtonTemplate;
