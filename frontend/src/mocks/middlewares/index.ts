// import { HttpStatusCodes } from "@services/api";
// import {
//   delay,
//   HttpResponse,
//   type HttpResponseResolver,
//   type StrictRequest
// } from "msw";
// import { getJwtFromAuthHeader } from "../utils/jwt-tokens";

// const withAuth = (
//   resolver: HttpResponseResolver<StrictRequest["request"], HttpRequestEventMap>
// ) => {
//   return async input => {
//     const { request } = input;

//     const authHeader = request.headers.get("Authorization") ?? "";
//     const token = getJwtFromAuthHeader(authHeader);

//     await delay();

//     if (!authHeader.startsWith("Bearer")) {
//       return HttpResponse.json(getBaseErrorResponse(), {
//         status: HttpStatusCodes.UNAUTHORIZED
//       });
//     }

//     return resolver({ ...input });
//   };
// };

// export { withAuth };
