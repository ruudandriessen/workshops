import { Instance, types } from "mobx-state-tree";

export const EpicModel = types
    .model({
        id: types.identifier,
        title: types.string,
        description: types.maybe(types.string),
    })
    .named("Epic");

export interface EpicInstance extends Instance<typeof EpicModel> {}
