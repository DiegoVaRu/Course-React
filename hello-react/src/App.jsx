import { FollowCard } from './components/FollowCard.jsx'

export function App () {
    return (
        <div className='App'>

            <FollowCard username={'midudev'} initialIsFollowing>
                Miguel Angel Durán
            </FollowCard>

            <FollowCard username={'pheralb'}>   
                Pablo Heraldo
            </FollowCard>

            <FollowCard username={'elonmusk'}>
                Elon Musk
            </FollowCard>

        </div>
    )
}