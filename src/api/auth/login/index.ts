/* eslint-disable */
export type Methods = {
  /** 指定のユーザーとパスワードでログインします。 */
  post: {
    status: 200

    /** OK */
    resBody: {
      /** 表示名 */
      displayName: string
      /** ユーザーの種類 */
      userType: string
      /** 登録済みかどうか */
      registered: boolean
      /** データのやり取りに使うトークン(トークンを返す場合のみ) */
      idToken: string | null
      /** IDトークンの更新に使うトークン(トークンを返す場合のみ) */
      refreshToken: string | null
      /** IDトークンの有効期限(トークンを返す場合のみ) */
      expiresIn: string | null
    }

    reqBody: {
      /** ユーザーID */
      userId: string
      /** パスワード */
      password: string
      /** トークンを返すかどうか */
      returnSecureToken: boolean
    }
  }
}
