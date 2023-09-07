import type { BoundStateCreator } from "../hooks/useBoundStore";

export type GoalXp = 10 | 20 | 30 | 40 ;

export type GoalXpSlice = {
  goalXp: GoalXp;
  setGoalXp: (newGoalXp: GoalXp) => void;
};

export const createGoalXpSlice: BoundStateCreator<GoalXpSlice> = (set) => ({
  goalXp: 10,
  setGoalXp: (newGoalXp: GoalXp) => set({ goalXp: newGoalXp }),
});
