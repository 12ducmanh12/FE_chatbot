import { useState } from "react";
import { memo } from "react";
import "./style.css";
import axios from "axios";

function ChatFooter({ setChatText, chatText }: any) {
  const [currentChat, setCurrentChat] = useState("");

  async function HandleSubmitChat(e: any) {
    e.preventDefault();
    let chatNew = [...chatText];
    chatNew.push({ content: currentChat, id: "send" });
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/search/summary/${currentChat}`
      );
      chatNew.push({ content: res.data, id: "response" });
    } catch (error) {
      // Handle errors
    }
    setChatText(chatNew);
    setCurrentChat("");
  }

  return (
    <form
      onSubmit={HandleSubmitChat}
      className="relative max-w-screen-md mx-auto"
    >
      <textarea
        className="relative bg-gray-100 w-full rounded-3xl max-h-36 px-4"
        style={{ resize: "none" }}
        onChange={(e) => setCurrentChat(e.target.value)}
        value={currentChat}
      ></textarea>
      <button className="absolute right-4 top-2" type="submit">
        Gửi
      </button>
    </form>
  );
}

export default memo(ChatFooter);
