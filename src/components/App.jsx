import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/transactions/TransactionHistory';

import user from 'json-data/user.json';
import data from 'json-data/data.json';
import friends from 'json-data/friends.json';
import transactions from 'json-data/transactions.json';

const App = () => {
  return (
    <div className='App'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
