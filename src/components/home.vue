<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20">
    <div
      class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 70%)"
    ></div>

    <div class="max-w-6xl mx-auto px-6 w-full py-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="hero-tag">// Software Engineer & Game Developer</span>
          <h1 class="hero-name">
            <span class="text-white">Muhammad</span><br />
            <span class="text-sky-400 glow-blue">Hazza</span><br />
            <span class="text-white">Shabir</span>
          </h1>
          <p class="hero-sub mt-4 mb-6">
            <span class="text-sky-400">~</span> BSc Software Engineering @ IIUI &nbsp;|&nbsp;
            Founder of WnB Devs
          </p>
          <p
            class="hero-desc text-slate-400 leading-relaxed max-w-lg mb-8"
            style="font-size: 0.95rem"
          >
            Building games, web apps and embedded systems with 3+ years of hands-on experience.
            Passionate about clean code and growing Pakistan's indie game development scene.
          </p>
          <div class="flex flex-wrap gap-4">
            <RouterLink to="/projects" class="cta-btn cta-btn-fill">View Projects</RouterLink>
            <RouterLink to="/about" class="cta-btn">About Me</RouterLink>
          </div>
          <div class="flex flex-wrap gap-6 mt-12">
            <div>
              <div
                class="text-2xl font-bold text-sky-400"
                style="font-family: 'Space Mono', monospace"
              >
                3+
              </div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-1">Years Dev</div>
            </div>
            <div class="w-px bg-slate-700"></div>
            <div>
              <div
                class="text-2xl font-bold text-indigo-400"
                style="font-family: 'Space Mono', monospace"
              >
                13+
              </div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-1">Projects</div>
            </div>
            <div class="w-px bg-slate-700"></div>
            <div>
              <div
                class="text-2xl font-bold text-amber-400"
                style="font-family: 'Space Mono', monospace"
              >
                4
              </div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-1">Certificates</div>
            </div>
            <div class="w-px bg-slate-700"></div>
            <div>
              <div
                class="text-2xl font-bold text-emerald-400"
                style="font-family: 'Space Mono', monospace"
              >
                1350
              </div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-1">Chess Rating</div>
            </div>
          </div>
        </div>
        <div class="flex justify-center lg:justify-end">
          <div class="float-badge relative">
            <div class="card glow-box p-6 w-72" style="border-radius: 4px">
              <div class="flex items-center gap-3 mb-5">
                <div
                  class="w-12 h-12 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold text-lg"
                >
                  MH
                </div>
                <div>
                  <div class="font-bold text-white text-sm">Hazza Shabir</div>
                  <div class="text-xs text-slate-500 mono">@gmhazza</div>
                </div>
                <div class="ml-auto w-2 h-2 rounded-full bg-emerald-400" title="Available"></div>
              </div>
              <div class="space-y-2 mb-5">
                <div class="flex items-center gap-2 text-xs text-slate-400 mono">
                  <span class="text-sky-400">▸</span> Godot Engine
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-400 mono">
                  <span class="text-indigo-400">▸</span> Full-Stack Web Dev
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-400 mono">
                  <span class="text-amber-400">▸</span> C++ / Python / Java
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-400 mono">
                  <span class="text-emerald-400">▸</span> Embedded Systems
                </div>
              </div>
              <div class="border-t border-slate-700/50 pt-4 text-xs text-slate-500 mono">
                📍 Islamabad, Pakistan &nbsp;·&nbsp; 🇵🇰
              </div>
            </div>
            <div
              class="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-sky-400/40"
            ></div>
            <div
              class="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-indigo-400/40"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
