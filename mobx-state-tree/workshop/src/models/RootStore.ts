import { Instance, ReferenceIdentifier, types } from "mobx-state-tree";
import { createContext } from "react";
import { EpicInstance, EpicModel } from "./EpicModel";
import { TaskInstance, TaskModel } from "./TaskModel";
import { v4 as uuid } from "uuid";


export const RootModel = types
    .model({
        epics: types.array(EpicModel),
        tasks: types.array(TaskModel),
        selectedEpic: types.maybe(types.reference(EpicModel)),
    })
    .views(self => ({
        get visibleTasks() {
            if (!self.selectedEpic) return self.tasks;

            return self.tasks
                .filter(task => task.epic === self.selectedEpic);
        }
    }))
    .actions(self => ({
        addEpic(title: string) {
            self.epics.push({
                id: uuid(),
                title,
            });
        },
        addTask(title: string, description: string, epic?: ReferenceIdentifier) {
            console.log(title, epic)
            self.tasks.push({
                id: uuid(),
                title,
                description,
                epic,
            });
        },
        deleteTask(task: TaskInstance) {
            self.tasks.remove(task);
        },
        deleteEpic(epic: EpicInstance) {
            self.epics.remove(epic);
        },
        setSelectedEpic(epic?: EpicInstance) {
            self.selectedEpic = epic;
        },
    }))
    .named("Root");

export const RootModelContext = createContext<Instance<typeof RootModel> | null>(null);
export const RootModelProvider = RootModelContext.Provider;
