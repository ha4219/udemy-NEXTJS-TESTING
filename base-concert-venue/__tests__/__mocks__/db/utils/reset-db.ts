import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

export const resetDB = async () => {
  // faile safe against resetting production db!
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset unavailable outside test enviroment!");
    // eslint-disable-next-line no-useless-return
    return;
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();
  // overwrite data in files
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
