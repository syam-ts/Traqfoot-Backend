export interface JobSeekerInterface {
    applyJob(jobApplication: any): Promise<any>;

    viewAllJobPost(): Promise<any>;
}
