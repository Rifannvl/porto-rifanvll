import { MagicCard } from "@/components/ui/magic-card";

export function MagicCardDemo() {
  return (
    <>
      <div className=" mt-10 mb-52">
        <div className="mb-6">
          <h2 className="text-5xl font-bold text-neutral-700">Services</h2>
          <p>These services are what I can provide</p>
        </div>
        <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
          <MagicCard
            className="flex-col items-center justify-center text-xl px-10 text-center gap-3"
            gradientColor={"#7e95fc55"}
          >
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
          </MagicCard>
          <MagicCard
            className="flex-col items-center justify-center text-xl px-10 text-center gap-3"
            gradientColor={"#7e95fc55"}
          >
            <img
              src="https://img.icons8.com/?size=100&id=8Y6ohiJ337rc&format=png&color=000000"
              alt="Website Development Icon"
              className="mx-auto w-20 " // Sesuaikan ukuran sesuai kebutuhan
            />
            <p className="text-2xl text-neutral-800">Responsive Design</p>
            <p className="text-xs mx-auto max-w-80 text-start">
              Ciptakan pengalaman pengguna yang mulus dan intuitif, sehingga
              pengunjung Anda dapat menjelajah dengan nyaman, dimanapun mereka
              berada.
            </p>
          </MagicCard>
        </div>
      </div>
    </>
  );
}
