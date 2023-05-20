import React, {LegacyRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaInterface {
    recaptchaRef: LegacyRef<any>
}
const ReCaptcha: React.FC<ReCaptchaInterface> = (props) => {
    const {recaptchaRef} = props;
    if(!process.env.REACT_APP_RECAPTCHA) {
        return null;
    }
    return (
        <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA} ref={recaptchaRef}/>
    );
};

export default ReCaptcha;
