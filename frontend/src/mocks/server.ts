import { faker } from "@faker-js/faker";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { FakerTestSeed } from "./utils/constants";

faker.seed(FakerTestSeed);

const server = setupServer(...handlers);

export { server };
