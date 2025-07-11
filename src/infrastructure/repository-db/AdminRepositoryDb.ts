import { AdminRepository } from "../../domain/interfaces/repositories/AdminRepository";

export class AdminRepositoryDb implements AdminRepository {
    private jobs: any[] = [];

    async deleteJobPost(jobPostId: string): Promise<any> {
       let deletedJobPost: any = await this.jobs.includes(jobPostId);
       if(!deletedJobPost) throw new Error('Jobpost not found');
         deletedJobPost = undefined;

         return deletedJobPost;
    }

    async viewAllJobPost(): Promise<any> { 
        if (this.jobs.length === 0) throw new Error("No jobs found"); 
        return this.jobs;
    }
}
