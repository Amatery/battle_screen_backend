import { body, ValidationChain } from 'express-validator'

export const validateFriendRequestBody: ValidationChain[] = [
  body('activeFriendRequest')
    .exists()
    .withMessage('This field is required')
    .isBoolean()
    .withMessage('activeFriendRequest field should be a boolean'),
]
