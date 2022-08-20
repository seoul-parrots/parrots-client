/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../parrots/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Profile, Beak } from "../parrots/models";

export const protobufPackage = "parrots.parrots";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetProfilesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetProfilesResponse {
  Profile: Profile[];
  pagination: PageResponse | undefined;
}

export interface QueryProfileCountRequest {}

export interface QueryProfileCountResponse {
  count: number;
}

export interface QueryGetProfileRequest {
  id: number;
}

export interface QueryGetProfileResponse {
  profile: Profile | undefined;
}

export interface QueryGetProfileByUsernameRequest {
  username: string;
}

export interface QueryGetProfileByUsernameResponse {
  profile: Profile | undefined;
}

export interface QueryGetBeaksCountRequest {}

export interface QueryGetBeaksCountResponse {
  count: number;
}

export interface QueryGetAllBeaksRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllBeaksResponse {
  beaks: Beak[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBeakByIdRequest {
  id: number;
}

export interface QueryGetBeakByIdResponse {
  beak: Beak | undefined;
}

export interface QueryGetBeaksByNameSubstringRequest {
  nameSubstring: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetBeaksByNameSubstringResponse {
  beaks: Beak[];
  pagination: PageResponse | undefined;
}

export interface QueryGetBeaksByTagRequest {
  tag: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetBeaksByTagResponse {
  beaks: Beak[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRespectedBeaksRequest {
  id: number;
}

export interface QueryGetRespectedBeaksResponse {
  beaks: Beak[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProfileByCreatorRequest {
  creator: string;
}

export interface QueryGetProfileByCreatorResponse {
  profile: Profile | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetProfilesRequest: object = {};

export const QueryGetProfilesRequest = {
  encode(
    message: QueryGetProfilesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfilesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfilesRequest {
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfilesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfilesRequest>
  ): QueryGetProfilesRequest {
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfilesResponse: object = {};

export const QueryGetProfilesResponse = {
  encode(
    message: QueryGetProfilesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Profile) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfilesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.Profile = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Profile.push(Profile.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfilesResponse {
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.Profile = [];
    if (object.Profile !== undefined && object.Profile !== null) {
      for (const e of object.Profile) {
        message.Profile.push(Profile.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfilesResponse): unknown {
    const obj: any = {};
    if (message.Profile) {
      obj.Profile = message.Profile.map((e) =>
        e ? Profile.toJSON(e) : undefined
      );
    } else {
      obj.Profile = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfilesResponse>
  ): QueryGetProfilesResponse {
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.Profile = [];
    if (object.Profile !== undefined && object.Profile !== null) {
      for (const e of object.Profile) {
        message.Profile.push(Profile.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProfileCountRequest: object = {};

export const QueryProfileCountRequest = {
  encode(
    _: QueryProfileCountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryProfileCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProfileCountRequest,
    } as QueryProfileCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryProfileCountRequest {
    const message = {
      ...baseQueryProfileCountRequest,
    } as QueryProfileCountRequest;
    return message;
  },

  toJSON(_: QueryProfileCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryProfileCountRequest>
  ): QueryProfileCountRequest {
    const message = {
      ...baseQueryProfileCountRequest,
    } as QueryProfileCountRequest;
    return message;
  },
};

const baseQueryProfileCountResponse: object = { count: 0 };

export const QueryProfileCountResponse = {
  encode(
    message: QueryProfileCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryProfileCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProfileCountResponse,
    } as QueryProfileCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProfileCountResponse {
    const message = {
      ...baseQueryProfileCountResponse,
    } as QueryProfileCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: QueryProfileCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProfileCountResponse>
  ): QueryProfileCountResponse {
    const message = {
      ...baseQueryProfileCountResponse,
    } as QueryProfileCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseQueryGetProfileRequest: object = { id: 0 };

export const QueryGetProfileRequest = {
  encode(
    message: QueryGetProfileRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProfileRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileRequest>
  ): QueryGetProfileRequest {
    const message = { ...baseQueryGetProfileRequest } as QueryGetProfileRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetProfileResponse: object = {};

export const QueryGetProfileResponse = {
  encode(
    message: QueryGetProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfileResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileResponse>
  ): QueryGetProfileResponse {
    const message = {
      ...baseQueryGetProfileResponse,
    } as QueryGetProfileResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },
};

const baseQueryGetProfileByUsernameRequest: object = { username: "" };

export const QueryGetProfileByUsernameRequest = {
  encode(
    message: QueryGetProfileByUsernameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfileByUsernameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByUsernameRequest,
    } as QueryGetProfileByUsernameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileByUsernameRequest {
    const message = {
      ...baseQueryGetProfileByUsernameRequest,
    } as QueryGetProfileByUsernameRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfileByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByUsernameRequest>
  ): QueryGetProfileByUsernameRequest {
    const message = {
      ...baseQueryGetProfileByUsernameRequest,
    } as QueryGetProfileByUsernameRequest;
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    return message;
  },
};

const baseQueryGetProfileByUsernameResponse: object = {};

export const QueryGetProfileByUsernameResponse = {
  encode(
    message: QueryGetProfileByUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfileByUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByUsernameResponse,
    } as QueryGetProfileByUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileByUsernameResponse {
    const message = {
      ...baseQueryGetProfileByUsernameResponse,
    } as QueryGetProfileByUsernameResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfileByUsernameResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByUsernameResponse>
  ): QueryGetProfileByUsernameResponse {
    const message = {
      ...baseQueryGetProfileByUsernameResponse,
    } as QueryGetProfileByUsernameResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },
};

const baseQueryGetBeaksCountRequest: object = {};

export const QueryGetBeaksCountRequest = {
  encode(
    _: QueryGetBeaksCountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksCountRequest,
    } as QueryGetBeaksCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetBeaksCountRequest {
    const message = {
      ...baseQueryGetBeaksCountRequest,
    } as QueryGetBeaksCountRequest;
    return message;
  },

  toJSON(_: QueryGetBeaksCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetBeaksCountRequest>
  ): QueryGetBeaksCountRequest {
    const message = {
      ...baseQueryGetBeaksCountRequest,
    } as QueryGetBeaksCountRequest;
    return message;
  },
};

const baseQueryGetBeaksCountResponse: object = { count: 0 };

export const QueryGetBeaksCountResponse = {
  encode(
    message: QueryGetBeaksCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksCountResponse,
    } as QueryGetBeaksCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeaksCountResponse {
    const message = {
      ...baseQueryGetBeaksCountResponse,
    } as QueryGetBeaksCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBeaksCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeaksCountResponse>
  ): QueryGetBeaksCountResponse {
    const message = {
      ...baseQueryGetBeaksCountResponse,
    } as QueryGetBeaksCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseQueryGetAllBeaksRequest: object = {};

export const QueryGetAllBeaksRequest = {
  encode(
    message: QueryGetAllBeaksRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAllBeaksRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllBeaksRequest,
    } as QueryGetAllBeaksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllBeaksRequest {
    const message = {
      ...baseQueryGetAllBeaksRequest,
    } as QueryGetAllBeaksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAllBeaksRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllBeaksRequest>
  ): QueryGetAllBeaksRequest {
    const message = {
      ...baseQueryGetAllBeaksRequest,
    } as QueryGetAllBeaksRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAllBeaksResponse: object = {};

export const QueryGetAllBeaksResponse = {
  encode(
    message: QueryGetAllBeaksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.beaks) {
      Beak.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAllBeaksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllBeaksResponse,
    } as QueryGetAllBeaksResponse;
    message.beaks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaks.push(Beak.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllBeaksResponse {
    const message = {
      ...baseQueryGetAllBeaksResponse,
    } as QueryGetAllBeaksResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAllBeaksResponse): unknown {
    const obj: any = {};
    if (message.beaks) {
      obj.beaks = message.beaks.map((e) => (e ? Beak.toJSON(e) : undefined));
    } else {
      obj.beaks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllBeaksResponse>
  ): QueryGetAllBeaksResponse {
    const message = {
      ...baseQueryGetAllBeaksResponse,
    } as QueryGetAllBeaksResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBeakByIdRequest: object = { id: 0 };

export const QueryGetBeakByIdRequest = {
  encode(
    message: QueryGetBeakByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBeakByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeakByIdRequest,
    } as QueryGetBeakByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeakByIdRequest {
    const message = {
      ...baseQueryGetBeakByIdRequest,
    } as QueryGetBeakByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBeakByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeakByIdRequest>
  ): QueryGetBeakByIdRequest {
    const message = {
      ...baseQueryGetBeakByIdRequest,
    } as QueryGetBeakByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetBeakByIdResponse: object = {};

export const QueryGetBeakByIdResponse = {
  encode(
    message: QueryGetBeakByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.beak !== undefined) {
      Beak.encode(message.beak, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeakByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeakByIdResponse,
    } as QueryGetBeakByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beak = Beak.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeakByIdResponse {
    const message = {
      ...baseQueryGetBeakByIdResponse,
    } as QueryGetBeakByIdResponse;
    if (object.beak !== undefined && object.beak !== null) {
      message.beak = Beak.fromJSON(object.beak);
    } else {
      message.beak = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeakByIdResponse): unknown {
    const obj: any = {};
    message.beak !== undefined &&
      (obj.beak = message.beak ? Beak.toJSON(message.beak) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeakByIdResponse>
  ): QueryGetBeakByIdResponse {
    const message = {
      ...baseQueryGetBeakByIdResponse,
    } as QueryGetBeakByIdResponse;
    if (object.beak !== undefined && object.beak !== null) {
      message.beak = Beak.fromPartial(object.beak);
    } else {
      message.beak = undefined;
    }
    return message;
  },
};

const baseQueryGetBeaksByNameSubstringRequest: object = { nameSubstring: "" };

export const QueryGetBeaksByNameSubstringRequest = {
  encode(
    message: QueryGetBeaksByNameSubstringRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nameSubstring !== "") {
      writer.uint32(10).string(message.nameSubstring);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksByNameSubstringRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksByNameSubstringRequest,
    } as QueryGetBeaksByNameSubstringRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameSubstring = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeaksByNameSubstringRequest {
    const message = {
      ...baseQueryGetBeaksByNameSubstringRequest,
    } as QueryGetBeaksByNameSubstringRequest;
    if (object.nameSubstring !== undefined && object.nameSubstring !== null) {
      message.nameSubstring = String(object.nameSubstring);
    } else {
      message.nameSubstring = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeaksByNameSubstringRequest): unknown {
    const obj: any = {};
    message.nameSubstring !== undefined &&
      (obj.nameSubstring = message.nameSubstring);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeaksByNameSubstringRequest>
  ): QueryGetBeaksByNameSubstringRequest {
    const message = {
      ...baseQueryGetBeaksByNameSubstringRequest,
    } as QueryGetBeaksByNameSubstringRequest;
    if (object.nameSubstring !== undefined && object.nameSubstring !== null) {
      message.nameSubstring = object.nameSubstring;
    } else {
      message.nameSubstring = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBeaksByNameSubstringResponse: object = {};

export const QueryGetBeaksByNameSubstringResponse = {
  encode(
    message: QueryGetBeaksByNameSubstringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.beaks) {
      Beak.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksByNameSubstringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksByNameSubstringResponse,
    } as QueryGetBeaksByNameSubstringResponse;
    message.beaks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaks.push(Beak.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeaksByNameSubstringResponse {
    const message = {
      ...baseQueryGetBeaksByNameSubstringResponse,
    } as QueryGetBeaksByNameSubstringResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeaksByNameSubstringResponse): unknown {
    const obj: any = {};
    if (message.beaks) {
      obj.beaks = message.beaks.map((e) => (e ? Beak.toJSON(e) : undefined));
    } else {
      obj.beaks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeaksByNameSubstringResponse>
  ): QueryGetBeaksByNameSubstringResponse {
    const message = {
      ...baseQueryGetBeaksByNameSubstringResponse,
    } as QueryGetBeaksByNameSubstringResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBeaksByTagRequest: object = { tag: "" };

export const QueryGetBeaksByTagRequest = {
  encode(
    message: QueryGetBeaksByTagRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksByTagRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksByTagRequest,
    } as QueryGetBeaksByTagRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeaksByTagRequest {
    const message = {
      ...baseQueryGetBeaksByTagRequest,
    } as QueryGetBeaksByTagRequest;
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = String(object.tag);
    } else {
      message.tag = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeaksByTagRequest): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeaksByTagRequest>
  ): QueryGetBeaksByTagRequest {
    const message = {
      ...baseQueryGetBeaksByTagRequest,
    } as QueryGetBeaksByTagRequest;
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    } else {
      message.tag = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBeaksByTagResponse: object = {};

export const QueryGetBeaksByTagResponse = {
  encode(
    message: QueryGetBeaksByTagResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.beaks) {
      Beak.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetBeaksByTagResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetBeaksByTagResponse,
    } as QueryGetBeaksByTagResponse;
    message.beaks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaks.push(Beak.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBeaksByTagResponse {
    const message = {
      ...baseQueryGetBeaksByTagResponse,
    } as QueryGetBeaksByTagResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBeaksByTagResponse): unknown {
    const obj: any = {};
    if (message.beaks) {
      obj.beaks = message.beaks.map((e) => (e ? Beak.toJSON(e) : undefined));
    } else {
      obj.beaks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBeaksByTagResponse>
  ): QueryGetBeaksByTagResponse {
    const message = {
      ...baseQueryGetBeaksByTagResponse,
    } as QueryGetBeaksByTagResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetRespectedBeaksRequest: object = { id: 0 };

export const QueryGetRespectedBeaksRequest = {
  encode(
    message: QueryGetRespectedBeaksRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRespectedBeaksRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRespectedBeaksRequest,
    } as QueryGetRespectedBeaksRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRespectedBeaksRequest {
    const message = {
      ...baseQueryGetRespectedBeaksRequest,
    } as QueryGetRespectedBeaksRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetRespectedBeaksRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRespectedBeaksRequest>
  ): QueryGetRespectedBeaksRequest {
    const message = {
      ...baseQueryGetRespectedBeaksRequest,
    } as QueryGetRespectedBeaksRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetRespectedBeaksResponse: object = {};

export const QueryGetRespectedBeaksResponse = {
  encode(
    message: QueryGetRespectedBeaksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.beaks) {
      Beak.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRespectedBeaksResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRespectedBeaksResponse,
    } as QueryGetRespectedBeaksResponse;
    message.beaks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beaks.push(Beak.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRespectedBeaksResponse {
    const message = {
      ...baseQueryGetRespectedBeaksResponse,
    } as QueryGetRespectedBeaksResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRespectedBeaksResponse): unknown {
    const obj: any = {};
    if (message.beaks) {
      obj.beaks = message.beaks.map((e) => (e ? Beak.toJSON(e) : undefined));
    } else {
      obj.beaks = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRespectedBeaksResponse>
  ): QueryGetRespectedBeaksResponse {
    const message = {
      ...baseQueryGetRespectedBeaksResponse,
    } as QueryGetRespectedBeaksResponse;
    message.beaks = [];
    if (object.beaks !== undefined && object.beaks !== null) {
      for (const e of object.beaks) {
        message.beaks.push(Beak.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfileByCreatorRequest: object = { creator: "" };

export const QueryGetProfileByCreatorRequest = {
  encode(
    message: QueryGetProfileByCreatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfileByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByCreatorRequest,
    } as QueryGetProfileByCreatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileByCreatorRequest {
    const message = {
      ...baseQueryGetProfileByCreatorRequest,
    } as QueryGetProfileByCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryGetProfileByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByCreatorRequest>
  ): QueryGetProfileByCreatorRequest {
    const message = {
      ...baseQueryGetProfileByCreatorRequest,
    } as QueryGetProfileByCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryGetProfileByCreatorResponse: object = {};

export const QueryGetProfileByCreatorResponse = {
  encode(
    message: QueryGetProfileByCreatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfileByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByCreatorResponse,
    } as QueryGetProfileByCreatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileByCreatorResponse {
    const message = {
      ...baseQueryGetProfileByCreatorResponse,
    } as QueryGetProfileByCreatorResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfileByCreatorResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByCreatorResponse>
  ): QueryGetProfileByCreatorResponse {
    const message = {
      ...baseQueryGetProfileByCreatorResponse,
    } as QueryGetProfileByCreatorResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Profiles items. */
  GetProfiles(
    request: QueryGetProfilesRequest
  ): Promise<QueryGetProfilesResponse>;
  /** Queries a list of ProfileCount items. */
  ProfileCount(
    request: QueryProfileCountRequest
  ): Promise<QueryProfileCountResponse>;
  /** Queries a list of GetProfile items. */
  GetProfile(request: QueryGetProfileRequest): Promise<QueryGetProfileResponse>;
  /** Queries a list of GetProfileByUsername items. */
  GetProfileByUsername(
    request: QueryGetProfileByUsernameRequest
  ): Promise<QueryGetProfileByUsernameResponse>;
  /** Queries a list of GetBeaksCount items. */
  GetBeaksCount(
    request: QueryGetBeaksCountRequest
  ): Promise<QueryGetBeaksCountResponse>;
  /** Queries a list of GetAllBeaks items. */
  GetAllBeaks(
    request: QueryGetAllBeaksRequest
  ): Promise<QueryGetAllBeaksResponse>;
  /** Queries a list of GetBeakById items. */
  GetBeakById(
    request: QueryGetBeakByIdRequest
  ): Promise<QueryGetBeakByIdResponse>;
  /** Queries a list of GetBeaksByNameSubstring items. */
  GetBeaksByNameSubstring(
    request: QueryGetBeaksByNameSubstringRequest
  ): Promise<QueryGetBeaksByNameSubstringResponse>;
  /** Queries a list of GetBeaksByTag items. */
  GetBeaksByTag(
    request: QueryGetBeaksByTagRequest
  ): Promise<QueryGetBeaksByTagResponse>;
  /** Queries a list of GetRespectedBeaks items. */
  GetRespectedBeaks(
    request: QueryGetRespectedBeaksRequest
  ): Promise<QueryGetRespectedBeaksResponse>;
  /** Queries a list of GetProfileByCreator items. */
  GetProfileByCreator(
    request: QueryGetProfileByCreatorRequest
  ): Promise<QueryGetProfileByCreatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("parrots.parrots.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetProfiles(
    request: QueryGetProfilesRequest
  ): Promise<QueryGetProfilesResponse> {
    const data = QueryGetProfilesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetProfiles",
      data
    );
    return promise.then((data) =>
      QueryGetProfilesResponse.decode(new Reader(data))
    );
  }

  ProfileCount(
    request: QueryProfileCountRequest
  ): Promise<QueryProfileCountResponse> {
    const data = QueryProfileCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "ProfileCount",
      data
    );
    return promise.then((data) =>
      QueryProfileCountResponse.decode(new Reader(data))
    );
  }

  GetProfile(
    request: QueryGetProfileRequest
  ): Promise<QueryGetProfileResponse> {
    const data = QueryGetProfileRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetProfile",
      data
    );
    return promise.then((data) =>
      QueryGetProfileResponse.decode(new Reader(data))
    );
  }

  GetProfileByUsername(
    request: QueryGetProfileByUsernameRequest
  ): Promise<QueryGetProfileByUsernameResponse> {
    const data = QueryGetProfileByUsernameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetProfileByUsername",
      data
    );
    return promise.then((data) =>
      QueryGetProfileByUsernameResponse.decode(new Reader(data))
    );
  }

  GetBeaksCount(
    request: QueryGetBeaksCountRequest
  ): Promise<QueryGetBeaksCountResponse> {
    const data = QueryGetBeaksCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetBeaksCount",
      data
    );
    return promise.then((data) =>
      QueryGetBeaksCountResponse.decode(new Reader(data))
    );
  }

  GetAllBeaks(
    request: QueryGetAllBeaksRequest
  ): Promise<QueryGetAllBeaksResponse> {
    const data = QueryGetAllBeaksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetAllBeaks",
      data
    );
    return promise.then((data) =>
      QueryGetAllBeaksResponse.decode(new Reader(data))
    );
  }

  GetBeakById(
    request: QueryGetBeakByIdRequest
  ): Promise<QueryGetBeakByIdResponse> {
    const data = QueryGetBeakByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetBeakById",
      data
    );
    return promise.then((data) =>
      QueryGetBeakByIdResponse.decode(new Reader(data))
    );
  }

  GetBeaksByNameSubstring(
    request: QueryGetBeaksByNameSubstringRequest
  ): Promise<QueryGetBeaksByNameSubstringResponse> {
    const data = QueryGetBeaksByNameSubstringRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetBeaksByNameSubstring",
      data
    );
    return promise.then((data) =>
      QueryGetBeaksByNameSubstringResponse.decode(new Reader(data))
    );
  }

  GetBeaksByTag(
    request: QueryGetBeaksByTagRequest
  ): Promise<QueryGetBeaksByTagResponse> {
    const data = QueryGetBeaksByTagRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetBeaksByTag",
      data
    );
    return promise.then((data) =>
      QueryGetBeaksByTagResponse.decode(new Reader(data))
    );
  }

  GetRespectedBeaks(
    request: QueryGetRespectedBeaksRequest
  ): Promise<QueryGetRespectedBeaksResponse> {
    const data = QueryGetRespectedBeaksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetRespectedBeaks",
      data
    );
    return promise.then((data) =>
      QueryGetRespectedBeaksResponse.decode(new Reader(data))
    );
  }

  GetProfileByCreator(
    request: QueryGetProfileByCreatorRequest
  ): Promise<QueryGetProfileByCreatorResponse> {
    const data = QueryGetProfileByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "parrots.parrots.Query",
      "GetProfileByCreator",
      data
    );
    return promise.then((data) =>
      QueryGetProfileByCreatorResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
