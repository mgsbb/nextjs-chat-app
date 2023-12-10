import UsersList from "../components/UsersList";

const ConversationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-row">
      <UsersList />

      {children}
    </div>
  );
};

export default ConversationLayout;
