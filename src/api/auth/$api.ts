import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './login'
import type { Methods as Methods1 } from './logout'
import type { Methods as Methods2 } from './refresh'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://localhost:8080/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/login'
  const PATH1 = '/auth/logout'
  const PATH2 = '/auth/refresh'
  const POST = 'POST'

  return {
    login: {
      /**
       * 指定のユーザーとパスワードでログインします。
       * @returns OK
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * 指定のユーザーとパスワードでログインします。
       * @returns OK
       */
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    logout: {
      /**
       * ログアウトをします。リフレッシュトークンを無効化しますが、JWTトークンは無効化されません。クライアント側でトークンを破棄することでログアウトとなります。
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * ログアウトをします。リフレッシュトークンを無効化しますが、JWTトークンは無効化されません。クライアント側でトークンを破棄することでログアウトとなります。
       * @returns OK
       */
      $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    refresh: {
      /**
       * リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。
       * @returns OK
       */
      post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。
       * @returns OK
       */
      $post: (option: { body: Methods2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
