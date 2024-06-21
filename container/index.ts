import childContainer from "./child.container";

export default class Container<T> {
    private cache = new Map<any, any>();

    public goes(object: T) {
        return new childContainer(this.cache, object);
    }

    public del(item: string) {
        this.cache.delete(item);
    }
}