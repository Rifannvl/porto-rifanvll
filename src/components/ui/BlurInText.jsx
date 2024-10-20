import BlurIn from "@/components/ui/blur-in";
import Avatar from "@/assets/avatardemo.png";
import Image from "next/image";
import Link from "next/link";

export function BlurInText() {
  return (
    <div className="relative">
      <Link href="/" className="hover:[&_img]:scale-90">
        {/* <Image
          src={Avatar}
          alt="hero image"
          width={250}
          height={250}
          className="absolute rounded-full  p-1 left-45 top-0 object-cover z-10"
          //   className="rounded-full border p-1 transition-all mr-4 w-16 h-16 object-cover"
        /> */}
      </Link>
      {/* <img
        src={Avatar}
        alt="Deskripsi Gambar"
        className="mr-4 w-16 h-16 object-cover" // Atur ukuran dan gaya sesuai kebutuhan
      /> */}
      <BlurIn
        word={
          <span>
            RIFAN
            <br /> AFENDI
          </span>
        }
        className="font-extrabold text-6xl md:text-7xl lg:text-9xl text-black dark:text-white relative "
      />
    </div>
  );
}
