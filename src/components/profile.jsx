import React from 'react';
import s from "./profile.module.css"

function Profile(){
    return(
      <div className={s.profile}>
      <div>
      <img src=""></img>
      </div>
      <div>ava + description</div>
      <div>
        my post
        <div>new post</div>
        <div>
          <div className={s.item}>post1</div>
          <div>post2</div>
        </div>
      </div>
</div>
    )
}

export default Profile;