import Image from "next/image";
import PendingApproval from "../../public/pending.png";

export default function PendingApplication() {
  return (
    <div className="mx-auto text-center font-poppins mt-20">
      <Image
        src={PendingApproval}
        alt="pending approval image"
        // width={450}
        // height={360}
        layout="responsive"
      />
      <h1 className="text-xl font-bold">
        You application is in review. Please be patient
      </h1>
    </div>
  );
}
