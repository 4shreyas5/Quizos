import React, { useState } from 'react';
import { TezosToolkit } from '@taquito/taquito';

const CertificateNFT = () => {
  const [contract, setContract] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [certificateDetails, setCertificateDetails] = useState({});

  const connectToContract = async () => {
    try {
      const tezos = new TezosToolkit('https://ghostnet.smartpy.io'); // Replace with your Tezos node URL
      const contractAddress = 'KT1GybocrxwS5VioGdT5hfqaDUBFrmXjT5hW	'; // Replace with your contract address
      const contract = await tezos.contract.at(contractAddress);
      setContract(contract);
    } catch (error) {
      console.error('Failed to connect to the contract:', error);
    }
  };

  const handleButtonClick = async () => {
    try {
      const storage = await contract.storage();
      const certificateMap = storage.storedCertificates;

      // Fetch certificate data from the contract storage
      const fetchedCertificate = await certificateMap.get('<YOUR_TOKEN_ID>'); // Replace with the desired token ID
      setCertificateDetails(fetchedCertificate);
      setShowDetails(true);
    } catch (error) {
      console.error('Failed to fetch certificate details:', error);
    }
  };

  return (
    <div>
      <h1>Certificate NFTs</h1>
      {contract ? (
        <div>
          <button onClick={handleButtonClick}>Show Certificate Details</button>
          {showDetails && (
            <div>
              <p>Name: {certificateDetails.name}</p>
              <p>Score: {certificateDetails.score}</p>
              {/* Display additional details as needed */}
            </div>
          )} 
        </div>
      ) : (
        <button onClick={connectToContract}>Connect to Contract</button>
      )}
    </div>
  );
};

export default CertificateNFT;
