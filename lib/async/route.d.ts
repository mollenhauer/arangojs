import { ArangojsResponse } from "./util/request";
import { Connection } from "./connection";
export declare class Route {
    private _connection;
    private _path;
    private _headers;
    constructor(connection: Connection, path?: string, headers?: Object);
    route(path: string, headers?: Object): Route;
    request({ method, path, headers, ...opts }: any): Promise<ArangojsResponse>;
    private _request1;
    private _request2;
    delete(): Promise<ArangojsResponse>;
    delete(path?: string): Promise<ArangojsResponse>;
    delete(path?: string, qs?: Object): Promise<ArangojsResponse>;
    delete(qs?: Object): Promise<ArangojsResponse>;
    delete(qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    delete(path?: string, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    get(): Promise<ArangojsResponse>;
    get(path?: string): Promise<ArangojsResponse>;
    get(path?: string, qs?: Object): Promise<ArangojsResponse>;
    get(path?: string, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    get(qs?: Object): Promise<ArangojsResponse>;
    get(qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    head(): Promise<ArangojsResponse>;
    head(path?: string): Promise<ArangojsResponse>;
    head(path?: string, qs?: Object): Promise<ArangojsResponse>;
    head(path?: string, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    head(qs?: Object): Promise<ArangojsResponse>;
    head(qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    patch(): Promise<ArangojsResponse>;
    patch(path?: string): Promise<ArangojsResponse>;
    patch(path?: string, body?: any): Promise<ArangojsResponse>;
    patch(path?: string, body?: any, qs?: Object): Promise<ArangojsResponse>;
    patch(body?: any): Promise<ArangojsResponse>;
    patch(body?: any, qs?: Object): Promise<ArangojsResponse>;
    patch(body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    patch(path?: string, body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    post(): Promise<ArangojsResponse>;
    post(path?: string): Promise<ArangojsResponse>;
    post(path?: string, body?: any): Promise<ArangojsResponse>;
    post(path?: string, body?: any, qs?: Object): Promise<ArangojsResponse>;
    post(body?: any): Promise<ArangojsResponse>;
    post(body?: any, qs?: Object): Promise<ArangojsResponse>;
    post(body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    post(path?: string, body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    put(): Promise<ArangojsResponse>;
    put(path?: string): Promise<ArangojsResponse>;
    put(path?: string, body?: any): Promise<ArangojsResponse>;
    put(path?: string, body?: any, qs?: Object): Promise<ArangojsResponse>;
    put(body?: any): Promise<ArangojsResponse>;
    put(body?: any, qs?: Object): Promise<ArangojsResponse>;
    put(body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
    put(path?: string, body?: any, qs?: Object, headers?: Object): Promise<ArangojsResponse>;
}
//# sourceMappingURL=route.d.ts.map