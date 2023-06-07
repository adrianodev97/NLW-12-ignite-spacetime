import decode from 'jwt-decode'
import { cookies } from 'next/headers'

interface IUser {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): IUser {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: IUser = decode(token)

  return user
}
