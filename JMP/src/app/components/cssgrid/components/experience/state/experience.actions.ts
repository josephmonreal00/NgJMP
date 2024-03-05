import { createAction } from "@ngrx/store";

const getFeatureState = "[(Experience) Feature State]";

export const getExperienceFeatureState = createAction(getFeatureState);