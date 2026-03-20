import express from "express";
import { helmetConfig } from "./config/helmetConfig";
import { corsConfig } from "./config/corsConfig";
import { setupSwagger } from "./config/swaggerConfig";
import resourceRoutes from "./api/v1/routes/resourceRoutes";

const app = express();

app.use(express.json());

// security
app.use(helmetConfig);
app.use(corsConfig);

// health check
app.get("/api/v1/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// routes
app.use("/api/v1", resourceRoutes);

// swagger
setupSwagger(app);

// test route
app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;