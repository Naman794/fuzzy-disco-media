import React from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatePresence, motion } from "motion/react";

const AnimatedOutlet = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  );
};

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Header />
      <main className="flex-grow pt-20 overflow-hidden">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  );
}
