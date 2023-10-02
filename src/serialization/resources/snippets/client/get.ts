/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.snippets.get.Response.Raw, Fern.snippets.Snippet[]> =
    core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).snippets.Snippet));

export declare namespace Response {
    type Raw = serializers.snippets.Snippet.Raw[];
}