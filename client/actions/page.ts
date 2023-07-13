export const SET_PAGE = 'SET_PAGE'

export function setPage(page: string) {
  return {
    type: SET_PAGE,
    payload: page,
  }
}
