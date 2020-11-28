import React from 'react'
import { Avatar } from '@material-ui/core'
import {
    Videocam,
    PhotoLibrary,
    InsertEmoticon
} from '@material-ui/icons'
import '../css/MessageSender.css'

function MessageSender() {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        className="messageSender__input"
                        placeholder={`Whats's on your mind`}
                    />
                    <input placeholder="image URL (optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
