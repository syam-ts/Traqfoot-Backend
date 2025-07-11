import { AdminRepository } from "../../domain/interfaces/repositories/AdminRepository";

export class DeleteJobPost {
  constructor(private adminRepository: AdminRepository) {}

  async execute(jobPostId: string) {
    if (!jobPostId) throw new Error("JobPost Id not provided");
    return await this.adminRepository.deleteJobPost(jobPostId);
  }
}
