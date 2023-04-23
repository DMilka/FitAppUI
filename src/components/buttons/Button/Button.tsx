import React from 'react';
import ButtonTemplate, {ButtonTemplateInterface} from "../ButtonTemplate/ButtonTemplate";

interface ButtonInterface extends ButtonTemplateInterface {

}
const Button: React.FC<ButtonInterface> = (props) => {
    return <ButtonTemplate {...props} variant={'default'}/>
};

export default Button;
