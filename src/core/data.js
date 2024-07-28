import vite from "../assets/images/vite.svg";
import laravel from "../assets/images/laravel.svg";
import silantar from "../assets/images/silantar.png";
import chemaraya from "../assets/images/chemaraya.png";
import dewarupa from "../assets/images/dewarupa.png";

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
];

export { projects, skills };
