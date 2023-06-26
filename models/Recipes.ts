export interface Recipe {
  id: number
  name: string
  image: string
  instructions: string
}

export type Action = { type: 'SET_RECIPES'; payload: Recipe[] }
