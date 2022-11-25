import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

test("test", async () => {
  render(<UserReservations userId={1} />);

  const name = await screen.findByText(/The Joyous Nun Riot/i);
  expect(name).toBeInTheDocument();

  const btn = await screen.findByRole("button", {
    name: /Purchase more tickets/i,
  });

  expect(btn).toBeInTheDocument();
});
