<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenu = ref(null)

function toggleMenu() {
  if (mobileMenu.value) {
    mobileMenu.value.classList.toggle('hidden')
  }
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <RouterLink
        to="/home"
        class="font-bold text-white"
        style="font-family: 'Space Mono', monospace; font-size: 0.85rem; letter-spacing: 0.1em"
      >
        <span class="text-sky-400">&lt;</span>HAZZA<span class="text-sky-400">/&gt;</span>
      </RouterLink>
      <div class="hidden md:flex items-center gap-8">
        <RouterLink to="/home" class="nav-link">Home</RouterLink>
        <RouterLink to="/certificates" class="nav-link">Certificates</RouterLink>
        <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
        <RouterLink to="skills" class="nav-link">Skills</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </div>
      <!-- Mobile menu button -->
      <button id="menuBtn" class="md:hidden text-sky-400" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <!-- Mobile menu -->
    <div
      ref="mobileMenu"
      class="hidden md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 border-t border-sky-400/10 pt-4"
    >
      <RouterLink to="/home" class="nav-link" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/certificates" class="nav-link" @click="toggleMenu">Certificates</RouterLink>
      <RouterLink to="/projects" class="nav-link" @click="toggleMenu">Projects</RouterLink>
      <RouterLink to="/skills" class="nav-link" @click="toggleMenu">Skills</RouterLink>
      <RouterLink to="/about" class="nav-link" @click="toggleMenu">About</RouterLink>
    </div>
  </nav>
</template>
