"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        >
          <Image
            src={images[current]}
            alt={`Banner ${current + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
