import React, {useEffect, useState} from 'react';
import "./Feed.css";
import InputOption from './InputOption.js';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Dark Watcher',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ ImageIcon } title="Photo" color="#70B5F9" />
                    <InputOption Icon={ SubscriptionsIcon } title="Video" color="#E7A33E" />
                    <InputOption Icon={ EventNoteIcon } title="Event" color="#C0CBCD" />
                    <InputOption Icon={ CalendarViewDayIcon } title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {posts.map(({ id, data: {name, description, message, photoUrl} }) => (
                <Post 
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl} 
                />
            ))}
            {/* <Post name="Dark Knight" description="This is a test" message="I am surprised this worked" /> */}
        </div>
    );
} 

export default Feed;
