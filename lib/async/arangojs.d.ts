import { aql } from "./aql-query";
import { CollectionType } from "./collection";
import { Config } from "./connection";
import { Database } from "./database";
import { ArangoError } from "./error";
export { ArrayCursor } from "./cursor";
declare function arangojs(config: Config): Database;
declare const _default: typeof arangojs & {
    CollectionType: typeof CollectionType;
    ArangoError: typeof ArangoError;
    Database: typeof Database;
    aql: typeof aql;
};
export default _default;
export { DocumentCollection, EdgeCollection } from "./collection";
export { Graph } from "./graph";
export { Database, aql };
//# sourceMappingURL=arangojs.d.ts.map