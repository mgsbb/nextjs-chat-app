import Image from "next/image";
import { User } from "@prisma/client";

const Avatar = ({ src }: { src: User["image"] }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
};

export default Avatar;
