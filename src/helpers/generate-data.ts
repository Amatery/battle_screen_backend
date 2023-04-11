import { PlayerViewModel } from '../models/PlayerModels/PlayerViewModel'

function generatePlayer(nickname: string): PlayerViewModel {
  return {
    nickname: nickname,
    score: Math.floor(Math.random() * 100),
    kills: Math.floor(Math.random() * 50),
    deaths: Math.floor(Math.random() * 50),
    state: Math.random() < 0.5 ? 'dead' : 'alive',
    activeFriendRequest: false,
  }
}

export function generateTeams(): PlayerViewModel[] {
  const team = []
  for (let i = 0; i < 100; i++) {
    team.push(generatePlayer(`Player ${i + 1}`))
  }
  return team
}
