/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "parrots.parrots";

export interface Profile {
  id: number;
  creator: string;
  username: string;
  display_name: string;
  description: string;
  respectedBeaks: number[];
}

export interface Beak {
  id: number;
  creator: string;
  file_index: string;
  name: string;
  creator_username: string;
  creator_display_name: string;
  description: string;
  license: string;
  respect_count: number;
  created_at: number;
  linked_beaks: number[];
  tags: string[];
}

export interface Comment {
  id: number;
  creator: string;
  username: string;
  display_name: string;
  comment: string;
  created_at: number;
  beak_id: number;
}

const baseProfile: object = {
  id: 0,
  creator: "",
  username: "",
  display_name: "",
  description: "",
  respectedBeaks: 0,
};

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.display_name !== "") {
      writer.uint32(34).string(message.display_name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    writer.uint32(50).fork();
    for (const v of message.respectedBeaks) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    message.respectedBeaks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.display_name = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.respectedBeaks.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.respectedBeaks.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.respectedBeaks = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.display_name = String(object.display_name);
    } else {
      message.display_name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.respectedBeaks !== undefined && object.respectedBeaks !== null) {
      for (const e of object.respectedBeaks) {
        message.respectedBeaks.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.display_name !== undefined &&
      (obj.display_name = message.display_name);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.respectedBeaks) {
      obj.respectedBeaks = message.respectedBeaks.map((e) => e);
    } else {
      obj.respectedBeaks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.respectedBeaks = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.display_name = object.display_name;
    } else {
      message.display_name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.respectedBeaks !== undefined && object.respectedBeaks !== null) {
      for (const e of object.respectedBeaks) {
        message.respectedBeaks.push(e);
      }
    }
    return message;
  },
};

const baseBeak: object = {
  id: 0,
  creator: "",
  file_index: "",
  name: "",
  creator_username: "",
  creator_display_name: "",
  description: "",
  license: "",
  respect_count: 0,
  created_at: 0,
  linked_beaks: 0,
  tags: "",
};

export const Beak = {
  encode(message: Beak, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.file_index !== "") {
      writer.uint32(26).string(message.file_index);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.creator_username !== "") {
      writer.uint32(42).string(message.creator_username);
    }
    if (message.creator_display_name !== "") {
      writer.uint32(50).string(message.creator_display_name);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    if (message.license !== "") {
      writer.uint32(66).string(message.license);
    }
    if (message.respect_count !== 0) {
      writer.uint32(72).uint64(message.respect_count);
    }
    if (message.created_at !== 0) {
      writer.uint32(80).int64(message.created_at);
    }
    writer.uint32(90).fork();
    for (const v of message.linked_beaks) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.tags) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Beak {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBeak } as Beak;
    message.linked_beaks = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.file_index = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.creator_username = reader.string();
          break;
        case 6:
          message.creator_display_name = reader.string();
          break;
        case 7:
          message.description = reader.string();
          break;
        case 8:
          message.license = reader.string();
          break;
        case 9:
          message.respect_count = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.created_at = longToNumber(reader.int64() as Long);
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.linked_beaks.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.linked_beaks.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 12:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Beak {
    const message = { ...baseBeak } as Beak;
    message.linked_beaks = [];
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.file_index !== undefined && object.file_index !== null) {
      message.file_index = String(object.file_index);
    } else {
      message.file_index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.creator_username !== undefined &&
      object.creator_username !== null
    ) {
      message.creator_username = String(object.creator_username);
    } else {
      message.creator_username = "";
    }
    if (
      object.creator_display_name !== undefined &&
      object.creator_display_name !== null
    ) {
      message.creator_display_name = String(object.creator_display_name);
    } else {
      message.creator_display_name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = String(object.license);
    } else {
      message.license = "";
    }
    if (object.respect_count !== undefined && object.respect_count !== null) {
      message.respect_count = Number(object.respect_count);
    } else {
      message.respect_count = 0;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = Number(object.created_at);
    } else {
      message.created_at = 0;
    }
    if (object.linked_beaks !== undefined && object.linked_beaks !== null) {
      for (const e of object.linked_beaks) {
        message.linked_beaks.push(Number(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Beak): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.file_index !== undefined && (obj.file_index = message.file_index);
    message.name !== undefined && (obj.name = message.name);
    message.creator_username !== undefined &&
      (obj.creator_username = message.creator_username);
    message.creator_display_name !== undefined &&
      (obj.creator_display_name = message.creator_display_name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.license !== undefined && (obj.license = message.license);
    message.respect_count !== undefined &&
      (obj.respect_count = message.respect_count);
    message.created_at !== undefined && (obj.created_at = message.created_at);
    if (message.linked_beaks) {
      obj.linked_beaks = message.linked_beaks.map((e) => e);
    } else {
      obj.linked_beaks = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Beak>): Beak {
    const message = { ...baseBeak } as Beak;
    message.linked_beaks = [];
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.file_index !== undefined && object.file_index !== null) {
      message.file_index = object.file_index;
    } else {
      message.file_index = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.creator_username !== undefined &&
      object.creator_username !== null
    ) {
      message.creator_username = object.creator_username;
    } else {
      message.creator_username = "";
    }
    if (
      object.creator_display_name !== undefined &&
      object.creator_display_name !== null
    ) {
      message.creator_display_name = object.creator_display_name;
    } else {
      message.creator_display_name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = object.license;
    } else {
      message.license = "";
    }
    if (object.respect_count !== undefined && object.respect_count !== null) {
      message.respect_count = object.respect_count;
    } else {
      message.respect_count = 0;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = object.created_at;
    } else {
      message.created_at = 0;
    }
    if (object.linked_beaks !== undefined && object.linked_beaks !== null) {
      for (const e of object.linked_beaks) {
        message.linked_beaks.push(e);
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    return message;
  },
};

const baseComment: object = {
  id: 0,
  creator: "",
  username: "",
  display_name: "",
  comment: "",
  created_at: 0,
  beak_id: 0,
};

export const Comment = {
  encode(message: Comment, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.display_name !== "") {
      writer.uint32(34).string(message.display_name);
    }
    if (message.comment !== "") {
      writer.uint32(42).string(message.comment);
    }
    if (message.created_at !== 0) {
      writer.uint32(48).int64(message.created_at);
    }
    if (message.beak_id !== 0) {
      writer.uint32(56).uint64(message.beak_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComment } as Comment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.username = reader.string();
          break;
        case 4:
          message.display_name = reader.string();
          break;
        case 5:
          message.comment = reader.string();
          break;
        case 6:
          message.created_at = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.beak_id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.display_name = String(object.display_name);
    } else {
      message.display_name = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = Number(object.created_at);
    } else {
      message.created_at = 0;
    }
    if (object.beak_id !== undefined && object.beak_id !== null) {
      message.beak_id = Number(object.beak_id);
    } else {
      message.beak_id = 0;
    }
    return message;
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.display_name !== undefined &&
      (obj.display_name = message.display_name);
    message.comment !== undefined && (obj.comment = message.comment);
    message.created_at !== undefined && (obj.created_at = message.created_at);
    message.beak_id !== undefined && (obj.beak_id = message.beak_id);
    return obj;
  },

  fromPartial(object: DeepPartial<Comment>): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.display_name = object.display_name;
    } else {
      message.display_name = "";
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.created_at = object.created_at;
    } else {
      message.created_at = 0;
    }
    if (object.beak_id !== undefined && object.beak_id !== null) {
      message.beak_id = object.beak_id;
    } else {
      message.beak_id = 0;
    }
    return message;
  },
};

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
