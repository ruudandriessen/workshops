import { Instance, types } from "mobx-state-tree";
import { createContext } from "react";

export const RootModel = types
    .model({
        // FIXME: Add your models here
    })
    .named("Root");

export const RootModelContext = createContext<Instance<typeof RootModel> | null>(null);
export const RootModelProvider = RootModelContext.Provider;
