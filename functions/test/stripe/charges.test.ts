import { fun } from "../test-config";
fun.cleanup;

import { mockUser, getMockSource } from "./helpers/mocks";
import { createCustomer } from "../../src/stripe/customers";
import { createCharge } from "../../src/stripe/charges";

let user: any;

beforeAll(async () => {
  user = await mockUser();
  await createCustomer(user.uid);
});

test("createCharge creates a charge", async () => {
  const amt = 30000;
  const mockSource = await getMockSource();
  const charge = await createCharge(user.uid, mockSource.id, amt);

  expect(charge.id).toContain("ch_");
  expect(charge.amount).toBe(amt);
});
