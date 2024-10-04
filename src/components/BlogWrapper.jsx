import axios from "axios";
import React, { useEffect, useState } from "react";

function BlogWrapper() {
  const [blogs, setBlogs] = useState([]);
  return (
    <section id="blog" className="mt-16 scroll-mt-6">
      <div className="w-full flex items-center justify-between">
        <div className="space-y-2">
          <h2
            className="font-bold text-3xl md:text-4xl"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Blog
          </h2>
          <p
            className="text-neutral-500 text-sm md:text-base"
            data-aos="fade"
            data-aos-duration="500"
          >
            Pengetahuan, Tips dan Trik yang saya tuliskan dalam sebuah{" "}
            <b className="text-[#555555]">Blog</b>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </div>
    </section>
  );
}

export default BlogWrapper;
