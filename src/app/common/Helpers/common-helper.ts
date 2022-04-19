export class CommonHelper {
    public static bindProps<T extends {[k: string]: any}>(data: T, ctx: T): void {
        Object.keys(data).forEach((k: keyof T) => {
            ctx[k] = data[k];
        })
    }
}
