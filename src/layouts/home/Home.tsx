import { useState } from "react";
import ChatBar from "../chatbar/ChatBar";
import ChatBody from "../chatbody/ChatBody";
import ChatFooter from "../chatfooter/ChatFooter";

function Home() {
  const [chatText, setChatText] = useState<string[]>([]);
  console.log(chatText);
  return (
    <div className="flex">
      <ChatBar />
      <div className="flex flex-col grow border border-gray-600 py-5 h-svh">
        <div>
          <ChatBody chatText={chatText} />
        </div>
        <div className="mt-auto">
          <ChatFooter setChatText={setChatText} chatText={chatText} />
        </div>
      </div>
    </div>
  );
}

export default Home;
