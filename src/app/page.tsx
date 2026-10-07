"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AuthModal from "../components/AuthModal";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleOpenLogin = () => {
    setAuthMode("login");
    setIsAuthOpen(true);
  };

  const handleOpenRegister = () => {
    setAuthMode("register");
    setIsAuthOpen(true);
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Header onLogin={handleOpenLogin} onStart={handleOpenRegister} />
      <Hero onStartTrial={handleOpenRegister} />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </main>
  );
}