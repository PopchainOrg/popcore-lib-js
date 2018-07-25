# Networks
Popcore provides support for the main popchain network as well as for `testnet3`, the current test blockchain. We encourage the use of `Networks.livenet` and `Networks.testnet` as constants. Note that the library sometimes may check for equality against this object. Please avoid creating a deep copy of this object.

The `Network` namespace has a function, `get(...)` that returns an instance of a `Network` or `undefined`. The only argument to this function is some kind of identifier of the network: either its name, a reference to a Network object, or a number used as a magic constant to identify the network (for example, the value `0` that gives popchain addresses the distinctive `'1'` at its beginning on livenet, is a `0x6F` for testnet).

## Regtest

The regtest network is useful for development as it's possible to programmatically and instantly generate blocks for testing. It's currently supported as a variation of testnet. Here is an example of how to use regtest with the Popcore Library:

```js
// Standard testnet
> popcore.Networks.testnet.networkMagic;
<Buffer 0b 11 09 07>
```

```js
// Enabling testnet to use the regtest port and magicNumber
> popcore.Networks.enableRegtest();
> popcore.Networks.testnet.networkMagic;
<Buffer fa bf b5 da>
```

## Setting the Default Network
Most projects will only need to work with one of the networks. The value of `Networks.defaultNetwork` can be set to `Networks.testnet` if the project will need to only to work on testnet (the default is `Networks.livenet`).

## Network constants
The functionality of testnet and livenet is mostly similar (except for some relaxed block validation rules on testnet). They differ in the constants being used for human representation of base58 encoded strings. These are sometimes referred to as "version" constants.

Take a look at this modified snippet from [networks.js](https://github.com/PopchainOrg/popcore-lib-js/blob/master/lib/networks.js)

```javascript
var livenet = new Network();
_.extend(livenet, {
  name: 'main',
  alias: 'main',
  pubkeyhash: 0x44,     
  privatekey: 0x80,      
  scripthash: 0x3f,       
  xpubkey: 0x488b21e,    
  xprivkey: 0x488ade4,  
  port: 9888,
});

var testnet = new Network();
_.extend(testnet, {
  name: 'test',
  alias: 'regtest',
  pubkeyhash: 0x82,
  privatekey: 0xef,
  scripthash: 0x7d,
  xpubkey: 0x43587ce,    
  xprivkey: 0x4358394   
  port: 19888
});
```
