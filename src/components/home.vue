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
          <span class="hero-tag">// Software Engineers</span>
          <h1 class="hero-name">
            <span class="text-white">Muhammad</span><br />
            <span class="text-sky-400 glow-blue">Hazza</span><br />
            <span class="text-white">Shabir</span>
          </h1>
          <p class="hero-sub mt-4 mb-6">
            <span class="text-sky-400">~</span> BSc Software Engineering @ <a href="https://iiui.edu.pk" target="_blank" class="text-sky-400">IIUI</a> &nbsp;|&nbsp;
            Founder of <a href="https://wnb-devs.vercel.app" target="_blank" class="text-sky-400">WnB Devs</a>
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
                30+
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
                <div class="w-12 h-12 rounded-full overflow-hidden bg-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold text-lg">
                  <img class="w-full h-full object-cover" src="https://instagram.fisb6-2.fna.fbcdn.net/v/t51.82787-19/792909558_18066826955774715_1823104043325886612_n.jpg?_nc_cat=100&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=MnjfH2hWpLYQ7kNvwF9h7xA&_nc_oc=Adodw_3FxWek_OYGpWM58K6dSNAglaNkOiLflSy-zZTI9kjUMqyIlrXWUklh_EXJBns&_nc_zt=24&_nc_ht=instagram.fisb6-2.fna&_nc_gid=upKYBnY_Q69LLLQZtfaqhQ&_nc_ss=7b2a8&oh=00_AQOZ6fAK8DJvdb4z1-lMs4LoqsC9lwDEik-qibKN7HI3yA&oe=6AC6F456" alt="Profile">
                </div>
                <div>
                  <div class="font-bold text-white text-sm">Hazza Shabir</div>
                  <div class="text-xs text-slate-500 mono">@mhazzashabir</div>
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
