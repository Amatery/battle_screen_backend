import { TeamViewModel } from '../models/TeamModels/TeamViewModel'
import { playersRepository } from '../repositories/players-repository'

export const teamsService = {
  async getTeams(): Promise<TeamViewModel> {
    const teams = await playersRepository.getPlayers()
    return {
      firstTeam: [...teams.slice(0, 50)],
      secondTeam: [...teams.slice(50, 100)],
    }
  },
}
