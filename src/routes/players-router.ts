import { Request, Response, Router } from 'express'
import { playersService } from '../domain/players-service'
import { validateFriendRequestBody } from '../middlewares/friend-request-body-validators'
import { inputValidationMiddleware } from '../middlewares/input-validation-middleware'
import { PlayerInputModel } from '../models/PlayerModels/PlayerInputModel'
import { PlayerViewModel } from '../models/PlayerModels/PlayerViewModel'
import { URIParamsPlayerIdModel } from '../models/PlayerModels/URIParamsPlayerIdModel'
import { RequestWithParamsAndBody } from '../types/types'

export const playersRouter = Router({})

playersRouter.get('/generate', async (req: Request, res: Response<PlayerViewModel[]>) => {
  const players = await playersService.generateAndGetPlayers()
  if (!players.length) {
    res.sendStatus(404)
    return
  }
  res.status(200).json(players)
})

playersRouter.put(
  '/player/:id',
  validateFriendRequestBody,
  inputValidationMiddleware,
  async (req: RequestWithParamsAndBody<URIParamsPlayerIdModel, PlayerInputModel>, res: Response) => {
    const { id } = req.params
    const { activeFriendRequest } = req.body
    const result = await playersService.updateFriendRequest(id, activeFriendRequest)
    if (!result) {
      res.sendStatus(404)
      return
    }
    res.sendStatus(204)
  },
)
