import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
   
    return (
        <div style={{ height : "100vh"}}>
            <PrettyChatWindow
                projectId='d4880967-2589-42de-ba1a-17d08635897e'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage