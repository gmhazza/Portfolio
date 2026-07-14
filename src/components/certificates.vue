<script setup></script>

<template>
  <section id="certificates" class="py-24 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-16">
        <span class="section-number">// 02</span>
        <h2 class="section-title">Certificates</h2>
        <p class="text-slate-400 mt-3 max-w-xl">
          Verified credentials from Programming Hero, demonstrating proficiency across multiple
          languages and frameworks.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- CERT 1: Web Dev -->
        <div class="card p-0 overflow-hidden" style="border-radius: 4px">
          <div class="cert-img-placeholder">
            <img
              src="/src/assets/certificates/web_dev.jpg"
              alt="Web Development Certificate"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-bold text-white text-sm">Web Development</h3>
              <span class="text-amber-400 text-xs">🏆</span>
            </div>
            <p class="text-xs text-slate-500 mono mb-3">Programming Hero</p>
            <div class="flex items-center justify-between">
              <span class="tech-tag">HTML · CSS · JS</span>
              <span class="text-xs text-slate-600 mono">Feb 2024</span>
            </div>
          </div>
        </div>

        <!-- CERT 2: C++ -->
        <div class="card p-0 overflow-hidden" style="border-radius: 4px">
          <div class="cert-img-placeholder">
            <img
              src="/src/assets/certificates/cpp.jpg"
              alt="C++ Certificate"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-bold text-white text-sm">Programming in C++</h3>
              <span class="text-amber-400 text-xs">🏆</span>
            </div>
            <p class="text-xs text-slate-500 mono mb-3">Programming Hero</p>
            <div class="flex items-center justify-between">
              <span class="tech-tag tech-tag-purple">C++</span>
              <span class="text-xs text-slate-600 mono">May 2025</span>
            </div>
          </div>
        </div>

        <!-- CERT 3: Python -->
        <div class="card p-0 overflow-hidden" style="border-radius: 4px">
          <div class="cert-img-placeholder">
            <img
              src="/src/assets/certificates/python.jpg"
              alt="Python Certificate"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-bold text-white text-sm">Programming in Python</h3>
              <span class="text-amber-400 text-xs">🏆</span>
            </div>
            <p class="text-xs text-slate-500 mono mb-3">Programming Hero</p>
            <div class="flex items-center justify-between">
              <span
                class="tech-tag"
                style="
                  color: #34d399;
                  border-color: rgba(52, 211, 153, 0.3);
                  background: rgba(52, 211, 153, 0.08);
                "
                >Python</span
              >
              <span class="text-xs text-slate-600 mono">Feb 2023</span>
            </div>
          </div>
        </div>

        <!-- CERT 4: Java -->
        <div class="card p-0 overflow-hidden" style="border-radius: 4px">
          <div class="cert-img-placeholder">
            <img
              src="/src/assets/certificates/java.jpg"
              alt="Java Certificate"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-bold text-white text-sm">Programming in Java</h3>
              <span class="text-amber-400 text-xs">🏆</span>
            </div>
            <p class="text-xs text-slate-500 mono mb-3">Programming Hero</p>
            <div class="flex items-center justify-between">
              <span
                class="tech-tag"
                style="
                  color: #fbbf24;
                  border-color: rgba(251, 191, 36, 0.3);
                  background: rgba(251, 191, 36, 0.08);
                "
                >Java</span
              >
              <span class="text-xs text-slate-600 mono">Jan 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
