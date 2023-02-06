import userData from '../data/user.json';
import statisticData from '../data/statistics.json';
import friendsData from '../data/friends.json';

import {Profile} from './profile/Profile';
import {Statistics} from './statistics/Statistics';
import {FriendList} from './friend_list/FriendList';

export const App = () => {
  return (
    <>
    <Profile user={userData} />
    <Statistics title="Upload stats" stats={statisticData}/>
    <FriendList friends={friendsData} />
    {/* <Transactions /> */}
    </>
  );
};
