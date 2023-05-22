/* eslint-disable */
export type Methods = {
  /** ログインしているユーザーの情報を取得します。 */
  get: {
    status: 200

    /** OK */
    resBody: {
      /** ユーザーID */
      userId: string
      /** 表示名 */
      displayName: string
      /** ユーザーの種類 */
      userType: string
      /** 利用可能かどうか */
      available: boolean
    }
  }
}
