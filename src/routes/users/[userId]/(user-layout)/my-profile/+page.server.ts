import type { PageServerLoad } from "./$types";
import { getAllCourseContents, getAllLearningPaths, getUserLearningPaths } from "../../../../api/services/learning";
import { getUserById } from '../../../../../routes/api/services/my-profile';

////////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async (event) => {
    try {
        const sessionId = event.cookies.get('sessionId');
        const userId = event.params.userId;
        const _user = await getUserById(sessionId, userId);
        const allLearningPaths = await getAllLearningPaths(sessionId);
        const userLearningPaths = await getUserLearningPaths(sessionId, userId);
        const allCourseContents = await getAllCourseContents(sessionId);
        const user = _user.Patient
        return {
            sessionId,
            user,
            userId,
            allLearningPaths,
            allCourseContents,
            userLearningPaths
        };
    }
    catch (error) {
        console.log(error.stack)
        console.error(`Error retrieving data related to user's profile content: ${error.message}`);
        return {
            location: `/sign-in`,
        };
    }
};
