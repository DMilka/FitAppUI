import React, {useEffect, useState} from 'react';
import {LocalStorageHelper} from "../../core/localStorage/LocalStorageHelper";

interface TranslationObjectInterface {
    key: string;
    value: string;
}
interface TranslationInterface {
    trans: string;
    translationObject?: TranslationObjectInterface
}

const Translation: React.FC<TranslationInterface> = (props) => {
    const {trans} = props;
    const [fileContent] = useState<object | null>(null);
    const [finalTranslation, setFinalTranslation] = useState<string>(trans);

    useEffect( () => {
        async function fetchTranslation() {
            if(!fileContent) {
                const parts = trans.split(':');
                const language = LocalStorageHelper.getItem('page_language') ?? 'pl';
                if(Array.isArray(parts) && parts.length === 2) {
                    const fileContentParts = parts[1].split('.');
                    const response = await fetch(`./translations/${language}/${parts[0]}.json`);
                    const result = await response.json();
                    if(result[fileContentParts[0]] && result[fileContentParts[0]][fileContentParts[1]]) {
                        setFinalTranslation(result[fileContentParts[0]][fileContentParts[1]]);
                    }
                } else {
                    setFinalTranslation(trans);
                }
            }
        }
        fetchTranslation();

    }, [fileContent,trans]);


    return (
        <span>{finalTranslation}</span>
    );
};

export default Translation;
