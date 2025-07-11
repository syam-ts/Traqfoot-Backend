
import { EmployerRepository } from "../../domain/interfaces/repositories/EmployerRepository";

export class ViewAllJobPost {
  constructor(private employerRepository: EmployerRepository) {}

  async execute() {
    return await this.employerRepository.viewAllJobPost();
  }
}
