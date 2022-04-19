import {CommonHelper} from "../Helpers/common-helper";

export interface ITask {
    id: string | null;
    title: string;
    createdDate: Date | null;
    lastEditedDate: Date | null;
    endDate: Date | null;
    deletedDate: Date | null;
    isActive: boolean;
    isImportant: boolean;
    isUrgently: boolean;
    description: string;
    gradient?: string;
    colors: string[];
}

export class Task implements ITask {
    description: string = '';
    id: string | null = null;
    isActive: boolean = false;
    isImportant: boolean = false;
    isUrgently: boolean = false;
    title: string = '';
    gradient?: string;
    colors: string[] = [];

    private _createdDate: Date | null = null;
    private _deletedDate: Date | null = null;
    private _lastEditedDate: Date | null = null;
    private _endDate: Date | null = null;

    constructor(data?: Partial<ITask>) {
        if (data) {
            CommonHelper.bindProps(data, this);
        }
    }

    public set createdDate(value: Date | null) {
        this._createdDate = value;
    }

    public get createdDate(): Date | null {
        return  this._createdDate;
    }

    public set deletedDate(value: Date | null) {
        this._deletedDate = value;
    }

    public get deletedDate(): Date | null {
        return  this._deletedDate;
    }

    public set lastEditedDate(value: Date | null) {
        this._lastEditedDate = value;
    }

    public get lastEditedDate(): Date | null {
        return  this._lastEditedDate;
    }

    public set endDate(value: Date | null) {
        this._endDate = value;
    }

    public get endDate(): Date | null {
        return  this._endDate;
    }

}
