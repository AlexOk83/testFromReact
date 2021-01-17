export interface IField {
    label: string;
    name: string;
    componentProps: IComponentProps;
}

export interface IComponentProps {
    type?: string;
    mask?: string | Array<(string | RegExp)>;
    getList?(): Promise<unknown>;
}