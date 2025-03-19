import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container  ">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10 ">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-5 h-14 w-fit"
          />

          {user && <RegisterForm user={user} />}
          <p className="copyright py-12">© 2025 MediLink</p>
        </div>
      </section>
      <Image
        src="/assets/images/register.webp"
        alt="patient"
        height={1000}
        width={1000}
        className="side-img w-[40%] "
      />
    </div>
  );
};

export default Register;
