import React from "react";
import MariBelajar from "../assets/images/maribelajar.png";
import logoLLDIKTI from "../assets/images/logo-LLDIKTI.png";
import logoMaribelajar from "../assets/images/logo-maribelajar.png";
import logoBarito from "../assets/images/logo-barito.png";
import logoPPA from '../assets/images/ppa.jpeg';

function calculateExperience(start, end = new Date()) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  // Jika bulan negatif, pinjam dari tahun
  if (months < 0) {
    years--;
    months += 12;
  }

  // Pastikan tidak negatif
  if (years < 0) years = 0;
  if (months < 0) months = 0;

  if (years > 0 && months > 0) {
    return `${years} tahun ${months} bulan`;
  } else if (years > 0) {
    return `${years} tahun`;
  } else {
    return `${months} bulan`;
  }
}

const experiences = [
  {
    logo: logoPPA,
    period: "Januari 2026 - Sekarang",
    company: "PT PUTRA PERKASA ABADI - SITE BIB",
    role: "Data Processor & Web Developer SHE",
    start: "2026-01-16",
    end: null,
    details: [
  "Mengelola dan merapikan data operasional",
  "Mengembangkan sistem berbasis web untuk mendukung digitalisasi proses",
  "Mendukung kebutuhan operasional melalui pengelolaan data dan sistem",
],
  },
  {
    logo: logoBarito,
    period: "Maret 2025 - Januari 2026",
    company: "PT BARITO BERLIAN MOTOR - MITSUBISHI",
    role: "IT Programmer",
    start: "2025-03-01",
    end: "2026-01-10",
    details: [
      "Membangun aplikasi Absensi Karyawan (React Native) dengan validasi lokasi real-time dan deteksi fake GPS, yang saat ini digunakan oleh lebih dari 10 karyawan",
      "Mengembangkan sistem Monitoring Mobil menggunakan Laravel serta integrasi Automatic License Plate Recognition (ALPR) berbasis Python, sistem ini sudah digunakan oleh security di 3 cabang tempat",
      "Mengembangkan sistem Rekrutmen Test menggunakan Laravel Livewire, dengan alur digitalisasi form kandidat, pengerjaan soal test dengan waktu realtime, dan hasil akhir nilai test yang akan digunakan untuk tahap wawancara",
      "Melakukan troubleshooting perangkat komputer, instalasi software/hardware, pemeliharaan sistem, serta instalasi dan konfigurasi CCTV",
    ],
  },
  {
    logo: logoLLDIKTI,
    period: "September 2024 - Desember 2024",
    company: "Lembaga Layanan Pendidikan Tinggi (LLDIKTI) Wilayah XI",
    role: "Magang IT dan Staff Administrasi",
    start: "2024-09-09",
    end: "2024-12-27",
    details: [
      "Mengembangkan fitur-fitur baru pada project menggunakan CodeIgniter.",
      "Bertanggung jawab terhadap pengelolaan laporan kehadiran pegawai bulanan.",
      "Mengelola data dosen perguruan tinggi swasta di wilayah kalimantan.",
    ],
  },
  {
    logo: logoMaribelajar,
    period: "Februari 2024 - Juni 2024",
    company: "MSIB 6 MariBelajar",
    role: "Web & Mobile Developer",
    start: "2024-02-01",
    end: "2024-06-30",
    details: [
      "Bekerja sama dengan tim untuk menyelesaikan pengerjaan tugas dan proyek.",
      "Merancang dan mengimplementasikan penggunaan Microsoft Power Platform.",
      "Membangun dan merancang website menggunakan Asp.NET yang menerapkan konsep MVC.",
    ],
  },
];

function ExperienceWrapper() {
  return (
    <section id="experience" className="mt-16 scroll-mt-20">
      <div className="w-full flex flex-col">
        <div className="space-y-2">
          <h2
            className="font-bold text-3xl md:text-4xl dark:text-white"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Experience
          </h2>
        </div>
        <div className="mt-10">
          <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical dark:text-white">
            {experiences.map((exp, index) => (
              <li key={index}>
                <div className="timeline-middle">
                  <div className="border-2 dark:border-white rounded-full">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                </div>

                {/* Card dengan shadow */}
                <div className="timeline-end mb-10 ml-3">
                  <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-black dark:border-none  p-4 transition-colors duration-300">
                    <time className="text-sm opacity-80">
                      {exp.period} • {calculateExperience(exp.start, exp.end)}
                    </time>
                    <div className="text-lg font-black mt-1">{exp.company}</div>
                    <div className="text-lg font-black">{exp.role}</div>
                    <ul className="ml-2 mt-2 list-disc list-inside space-y-1">
                      {exp.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExperienceWrapper;
