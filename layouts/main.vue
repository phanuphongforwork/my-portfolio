<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <nuxt-link to="/">
            <a class="btn btn-ghost normal-case text-xl text-primary"
              >𝙈𝙞𝙘𝙧𝙤𝙬𝙖𝙫𝙚 ::</a
            ></nuxt-link
          >
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line></svg
              ></a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-github"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <div class="avatar online ml-2">
                <div class="w-8 rounded-full">
                  <img src="~/assets/images/profile1.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="bg-gradient-to-r from-gray-800 to-graybase-100 min-h-screen lg:px-40 px-0 lg:py-20 py-4"
      >
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 relative">
        <li class="mb-4">
          <a class="normal-case text-xl text-primary">𝙈𝙞𝙘𝙧𝙤𝙬𝙖𝙫𝙚 ::</a>
        </li>
        <!-- Sidebar content here -->
        <!-- <li>
          <a class="font-kanit font-bold" href="/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              /></svg
            >HOME</a
          >
        </li> -->
        <li>
          <a class="font-kanit font-bold"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >PROFILE</a
          >
        </li>

        <li>
          <a class="font-kanit font-bold"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-school"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <desc>
                Download more icon variants from
                https://tabler-icons.io/i/school
              </desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path></svg
            >EDUCATIONS</a
          >
        </li>

        <li>
          <a class="font-kanit font-bold"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-code"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <desc>
                Download more icon variants from https://tabler-icons.io/i/code
              </desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="7 8 3 12 7 16"></polyline>
              <polyline points="17 8 21 12 17 16"></polyline>
              <line x1="14" y1="4" x2="10" y2="20"></line></svg
            >SKILLS</a
          >
        </li>

        <li>
          <a class="font-kanit font-bold"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-device-laptop"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <desc>
                Download more icon variants from
                https://tabler-icons.io/i/device-laptop
              </desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="19" x2="21" y2="19"></line>
              <rect x="5" y="6" width="14" height="10" rx="1"></rect></svg
            >EXPERIENCES
          </a>
        </li>

        <div
          class="absolute inset-x-0 bottom-0 w-full grid grid-cols-3 lg:gap-2 gap-1 lg:hidden"
        >
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              ></path>
            </svg>
          </button>
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
          </button>
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              ></path>
            </svg>
          </button>
        </div>
        <!-- <div class="btn-group absolute inset-x-0 bottom-0 w-full flex flex-row">
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              ></path>
            </svg>
          </button>
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
              <circle cx="12" cy="12" r="3"></circle>
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
          </button>
          <button class="btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              ></path>
            </svg>
          </button>
        </div> -->
      </ul>
    </div>
  </div>
</template>
