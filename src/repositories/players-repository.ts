import { InsertManyResult, ObjectId } from 'mongodb'
import { playersCollection } from '../database/database-config'
import { PlayerViewModel } from '../models/PlayerModels/PlayerViewModel'

export const playersRepository = {
  async generateAndGetPlayers(players: PlayerViewModel[]): Promise<InsertManyResult> {
    return playersCollection.insertMany([...players])
  },
  async getPlayers() {
    return playersCollection.find().toArray()
  },
  async updateFriendRequest(id: string, activeFriendRequest: boolean): Promise<boolean> {
    const updatedPlayer = await playersCollection.updateOne(
      { '_id': new ObjectId(id) },
      { $set: { activeFriendRequest } },
    )
    return updatedPlayer.modifiedCount === 1
  },
}
