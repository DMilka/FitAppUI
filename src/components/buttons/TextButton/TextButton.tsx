import React from 'react';
import ButtonTemplate, {ButtonTemplateInterface} from "../ButtonTemplate/ButtonTemplate";

interface TextButtonInterface extends ButtonTemplateInterface {

}
const TextButton: React.FC<TextButtonInterface> = (props) => {
    return (
        <ButtonTemplate {...props} variant={'text'} />
    );
};

export default TextButton;
