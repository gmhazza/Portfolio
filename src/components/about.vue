<template>
  <!-- ABOUT -->
  <section id="about" class="py-24 relative" style="background: rgba(0, 0, 0, 0.2)">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-16">
        <span class="section-number">// 05</span>
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- LEFT: Bio + Timeline -->
        <div class="space-y-8">
          <div>
            <p class="text-slate-300 leading-relaxed text-base">
              I'm a 19-year-old Software Engineering student at
              <a href="https://iiui.edu.pk" class="text-sky-400">Ibadat International University</a
              >, Islamabad, with over 3 years of hands-on experience in game development. I founded
              <a href="https://wnb-devs.vercel.app" class="text-sky-400">WnB Devs</a> a solo,
              non-profit game development startup to help grow Pakistan's indie game community
              through the Godot engine.
            </p>
          </div>
          <div class="">
            <p class="text-slate-400 leading-relaxed text-sm">
              Beyond games, I enjoy building across the full stack: web apps, desktop GUIs, CLI
              tools, and embedded systems. I'm driven by curiosity if there's a problem, I want to
              build a solution for it, regardless of the language or platform.
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-5 mt-8">
            <h3 class="text-xs font-bold uppercase tracking-widest text-sky-400 mono mb-6">
              Education Timeline
            </h3>

            <div class="flex gap-4">
              <div class="timeline-dot mt-1"></div>
              <div>
                <div class="text-white font-bold text-sm">BSc Software Engineering</div>
                <div class="text-slate-500 text-xs mono mt-1">
                  Ibadat International University · Oct 2025 – Present
                </div>
                <div class="text-slate-400 text-xs mt-2">
                  Software design, programming, web & game development.
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="timeline-dot mt-1"
                style="background: var(--accent2); box-shadow: 0 0 10px var(--accent2)"
              ></div>
              <div>
                <div class="text-white font-bold text-sm">
                  Intermediate in Computer Sciences (ICS)
                </div>
                <div class="text-slate-500 text-xs mono mt-1">
                  Bahria College Anchorage · Aug 2023 – Jun 2025 · Grade A
                </div>
                <div class="text-slate-400 text-xs mt-2">
                  Web development foundations, game design basics, logic building.
                </div>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="timeline-dot mt-1"
                style="background: var(--gold); box-shadow: 0 0 10px var(--gold)"
              ></div>
              <div>
                <div class="text-white font-bold text-sm">Matriculation</div>
                <div class="text-slate-500 text-xs mono mt-1">
                  Bahria College Anchorage · Aug 2021 – Jun 2023 · Grade A
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Stats + Contact -->
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="stat-box">
              <div class="text-3xl font-bold text-sky-400 mono">3+</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">
                Years in Game Dev
              </div>
            </div>
            <div class="stat-box">
              <div class="text-3xl font-bold text-indigo-400 mono">13+</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">
                Projects Built
              </div>
            </div>
            <div class="stat-box">
              <div class="text-3xl font-bold text-amber-400 mono">4</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">
                Certifications
              </div>
            </div>
            <div class="stat-box">
              <div class="text-3xl font-bold text-emerald-400 mono">1350</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest mt-2">
                Chess Rapid Rating
              </div>
            </div>
          </div>

          <!-- Interests -->
          <div class="card p-5" style="border-radius: 4px">
            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 mono mb-4">
              Interests & Hobbies
            </h4>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div>
                  <div class="text-white text-sm font-medium">Chess</div>
                  <div class="text-xs text-slate-500">
                    1350 Rapid Rating · Strategic thinking & decision-making
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div>
                  <div class="text-white text-sm font-medium">Esports</div>
                  <div class="text-xs text-slate-500">
                    Passionate competitive gamer · Aspiring IGL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Contact -->
          <div class="card p-5" style="border-radius: 4px">
            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 mono mb-4">
              Get In Touch
            </h4>
            <div class="space-y-2 text-sm">
              <a
                href="mailto:mhazzashabir@gmail.com"
                class="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <span class="text-sky-400 mono text-xs">@</span> mhazzashabir@gmail.com
              </a>
              <a
                href="https://wa.me/923155497354"
                target="_blank"
                class="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <span class="text-emerald-400 mono text-xs">📱</span> +92 315 5497354
              </a>
              <a
                href="https://linkedin.com/in/muhammad-hazza-shabir-3991b0387"
                target="_blank"
                class="flex items-center gap-3 text-slate-400 hover:text-sky-400 transition-colors"
              >
                <span class="text-sky-400 mono text-xs">in</span> muhammad-hazza-shabir
              </a>
              <a
                href="https://github.com/gmhazza"
                target="_blank"
                class="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <span class="text-slate-400 mono text-xs">gh</span> gmhazza
              </a>
              <a
                href="https://instagram.com/mhazzashabir"
                target="_blank"
                class="flex items-center gap-3 text-slate-400 hover:text-pink-400 transition-colors"
              >
                <span class="text-pink-400 mono text-xs">ig</span> @mhazzashabir
              </a>
            </div>
          </div>

          <div class="card p-5" style="border-radius: 4px">
            <h4 class="text-xs font-bold uppercase tracking-widest text-slate-500 mono mb-4">
              Download my CV
            </h4>
            <a href="/public/cv.pdf" class="cta-btn cta-btn-fill" download>Download</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
