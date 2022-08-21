/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ParrotsBeak {
  /** @format uint64 */
  id?: string;
  creator?: string;
  file_index?: string;
  name?: string;
  creator_username?: string;
  description?: string;
  license?: string;

  /** @format uint64 */
  respect_count?: string;
  linked_beaks?: string[];
  tags?: string[];
}

export interface ParrotsComment {
  /** @format uint64 */
  id?: string;
  creator?: string;
  username?: string;
  comment?: string;

  /** @format uint64 */
  timestamp?: string;

  /** @format uint64 */
  beak_id?: string;
}

export type ParrotsMsgCreateCommentResponse = object;

export type ParrotsMsgSendRespectResponse = object;

export interface ParrotsMsgSetProfileResponse {
  /** @format uint64 */
  id?: string;
}

export interface ParrotsMsgUploadBeakResponse {
  /** @format uint64 */
  id?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type ParrotsParams = object;

export interface ParrotsProfile {
  /** @format uint64 */
  id?: string;
  creator?: string;
  username?: string;
  display_name?: string;
  description?: string;
  respectedBeaks?: string[];
}

export interface ParrotsQueryGetAllBeaksResponse {
  beaks?: ParrotsBeak[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ParrotsQueryGetBeakByIdResponse {
  beak?: ParrotsBeak;
}

export interface ParrotsQueryGetBeaksByNameSubstringResponse {
  beaks?: ParrotsBeak[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ParrotsQueryGetBeaksByTagResponse {
  beaks?: ParrotsBeak[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ParrotsQueryGetBeaksCountResponse {
  /** @format uint64 */
  count?: string;
}

export interface ParrotsQueryGetCommentsByBeakIdResponse {
  comments?: ParrotsComment[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ParrotsQueryGetProfileByCreatorResponse {
  profile?: ParrotsProfile;
}

export interface ParrotsQueryGetProfileByUsernameResponse {
  profile?: ParrotsProfile;
}

export interface ParrotsQueryGetProfileResponse {
  profile?: ParrotsProfile;
}

export interface ParrotsQueryGetProfilesResponse {
  Profile?: ParrotsProfile[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ParrotsQueryGetRespectedBeaksResponse {
  beaks?: ParrotsBeak[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface ParrotsQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: ParrotsParams;
}

export interface ParrotsQueryProfileCountResponse {
  /** @format uint64 */
  count?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title parrots/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryGetAllBeaks
   * @summary Queries a list of GetAllBeaks items.
   * @request GET:/parrots/parrots/get_all_beaks
   */
  queryGetAllBeaks = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ParrotsQueryGetAllBeaksResponse, RpcStatus>({
      path: `/parrots/parrots/get_all_beaks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetBeakById
   * @summary Queries a list of GetBeakById items.
   * @request GET:/parrots/parrots/get_beak_by_id
   */
  queryGetBeakById = (query?: { id?: string }, params: RequestParams = {}) =>
    this.request<ParrotsQueryGetBeakByIdResponse, RpcStatus>({
      path: `/parrots/parrots/get_beak_by_id`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetBeaksByNameSubstring
   * @summary Queries a list of GetBeaksByNameSubstring items.
   * @request GET:/parrots/parrots/get_beaks_by_name_substring
   */
  queryGetBeaksByNameSubstring = (
    query?: {
      nameSubstring?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ParrotsQueryGetBeaksByNameSubstringResponse, RpcStatus>({
      path: `/parrots/parrots/get_beaks_by_name_substring`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetBeaksByTag
   * @summary Queries a list of GetBeaksByTag items.
   * @request GET:/parrots/parrots/get_beaks_by_tag
   */
  queryGetBeaksByTag = (
    query?: {
      tag?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ParrotsQueryGetBeaksByTagResponse, RpcStatus>({
      path: `/parrots/parrots/get_beaks_by_tag`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetBeaksCount
   * @summary Queries a list of GetBeaksCount items.
   * @request GET:/parrots/parrots/get_beaks_count
   */
  queryGetBeaksCount = (params: RequestParams = {}) =>
    this.request<ParrotsQueryGetBeaksCountResponse, RpcStatus>({
      path: `/parrots/parrots/get_beaks_count`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetCommentsByBeakId
   * @summary Queries a list of GetCommentsByBeakId items.
   * @request GET:/parrots/parrots/get_comments_by_beak_id
   */
  queryGetCommentsByBeakId = (
    query?: { beakId?: string; "pagination.next_key"?: string; "pagination.total"?: string },
    params: RequestParams = {},
  ) =>
    this.request<ParrotsQueryGetCommentsByBeakIdResponse, RpcStatus>({
      path: `/parrots/parrots/get_comments_by_beak_id`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetProfile
   * @summary Queries a list of GetProfile items.
   * @request GET:/parrots/parrots/get_profile
   */
  queryGetProfile = (query?: { id?: string }, params: RequestParams = {}) =>
    this.request<ParrotsQueryGetProfileResponse, RpcStatus>({
      path: `/parrots/parrots/get_profile`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetProfileByCreator
   * @summary Queries a list of GetProfileByCreator items.
   * @request GET:/parrots/parrots/get_profile_by_creator
   */
  queryGetProfileByCreator = (query?: { creator?: string }, params: RequestParams = {}) =>
    this.request<ParrotsQueryGetProfileByCreatorResponse, RpcStatus>({
      path: `/parrots/parrots/get_profile_by_creator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetProfileByUsername
   * @summary Queries a list of GetProfileByUsername items.
   * @request GET:/parrots/parrots/get_profile_by_username
   */
  queryGetProfileByUsername = (query?: { username?: string }, params: RequestParams = {}) =>
    this.request<ParrotsQueryGetProfileByUsernameResponse, RpcStatus>({
      path: `/parrots/parrots/get_profile_by_username`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetRespectedBeaks
   * @summary Queries a list of GetRespectedBeaks items.
   * @request GET:/parrots/parrots/get_respected_beaks
   */
  queryGetRespectedBeaks = (query?: { id?: string }, params: RequestParams = {}) =>
    this.request<ParrotsQueryGetRespectedBeaksResponse, RpcStatus>({
      path: `/parrots/parrots/get_respected_beaks`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/parrots/parrots/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<ParrotsQueryParamsResponse, RpcStatus>({
      path: `/parrots/parrots/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetProfiles
   * @summary Queries a list of Profiles items.
   * @request GET:/parrots/parrots/profile
   */
  queryGetProfiles = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ParrotsQueryGetProfilesResponse, RpcStatus>({
      path: `/parrots/parrots/profile`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProfileCount
   * @summary Queries a list of ProfileCount items.
   * @request GET:/parrots/parrots/profile_count
   */
  queryProfileCount = (params: RequestParams = {}) =>
    this.request<ParrotsQueryProfileCountResponse, RpcStatus>({
      path: `/parrots/parrots/profile_count`,
      method: "GET",
      format: "json",
      ...params,
    });
}
