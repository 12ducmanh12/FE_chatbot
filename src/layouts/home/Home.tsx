import { useRef, useState } from "react";
import ChatBar from "../chatbar/ChatBar";
import ChatBody from "../chatbody/ChatBody";
import ChatFooter from "../chatfooter/ChatFooter";

function Home() {
  const [chatText, setChatText] = useState([]);
  return (
    <div className="flex h-screen">
      <ChatBar />
      <div className="relative flex flex-col grow pt-5 h-full w-10/12">
        <div className="z-0 overflow-y-auto h-[88%]">
          <ChatBody chatText={chatText} />
        </div>
        <div className="mt-auto w-10/12 pb-3 z-10 fixed bottom-0 h-[10%]">
          <ChatFooter setChatText={setChatText} chatText={chatText} />
        </div>
      </div>
    </div>
  );
}

export default Home;
