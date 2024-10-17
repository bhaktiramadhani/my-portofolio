import React, { useEffect, useState } from "react";
import MariBelajar from "../assets/images/maribelajar.png";
import logoLLDIKTI from "../assets/images/logo-LLDIKTI.png";
import logoMaribelajar from "../assets/images/logo-maribelajar.png";

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
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="border-2 border-slate-500 rounded-full">
                  <img
                    src={logoLLDIKTI}
                    alt="Logo LLDIKTI Wilayah XI"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <div className="timeline-end mb-10 ml-3">
                <time>Sep 2024 - Sekarang</time>
                <div className="text-lg font-black">
                  IT Internship at LLDIKTI Wilayah XI
                </div>
                <ul className="ml-2">
                  <li>
                    - Mengembangkan fitur-fitur baru pada project menggunakan
                    CodeIgniter.
                  </li>
                  <li>
                    - Bekerja sama dengan tim untuk menyelesaikan project.
                  </li>
                </ul>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="border-2 border-slate-500 rounded-full">
                  <img
                    src={logoMaribelajar}
                    alt="Logo Mari Belajar"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <div className="timeline-end mb-0 ml-3">
                <time>Feb 2024 - Jun 2024</time>
                <div className="text-lg font-black">
                  Web & Mobile Developer at MSIB 6 MariBelajar
                </div>
                <ul className="ml-2 mt-2">
                  <li>
                    - Bekerja sama dengan tim untuk menyelesaikan pengerjaan
                    tugas dan proyek.
                  </li>
                  <li>
                    - Merancang dan mengimplementasikan penggunaan Microsoft
                    Power Platform.
                  </li>
                  <li>
                    - Membangun dan merancang website menggunakan Asp.NET yang
                    menerapkan konsep MVC.
                  </li>
                </ul>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceWrapper;
