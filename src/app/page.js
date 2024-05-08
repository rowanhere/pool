"use client"
import AccordinInfo from "@/components/helpers/AccordinInfo";
import Main from "../components/helpers/Main";
import Nav from "../components/helpers/Nav";
import { Wallet } from "@/components/walletConfig/Adapter";

export default function Home() {
  return (
    <Wallet>

    <Nav/>
    {/* Staking info will be on this page */}
    <Main/>
    
    <AccordinInfo/>
    </Wallet>
  );
}
