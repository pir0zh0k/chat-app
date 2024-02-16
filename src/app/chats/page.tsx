import { Chat } from "@/screens/chats/Chat";
import { ChatList } from "@/screens/chats/ChatsList";
import { CurrentUser } from "@/screens/chats/CurrentUser";

export default function ChatsPage() {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}
    >
      <div
        className="border-r border-slate-800 grid p-5"
        style={{
          gridTemplateRows: "1fr 20fr",
        }}
      >
        <CurrentUser />
        <ChatList />
      </div>
      <div className="p-5">
        <Chat />
      </div>
    </div>
  );
}
