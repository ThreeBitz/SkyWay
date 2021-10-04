import React, { useState, useContext } from 'react'
import './style.css'
import Avatar from "@material-ui/core/Avatar";
import { Comment } from '../../componenet'
import { db, storage } from '../../firebase'
import CommentInput from '../../componenet/comment-input'

export default function Post ({id, userName, username, postImageUrl, caption, comments,  userProfileUrl, user}) {
 const deletePost = () => {
    //delete post
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className="post">
      <div className="post__header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={userName}
            style={{ height: "25px", width: "25px" }}
          >
            {userName ? userName.charAt(0) : "" }
          </Avatar>
          <div className="post__headerInfo">
            <p style={{ fontSize: "14px" }}>{userName}</p>
          </div>
        </div>

        {user ? (
          user.displayName === userName ? (
            <button
              className="button"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={deletePost}
            >
              Delete
            </button>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
      <div className="post__bottom">    
        <p>
          <strong>{userName}</strong> {caption}
        </p> 
        <img className="post__image" src={postImageUrl} />
      </div>
      {comments ? (
        comments.map((comment) => (
          <Comment username={comment.username} comment={comment.comment} />
        ))
      ) : (
        <></>
      )}
      <CommentInput comments={comments} id={id} user={user} />
    </div>
  )
}
