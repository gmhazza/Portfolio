<template>
  <section id="projects" class="py-24 relative" style="background: rgba(0, 0, 0, 0.2)">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-16">
        <span class="section-number">// 03</span>
        <h2 class="section-title">Projects</h2>
        <p class="text-slate-400 mt-3 max-w-xl">
          A collection of projects spanning game development, web, desktop applications, and
          embedded systems.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2)"
            >
              🎮
            </div>
            <a
              href="https://github.com/gmhazza/Car-Universe"
              target="_blank"
              rel="noopener"
              class="text-slate-600 hover:text-sky-400 transition-colors"
              title="GitHub Repo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
          <h3 class="font-bold text-white text-base mb-2">Car Universe</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            Level-based open-world car simulation game for mobile and desktop. Custom physics and
            core mechanics written from scratch in GDScript.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag">Godot</span>
            <span class="tech-tag">GDScript</span>
            <span class="tech-tag">Game Dev</span>
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>Jun – Jul 2025</span>
            <a
              href="https://github.com/gmhazza/Car-Universe"
              target="_blank"
              class="text-sky-400 hover:underline"
              >View Repo →</a
            >
          </div>
        </div>
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.2)"
            >
              🚗
            </div>
          </div>
          <h3 class="font-bold text-white text-base mb-2">Smart Car Parking System</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            Embedded system using Arduino and IR sensors to detect garage occupancy and manage car
            entry in real time.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="tech-tag"
              style="
                color: #fbbf24;
                border-color: rgba(251, 191, 36, 0.3);
                background: rgba(251, 191, 36, 0.08);
              "
              >Arduino</span
            >
            <span
              class="tech-tag"
              style="
                color: #fbbf24;
                border-color: rgba(251, 191, 36, 0.3);
                background: rgba(251, 191, 36, 0.08);
              "
              >C</span
            >
            <span
              class="tech-tag"
              style="
                color: #fbbf24;
                border-color: rgba(251, 191, 36, 0.3);
                background: rgba(251, 191, 36, 0.08);
              "
              >IR Sensors</span
            >
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>May 2026</span>
          </div>
        </div>
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.2)"
            >
              📥
            </div>
            <a
              href="https://github.com/gmhazza/Youtube-Video-Downloader-Android"
              target="_blank"
              rel="noopener"
              class="text-slate-600 hover:text-sky-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
          <h3 class="font-bold text-white text-base mb-2">YouTube Video Downloader</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            GUI application to download YouTube videos in multiple quality formats, saving as MPEG.
            Built with the Kivy framework.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="tech-tag"
              style="
                color: #34d399;
                border-color: rgba(52, 211, 153, 0.3);
                background: rgba(52, 211, 153, 0.08);
              "
              >Python</span
            >
            <span
              class="tech-tag"
              style="
                color: #34d399;
                border-color: rgba(52, 211, 153, 0.3);
                background: rgba(52, 211, 153, 0.08);
              "
              >Kivy</span
            >
            <span
              class="tech-tag"
              style="
                color: #34d399;
                border-color: rgba(52, 211, 153, 0.3);
                background: rgba(52, 211, 153, 0.08);
              "
              >GUI</span
            >
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>Oct 2025</span>
            <a
              href="https://github.com/gmhazza/Youtube-Video-Downloader-Android"
              target="_blank"
              class="text-sky-400 hover:underline"
              >View Repo →</a
            >
          </div>
        </div>
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="
                background: rgba(129, 140, 248, 0.1);
                border: 1px solid rgba(129, 140, 248, 0.2);
              "
            >
              🚌
            </div>
            <a
              href="https://github.com/gmhazza/Bus-Reservation-System"
              target="_blank"
              rel="noopener"
              class="text-slate-600 hover:text-sky-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
          <h3 class="font-bold text-white text-base mb-2">Bus Reservation System</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            Desktop GUI application for bus seat reservation, demonstrating Java Swing and AWT
            framework proficiency.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag tech-tag-purple">Java</span>
            <span class="tech-tag tech-tag-purple">Swing</span>
            <span class="tech-tag tech-tag-purple">AWT</span>
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>Mar 2026</span>
            <a
              href="https://github.com/gmhazza/Bus-Reservation-System"
              target="_blank"
              class="text-sky-400 hover:underline"
              >View Repo →</a
            >
          </div>
        </div>
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.2)"
            >
              🏦
            </div>
            <a
              href="https://github.com/gmhazza/Banking-System"
              target="_blank"
              rel="noopener"
              class="text-slate-600 hover:text-sky-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
          <h3 class="font-bold text-white text-base mb-2">Banking System</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            CLI banking application using vectors, file streams and math libraries, showcasing
            strong C++ fundamentals.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag">C++</span>
            <span class="tech-tag">CLI</span>
            <span class="tech-tag">File I/O</span>
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>Dec 2025 – Jan 2026</span>
            <a
              href="https://github.com/gmhazza/Banking-System"
              target="_blank"
              class="text-sky-400 hover:underline"
              >View Repo →</a
            >
          </div>
        </div>
        <div class="card p-6 flex flex-col" style="border-radius: 4px">
          <div class="flex items-start justify-between mb-4">
            <div
              class="w-10 h-10 rounded flex items-center justify-center text-xl"
              style="
                background: rgba(244, 114, 182, 0.1);
                border: 1px solid rgba(244, 114, 182, 0.2);
              "
            >
              🛍️
            </div>
            <a
              href="https://github.com/gmhazza/Perfume-Lounge-Website"
              target="_blank"
              rel="noopener"
              class="text-slate-600 hover:text-sky-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
          </div>
          <h3 class="font-bold text-white text-base mb-2">Perfume Lounge</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
            Responsive e-commerce website for a perfume store with clean UI, built with Bootstrap
            and raw CSS, managed via Git.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              class="tech-tag"
              style="
                color: #f472b6;
                border-color: rgba(244, 114, 182, 0.3);
                background: rgba(244, 114, 182, 0.08);
              "
              >HTML</span
            >
            <span
              class="tech-tag"
              style="
                color: #f472b6;
                border-color: rgba(244, 114, 182, 0.3);
                background: rgba(244, 114, 182, 0.08);
              "
              >JavaScript</span
            >
            <span
              class="tech-tag"
              style="
                color: #f472b6;
                border-color: rgba(244, 114, 182, 0.3);
                background: rgba(244, 114, 182, 0.08);
              "
              >Bootstrap</span
            >
          </div>
          <div
            class="flex items-center justify-between text-xs text-slate-600 mono pt-4 border-t border-slate-700/50"
          >
            <span>Jan 2026</span>
            <a
              href="https://github.com/gmhazza/Perfume-Lounge-Website"
              target="_blank"
              class="text-sky-400 hover:underline"
              >View Repo →</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
