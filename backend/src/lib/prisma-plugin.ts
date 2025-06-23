import { PrismaClient } from "@prisma/generated/client";
import { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";

// Use TypeScript module augmentation to declare the type of server.prisma to be PrismaClient
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fastifyPlugin(
  async (server, _options) => {
    const prisma = new PrismaClient();

    await prisma.$connect();

    // Make Prisma Client available through the fastify server instance: server.prisma
    server.decorate("prisma", prisma);

    server.addHook("onClose", async server => {
      await server.prisma.$disconnect();
    });
  }
);

export { prismaPlugin };
