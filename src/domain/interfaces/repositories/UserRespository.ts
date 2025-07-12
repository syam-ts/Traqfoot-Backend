export interface UserRepository {

  newUser( infrastructure_name: string, email: string, mobile: number, password: string, since: number): Promise<any>,
  loginUser(email: string, password: string): Promise<any>

}
