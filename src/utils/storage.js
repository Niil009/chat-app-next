export const saveChat = (chat) => {
  const chats = JSON.parse(localStorage.getItem("ppt-chats") || "[]");
  chats.push({ ...chat, timestamp: Date.now() });
  localStorage.setItem("ppt-chats", JSON.stringify(chats.slice(-10)));
};

export const loadChats = () =>
  JSON.parse(localStorage.getItem("ppt-chats") || "[]");
