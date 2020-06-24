import { writable } from 'svelte/store';

function createAccounts() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		setupAccounts: (arg) => set(arg)
	};
}

export const accounts = createAccounts();
