import Menu from "@/app/(home)/components/Menu";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col-reverse lg:flex-row">
      <Menu />
      <div className="w-full flex-1">{children}</div>
    </main>
  );
};

export default HomeLayout;
