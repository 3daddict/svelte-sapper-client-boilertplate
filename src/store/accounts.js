import { writable } from 'svelte/store';

function createAccounts() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		//increment: () => update(n => n + 1),
		//decrement: () => update(n => n - 1),
		setupAccounts: (arg) => set(arg)
	};
}

export const accounts = createAccounts();
