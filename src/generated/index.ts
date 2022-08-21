// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUploadBeak } from "./types/parrots/tx";
import { MsgCreateComment } from "./types/parrots/tx";
import { MsgSetProfile } from "./types/parrots/tx";
import { MsgSendRespect } from "./types/parrots/tx";


const types = [
  ["/parrots.parrots.MsgUploadBeak", MsgUploadBeak],
  ["/parrots.parrots.MsgCreateComment", MsgCreateComment],
  ["/parrots.parrots.MsgSetProfile", MsgSetProfile],
  ["/parrots.parrots.MsgSendRespect", MsgSendRespect],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUploadBeak: (data: MsgUploadBeak): EncodeObject => ({ typeUrl: "/parrots.parrots.MsgUploadBeak", value: MsgUploadBeak.fromPartial( data ) }),
    msgCreateComment: (data: MsgCreateComment): EncodeObject => ({ typeUrl: "/parrots.parrots.MsgCreateComment", value: MsgCreateComment.fromPartial( data ) }),
    msgSetProfile: (data: MsgSetProfile): EncodeObject => ({ typeUrl: "/parrots.parrots.MsgSetProfile", value: MsgSetProfile.fromPartial( data ) }),
    msgSendRespect: (data: MsgSendRespect): EncodeObject => ({ typeUrl: "/parrots.parrots.MsgSendRespect", value: MsgSendRespect.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
