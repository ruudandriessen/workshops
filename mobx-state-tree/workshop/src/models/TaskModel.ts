import { Instance, types } from "mobx-state-tree";
import { EpicModel } from "./EpicModel";

export const TASK_STATES = ["Not Started", "In Progress", "Done"]

export const TaskModel = types
    .model({
        id: types.identifier,
        title: types.string,
        description: types.maybe(types.string),
        status: types.optional(
            types.enumeration(
                "Status",
                TASK_STATES
            ),
            TASK_STATES[0]
        ),
        epic: types.safeReference(EpicModel)
    })
    .actions(self => ({
        setStatus(status: string) {
            self.status = status
        }
    }))
    .named('Task')

export interface TaskInstance extends Instance<typeof TaskModel> {}
