import vite from "../assets/images/vite.svg";
import laravel from "../assets/images/laravel.svg";
import silantar from "../assets/images/silantar.png";
import chemaraya from "../assets/images/chemaraya.png";
import dewarupa from "../assets/images/dewarupa.png";
import itechpoliban from "../assets/images/itechpoliban.png";
import filament from "../assets/images/filament.svg";

const projects = [
  {
    id: 1,
    img: silantar,
    title: "Silantar",
    desc: "Silantar adalah platform yang dibangun untuk masyarakat bisa melaporkan masalah lingkungan sekitar ke pemerintahan yang bersangkutan.",
    techs: [
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        tech: "Next.js",
      },
      {
        imgTech: laravel,
        tech: "Laravel",
      },
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tech: "Tailwind CSS",
      },
    ],
    source: "https://github.com/Sangoveka-Team/Silantar-KMIPN-V",
    demo: "https://silantar-kmipn-v.vercel.app/",
  },
  {
    id: 2,
    img: chemaraya,
    title: "Chemaraya",
    desc: "Website yang berguna untuk memudahkan pencinta roti bakar chemaraya dengan fitur utama yang menyediakan informasi produk serta menghubungkan pengguna ke pihak ketiga yaitu Gojek Dan Grab.",
    techs: [
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        tech: "PHP",
      },
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tech: "Tailwind CSS",
      },
    ],
    source: "https://github.com/bhaktiramadhani/pbl-semester-3",
    demo: "https://chemaraya.live",
  },
  {
    id: 3,
    img: dewarupa,
    title: "Capstone Dewarupa - MSIB 6 MariBelajar",
    desc: "Project akhir dari kegiatan belajar selama MSIB 6 di PT MariBelajar Indonesia Cerdas yang saya buat bersama teman-teman adalah website yang memberikan pembelajaran dalam beberapa kategori yaitu Tutorial, Webinar, dan Blog",
    techs: [
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        tech: ".NET",
      },
    ],
    source: "https://github.com/bhaktiramadhani/Capstone-Dewarupa",
    demo: "#",
  },
  {
    id: 4,
    img: itechpoliban,
    title: "Komunitas iTech Poliban",
    desc: "Website yang dibuat untuk memperkenalkan komunitas iTech Poliban kepada seluruh mahasiswa",
    techs: [
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tech: "Tailwind CSS",
      },
      {
        imgTech: laravel,
        tech: "Laravel",
      },
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tech: "React.js",
      },
      {
        imgTech: filament,
        tech: "Filament",
      },
    ],
    source: "#",
    demo: "https://itechpoliban.com",
  },
];

const skills = [
  {
    name: "HTML",
    url: "https://www.w3schools.com/html/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    url: "https://www.w3schools.com/css/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    url: "https://www.javascript.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React.js",
    url: "https://react.dev/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    url: "https://reactnative.dev/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PHP",
    url: "https://www.php.net/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  { name: "Laravel", url: "https://laravel.com/", icon_url: laravel },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "VS Code",
    url: "https://code.visualstudio.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  { name: "Vite.js", url: "https://vitejs.dev/", icon_url: vite },
  {
    name: ".NET",
    url: "https://dotnet.microsoft.com/",
    icon_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Filament",
    url: "https://filament.dev/",
    icon_url: filament,
  },
];

const certificates = [
  {
    id: 1,
    title: "E-GOVERNMENT KMIPN V",
    image: "E-GOVERNMENT_BHAKTI_RAMADHANI.jpg",
  },
  {
    id: 2,
    title: "Junior Web Developer",
    image: "Sertifikat_BHAKTI_RAMADHANI_Junior_Web_Developer.jpg",
  },
  {
    id: 3,
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: "DICODING_Belajar_Membuat_Aplikasi_Web_dengan_React.jpg",
  },
  {
    id: 4,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    image: "DICODING_Belajar_Membuat_Front-End_Web_untuk_Pemula.jpg",
  },
  {
    id: 5,
    title: "Belajar Dasar Pemrograman JavaScript",
    image: "DICODING_Belajar_Dasar_Pemrograman_JavaScript.jpg",
  },
  {
    id: 6,
    title: "Microsoft Certified Power Platform Fundamentals",
    image: "Microsoft_Certified_Power_Platform_Fundamentals.jpg",
  },
  {
    id: 7,
    title: "Belajar Dasar Pemrograman Web",
    image: "DICODING_Belajar_Dasar_Pemrograman_Web.jpg",
  },
  {
    id: 8,
    title: "Certificate Kelulusan Studi Independen MariBelajar",
    image:
      "BHAKTI_RAMADHANI_Certificate_Kelulusan_Studi_Independen_MariBelajar.jpg",
  },
  {
    id: 9,
    title: "Kewirausahaan Digital Dasar",
    image: "Sertifikat_BHAKTI_RAMADHANI_Kewirausahaan_Digital_Dasar.jpg",
  },
  {
    id: 10,
    title: "Cloud Practitioner Essentials Belajar Dasar AWS Cloud",
    image: "DICODING_Cloud_Practitioner_Essentials_Belajar Dasar_AWS_Cloud.jpg",
  },
  {
    id: 11,
    title: "Kompetensi Pengembangan Aplikasi Web",
    image: "Sertifikat_Kompetensi_Pengembangan_Aplikasi_Web.jpg",
  },
  {
    id: 12,
    title: "Kompetensi Azure Fundamental",
    image: "Sertifikat_Kompetensi_Azure_Fundamental.jpg",
  },
  {
    id: 13,
    title: "Belajar Dasar Visualisasi Data",
    image: "DICODING_Belajar_Dasar_Visualisasi_Data.jpg",
  },
  {
    id: 14,
    title: "Belajar Dasar Manajemen Proyek",
    image: "DICODING_Belajar_Dasar_Manajemen_Proyek.jpg",
  },
  {
    id: 15,
    title: "Kepesertaan MSIB 6",
    image: "Sertifikat_Kepesertaan_MSIB_6.jpg",
  },
];

export { projects, skills, certificates };
