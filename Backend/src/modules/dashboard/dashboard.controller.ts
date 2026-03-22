import { Request, Response } from "express";
import {
  getAdminDashboard,
  getManagerDashboard,
  getUserDashboard,
} from "./dashboard.service";

export const adminDashboardHandler = async (_: Request, res: Response) => {
  const data = await getAdminDashboard();
  res.json(data);
};

export const managerDashboardHandler = async (_: Request, res: Response) => {
  const data = await getManagerDashboard();
  res.json(data);
};

export const userDashboardHandler = async (_: Request, res: Response) => {
  const data = await getUserDashboard();
  res.json(data);
};