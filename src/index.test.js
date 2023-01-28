import appMock from "./app";
import "./index.js";

jest.mock("./app");

describe("index.js - app entry", () => {
  it("should call app.listen()", () => {
    expect(appMock.listen).toHaveBeenCalled();
  });
});
