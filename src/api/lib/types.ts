export type Route = {
  method: string, 
  path: string, 
  handler: (req, res) => void
}

export type User = {
  name: string, 
  id: number
}