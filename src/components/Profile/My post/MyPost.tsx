import s from "./MyPost.module.css";
import React from "react";
import {MyPostIcons} from "./Icons/Icons";

const listItems = [
  {
    className: s.photo__btn,
    listText: "Photo",
    icon: MyPostIcons.photo
  },
  {
    className: s.video__btn,
    listText: "Video",
    icon: MyPostIcons.video
  },
  {
    className: s.document__btn,
    listText: "Document",
    icon: MyPostIcons.document
  },
  {
    className: s.post__btn,
    listText: "Post",
    icon: ''
  }
];
export const MyPost = () => {
  return(
    <div className={s.mypost}>
      <div className={s.news__feed}>
        <h3 className={s.news__feed_title}>Create New Post</h3>
        <form>
          <div className={s.group}>
            <textarea name="message" placeholder="Write something here..."
                      className={s.form__control}/>
          </div>
          <ul className={s.button__group}>
            {listItems.map((l, index) => {
             return <li className={l.className} key={index}>
                <button>
                  {l.icon}
                  <span className={s.text}>{l.listText}</span>
                </button>
              </li>
            })}
          </ul>
        </form>
      </div>
    </div>
  )
}

