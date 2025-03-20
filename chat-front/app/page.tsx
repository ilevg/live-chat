import MessageBar from "./home/components/messageBar/MessageBar";
import Messages from "./home/components/messages/Messages";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar namePage={'messages'} />
        <MessageBar />
      </div>
      <Messages />
    </div>
  );
}

