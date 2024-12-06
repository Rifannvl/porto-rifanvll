import React from "react";

export default function Certification() {
  function Card({ children, className }) {
    return (
      <div
        className={`flex flex-col  rounded-xl bg-neutral-100 border items-center justify-center text-xl px-10 text-center gap-3 ${className}`}
      >
        {children}
      </div>
    );
  }
  return (
    <div className="mt-10 mb-52">
      <div className="">
        <h2 className="text-5xl font-bold text-neutral-700">Certification</h2>
        <p>Certification I have obtained </p>
      </div>
      <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
        <a href="https://credsverse.com/credentials/7ef5499b-5be2-4087-aa0e-c43f90fc4067?preview=1">
          <Card className="flex-col items-center justify-center text-xl px-10 text-center gap-3">
            <img
              src="https://img.icons8.com/?size=100&id=103650&format=png&color=000000"
              alt="Website Development Icon"
              className="mx-auto w-20" // Sesuaikan ukuran sesuai kebutuhan
            />
            <p className="text-2xl text-neutral-800">Website Development</p>
            <p className="text-xs mx-auto max-w-80 text-start">
              Dapatkan keunggulan kompetitif dengan aplikasi web yang dibangun
              di atas teknologi terbaru. Kami menghadirkan performa tinggi,
              keamanan, dan skalabilitas untuk kebutuhan bisnis Anda.{" "}
            </p>
          </Card>
        </a>
      </div>
    </div>
  );
}
