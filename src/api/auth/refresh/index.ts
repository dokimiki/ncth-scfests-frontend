/* eslint-disable */
export type Methods = {
  /** リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      /** 新しいIDトークン */
      idToken: string
      /** 新しいリフレッシュトークン */
      refreshToken: string
      /** 新しいIDトークンの有効期限 */
      expiresIn: string
    }

    reqBody: {
      /** リフレッシュトークン */
      refreshToken: string
    }
  }
}
