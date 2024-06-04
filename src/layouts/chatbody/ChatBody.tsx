import { v4 as uuidv4 } from "uuid";

function ChatBody({ chatText }: any) {
  console.log(chatText);
  return (
    <div className="max-w-screen-md m-auto h-96">
      {chatText.map((items: string) => (
        <p
          key={uuidv4()}
          className="bg-gray-500 w-fit px-3 py-1 rounded-lg text-white ml-auto"
        >
          {items}
        </p>
      ))}
    </div>
  );
}

export default ChatBody;
