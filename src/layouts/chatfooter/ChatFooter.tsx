import { useState } from "react";
import "./style.css";

function ChatFooter({ setChatText, chatText }: any) {
  const [currentChat, setCurrentChat] = useState("");
  function HandleSubmitChat(e: any) {
    e.preventDefault();
    let chatNew = [...chatText];
    chatNew.push(currentChat);
    setChatText(chatNew);
    setCurrentChat("");
  }
  return (
    <div className="relative max-w-screen-md m-auto">
      <form onSubmit={HandleSubmitChat}>
        <textarea
          className="w-full bg-gray-100 rounded-3xl max-h-36 px-4 pt-2"
          style={{ resize: "none" }}
          onChange={(e) => setCurrentChat(e.target.value)}
          value={currentChat}
        ></textarea>
        <button className="absolute right-4 top-3" type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}

export default ChatFooter;
