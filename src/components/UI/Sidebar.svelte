<script>
import * as api from 'api.js'
import { onMount, afterUpdate, onDestroy } from 'svelte';
import { goto, stores } from "@sapper/app";
import { fade, fly, slide, scale } from 'svelte/transition';
import Button from './Button.svelte';
const { session } = stores();

export let toggle = true;
let data = [];

onMount(async () => {
		({ data } = await api.get(`accounts/`, $session.token, $session.user._id))
    });

afterUpdate(() => {
    data = data;
})

onDestroy(() => {
    data = [];
})

//$: console.log('Sidebar accountData:', data);

</script>

<aside class="absolute bg-white top-0 left-0 h-full w-327px md:w-350px overflow-auto z-50 {toggle ? 'hidden' : ''}">
    <div class="flex flex-col">
        <div class="flex bg-gray-800 text-white p-4 md:hidden">
            <i class="material-icons-outlined">keyboard_arrow_left</i>
            <h3 class="text-base">Menu</h3>
        </div>
        <div class="text-gray-700">
            <div class="bg-gray-100 pl-6 py-3">
                <h2 class="text-lg">Account Name</h2>
                <p class="text-gray-600 text-xs">Account ID</p>
            </div>
            <div class="pt-6 mx-4">
                <h4 class="text-gray-600 pl-2 text-xs pb-4">PROJECTS</h4>
                {#if $session.user}
                     {#each data as account}
                            <div class="flex py-2 hover:bg-blue-100 hover:text-blue-500">
                            <i class="material-icons-outlined my-auto pl-2 pr-4">corporate_fare</i>
                            <a class="flex flex-col" href="account/{account._id}" on:click="{() => toggle = !toggle}">
                                <h3 class="text-base">{account.accountName}</h3>
                                <p class="text-xs">{account._id}</p>
                            </a>
                        </div>
                    {/each}
                {:else}
                     <div>Nothing to see here</div>
                {/if}
            </div>
        </div>
        <div class="pt-6 pl-6">
            <Button 
            mode="link"
            classes="text-blue-500 text-sm"
            href="/forgot"
            >CREATE PROJECT</Button>
        </div>
    </div>
</aside>
<div on:click="{() => toggle = !toggle}" class="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-75 cursor-pointer {toggle ? 'hidden' : ''}"></div>

<!-- <aside class="absolute bg-white top-0 left-0 h-full w-327px md:w-350px overflow-auto z-50 {toggle ? 'hidden' : ''}">
    <div class="flex flex-col">
        <div class="flex bg-gray-800 text-white p-4 md:hidden">
            <i class="material-icons-outlined">keyboard_arrow_left</i>
            <h3 class="text-base">Menu</h3>
        </div>
        <div class="text-gray-700">
            <div class="bg-gray-100 pl-6 py-3">
                <h2 class="text-lg">Account Name</h2>
                <p class="text-gray-600 text-xs">Account ID</p>
            </div>
            <div class="pt-6 mx-4">
                <h4 class="text-gray-600 pl-2 text-xs pb-4">PROJECTS</h4>
                <div class="flex py-2 hover:bg-blue-100 hover:text-blue-500">
                    <i class="material-icons-outlined my-auto pl-2 pr-4">corporate_fare</i>
                    <div class="flex flex-col">
                        <h3 class="text-base">Project Name</h3>
                        <p class="text-xs">Project ID</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-6 pl-6">
            <Button 
            mode="link"
            classes="text-blue-500 text-sm"
            href="/forgot"
            >CREATE PROJECT</Button>
        </div>
    </div>
</aside> -->