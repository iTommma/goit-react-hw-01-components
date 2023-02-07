import userData from '../data/user.json';
import statisticData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactions from '../data/transactions.json';

import {Profile} from './profile/Profile';
import {Statistics} from './statistics/Statistics';
import {FriendList} from './friend_list/FriendList';
import {Transactions} from './transactions/transactions';

export const App = () => {
  return (
    <>
    <Profile user={userData} />
    <Statistics title="Upload stats" stats={statisticData}/>
    <FriendList friends={friendsData} />
    <Transactions items={transactions} />
    </>
  );
};
