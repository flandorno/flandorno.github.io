/* The battery easter egg. Deliberately not saved: a reload discharges it.
   level 0 = flat, 4 = full. "charging" is true while four waves — red, orange,
   yellow, green — cross the ground from `origin`, the centre of the battery
   tile in viewport pixels (see GroundFx). */
import { useSyncExternalStore } from "react";

export type Point = { x: number; y: number };
export type Battery = { level: 0 | 1 | 2 | 3 | 4; charging: boolean; origin: Point | null };

let state: Battery = { level: 0, charging: false, origin: null };
const listeners = new Set<() => void>();

function set(next: Partial<Battery>): void {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

export const getBattery = (): Battery => state;
export const startCharge = (origin: Point | null = null): void => {
  if (!state.charging && state.level < 4) set({ charging: true, origin });
};
export const setLevel = (level: Battery["level"]): void => set({ level });
export const endCharge = (): void => set({ level: 4, charging: false });
export const discharge = (): void => {
  if (!state.charging) set({ level: 0 });
};

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
export function useBattery(): Battery {
  return useSyncExternalStore(subscribe, getBattery);
}
