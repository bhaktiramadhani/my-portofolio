import vite from "../assets/images/vite.svg";
import laravel from "../assets/images/laravel.svg";
import silantar from "../assets/images/silantar.png";
import chemaraya from "../assets/images/chemaraya.png";
import dewarupa from "../assets/images/dewarupa.png";
import itechpoliban from "../assets/images/itechpoliban.png";
import filament from "../assets/images/filament.svg";
import e_government from "../assets/images/certificate/E-GOVERNMENT_BHAKTI_RAMADHANI.jpg";
import junior_web_developer from "../assets/images/certificate/Sertifikat_BHAKTI_RAMADHANI_Junior_Web_Developer.jpg";
import react_web_app from "../assets/images/certificate/DICODING_Belajar_Membuat_Aplikasi_Web_dengan_React.jpg";
import front_end_web from "../assets/images/certificate/DICODING_Belajar_Membuat_Front-End_Web_untuk_Pemula.jpg";
import js_programming from "../assets/images/certificate/DICODING_Belajar_Dasar_Pemrograman_JavaScript.jpg";
import power_platform from "../assets/images/certificate/Microsoft_Certified_Power_Platform_Fundamentals.jpg";
import web_programming from "../assets/images/certificate/DICODING_Belajar_Dasar_Pemrograman_Web.jpg";
import independent_study_certificate from "../assets/images/certificate/BHAKTI_RAMADHANI_Certificate_Kelulusan_Studi_Independen_MariBelajar.jpg";
import digital_entrepreneurship from "../assets/images/certificate/Sertifikat_BHAKTI_RAMADHANI_Kewirausahaan_Digital_Dasar.jpg";
import aws_cloud from "../assets/images/certificate/DICODING_Cloud_Practitioner_Essentials_Belajar_Dasar_AWS_Cloud.jpg";
import web_development_competency from "../assets/images/certificate/Sertifikat_Kompetensi_Pengembangan_Aplikasi_Web.jpg";
import azure_fundamental from "../assets/images/certificate/Sertifikat_Kompetensi_Azure_Fundamental.jpg";
import data_visualization from "../assets/images/certificate/DICODING_Belajar_Dasar_Visualisasi_Data.jpg";
import project_management from "../assets/images/certificate/DICODING_Belajar_Dasar_Manajemen_Proyek.jpg";
import msib_6 from "../assets/images/certificate/Sertifikat_Kepesertaan_MSIB_6.jpg";
import umkmsehati from "../assets/images/umkmsehati.png";
import bakunjangan from "../assets/images/bakunjangan.png";

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
    desc: "Project akhir MSIB 6 di PT MariBelajar Indonesia Cerdas, website yang memberikan pembelajaran dalam beberapa kategori yaitu Tutorial, Webinar, dan Blog",
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
  {
    id: 5,
    img: umkmsehati,
    title: "UMKM Sehati",
    desc: "Platform yang mendukung pengrajin lokal untuk mendigitalisasikan produknya ke masyarakat luas diluar jangkauan.",
    techs: [
      {
        imgTech: laravel,
        tech: "Laravel",
      },
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tech: "Tailwind CSS",
      },
      {
        imgTech: filament,
        tech: "Filament",
      },
    ],
    source: "#",
    demo: "https://umkmsehati.com",
  },
  {
    id: 6,
    img: bakunjangan,
    title: "Bakunjangan",
    desc: "Website yang berisi informasi-informasi pariwisata untuk memudahkan masyarakat mengetahui pariwisata yang ada disekitar.",
    techs: [
      {
        imgTech: laravel,
        tech: "Laravel",
      },
      {
        imgTech:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tech: "Tailwind CSS",
      },
      {
        imgTech: filament,
        tech: "Filament",
      },
    ],
    source: "#",
    demo: "https://bakunjangan.com",
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
    title: "E-GOVERNMENT",
    image: e_government,
  },
  {
    id: 2,
    title: "Junior Web Developer",
    image: junior_web_developer,
  },
  {
    id: 3,
    title: "Belajar Membuat Aplikasi Web dengan React",
    image: react_web_app,
  },
  {
    id: 4,
    title: "Belajar Membuat Front-End Web untuk Pemula",
    image: front_end_web,
  },
  {
    id: 5,
    title: "Belajar Dasar Pemrograman JavaScript",
    image: js_programming,
  },
  {
    id: 6,
    title: "Microsoft Certified Power Platform Fundamentals",
    image: power_platform,
  },
  {
    id: 7,
    title: "Belajar Dasar Pemrograman Web",
    image: web_programming,
  },
  {
    id: 8,
    title: "Certificate Kelulusan Studi Independen MariBelajar",
    image: independent_study_certificate,
  },
  {
    id: 9,
    title: "Kewirausahaan Digital Dasar",
    image: digital_entrepreneurship,
  },
  {
    id: 10,
    title: "Cloud Practitioner Essentials Belajar Dasar AWS Cloud",
    image: aws_cloud,
  },
  {
    id: 11,
    title: "Kompetensi Pengembangan Aplikasi Web",
    image: web_development_competency,
  },
  {
    id: 12,
    title: "Kompetensi Azure Fundamental",
    image: azure_fundamental,
  },
  {
    id: 13,
    title: "Belajar Dasar Visualisasi Data",
    image: data_visualization,
  },
  {
    id: 14,
    title: "Belajar Dasar Manajemen Proyek",
    image: project_management,
  },
  {
    id: 15,
    title: "Kepesertaan MSIB 6",
    image: msib_6,
  },
];

export { projects, skills, certificates };
