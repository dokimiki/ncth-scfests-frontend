import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './auth/login'
import type { Methods as Methods1 } from './auth/logout'
import type { Methods as Methods2 } from './auth/refresh'
import type { Methods as Methods3 } from './hello'
import type { Methods as Methods4 } from './user/whoami'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/login'
  const PATH1 = '/auth/logout'
  const PATH2 = '/auth/refresh'
  const PATH3 = '/hello'
  const PATH4 = '/user/whoami'
  const GET = 'GET'
  const POST = 'POST'

  return {
    auth: {
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
    },
    hello: {
      /**
       * Hello, World!を返します。
       * @returns OK
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * Hello, World!を返します。
       * @returns OK
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    },
    user: {
      whoami: {
        /**
         * ログインしているユーザーの情報を取得します。
         * @returns OK
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * ログインしているユーザーの情報を取得します。
         * @returns OK
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH4}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
