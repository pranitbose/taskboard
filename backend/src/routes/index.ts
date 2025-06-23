import { FastifyInstance } from "fastify";

const registerRoutes = (server: FastifyInstance) => {
  server.get("/", async () => ({ status: "TaskBoard APIs are ready" }));
};

export { registerRoutes };
