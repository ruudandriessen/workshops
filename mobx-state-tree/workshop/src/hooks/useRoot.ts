import { useContext } from "react";
import { RootModelContext } from "../models/RootStore";

export function useRoot() {
    const result = useContext(RootModelContext);
    if (!result) {
        throw new Error("No root store in context");
    }

    return result;
}
