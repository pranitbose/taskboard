import cors from "@fastify/cors";
import { prismaPlugin } from "@lib/prisma-plugin";
import { registerRoutes } from "@routes";
import Fastify from "fastify";

const createServer = async () => {
  const server = Fastify({
    logger: true
  });

  // Enable CORS
  await server.register(cors);
  // Register Prisma instance
  await server.register(prismaPlugin);
  // Register routes
  registerRoutes(server);

  return server;
};

export { createServer };
