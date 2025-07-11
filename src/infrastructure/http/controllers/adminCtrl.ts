import { Request, Response } from "express";
import { DeleteJobPost } from "../../../Services/Admin/deleteJobPostUseCase";
import { ViewAllJobPost } from "../../../Services/Admin/ViewAllJobPostUsecase";
import { AdminRepositoryDb } from "../../repository-db/AdminRepositoryDb";

const adminRepo = new AdminRepositoryDb();
const deleteJobPostUseCase = new DeleteJobPost(adminRepo);
const viewAllJobPostUseCase = new ViewAllJobPost(adminRepo);

export class AdminController {
    constructor() {}

    async deleteJobPost(req: Request, res: Response): Promise<any> {
        try {
            
      const { jobPostId } = req.body;
            const result = await deleteJobPostUseCase.execute(jobPostId);
            res.json({ success: true, result }).status(201);
        } catch (err: any) {
            res.json({ success: false, message: err.message }).status(501);
        }
    }

    async viewAllJobPost(req: Request, res: Response): Promise<any> {
        try {
            const result = await viewAllJobPostUseCase.execute();
            res.json({ success: true, result }).status(200);
        } catch (err: any) {
            res.json({ success: false, message: err.message }).status(501);
        }
    }
}
