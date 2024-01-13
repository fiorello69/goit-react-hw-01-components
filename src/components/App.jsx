import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHystory/transactions.json';
import TransactionHystory from './TransactionHystory/TransactionHystory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Uploaded statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHystory items={transactions} />
    </div>
  );
};
