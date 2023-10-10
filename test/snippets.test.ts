import { FernClient, FernError } from "../src";

describe("snippets", () => {
    const client = new FernClient({
        token: "abc",
        environment: process.env["TEST_ENVIRONMENT"],
    });

    describe("get", () => {
        it("throws error for a missing snippet", async () => {
            const spy = jest.spyOn(client.snippets, "get");
            await expect(
                client.snippets.get({
                    endpoint: { method: "GET", path: "/missing_snippet" },
                })
            ).rejects.toThrowError(FernError);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("load", () => {
        it("throws error if 'apiId' is missing", async () => {
            const spy = jest.spyOn(client.snippets, "load");
            await expect(client.snippets.load({})).rejects.toThrowError(FernError);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
