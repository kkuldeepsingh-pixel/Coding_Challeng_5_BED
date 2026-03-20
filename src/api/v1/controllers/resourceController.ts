import { Request, Response } from "express";
import * as service from "../services/resourceService";

export const getResource = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const resource = service.getResourceById(id);
  if (!resource) return res.status(404).json({ message: "Resource not found" });
  res.json({ message: "Resource retrieved", data: resource });
};

export const getAllResources = (req: Request, res: Response) => {
  const data = service.getAllResources();
  res.json({ message: "Resources retrieved", count: data.length, data });
};

export const createResource = (req: Request, res: Response) => {
  const { title, type, url, description } = req.body;
  if (!title || !type || !url) return res.status(400).json({ message: "Missing required fields" });
  const newResource = service.createResource({ title, type, url, description });
  res.status(201).json({ message: "Resource created", data: newResource });
};