import type { PageServerLoad} from './$types';
import { getUserById} from '../../../../../routes/api/services/user';
import { searchUserConversations } from '../../../../../routes/api/services/chat';
import { BACKEND_API_URL } from '$env/static/private';

/////////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({cookies, params, depends}) => {
    depends('app:settings')
  const sessionId = cookies.get('sessionId');
  console.log('sessionId', sessionId);
    const userId = params.userId;
    const _user = await getUserById(sessionId, userId);
    const _allConversations = await searchUserConversations(sessionId, userId);
    const user = _user.Patient;
    console.log()
    if (user.User.Person.ImageResourceId) {
      user['ProfileImageUrl'] = BACKEND_API_URL + `/file-resources/${user.User.Person.ImageResourceId}/download?disposition=inline`;
    }
    else {
      user['ProfileImageUrl'] = null;
    }

    const allConversations = _allConversations.UserConversations.Items;
    //console.log("All conversation",allConversations);
    return {
      user,
      sessionId,
      allConversations
    };

};
