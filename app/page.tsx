import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto max-h-screen">
        <div className="sub-container max-w-[496px] ">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-5 h-14 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-10 flex justify-between items-center">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 MediLink
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/home-page.webp"
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[50%] "
      />
    </div>
  );
}
