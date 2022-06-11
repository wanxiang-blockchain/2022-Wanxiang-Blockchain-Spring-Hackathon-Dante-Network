# 2022-Wanxiang-Blockchain-Spring-Hackathon-Dante-Network

# Project Name: 
**Dante Network**

# Description
Dante Network is a middleware to empower multi-chain ecosystems to interconnect and interoperate with each other in web3.

In Dante Network, we define and offer a general protocol stack to realize multi-chain interoperability and interconnection. This will bring innovative experiences in web3, just as the Internet protocol is for today’s internet. With this infrastructure, participants in web3 can make universal message transmission and smart contract invocation across blockchain networks.

## Solution
Architecture

![EN Dante Pitch Deck3 7_06](https://user-images.githubusercontent.com/83746881/168860802-93bd20df-c157-4414-8663-adc7107a1699.jpg)

Generally, the protocol stack includes three layers, the “Service Presentation Layer”, the “Security Quality Layer”, and the “Consensus Verification Layer”. We make a concrete implementation of these 3 layers.

The “Service Presentation Layer” is at the top of the protocol stack. It defines the message organization protocol, the invocation method, and the service interfaces, which is similarto “RESTful Web Service” and “HTTPS” in web2. This makes the development of web3 dApps easier. Our protocol stack incorporates the implementation of transaction privacy, to guarantee the protection of on-chain behavior and data.

The “Security Quality Layer” is the second layer, which defines a cluster of security mechanisms that can be configured according to the demand of the application. “SQoS” defines the concrete mechanisms of routing, verification, privacy, authority, etc. This can be analogous to the “QoS” in TCP/IP protocol cluster.

The “Consensus Verification Layer” is the bottom layer of the protocol stack, designed specifically for web3. The verification algorithms include the commitment and belief verifications that are applicable to major  ranges of scenarios in web3. The protocol also includes algorithms for evaluation, incentives, challenge, as well as a “Parallel Route Scheduling” algorithm that is responsible for router selection. At the bottom of this layer, they specify a “Physical” protocol, similar to the “Physical Layer” of the OSI model,  that defines the standard behavior of the routing node (officially named “Adaption node”).

That’s an overview of the protocol stack in Dante Network. We believe it can be regarded as Web3’s  “Internet protocol”, the “Blocknet Protocol” that connects chains together. The protocol stack implementation, along with off-chain routers,  can be embedded in public chains as a smart contract. That’s similar to how operating systems use the embedded TCP/IP protocol cluster to build a computer network with routers.

## Impact
* Target audience: In the early stage, the main target audience is the dApp developers. With the development of Dante Protocol Stack, there will be several dApps based on it, so the ordinary users will have indirect access to Dante's services.
* Evidence for the need: 
    * since there are more blockchains than BTC, cross-chain is a topic on the agenda, whether it is a centralized solution, such as CEX, or decentralized solutions, such as various cross-chain bridges, all prove that. In the early days, cross-chain mainly focused on the Token, but as the block chain function and application scenera became richer, more comprehensive cross-chain requirements have been proposed. Currently, there are numbers of projects focusing on multi-chain interoperability, which have been recognized by the market, such as Axelar, Layerzero, and even ChainLink, which fully demonstrate the potential of this field.  
    * The horizontal expansion of blockchain is an inevitable trend, which has been proved by the rise of sharding and Layer2. However, sharding and Layer2 can only solve the communication and collaboration problems between isomorphic chains.  But in fact, there are more heterogeneous chains in the Web3 world, and there is a greater market space and necessity to solve the communication and collaboration problems between them.  
    * Apart from the observation at the macro level, we have also had in-depth communication with many DApp projects at the micro level. Many of them believe that cross-chain interoperability will bring better composability to DApps, especially for DeFi projects which were famous for composability, especially in today's increasingly obvious differentiation of each public chain.  The composability of multiple chains opens up more possibilities for them, and this has been recognized by many projects. 

* Target: We will build the multi-chain protocol stack as well as its concrete implementation in full technology stack of web3.
    * Firstly, the Dante protocol stack will be implemented as smart contracts deployed on different chains in web3. With this middleware, dApps in multi-ecosystems can send or receive general messages, to or from contracts deployed on different chains. Besides, contracts deployed on different chains can call each other as conveniently as they doing their nativechain. So the smart contract and resources in the whole web3 world can also be effectively used by users no matter where they are.
    * Secondely, off-chain routers are built to make the underlying information routing. Anyone can participate in Dante Network by deploying a "router" with their own private key.
    * Thirdly, we will provide SDKs covering multiple technology stacks for dApp developers to make multi-chain interoperations more convenient and straightforward.
* Highlights
    * Barrier-free multi-chain ecosystem Collaboration (More than token, we provide Omnichain general message communication and interoperability): Provision of a general data verification protocol to execute token circulation, comprehensive information sensing, and dApps interoperability among multiple chains, like the “Blocknet”(like "internet in web2").
    * A dynamic balance of security, scalability, and decentralization: Provision of an SQoS mechanism that can be adapted to various scenarios, similar to the QoS in TCP/IP protocol cluster.

## Contact Us

More details of Dante Network are here:
* [Project Demo Video](https://www.youtube.com/watch?v=CYXx4O8Xgcs)
* [Pitch Deck & White Paper](https://github.com/dantenetwork/Pitch-Deck) 
* [Website](https://www.dantechain.com/) 
* [github](https://github.com/dantenetwork)
