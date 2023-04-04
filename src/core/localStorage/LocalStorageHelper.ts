export class LocalStorageHelper {
    static addItem(key: string, value: string) {
        return localStorage.setItem(key, value);
    }

    static removeItem(key: string) {
        return localStorage.removeItem(key)
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }
}