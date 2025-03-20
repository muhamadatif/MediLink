import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({ params }: SearchParamProps) {
  const { userId } = await params;
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto max-h-screen">
        <div className="sub-container max-w-[560px] ">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-5 h-14 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id ?? ""}
          />

          <p className="copyright mt-10 py-12">© 2025 MediLink</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment.webp"
        alt="appointment"
        height={1000}
        width={1000}
        className="side-img max-w-[390px] bg-bottom "
      />
    </div>
  );
}
