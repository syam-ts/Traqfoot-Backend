

export interface EmployerRepository {
     createJobPost(any: any) :Promise<any>

     viewAllJobPost(): Promise<any>
}