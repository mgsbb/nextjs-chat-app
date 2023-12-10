import Menu from "@/app/(home)/components/Menu";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-row bg-gray-100">
      <Menu />
      <div className="w-full flex-grow">{children}</div>
    </main>
  );
};

export default HomeLayout;
