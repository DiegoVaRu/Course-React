import { useState } from 'react'
import './FollowCard.css'

export function FollowCard ({ username = 'unknown', children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    let followState = isFollowing? 'following-style' : 'unfollowing-style'
    let text = isFollowing? 'Following' : 'Follow'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return (
        <article className='followCard'>
            <header className='followCard-header'>
                <img src={`http://unavatar.io/${username}`} alt="Profile Picture" />
                <div>
                    <strong>{children}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside className='followCard-aside'>
                <button className={followState} onClick={handleClick}>
                    <span className='text-following'>{text}</span>
                    <span className='text-unfollow'>Unfollow</span>
                </button>
            </aside>
        </article>
    )
}