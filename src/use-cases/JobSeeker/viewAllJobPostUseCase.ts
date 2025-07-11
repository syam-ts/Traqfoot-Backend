
import { JobSeekerInterface } from "../../domain/interfaces/repositories/JobSeekerRepository";

export class ViewAllJobPost {
  constructor(private jobSeekerInterface: JobSeekerInterface) {}

  async execute() {
    return await this.jobSeekerInterface.viewAllJobPost();
  }
}
