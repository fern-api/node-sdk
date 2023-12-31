/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";

export const SnippetsByEndpointMethod: core.serialization.Schema<
    serializers.snippets.SnippetsByEndpointMethod.Raw,
    Fern.snippets.SnippetsByEndpointMethod
> = core.serialization.record(
    core.serialization.lazy(async () => (await import("../../..")).snippets.EndpointMethod),
    core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).snippets.Snippet)).optional()
);

export declare namespace SnippetsByEndpointMethod {
    type Raw = Record<serializers.snippets.EndpointMethod.Raw, serializers.snippets.Snippet.Raw[] | null | undefined>;
}
