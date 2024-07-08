import "./Sidebar.css"
import {Bookmark, RssFeed, Chat, PlayCircle, Group, Quiz, Work, Event, School} from "@mui/icons-material";
import {Users} from "../../dummyData"
import Closefriend from "../closefriends/Closefriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
      <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
        <span className="sidebarListItemText">Feed</span>
      </li>
      <li className="sidebarListItem">
          <Chat className="sidebarIcon"/>
          <span className="sidebarListItemText">Chat</span>
      </li>
      <li className="sidebarListItem">
          <PlayCircle className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
     </li>
     <li className="sidebarListItem">
         <Group className="sidebarIcon"/>
         <span className="sidebarListItemText">Groups</span>
     </li>
     <li className="sidebarListItem">
        <Bookmark className="sidebarIcon"/>
        <span className="sidebarListItemText">Bookmarks</span>
    </li>
    <li className="sidebarListItem">
        <Quiz className="sidebarIcon"/>
        <span className="sidebarListItemText">Quiz</span>
    </li>
    <li className="sidebarListItem">
        <Work className="sidebarIcon"/>
        <span className="sidebarListItemText">Jobs</span>
    </li>
    <li className="sidebarListItem">
        <Event className="sidebarIcon"/>
        <span className="sidebarListItemText">Events</span>
    </li>
    <li className="sidebarListItem">
        <School className="sidebarIcon"/>
        <span className="sidebarListItemText">Courses</span>
    </li>
    </ul>
    <button className="sidebarButton">Show more</button>
    <hr className="sidebarHr"/>
    <ul className="sidebarFriendList">
         {Users.map(u=>(
               <Closefriend key={u.id} user={u}/>
         ))}
    </ul>
  </div>
</div>
  )
}
