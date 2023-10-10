import { FernClient } from "../src";

describe("initialize client", () => {
    it("can be instantiated without errors", () => {
        expect(() => new FernClient({ token: "abc", environment: "http://localhost:8080" })).not.toThrow();
    });

    it("with no environment argument", () => {
        expect(() => new FernClient({ token: "abc" })).not.toThrow();
    });
});
