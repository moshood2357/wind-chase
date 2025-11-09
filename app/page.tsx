"use client";

// import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Project from "@/components/project";
import Contacts from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="contact"><Contacts /></section>
      <Footer />
    </main>
  );
}
