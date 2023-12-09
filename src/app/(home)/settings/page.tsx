import getCurrentUser from "@/actions/getCurrentUser";

const SettingsPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <h1>{currentUser?.name}</h1>
      <p>{currentUser?.email}</p>
    </div>
  );
};

export default SettingsPage;
