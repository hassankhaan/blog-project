<script setup>
defineProps({
    blog: Object
});
const truncate = (text) => {
  return text.length > 150 ? text.slice(0, 150) + '...' : text;
};
</script>
<template>
    <div class="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
        <div class="rounded shadow-md h-full">
            <router-link :to="'/blog/' + blog.id">
                <img class="w-full m-0 rounded-t lazy h-[200px]" :src="blog.image" alt="This post thumbnail" />
            </router-link>
            <div class="px-6 py-5">
                <div class="font-semibold text-lg mb-2">
                    <router-link :to="'/blog/' + blog.id" class="text-slate-900 hover:text-slate-700" href="">
                        {{ blog.title }}
                    </router-link>
                </div>
                <p class="text-slate-700 mb-1" title="Published date">
                    {{ blog.date }}
                </p>
                <p class="text-slate-800">
                    {{ truncate(blog.content) }}
                </p>
            </div>
            <div class="flex">
                <router-link :to="'/blog/' + blog.id" class="py-2 px-16 bg-transparent border border-1 mb-5 border-black rounded-lg mx-auto">See More</router-link>
            </div>
        </div>
    </div>
</template>