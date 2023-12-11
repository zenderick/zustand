import { create } from 'zustand'

interface BearState {
    bear: number,
    increasePopulation: () => void
}

export const useBearStore = create<BearState>()((set)=> ({
    bear: 0,
    increasePopulation: () => set((state) => ({ bear: state.bear + 1 })),
}))