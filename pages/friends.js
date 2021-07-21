const friends = ["Eric", "Jimmy", "Steve", "Joe"];

const FriendsPage = () => 
    <div>
        {friends.map((friend, i) => <p key={i}>name : {friend}</p>)}
    </div>;

//i는 index, friend는 각 array안의 값

export default FriendsPage;