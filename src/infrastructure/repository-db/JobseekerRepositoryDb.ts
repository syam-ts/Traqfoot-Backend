import { JobSeekerInterface } from "../../domain/interfaces/repositories/JobSeekerRepository";

export class JobSeekerRepositoryDb implements JobSeekerInterface {
    private jobs: any[] = [];
    private jobApplications: any[] = [];

    async applyJob(jobApplication: any): Promise<any> {
       
        const newJobApplication = this.jobApplications.push(jobApplication);
        console.log('Applied success')
        return newJobApplication;
    }

    async viewAllJobPost(): Promise<any> { 
        if (this.jobs.length === 0) throw new Error("No jobs found"); 
        return this.jobs;
    }
}
