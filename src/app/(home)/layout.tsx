import Menu from "@/app/(home)/components/Menu";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row bg-gray-100">
      <Menu />
      {children}
    </main>
  );
};

export default HomeLayout;
