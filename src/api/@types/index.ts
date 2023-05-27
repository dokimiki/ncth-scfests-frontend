/* eslint-disable */
export type Messages = {
  message?: string | undefined
}

export type LoginWithPassword = {
  /** ユーザーID */
  userId?: string | undefined
  /** パスワード */
  password?: string | undefined
  /** トークンを返すかどうか */
  returnSecureToken?: boolean | undefined
}

export type RefreshToken = {
  /** リフレッシュトークン */
  refreshToken?: string | undefined
}

export type RefreshedToken = {
  /** 新しいIDトークン */
  idToken?: string | undefined
  /** 新しいリフレッシュトークン */
  refreshToken?: string | undefined
  /** 新しいIDトークンの有効期限 */
  expiresIn?: string | undefined
}

export type NullableRefreshedToken = {
  /** データのやり取りに使うトークン(トークンを返す場合のみ) */
  idToken?: string | null | undefined
  /** IDトークンの更新に使うトークン(トークンを返す場合のみ) */
  refreshToken?: string | null | undefined
  /** IDトークンの有効期限(トークンを返す場合のみ) */
  expiresIn?: string | null | undefined
}

export type User = {
  /** ユーザーID */
  userId?: string | undefined
  /** 表示名 */
  displayName?: string | undefined
  /** ユーザーの種類 */
  userType?: string | undefined
  /** 利用可能かどうか */
  available?: boolean | undefined
}

export type LoginWithPasswordRequest = LoginWithPassword

export type RefreshTokenRequest = RefreshToken
