import { createAction } from "@ngrx/store";

const getCssGridProjectsStateStr: string = "[(Projects) Feature State]";

export const getCssGridProjectsState = createAction(getCssGridProjectsStateStr);