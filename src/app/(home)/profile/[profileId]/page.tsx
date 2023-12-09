import prisma from "@/libs/prisma";
import getUserById from "@/actions/getUserById";

const ProfilePage = async ({
  params: { profileId },
}: {
  params: { profileId: string };
}) => {
  const user = await getUserById(profileId);

  return (
    <div>
      <h1 className="text-3xl">{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default ProfilePage;
