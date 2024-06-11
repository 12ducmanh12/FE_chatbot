import { v4 as uuidv4 } from "uuid";
import { memo, useEffect, useRef } from "react";

function ChatBody({ chatText }: any) {
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (
      messagesEndRef.current &&
      chatContainerRef?.current.offsetHeight > 776
    ) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatText]);

  return (
    <div className="max-w-screen-md mx-auto " ref={chatContainerRef}>
      {chatText.map((items: any) => (
        <div
          key={uuidv4()}
          className={`${
            items.id === "send"
              ? "bg-gray-500 ml-auto w-fit"
              : "bg-blue-500 max-w-[80%]"
          } px-3 py-1 mt-4 rounded-lg text-white `}
        >
          {items.id === "send" ? (
            <>{items.content}</>
          ) : (
            <>
              <p>{items.content.text}</p>
              <p>Reference:</p>
              <ul>
                {items?.content?.ResourceCollection?.map((subitems: any) => (
                  <a
                    key={uuidv4()}
                    target="_blank"
                    href={subitems?.source}
                    className="hover:text-red-300 flex"
                  >
                    {subitems?.source}
                  </a>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default memo(ChatBody);
