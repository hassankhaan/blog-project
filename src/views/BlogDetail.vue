<script setup>
import { ref, onMounted } from "vue";
import { useBlogStore } from "../stores/index.js";
import { useRouter } from "vue-router";
import PrimaryButton from "@/components/button/PrimaryButton.vue";
import DeletePost from '@/components/PostDetail/DeletePost.vue';
import EditPost from '@/components/PostDetail/EditPost.vue';

const post = useBlogStore();
const router = useRouter();
const EditModal = ref(false)
const DeleteModal = ref(false)
const blogId = ref('')
const blog = ref({
  id: "",
  date: "",
  image: "",
  title: "",
  author: "",
  content: "",
});

onMounted(async () => {
  blogId.value = router.currentRoute.value.params.id;
  blog.value = await post.fetchBlog(blogId.value);
});
</script>
<template>
  <main class="mx-7 lg:mx-6 mt-32 flex-grow">
    <article class="max-w-5xl mx-auto">
      <header class="mb-14">
        <h1
          class="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3"
        >
          {{ blog.title }}
        </h1>
        <div class="text-center">{{ blog.date }}</div>
        <div class="mt-10 -mx-7 md:mx-0">
          <img
            class="w-full max-w-2xl mx-auto rounded-3xl"
            width="960"
            height="500"
            alt="This post thumbnail"
            :src="blog.image"
          />
        </div>
      </header>
      <div class="prose text-slate-800 max-w-none">
        {{ blog.content }}
      </div>
      <div class="flex mt-10 gap-4">
        <PrimaryButton @click="EditModal = true" color="green" text="Edit Post"/>
        <PrimaryButton @click="DeleteModal = true" color="red" text="Delete Post" align="left"/>
      </div>
    </article>
  </main>
  <EditPost v-show="EditModal" v-model:EditModal="EditModal" />
  <DeletePost v-show="DeleteModal" v-model:DeleteModal="DeleteModal" v-model:id="blogId"/>
</template>
