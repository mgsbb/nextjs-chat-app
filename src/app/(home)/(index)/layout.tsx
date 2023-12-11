import UsersListServer from "./components/UsersListServer";

const HomeIndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:flex lg:flex-row">
      <UsersListServer />

      {children}
    </div>
  );
};

export default HomeIndexLayout;
