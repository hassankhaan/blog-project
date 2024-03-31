<script setup>
import { ref } from 'vue';
const isShow = ref(false);
const showMenu = () => {
    isShow.value = !isShow.value;
}
</script>
<template>
    <header class="bg-white w-full px-6 py-5 z-50 fixed top-0 shadow-md transition-all transform ease-in-out duration-500">
        <div class="max-w-5xl mx-auto flex items-center flex-wrap justify-between">
            <div class="sm:mr-8">
                <router-link class="flex items-center" to="/">
                    <span class="text-xl text-teal-700 font-semibold self-center">
                        Blog BD
                    </span>
                </router-link>
            </div>
            <form action="/search" class="order-last sm:order-none flex-grow items-center hidden justify-end sm:block mt-6 sm:mt-0">
                <input type="text" id="header-searchbox" name="q" placeholder="Search here ..."
                class="w-full sm:max-w-xs bg-slate-200 border border-transparent float-right focus:bg-white focus:border-slate-300 focus:outline-none h-8 p-4 placeholder-slate-500 rounded text-slate-700 text-sm"
                />
            </form>
            <div @click="showMenu()" class="flex items-center md:hidden text-slate-700 hover:text-teal-600 cursor-pointer sm:ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12">
                    </line>
                    <line x1="3" y1="6" x2="21" y2="6">
                    </line>
                    <line x1="3" y1="18" x2="21" y2="18">
                    </line>
                </svg>
            </div>
        </div>
    </header>
</template>