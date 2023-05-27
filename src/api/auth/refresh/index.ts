/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.RefreshedToken
    reqBody: Types.RefreshTokenRequest
  }
}
