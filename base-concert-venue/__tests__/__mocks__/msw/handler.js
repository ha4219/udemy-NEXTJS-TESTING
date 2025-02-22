import { rest } from "msw";

import { readFakeData } from "../fakeData";
import { fakeUserReservations } from "../fakeData/userReservations";

const baseURL = "http://localhost:3000";

export const handlers = [
  rest.get(`${baseURL}/api/shows/:showId`, async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params;

    // index / showId = 0 has seats available in fake data
    // index / showId = 1 has NO seats available
    return res(ctx.json({ show: fakeShows[showId] }));
  }),
  rest.get(`${baseURL}/api/users/:userId/reservations`, (req, res, ctx) => {
    const { userId } = req.params;

    const userReservations = Number(userId) === 1 ? fakeUserReservations : [];
    return res(ctx.json({ userReservations }));
  }),
];
