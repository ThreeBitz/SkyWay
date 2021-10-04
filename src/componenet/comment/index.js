import React from 'react'

export default function Comment({username, comment}){
    return(
        <div class="comment">
             <p>
                    <span style={{fontWeight:"500", marginRight:"4px"}}>
                        {username}
                    </span>
                    {comment}
                </p>
        </div>
    );
}