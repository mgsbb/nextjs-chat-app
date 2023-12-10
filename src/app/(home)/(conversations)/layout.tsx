import UsersListServer from "../components/UsersListServer";

const ConversationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full lg:flex lg:flex-row">
      <UsersListServer />

      {children}
    </div>
  );
};

export default ConversationLayout;
