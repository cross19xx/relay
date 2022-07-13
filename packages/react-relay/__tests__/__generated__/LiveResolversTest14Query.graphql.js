/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<cb7b132119689add051fdcdd1a88ae29>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import queryCounterNoFragmentResolver from "../../../relay-runtime/store/__tests__/resolvers/LiveCounterNoFragment.js";
// Type assertion validating that `queryCounterNoFragmentResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryCounterNoFragmentResolver: () => LiveState<any>);
export type LiveResolversTest14Query$variables = {||};
export type LiveResolversTest14Query$data = {|
  +counter_no_fragment: ?$Call<$Call<<R>((...empty[]) => R) => R, typeof queryCounterNoFragmentResolver>["read"]>,
  +me: ?{|
    +__typename: "User",
  |},
|};
export type LiveResolversTest14Query = {|
  response: LiveResolversTest14Query$data,
  variables: LiveResolversTest14Query$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LiveResolversTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "fragment": null,
            "kind": "RelayLiveResolver",
            "name": "counter_no_fragment",
            "resolverModule": require('./../../../relay-runtime/store/__tests__/resolvers/LiveCounterNoFragment'),
            "path": "counter_no_fragment"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LiveResolversTest14Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "f8e7237758ab48e9d1e79b7134d6f8c7",
    "id": null,
    "metadata": {},
    "name": "LiveResolversTest14Query",
    "operationKind": "query",
    "text": "query LiveResolversTest14Query {\n  me {\n    __typename\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "1cc4ff0fddbff75fcd6eb15ee5cf3283";
}

module.exports = ((node/*: any*/)/*: Query<
  LiveResolversTest14Query$variables,
  LiveResolversTest14Query$data,
>*/);