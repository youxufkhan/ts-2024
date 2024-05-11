import express, { Request, Response, Router } from "express";
import { getUrl, createUrlHash } from '../controller/index';

const router: Router = express.Router();

router.get("/:hash", getUrl);

router.post("/", createUrlHash);

export default router;
