<script setup>
import { ref, defineEmits} from "vue";
import { useBlogStore } from "../../stores/index.js";

const emit = defineEmits();

const props = defineProps({
  addPostVisible: Boolean,
});

const formData = ref({
  title: "",
  author: "",
  content: "",
  date: "",
  imageURL: "",
});

const blog = useBlogStore();

const submitForm = async () => {
  await blog.addBlog(
    formData.value.title,
    formData.value.author,
    formData.value.content,
    formData.value.date,
    formData.value.imageURL
  );
  emit('update:addPostVisible', false);
  location.reload();
};

const closeModal = () => {
    emit('update:addPostVisible', false);
}
</script>
<template>
  <main>
    <div
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full mx-auto mt-20">
        <div
          class="relative bg-white rounded-lg shadow-2xl border border-blue-600"
        >
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
          >
            <h3 class="text-xl font-semibold text-gray-900">Add New Post</h3>
            <button
            @click="closeModal()"
              type="button"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <form @submit.prevent="submitForm()" class="space-y-4" action="#">
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Title</label
                >
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="type post title here"
                  v-model="formData.title"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Author Name</label
                >
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="type author name here"
                  v-model="formData.author"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Image URL</label
                >
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="type your post image url here"
                  v-model="formData.imageURL"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Date</label
                >
                <input
                  type="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  v-model="formData.date"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900"
                  >Content</label
                >
                <textarea
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="type your post content here"
                  v-model="formData.content"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add New Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
