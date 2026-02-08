const CROWD_ADDRESS = "0x71F043a9072b5ec430C0a1DD766E1C8C613eDc5d";
const TOKEN_ADDRESS = "0x6179FBb91b239b574A4565e2c55A6fD38C3372d3";

const CROWD_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "funding_goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount_collected",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner_address",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "finalize",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tit",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "goal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "create_campaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_of_comp",
				"type": "uint256"
			}
		],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_of_comp",
				"type": "uint256"
			}
		],
		"name": "finalize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_all_campaigns",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "funding_goal",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount_collected",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner_address",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "finalize",
						"type": "bool"
					}
				],
				"internalType": "struct CroudFundingContract.company[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_campaigns_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "get_user_contribution",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_of_comp",
				"type": "uint256"
			}
		],
		"name": "refund",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const TOKEN_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_decimals",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "TransferOwnership",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

let provider, signer, contract, tokenContract, userAddress;

document.addEventListener('DOMContentLoaded', () => {
	lucide.createIcons();

	const connectBtn = document.getElementById('connectBtn');
	if (connectBtn) connectBtn.addEventListener('click', connectWallet);

	const scrollBtn = document.getElementById('scrollBtn');
	if (scrollBtn) scrollBtn.addEventListener('click', () => document.getElementById('campaigns').scrollIntoView());

	const openModalBtn = document.getElementById('openModalBtn');
	if (openModalBtn) openModalBtn.addEventListener('click', openModal);

	const closeModalBtn = document.getElementById('closeModalBtn');
	if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

	const createForm = document.getElementById('createForm');
	if (createForm) createForm.addEventListener('submit', handleCreate);

	checkConnection();
});

async function checkConnection() {
	if (window.ethereum) {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_accounts' });
			if (accounts.length > 0) await initProvider();
		} catch (err) {
			console.error(err);
		}
	}
}

async function connectWallet() {
	if (!window.ethereum) return showToast('Please install Metamask!', 'error');
	try {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		await initProvider();
	} catch (err) {
		console.error(err);
		showToast('Connection error', 'error');
	}
}

async function initProvider() {
	try {
		provider = new ethers.BrowserProvider(window.ethereum);
		signer = await provider.getSigner();
		userAddress = await signer.getAddress();

		contract = new ethers.Contract(CROWD_ADDRESS, CROWD_ABI, signer);

		if (TOKEN_ADDRESS) {
			tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
		}

		document.getElementById('btnText').innerText = `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`;

		const walletInfo = document.getElementById('walletInfo');
		walletInfo.classList.replace('hidden', 'flex');

		showToast('Connected', 'success');

		await updateBalances();
		await loadCampaigns();

	} catch (err) {
		console.error("Initialization failed:", err);
		showToast("Connection failed", 'error');
	}
}

async function updateBalances() {
	if (!userAddress || !provider) return;

	try {
		const ethBalanceWei = await provider.getBalance(userAddress);
		const ethBalance = ethers.formatEther(ethBalanceWei);
		const ethEl = document.getElementById('ethBalance');
		if (ethEl) ethEl.innerText = parseFloat(ethBalance).toFixed(4);

		if (tokenContract) {
			const tokenBalanceWei = await tokenContract.balanceOf(userAddress);
			const tokenBalance = ethers.formatEther(tokenBalanceWei);
			const tokenEl = document.getElementById('tokenBalance');
			if (tokenEl) tokenEl.innerText = parseFloat(tokenBalance).toFixed(2);
		}
	} catch (err) {
		console.error(err);
	}
}

async function loadCampaigns() {
	const grid = document.getElementById('campaignsGrid');
	const loader = document.getElementById('loader');

	if (grid) grid.innerHTML = '';
	if (loader) loader.classList.remove('hidden');

	try {
		const campaigns = await contract.get_all_campaigns();

		if (campaigns.length === 0) {
			if (grid) grid.innerHTML = `<div class="col-span-3 text-center py-10 opacity-50">No projects yet. Launch your own!</div>`;
		}

		campaigns.forEach((camp, index) => {
			renderCard(camp, index);
		});
	} catch (err) {
		console.error(err);
		if (grid) grid.innerHTML = `<div class="col-span-3 text-center text-red-400 border border-red-900/50 p-4 rounded-xl bg-red-900/10">Error: ${err.reason || err.message || "Check contract address and network"}</div>`;
	}

	if (loader) loader.classList.add('hidden');
	lucide.createIcons();
}

