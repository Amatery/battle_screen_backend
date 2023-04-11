import { ObjectId } from 'mongodb'

export type PlayerViewModel = {
  _id?: ObjectId
  nickname: string,
  score: number,
  kills: number,
  deaths: number,
  state: string
  activeFriendRequest: boolean
}
