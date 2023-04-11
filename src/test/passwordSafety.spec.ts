import { passwordSafety } from "../passwordSafety";

describe("passwordSafety", () => {
  it("Case 1: Password is less than 8 characters", () => {
    expect(passwordSafety("ppp")).toStrictEqual(
      "Password should more than 8 characters"
    );
  });
  it("Case 2: Password should contain at least 1 number", () => {
    expect(passwordSafety("ppppppppp")).toStrictEqual(
      "Password should contain at least 1 number"
    );
  });
  it("Case 3: Password should contain at least 1 uppercase character", () => {
    expect(passwordSafety("111111111")).toStrictEqual(
      "Password should contain at least 1 uppercase character"
    );
  });
  it("Case 4: Password should contain at least 1 lowercase character", () => {
    expect(passwordSafety("P11111111")).toStrictEqual(
      "Password should contain at least 1 lowercase character"
    );
  });
  it("Case 5: Password should contain at least 1 special character", () => {
    expect(passwordSafety("Pp11111111")).toStrictEqual(
      "Password should contain at least 1 special character"
    );
  });
  it("Case 6: Password is safe (a little bit)", () => {
    expect(passwordSafety("Pp11111111&")).toStrictEqual(
      "Password is safe (a little bit)"
    );
  });

  //...
});
