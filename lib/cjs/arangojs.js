"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aql_query_1 = require("./aql-query");
exports.aql = aql_query_1.aql;
const collection_1 = require("./collection");
const database_1 = require("./database");
exports.Database = database_1.Database;
const error_1 = require("./error");
var cursor_1 = require("./cursor");
exports.ArrayCursor = cursor_1.ArrayCursor;
function arangojs(config) {
    return new database_1.Database(config);
}
exports.default = Object.assign(arangojs, { CollectionType: collection_1.CollectionType, ArangoError: error_1.ArangoError, Database: database_1.Database, aql: aql_query_1.aql });
var collection_2 = require("./collection");
exports.DocumentCollection = collection_2.DocumentCollection;
exports.EdgeCollection = collection_2.EdgeCollection;
var graph_1 = require("./graph");
exports.Graph = graph_1.Graph;
//# sourceMappingURL=arangojs.js.map