function renderCard(camp, index) {
	const grid = document.getElementById('campaignsGrid');
	if (!grid) return;

	const goal = ethers.formatEther(camp.funding_goal);
	const collected = ethers.formatEther(camp.amount_collected);
	const deadline = Number(camp.deadline) * 1000;
	const progress = Math.min((Number(collected) / Number(goal)) * 100, 100);
	const isOwner = userAddress && camp.owner_address.toLowerCase() === userAddress.toLowerCase();
	const isExpired = Date.now() > deadline;
	const isFinalized = camp.finalize;

	let status = isFinalized ?
		`<span class="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">PAID OUT</span>` :
		(isExpired ? `<span class="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">ENDED</span>` :
			`<span class="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30 animate-pulse">ACTIVE</span>`);

	let btn = '';
	if (!isExpired && !isFinalized) {
		btn = `<button class="donate-btn w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all text-sm font-bold flex items-center justify-center gap-2 group" data-id="${index}"><i data-lucide="coins" class="w-4 h-4 text-accent group-hover:scale-110 transition-transform"></i> Donate (ETH)</button>`;
	} else if (isOwner && !isFinalized && Number(collected) >= Number(goal)) {
		btn = `<button class="finalize-btn w-full py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all text-sm font-bold" data-id="${index}">Claim Funds</button>`;
	} else if (isExpired && Number(collected) < Number(goal)) {
		btn = `<button class="refund-btn w-full py-3 bg-red-900/40 hover:bg-red-900/60 border border-red-500/30 rounded-lg transition-all text-sm font-bold text-red-200" data-id="${index}">Refund</button>`;
	}

	const card = document.createElement('div');
	card.className = "glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300";
	card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-gray-400 border border-white/10">#${index}</div>
            ${status}
        </div>
        <h3 class="text-xl font-bold mb-2 truncate">${camp.title}</h3>
        <div class="text-xs text-slate-500 mb-6 flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3"></i> Deadline: ${new Date(deadline).toLocaleString()}</div>
        <div class="space-y-3 mb-6">
            <div class="flex justify-between text-sm"><span class="text-slate-400">Raised</span><span class="font-mono font-bold text-accent">${collected} ETH</span></div>
            <div class="h-2 w-full bg-black/50 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000" style="width: ${progress}%"></div></div>
            <div class="flex justify-between text-xs text-slate-500"><span>Goal: ${goal} ETH</span><span>${progress.toFixed(1)}%</span></div>
        </div>
        <div class="mt-auto action-area"></div>
    `;

	card.querySelector('.action-area').innerHTML = btn;
	grid.appendChild(card);

	const donateBtn = card.querySelector('.donate-btn');
	if (donateBtn) donateBtn.addEventListener('click', () => handleDonate(index));

	const finalizeBtn = card.querySelector('.finalize-btn');
	if (finalizeBtn) finalizeBtn.addEventListener('click', () => handleFinalize(index));

	const refundBtn = card.querySelector('.refund-btn');
	if (refundBtn) refundBtn.addEventListener('click', () => handleRefund(index));
}

async function handleCreate(e) {
	e.preventDefault();
	if (!contract) return showToast('Please connect wallet', 'error');
	const btn = e.target.querySelector('button');
	const originalText = btn.innerText;
	btn.innerText = "Confirming...";
	btn.disabled = true;
	try {
		const title = document.getElementById('campTitle').value;
		const goal = ethers.parseEther(document.getElementById('campGoal').value);
		const duration = document.getElementById('campDuration').value * 60;
		const tx = await contract.create_campaign(title, goal, duration);
		showToast('Transaction sent...', 'info');
		closeModal();
		await tx.wait();
		showToast('Success! Updating list...', 'success');
		e.target.reset();
		await updateBalances();
		setTimeout(loadCampaigns, 2000);
	} catch (err) {
		console.error(err);
		showToast(err.reason || "Creation error", 'error');
	} finally {
		btn.innerText = originalText;
		btn.disabled = false;
	}
}

async function handleDonate(id) {
	const amount = prompt("ETH amount to donate:");
	if (!amount || isNaN(amount)) return;
	try {
		const tx = await contract.donate(id, { value: ethers.parseEther(amount) });
		showToast('Sending ETH...', 'info');
		await tx.wait();
		showToast('Tokens received!', 'success');
		await updateBalances();
		loadCampaigns();
	} catch (err) {
		console.error(err);
		if (err.message && err.message.includes("Token transfer failed")) showToast('Error: Contract lacks tokens for reward!', 'error');
		else showToast('Transaction error', 'error');
	}
}

async function handleFinalize(id) {
	try {
		const tx = await contract.finalize(id);
		showToast('Processing payout...', 'info');
		await tx.wait();
		showToast('Funds transferred!', 'success');
		await updateBalances();
		loadCampaigns();
	} catch (err) {
		console.error(err);
		showToast(err.reason || 'Completion error', 'error');
	}
}

async function handleRefund(id) {
	try {
		const tx = await contract.refund(id);
		showToast('Refunding...', 'info');
		await tx.wait();
		showToast('Money refunded!', 'success');
		await updateBalances();
		loadCampaigns();
	} catch (err) {
		console.error(err);
		showToast(err.reason || 'Refund error', 'error');
	}
}

function openModal() {
	document.getElementById('modal').classList.remove('hidden', 'flex');
	document.getElementById('modal').classList.add('flex'); setTimeout(() => document.getElementById('modal').classList.remove('opacity-0'), 10); 
}
function closeModal() {
	 document.getElementById('modal').classList.add('opacity-0'); setTimeout(() => document.getElementById('modal').classList.add('hidden'), 300);
}
function showToast(msg, type = 'info') {
	const container = document.getElementById('toastContainer');
	if (!container) return;
	const toast = document.createElement('div');
	const colors = { success: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-100', error: 'bg-red-500/20 border-red-500/50 text-red-100', info: 'bg-indigo-500/20 border-indigo-500/50 text-indigo-100' };
	const icons = { success: 'check-circle', error: 'alert-circle', info: 'info' };
	toast.className = `glass border px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 min-w-[300px] toast-enter ${colors[type]}`;
	toast.innerHTML = `<i data-lucide="${icons[type]}" class="w-5 h-5"></i><span class="text-sm font-medium">${msg}</span>`;
	container.appendChild(toast);
	lucide.createIcons();
	requestAnimationFrame(() => {
		toast.classList.remove('toast-enter'); toast.classList.add('toast-enter-active');
	});
	setTimeout(() => {
		toast.classList.remove('toast-enter-active'); toast.classList.add('toast-exit-active'); setTimeout(() => toast.remove(), 300);
	}, 3000);
}
