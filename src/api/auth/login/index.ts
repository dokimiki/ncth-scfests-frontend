/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定のユーザーとパスワードでログインします。 */
  post: {
    status: 200

    /** OK */
    resBody: Types.User & Types.NullableRefreshedToken

    reqBody: Types.LoginWithPasswordRequest
  }
}
