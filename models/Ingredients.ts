export interface Ingredient {
  id: number
  name: string
}

export type Action = { type: 'SET_INGREDIENTS'; payload: Ingredient[] }
