import {LocalStorageHelper} from "../localStorage/LocalStorageHelper";
import {redirect} from "react-router-dom";

export const checkUserNotLogged = () => {
    const token = LocalStorageHelper.getItem('token');
    if (!token) {
        return redirect('/');
    }

    return null;
}

export const checkUserLogged = () => {
    const token = LocalStorageHelper.getItem('token');
    if (token) {
        return redirect('/dashboard');
    }

    return null;
}

interface ActionInterface {
    request: Request
}

export async function loginAction({request}: ActionInterface) {
    const token = '123abc';

    localStorage.setItem('token', token);

    return redirect('/');
}

export async function registerAction({request}: ActionInterface) {
    const data = Object.fromEntries(await request.formData());

    return redirect('/');
}