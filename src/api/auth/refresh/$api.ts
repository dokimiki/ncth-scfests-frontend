import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from '.'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://localhost:8080/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/refresh'
  const POST = 'POST'

  return {
    /**
     * リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。
     * @returns OK
     */
    post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * リフレッシュトークンをもとに、新しいIDトークンとリフレッシュトークンを発行します。
     * @returns OK
     */
    $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
