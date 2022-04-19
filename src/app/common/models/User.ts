import {CommonHelper} from "../Helpers/common-helper";

export interface IUser {
    id: string | null;
    token: string | null;
    name: string;
    lastName: string;
    fullName: string;
    nickName?: string;
    isAuth: boolean;
}

export class User implements IUser {
    id: string | null = null;
    name: string = '';
    lastName: string = '';
    fullName: string = '';
    nickName?: string;

    constructor(data?: Partial<IUser>) {
        if (data) {
            CommonHelper.bindProps(data, this);
        }
    }

    private _token: string | null = '';

    public set token(value: string | null) {
        this._token = value;
    }
    public get token(): string | null {
        return this._token;
    }

    public get isAuth(): boolean {
        return Boolean(this._token && this._token.length);
    }
}
