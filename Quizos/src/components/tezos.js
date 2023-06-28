import { wallet } from './wallet';
import {TezosToolkit} from '@taquito/taquito';
export const tezos = new TezosToolkit("https://mainnet.smartpy.io");

tezos.setWalletProvider(wallet);