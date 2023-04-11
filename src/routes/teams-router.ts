import { Request, Response, Router } from 'express'
import { teamsService } from '../domain/teams-service'
import { TeamViewModel } from '../models/TeamModels/TeamViewModel'


export const teamsRouter = Router({})

teamsRouter.get('/', async (req: Request, res: Response<TeamViewModel>) => {
  const teams = await teamsService.getTeams()
  if (!teams) {
    res.sendStatus(404)
    return
  }
  res.status(200).json(teams)
})
