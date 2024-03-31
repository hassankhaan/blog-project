import { defineStore } from 'pinia';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: []
  }),
  actions: {
    async fetchBlogs() {
      const response = await fetch('https://retoolapi.dev/ZX1WUG/posts');
      const data = await response.json();
      this.blogs = data;
      return data;
    },
    async fetchBlog(id) {
      const response = await fetch(`https://retoolapi.dev/ZX1WUG/posts/${id}`);
      return await response.json();
    },
    async addBlog(title, author, content, date, image) {
      const response = await fetch('https://retoolapi.dev/ZX1WUG/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          content,
          date,
          image
        })
      });
      const newBlog = await response.json();
      this.blogs(newBlog);
    },
    async deleteBlog(id) {
      await fetch(`https://retoolapi.dev/ZX1WUG/posts/${id}`, {
        method: 'DELETE'
      });
      this.blogs = this.blogs.filter(blog => blog.id !== id);
    },
    async updateBlog(id, title, author, content, date, image) {
      const response = await fetch(`https://retoolapi.dev/ZX1WUG/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          content,
          date,
          image
        })
      });
      const updatedBlog = await response.json();
      const index = this.blogs.findIndex(blog => blog.id === id);
      if (index !== -1) {
        this.blogs.splice(index, 1, updatedBlog);
      }
    }
  }
});