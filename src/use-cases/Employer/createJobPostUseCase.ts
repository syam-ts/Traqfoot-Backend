import { EmployerRepository } from "../../domain/interfaces/repositories/EmployerRepository";

export class CreateJobPost {
  constructor(private employerRepository: EmployerRepository) {}

  async execute(job: any) {
    if (!job) throw new Error("Job datas are invalid");
    return await this.employerRepository.createJobPost(job);
  }
}
