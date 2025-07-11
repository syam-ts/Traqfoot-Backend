
import { AdminRepository } from "../../domain/interfaces/repositories/AdminRepository";

export class ViewAllJobPost {
  constructor(private adminRepository: AdminRepository) {}

  async execute() {
    return await this.adminRepository.viewAllJobPost();
  }
}
