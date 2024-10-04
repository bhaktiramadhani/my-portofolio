import React, { useEffect, useState } from "react";
import MariBelajar from "../assets/images/maribelajar.png";

function ExperienceWrapper() {
  return (
    <section id="experience" className="mt-16 scroll-mt-6">
      <div className="w-full flex flex-col">
        <div className="space-y-2">
          <h2
            className="font-bold text-3xl md:text-4xl"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Experience
          </h2>
        </div>
        <div className="mt-10">
          {/* <ul className="flex flex-col gap-4">
            <li className="flex gap-6">
              <div className="w-10 h-10 md:w-20 md:h-20 rounded-full border-4 border-slate-300 overflow-hidden">
                <img
                  src={MariBelajar}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs md:text-base">Feb 2024 - Jun 2024</p>
                <p className="font-bold text-base md:text-xl">
                  Web & Mobile Developer
                </p>
                <ul>
                  <li>
                    - Membuat aplikasi mobile menggunakan Flutter dan Laravel
                  </li>
                  <li>
                    - Membuat aplikasi mobile menggunakan Flutter dan Laravel
                  </li>
                  <li>
                    - Membuat aplikasi mobile menggunakan Flutter dan Laravel
                  </li>
                </ul>
              </div>
            </li>
          </ul> */}

          <ol class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-10 ms-8">
              <span class="absolute flex items-center justify-center w-12 h-12 bg-green-200 rounded-full -start-6 ring-2 ring-white dark:ring-gray-900 dark:bg-green-900">
                <img src={MariBelajar} className="rounded-full" alt="" />
              </span>
              <h3 class="font-medium leading-tight">Personal Info</h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="mb-10 ms-8">
              <span class="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -start-6 ring-2 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Account Info</h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="mb-10 ms-8">
              <span class="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -start-6 ring-2 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Review</h3>
              <p class="text-sm">Step details here</p>
            </li>
            <li class="ms-8">
              <span class="absolute flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full -start-6 ring-2 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Confirmation</h3>
              <p class="text-sm">Step details here</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ExperienceWrapper;
