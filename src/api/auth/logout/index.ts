/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ログアウトをします。リフレッシュトークンを無効化しますが、JWTトークンは無効化されません。クライアント側でトークンを破棄することでログアウトとなります。 */
  post: {
    status: 200
    /** OK */
    resBody: Types.Messages
    reqBody: Types.RefreshTokenRequest
  }
}
