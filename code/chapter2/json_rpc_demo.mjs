/**
 * Chapter 2 illustration added for this report (NOT original book source code).
 * Node.js 18+. Read-only JSON-RPC requests to an Ethereum node.
 * Set RPC_URL to an Ethereum testnet RPC endpoint before running.
 * Optional: set ACCOUNT_ADDRESS to read an ETH balance.
 * No wallet or private key required.
 */

const rpcUrl = process.env.RPC_URL;
if (!rpcUrl) {
  console.error('Missing RPC_URL. Configure a testnet JSON-RPC endpoint.');
  process.exit(1);
}

async function rpc(method, params = []) {
  const response = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params })
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.result;
}

const chainIdHex = await rpc('eth_chainId');
const blockHex = await rpc('eth_blockNumber');
console.log('Chain ID:', Number(BigInt(chainIdHex)));
console.log('Latest block number:', Number(BigInt(blockHex)));

const address = process.env.ACCOUNT_ADDRESS;
if (address) {
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) {
    throw new Error('ACCOUNT_ADDRESS must be a 20-byte Ethereum address');
  }
  const weiHex = await rpc('eth_getBalance', [address, 'latest']);
  const wei = BigInt(weiHex);
  const etherWhole = wei / 10n ** 18n;
  const etherFraction = String(wei % 10n ** 18n).padStart(18, '0');
  console.log('Balance (ETH):', `${etherWhole}.${etherFraction}`);
}
