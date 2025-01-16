import React from 'react';

import {
    MultiChatWindow ,
    MultiChatSocket,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('fdabf567-fe31-4d20-bfea-d46cf866875d',props.user.username, props.user.secret);
    return( 
        <div style = {{ height : '100vh' }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style = {{height: '100%'}} />
        </div>
    )
}

export default ChatsPage