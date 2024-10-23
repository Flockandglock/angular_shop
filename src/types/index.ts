export interface IUser {
    email: string | null | undefined,
    password: string | null | undefined,
    returnSecureToken: boolean
}

export interface IResponseAuth {
  kind: string | null | undefined,
  localId: string | null | undefined,
  email: string | null | undefined,
  displayName: string | null | undefined,
  idToken: string | null | undefined,
  registered: boolean | null | undefined,
  refreshToken: string | null | undefined,
  expiresIn: string | null | undefined
}