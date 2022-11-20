import { rest } from "msw";

import { readFakeData } from "../fakeData";
import { fakeUserReservations } from "../fakeData/userReservations";

const baseURL = "http://localhost:3000";

export const handlers = [
  rest.get(`${baseURL}/api/shows/:showId`, async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    return res(ctx.json({ show: fakeShows[0] }));
  }),
  rest.get(`${baseURL}/api/users/:userId/reservations`, (req, res, ctx) =>
    res(ctx.json({ userReservations: fakeUserReservations }))
  ),
];
