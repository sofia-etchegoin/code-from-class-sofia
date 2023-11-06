// Talk before it's been inserted into the database
export interface TalkData {
  speaker: string
  topic: string
}

// Talk after it's been inserted into the database
export interface Talk extends TalkData {
  id: number
}