import "./Chat.scss";
import Time from "../../Screen/Components/Time/Time";
import Header from "../../Screen/Components/Headers/Header";
import BaseChat from "./pages/BaseChat/BaseChat";
import BaseChatUnred from "./pages/BaseChatUnred/BaseChatUnred";
import ChatInfo from "./pages/BaseChatInfo/ChatInfo";
import ChatReply from "./pages/BaseChatInfo/BaseReply";
import { useState, useEffect } from "react";

function createChat(id, name, subject, fulltext, episodeone, clickable, date) {
  return {
    id,
    name,
    subject,
    fulltext,
    episodeone,
    clickable,
    date,
  };
}
const chatListsInitial = [
  createChat(1, "Finn", "Where are you?", "", "", false, "12/30"),
  createChat(2, "Mateo", "Karoake tonight?", "", "", false, "12/27"),
  createChat(3, "Timothee HR", "Prepare for open...", "", "", false, "12/22"),
  createChat(4, "Mom", "Did i do it right?", "", "", false, "12/20"),
  createChat(5, "Akari", "Crescent Lake", "", "", false, "12/19"),
  createChat(6, "Lakin", "NYE!", "", "", false, "12/17"),
  createChat(7, "Sylvie", "Resend Code", "", "", false, "12/15"),
];

const chatListsChange1 = [
  createChat(
    1,
    "Krista",
    "Where are you?",
    "Where are you? Everyone is looking for you",
    "Flow1.7.1",
    true,
    "12/30"
  ),
  createChat(2, "Mateo", "Karoake tonight?", "", "", false, "12/27"),
  createChat(3, "Timothee HR", "Prepare for open...", "", "", false, "12/22"),
  createChat(4, "Mom", "Did i do it right?", "", "", false, "12/20"),
  createChat(5, "Akari", "Crescent Lake", "", "", false, "12/19"),
  createChat(6, "Lakin", "NYE!", "", "", false, "12/17"),
  createChat(7, "Sylvie", "Resend Code", "", "", false, "12/15"),
];

const chatListsChange2 = [
  createChat(
    1,
    "Timothee HR",
    "Waiting on your",
    "Waiting on your reply, J. WILL YOU HELP ME?",
    "Flow1.10.1",
    true,
    "12/30"
  ),
  createChat(
    2,
    "Krista",
    "Where are you?",
    "Where are you? Everyone is looking for you",
    "Flow1.7.1",
    true,
    "12/30"
  ),
  createChat(3, "Mateo", "Karoake tonight?", "", "", false, "12/27"),
  createChat(4, "Mom", "Did i do it right?", "", "", false, "12/20"),
  createChat(5, "Akari", "Crescent Lake", "", "", false, "12/19"),
  createChat(6, "Lakin", "NYE!", "", "", false, "12/17"),
  createChat(7, "Sylvie", "Resend Code", "", "", false, "12/15"),
];

export default function ChatPage({
  episodeone,
  setEpisodeOne,
  dtime,
  openchat,
  setOpenchat,
  falseReplyCounter,
  setFalseReplyCounter,
}) {
  const [hide, setHide] = useState(true);
  const [person, setPerson] = useState("");
  const [initChat, setInitChat] = useState("");
  const [listchat, setlistchat] = useState(chatListsInitial);

  const OpenMessage = (name, chat) => {
    setOpenchat(true);
    setHide(false);
    setPerson(name);
    setInitChat(chat);
    if (episodeone == "Flow1.7.1") {
      setEpisodeOne("Flow1.7.1.1");
    }
    if (episodeone == "Flow1.10.1") {
      setEpisodeOne("Flow1.10.2");
    }
  };

  useEffect(() => {
    let change1 = [
      "Flow1.7.1",
      "Flow1.8.1",
      "Flow1.8",
      "Flow1.7.1.1",
      "Flow1.9.1",
      "Flow1.9.2",
      "Flow1.9",
      "Flow1.10",
    ];
    let change2 = [
      "Flow1.10.2",
      "Flow1.10.1",
      "Flow1.11",
      "Flow1.11.1",
      "Flow1.12",
      "Flow1.12",
      "Flow1.12.1",
      "Flow1.13",
      "Flow1.13.1",
    ];

    if (change1.includes(episodeone)) {
      setlistchat(chatListsChange1);
    }

    if (change2.includes(episodeone)) {
      setlistchat(chatListsChange2);
    }
  }, []);

  return (
    <div id="pda-chat-screen">
      <div className=" row-2 d-flex justify-content-center">
        <div className="inner-row-left"></div>
        <div className="inner-row-center">
          <Time time={dtime} />
          <Header name="Text" />

          {openchat ? (
            <ChatReply
              setOpenchat={setOpenchat}
              setEpisodeOne={setEpisodeOne}
              episodeone={episodeone}
              person={person}
              chat={initChat}
              falseReplyCounter={falseReplyCounter}
              setFalseReplyCounter={setFalseReplyCounter}
            />
          ) : (
            <div className="container-message">
              <div className="chat-child-container">
                {listchat.map((listchat, index) => (
                  <div
                    className="child-border"
                    key={listchat.id}
                    type={listchat.clickable ? "button" : "text"}
                    onClick={
                      listchat.clickable
                        ? () => OpenMessage(listchat.name, listchat.fulltext)
                        : null
                    }
                  >
                    <div className="container-message-list">
                      <BaseChat
                        person={listchat.name}
                        chat={listchat.subject}
                        episodeone={episodeone}
                        listchat={listchat}
                        date={listchat.date}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hide ? (
            <div className="btn-delete-container d-flex justify-content-end">
              <div className="btn-delete d-flex justify-content-center align-items-center">
                Delete
              </div>
            </div>
          ) : null}
        </div>
        <div className="inner-row-right"></div>
      </div>
    </div>
  );
}
