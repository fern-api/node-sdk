import { describe, expect, it } from "@jest/globals";
import { FernClient } from "../src";

describe("fern generate", () => {
    it("default api (fern init)", () => {
        new FernClient({
            token: "ey123...",
        });
        expect(1000).toEqual(1000);
    });
});
