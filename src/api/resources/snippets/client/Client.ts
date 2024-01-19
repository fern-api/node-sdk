/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Fern from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Snippets {
    interface Options {
        environment?: core.Supplier<environments.FernEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Snippets {
    constructor(protected readonly _options: Snippets.Options) {}

    /**
     * Get snippet by endpoint method and path
     * @throws {@link Fern.snippets.UnauthorizedError}
     * @throws {@link Fern.snippets.UserNotInOrgError}
     * @throws {@link Fern.snippets.UnavailableError}
     * @throws {@link Fern.snippets.ApiIdRequiredError}
     * @throws {@link Fern.snippets.OrgIdRequiredError}
     * @throws {@link Fern.snippets.OrgIdAndApiIdNotFound}
     * @throws {@link Fern.snippets.OrgIdNotFound}
     * @throws {@link Fern.snippets.ApiIdNotFound}
     * @throws {@link Fern.snippets.EndpointNotFound}
     * @throws {@link Fern.snippets.SdkNotFound}
     *
     * @example
     *     await fern.snippets.get({
     *         endpoint: {
     *             method: Fern.snippets.EndpointMethod.Get,
     *             path: "/v1/search"
     *         }
     *     })
     */
    public async get(
        request: Fern.snippets.GetSnippetRequest,
        requestOptions?: Snippets.RequestOptions
    ): Promise<Fern.snippets.Snippet[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FernEnvironment.Production,
                "/snippets"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/node-sdk",
                "X-Fern-SDK-Version": "0.2.5",
            },
            contentType: "application/json",
            body: await serializers.snippets.GetSnippetRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.snippets.get.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "UnauthorizedError":
                    throw new Fern.snippets.UnauthorizedError(
                        await serializers.snippets.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "UserNotInOrgError":
                    throw new Fern.snippets.UserNotInOrgError();
                case "UnavailableError":
                    throw new Fern.snippets.UnavailableError(
                        await serializers.snippets.UnavailableError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "ApiIdRequiredError":
                    throw new Fern.snippets.ApiIdRequiredError(
                        await serializers.snippets.ApiIdRequiredError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdRequiredError":
                    throw new Fern.snippets.OrgIdRequiredError(
                        await serializers.snippets.OrgIdRequiredError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdAndApiIdNotFound":
                    throw new Fern.snippets.OrgIdAndApiIdNotFound(
                        await serializers.snippets.OrgIdAndApiIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdNotFound":
                    throw new Fern.snippets.OrgIdNotFound(
                        await serializers.snippets.OrgIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "ApiIdNotFound":
                    throw new Fern.snippets.ApiIdNotFound(
                        await serializers.snippets.ApiIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "EndpointNotFound":
                    throw new Fern.snippets.EndpointNotFound(
                        await serializers.snippets.EndpointNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "SDKNotFound":
                    throw new Fern.snippets.SdkNotFound(
                        await serializers.snippets.SdkNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FernError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FernError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FernTimeoutError();
            case "unknown":
                throw new errors.FernError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {@link Fern.snippets.UnauthorizedError}
     * @throws {@link Fern.snippets.UserNotInOrgError}
     * @throws {@link Fern.snippets.UnavailableError}
     * @throws {@link Fern.snippets.InvalidPageError}
     * @throws {@link Fern.snippets.ApiIdRequiredError}
     * @throws {@link Fern.snippets.OrgIdRequiredError}
     * @throws {@link Fern.snippets.OrgIdAndApiIdNotFound}
     * @throws {@link Fern.snippets.OrgIdNotFound}
     * @throws {@link Fern.snippets.ApiIdNotFound}
     * @throws {@link Fern.snippets.SdkNotFound}
     *
     * @example
     *     await fern.snippets.load({
     *         page: 1,
     *         orgId: "vellum",
     *         apiId: "vellum-ai",
     *         sdks: [{
     *                 type: "python",
     *                 package: "vellum-ai",
     *                 version: "1.2.1"
     *             }]
     *     })
     */
    public async load(
        request: Fern.snippets.ListSnippetsRequest = {},
        requestOptions?: Snippets.RequestOptions
    ): Promise<Fern.snippets.SnippetsPage> {
        const { page, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FernEnvironment.Production,
                "/snippets/load"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/node-sdk",
                "X-Fern-SDK-Version": "0.2.5",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.snippets.ListSnippetsRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.snippets.SnippetsPage.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "UnauthorizedError":
                    throw new Fern.snippets.UnauthorizedError(
                        await serializers.snippets.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "UserNotInOrgError":
                    throw new Fern.snippets.UserNotInOrgError();
                case "UnavailableError":
                    throw new Fern.snippets.UnavailableError(
                        await serializers.snippets.UnavailableError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "InvalidPageError":
                    throw new Fern.snippets.InvalidPageError(
                        await serializers.snippets.InvalidPageError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "ApiIdRequiredError":
                    throw new Fern.snippets.ApiIdRequiredError(
                        await serializers.snippets.ApiIdRequiredError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdRequiredError":
                    throw new Fern.snippets.OrgIdRequiredError(
                        await serializers.snippets.OrgIdRequiredError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdAndApiIdNotFound":
                    throw new Fern.snippets.OrgIdAndApiIdNotFound(
                        await serializers.snippets.OrgIdAndApiIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "OrgIdNotFound":
                    throw new Fern.snippets.OrgIdNotFound(
                        await serializers.snippets.OrgIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "ApiIdNotFound":
                    throw new Fern.snippets.ApiIdNotFound(
                        await serializers.snippets.ApiIdNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "SDKNotFound":
                    throw new Fern.snippets.SdkNotFound(
                        await serializers.snippets.SdkNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.FernError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FernError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FernTimeoutError();
            case "unknown":
                throw new errors.FernError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
