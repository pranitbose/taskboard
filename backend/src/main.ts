import { createServer } from "@app/server";

const startServer = async () => {
  const port = process.env["PORT"] ? Number(process.env["PORT"]) : 3000;
  const server = await createServer();
  try {
    await server.listen({
      port,
      listenTextResolver: address => {
        return `TaskBoard server is listening at ${address}`;
      }
    });
  } catch (err) {
    server.log.error(err);
    server.prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
