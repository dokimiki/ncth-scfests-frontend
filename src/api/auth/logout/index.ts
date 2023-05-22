/* eslint-disable */
export type Methods = {
  /** ログアウトをします。リフレッシュトークンを無効化しますが、JWTトークンは無効化されません。クライアント側でトークンを破棄することでログアウトとなります。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      /** ログアウトメッセージ */
      message: string
    }

    reqBody: {
      /** リフレッシュトークン */
      refreshToken: string
    }
  }
}
