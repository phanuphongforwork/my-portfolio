<template>
  <div class="grid grid-cols-1">
    <div class="stats shadow flex flex-col lg:flex-row">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="~/assets/images/profile1.jpg" />
            </div>
          </div>
        </div>
        <div class="stat-value">Phanuphong</div>
        <div class="stat-value">Machai.</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Date of Birth : 09 December 1999</div>
        <div class="stat-value text-primary">{{ age }}</div>
        <div class="stat-desc">Years old.</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">Apply for</div>
        <div class="stat-value lg:text-2xl text-2xl text-secondary">
          Full Stack Developer.
        </div>
        <!-- <div class="stat-desc"></div> -->
      </div>
    </div>
  </div>
  <div class="mt-4 flex lg:flex-row flex-col w-full gap-4">
    <div class="lg:w-2/5 w-full card bg-base-100 shadow">
      <div class="card-body">
        <div class="stats stats-vertical">
          <div class="stat">
            <div class="stat-title">Education</div>
            <div class="stat-value text-primary flex flex-col lg:flex-row">
              <div>Information</div>
              <div>Technology</div>
            </div>
            <div class="stat-desc flex flex-col lg:flex-row">
              <div>Bachelor of Science,</div>

              <div>Thonburi University, Bangkok THAILAND.</div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title">Working Experience</div>
            <div class="stat-value text-secondary">{{ workYear }}</div>
            <div class="stat-desc">Years.</div>
          </div>

          <div class="stat">
            <div class="stat-title">Frameworks</div>
            <div class="flex flex-wrap gap-4 mt-4">
              <div class="badge">NuxtJS</div>
              <div class="badge badge-primary">NestJS</div>
              <div class="badge badge-secondary">AdonisJS</div>
              <div class="badge badge-accent">TailwindCSS</div>
              <div class="badge badge-ghost">DaisyUI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card lg:card-side bg-base-100 shadow-xl lg:w-3/5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.527261341468!2d100.10478179279363!3d13.807347708587761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2ef3ad5d3d313%3A0xf3ef753344f69338!2z4Lin4Lix4LiU4LiY4Lij4Lij4Lih4Lio4Liy4Lil4Liy!5e0!3m2!1sth!2sth!4v1654884464094!5m2!1sth!2sth"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="card-body">
        <div class="card-title text-primary font-bold">Adress</div>
        <p class="font-bold text-lg">
          110/09 𝙏𝙝𝙖𝙢𝙢𝙖𝙨𝙖𝙡𝙖, 𝙈𝙪𝙖𝙣𝙜, 𝙉𝙖𝙠𝙝𝙤𝙣𝙥𝙖𝙩𝙝𝙤𝙢, 73000
        </p>

        <div class="divider">Contacts</div>
        <div class="stats stats-vertical">
          <div class="stat">
            <div class="stat-title">Mobile</div>
            <div class="stat-value lg:text-2xl text-2xl">085-4293632</div>
          </div>

          <div class="stat">
            <div class="stat-title">E-mail</div>
            <div class="stat-value lg:text-2xl text-base">
              Phanuphog.forwork@gmail.com
            </div>
          </div>
          <div class="stat">
            <div class="stat-title">Line</div>
            <div class="stat-value lg:text-2xl text-base">jr.wave</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const age = ref(new Date().getFullYear() - 1999);
const workYear = ref(new Date().getFullYear() - 2020);
</script>
