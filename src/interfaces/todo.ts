export enum TodoStatus {
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  PENDING = "PENDING",
}
export interface TodoFormat {
  text: string
  status?: TodoStatus
}
