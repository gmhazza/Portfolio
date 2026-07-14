<script setup>
</script>

<template>
  <section id="experience" class="py-24 relative" style="background: rgba(0, 0, 0, 0.2)">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-16">
        <span class="section-number">// 01</span>
        <h2 class="section-title">Experience</h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-16">
        <div class="lg:col-span-1 space-y-6">
          <p class="text-slate-300 leading-relaxed text-base">
            A quick look at where I've worked, what I built, and the impact I made along the way.
          </p>
          <p class="text-slate-400 leading-relaxed text-sm">
            From solo startup work to freelance gigs, here's the hands-on experience behind the
            projects.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="stat-box">
              <div class="text-3xl font-bold text-sky-400 mono">2</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">Role</div>
            </div>
            <div class="stat-box">
              <div class="text-3xl font-bold text-indigo-400 mono">1</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">Year Active</div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2 space-y-6">
          <div
            class="card p-6"
            style="border-radius: 4px"
          >
            <div class="flex items-start gap-4">
              <div
                class="timeline-dot mt-2"
                :style="{
                  background: `#38bdf8`,
                  boxShadow: `0 0 10px #38bdf8`,
                }"
              ></div>

              <div class="flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 class="text-white font-bold text-base">Full Stack Web Developer - Intern</h3>
                    <div class="text-sky-400 text-sm font-medium mt-1">AI Lab 99</div>
                  </div>
                  <span class="text-slate-500 text-xs mono whitespace-nowrap mt-1">
                    July 2026 - September 2026
                  </span>
                </div>

                <p class="text-slate-400 text-sm leading-relaxed mt-3">
                  Web Development Internship
                </p>

                <ul class="mt-3 space-y-1.5">
                  <li class="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span class="text-sky-400 mono">›</span><span>Forntend Web development using VUE</span>
                  </li>
                  <li class="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span class="text-sky-400 mono">›</span><span>Backend Web development using SUPABSE</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs mono px-2 py-1 rounded" style="background: rgba(56, 189, 248, 0.1); color: var(--accent, #38bdf8)">
                    VUE
                  </span>
                  <span class="text-xs mono px-2 py-1 rounded" style="background: rgba(56, 189, 248, 0.1); color: var(--accent, #38bdf8)">
                    SUPABASE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card p-6"
            style="border-radius: 4px"
          >
            <div class="flex items-start gap-4">
              <div
                class="timeline-dot mt-2"
                :style="{
                  background: `#fbbf24`,
                  boxShadow: `0 0 10px #fbbf24`,
                }"
              ></div>

              <div class="flex-1">
                <div class="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 class="text-white font-bold text-base">Founder</h3>
                    <div class="text-sky-400 text-sm font-medium mt-1">WnB Devs</div>
                  </div>
                  <span class="text-slate-500 text-xs mono whitespace-nowrap mt-1">
                    April 2026 - Present
                  </span>
                </div>

                <p class="text-slate-400 text-sm leading-relaxed mt-3">
                  Startup to grow game development in Pakistan
                </p>

                <ul class="mt-3 space-y-1.5">
                  <li class="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span class="text-sky-400 mono">›</span><span>Game Designing</span>
                  </li>
                  <li class="text-slate-400 text-xs leading-relaxed flex gap-2">
                    <span class="text-sky-400 mono">›</span><span>Logic Building</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs mono px-2 py-1 rounded" style="background: rgba(56, 189, 248, 0.1); color: var(--accent, #38bdf8)">
                    Godot
                  </span>
                  <span class="text-xs mono px-2 py-1 rounded" style="background: rgba(56, 189, 248, 0.1); color: var(--accent, #38bdf8)">
                    Blender
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
