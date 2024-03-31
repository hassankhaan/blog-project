<script setup>
import Post from "@/components/home/Post.vue";

import { ref, onMounted } from "vue";
import { useBlogStore } from "../stores/index.js";
import { useRouter } from "vue-router";
import AddPost from "@/components/home/AddPost.vue";
import PrimaryButton from "@/components/button/PrimaryButton.vue"

const post = useBlogStore();
const router = useRouter();
const addPostVisible = ref(false);

const blogs = ref([]);

onMounted(async () => {
  blogs.value = await post.fetchBlogs();
});
</script>

<template>
  <main class="mx-7 lg:mx-6 mt-32 flex-grow">
    <div class="max-w-5xl mx-auto">
      <PrimaryButton class="mb-6" @click="addPostVisible = true" color="purple" text="Add New Post"/>
      <div class="flex flex-wrap -mx-2">
        <Post v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </div>
  </main>
  <AddPost v-show="addPostVisible" v-model:addPostVisible="addPostVisible" />
</template>
