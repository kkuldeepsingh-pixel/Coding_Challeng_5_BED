// src/api/v1/routes/resourceRoutes.ts
import { Router } from "express";
import * as controller from "../controllers/resourceController";

const router = Router();

/**
 * @openapi
 * /api/v1/resources/{id}:
 *   get:
 *     summary: Get a single resource
 *     description: Retrieve a resource by its ID. Returns 404 if not found.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: The ID of the resource to fetch
 *     responses:
 *       200:
 *         description: Resource retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Resource retrieved
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: Express.js Guide
 *                     type:
 *                       type: string
 *                       example: documentation
 *                     url:
 *                       type: string
 *                       example: https://expressjs.com/en/guide
 *                     description:
 *                       type: string
 *                       example: Official Express.js documentation
 *                     createdAt:
 *                       type: string
 *                       example: 2025-02-20T10:00:00.000Z
 *       404:
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Resource not found
 */
router.get("/resources/:id", controller.getResource);

/**
 * @openapi
 * /api/v1/resources:
 *   post:
 *     summary: Create a new resource
 *     description: Adds a new resource to the library. Requires title, type, and url.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - url
 *             properties:
 *               title:
 *                 type: string
 *                 example: New Resource
 *               type:
 *                 type: string
 *                 example: article
 *               url:
 *                 type: string
 *                 example: https://example.com
 *               description:
 *                 type: string
 *                 example: A useful resource
 *     responses:
 *       201:
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Resource created
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 5
 *                     title:
 *                       type: string
 *                     type:
 *                       type: string
 *                     url:
 *                       type: string
 *                     description:
 *                       type: string
 *                     createdAt:
 *                       type: string
 *                       example: 2025-02-20T10:30:00.000Z
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Missing required fields
 */
router.post("/resources", controller.createResource);

// Route to get all resources 
router.get("/resources", controller.getAllResources);

export default router;