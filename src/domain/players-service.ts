import { generateTeams } from '../helpers/generate-data'
import { PlayerViewModel } from '../models/PlayerModels/PlayerViewModel'
import { playersRepository } from '../repositories/players-repository'

export const playersService = {
  async generateAndGetPlayers(): Promise<PlayerViewModel[]> {
    const players: PlayerViewModel[] = generateTeams()
    await playersRepository.generateAndGetPlayers(players)
    return players
  },
  async updateFriendRequest(id: string, activeFriendRequest: boolean): Promise<boolean> {
    return playersRepository.updateFriendRequest(id, activeFriendRequest)
  }
}
