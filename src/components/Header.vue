<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600"
  >
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-gray-500 focus:outline-none lg:hidden"
      >
        <span class="material-icons"> list </span>
      </button>

      <div class="relative mx-4 lg:mx-0">
        <span
          class="absolute inset-y-0 left-0 pl-3 flex items-center material-icons"
        >
          search
        </span>

        <input
          class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-red-600 focus:outline-none">
        <span class="material-icons"> notification_important </span>
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="flex mx-4 text-black-600 focus:outline-none"
        >
          <i class="material-icons">face</i>
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 h-full w-full z-10"
        ></div>

        <div
          v-show="dropdownOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Products</a
          >
          <router-link
            to="/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >Log out</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

export default defineComponent({
  setup(_, { emit }) {
    const dropdownOpen = ref(false);
    const { isOpen } = useSidebar();

    return {
      isOpen,
      dropdownOpen,
    };
  },
});
</script>
