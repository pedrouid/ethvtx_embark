import { VtxContract } from 'ethvtx/lib/contracts/VtxContract';
import { loadContractSpec, loadContractInstance, addAccount } from 'ethvtx/lib/dispatchers';
import Web3 from 'web3';
import EmbarkJs from 'Embark/EmbarkJS';
import { start, setWeb3, authorizeAndSetWeb3 } from 'ethvtx/lib/dispatchers';
import { embark } from 'ethvtx/lib/utils';
import SimpleStorage from 'Embark/contracts/SimpleStorage';
import WalletConnectProvider from '../walletconnect-web3-provider'

export const setupWeb3 = async (store) => {

    return new Promise((ok, ko) => {

        EmbarkJs.onReady(async () => {
            // instantiate walletconnect provider
            const provider = new WalletConnectProvider({ bridge: "https://bridge.walletconnect.org" })

            // inject provider into new web3 instance
            const web3 = new Web3(provider);

            // Set the web3 instance in the store
            setWeb3(store.dispatch, web3);

            // Initialize the Store's contract manager
            VtxContract.init(store);

            // Loading a spec si made easy with the embark.loadSpec helper
            loadContractSpec(store.dispatch, ...embark.loadSpec(SimpleStorage, 'SimpleStorage', true, true));

            // Loading an instance BEFORE starting the store will check on the chain if the correct bytecode is found, and if not, the WrongNet status is applied
            loadContractInstance(store.dispatch, 'SimpleStorage', SimpleStorage.address, {
                alias: '@simplestorage',
                permanent: true,
                balance: true
            });

            // Loading a permanent account before starting the store will keep it even after resets
            addAccount(store.dispatch, '0xa087a6Ddc4BDB1028fe4431C8616F8E15Cf5F522', {
                alias: '@testpermanent',
                permanent: true
            });

            // Starts the store, will update the vtxconfig.status depending on the environment. Will also call the enable callback if available
            start(store.dispatch, EmbarkJs.enableEthereum ? EmbarkJs.enableEthereum : undefined);

            window.DEBUG_STORE = store;

            ok();
        });

    })

};
