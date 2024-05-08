import {
    WalletModalProvider,
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
  
  const ConnectWallet = () => {
  
    return (
      <WalletModalProvider
      style={{
        padding:"0"
      }}
      >
        <WalletMultiButton
          style={{
            color: "#000",
            padding: "0",
            fontWeight: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit",
            lineHeight: "0",
            backgroundColor:"transparent",
          
          }}
        ></WalletMultiButton>
      </WalletModalProvider>
    );
  };
  
  export default ConnectWallet;
  