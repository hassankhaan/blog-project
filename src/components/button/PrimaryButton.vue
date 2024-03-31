<script setup>
defineProps({
  color: {
    type: String,
    default: "blue",
  },
  text: {
    type: String,
    default: "Button",
  },
  align: {
    type: String,
    default: 'right'
  }
});
</script>

<template>
  <div :class="{'text-left': align === 'left', 'text-center': align === 'center', 'text-right': align === 'right'}">
    <button
      type="button"
      class="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-20 py-2.5 mb-2"
      :class="{
        'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': color === 'blue',
        'bg-red-700 hover:bg-red-800 focus:ring-red-300': color === 'red',
        'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300': color === 'black',
        'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300':
          color === 'purple',
        'bg-green-700 hover:bg-green-800 focus:ring-green-300':
          color === 'green',
        'bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300':
          color === 'yellow',
      }"
    >
      {{ text }}
    </button>
  </div>
</template>
