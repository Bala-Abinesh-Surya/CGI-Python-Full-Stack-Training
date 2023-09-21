export default function UserAccount({user}){
    return (
        <div>
            <p><strong>{user.email}</strong></p>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <hr/>
        </div>
    )
}