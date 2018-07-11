'use strict';

var popcore = module.exports;

// module information
popcore.version = 'v' + require('./package.json').version;
popcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of popcore-lib-js found. ' + 
      'Please make sure to require popcore-lib-js and check that submodules do' +
      ' not also include their own popcore-lib-js dependency.';
   throw new Error(message);
  }
};
popcore.versionGuard(global._popcore);
global._popcore = popcore.version;

// crypto
popcore.crypto = {};
popcore.crypto.BN = require('./lib/crypto/bn');
popcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
popcore.crypto.Hash = require('./lib/crypto/hash');
popcore.crypto.Random = require('./lib/crypto/random');
popcore.crypto.Point = require('./lib/crypto/point');
popcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
popcore.encoding = {};
popcore.encoding.Base58 = require('./lib/encoding/base58');
popcore.encoding.Base58Check = require('./lib/encoding/base58check');
popcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
popcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
popcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
popcore.util = {};
popcore.util.buffer = require('./lib/util/buffer');
popcore.util.js = require('./lib/util/js');
popcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
popcore.errors = require('./lib/errors');

// main popchain cash library
popcore.Address = require('./lib/address');
popcore.Block = require('./lib/block');
popcore.MerkleBlock = require('./lib/block/merkleblock');
popcore.BlockHeader = require('./lib/block/blockheader');
popcore.HDPrivateKey = require('./lib/hdprivatekey.js');
popcore.HDPublicKey = require('./lib/hdpublickey.js');
popcore.Networks = require('./lib/networks');
popcore.Opcode = require('./lib/opcode');
popcore.PrivateKey = require('./lib/privatekey');
popcore.PublicKey = require('./lib/publickey');
popcore.Script = require('./lib/script');
popcore.Transaction = require('./lib/transaction');
popcore.GovObject = require('./lib/govobject');
popcore.URI = require('./lib/uri');
popcore.Unit = require('./lib/unit');

// dependencies, subject to change
popcore.deps = {};
popcore.deps.bnjs = require('bn.js');
popcore.deps.bs58 = require('bs58');
popcore.deps.Buffer = Buffer;
popcore.deps.elliptic = require('elliptic');
popcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
popcore._HDKeyCache = require('./lib/hdkeycache');
popcore.Transaction.sighash = require('./lib/transaction/sighash');
