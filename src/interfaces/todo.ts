export enum TodoStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}
export interface TodoFormat {
  text: string
  status?: TodoStatus
}
