/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Fern from "../../../../api";
import * as core from "../../../../core";

export const TypeScriptSdk: core.serialization.ObjectSchema<
    serializers.snippets.TypeScriptSdk.Raw,
    Fern.snippets.TypeScriptSdk
> = core.serialization.object({
    package: core.serialization.string(),
    version: core.serialization.string(),
});

export declare namespace TypeScriptSdk {
    interface Raw {
        package: string;
        version: string;
    }
}