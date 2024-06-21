export default class {
    constructor(private cache: Map<any, any>, private obj: any) {}

    public into(item: string) {
        this.cache.set(item, this.obj);
    }
}