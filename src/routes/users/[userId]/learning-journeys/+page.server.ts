import * as cookie from 'cookie';
import type { PageServerLoad } from "./$types";
import { getAllLearningPaths } from "../../../api/services/learning";

////////////////////////////////////////////////////////////////////////

export const load: PageServerLoad = async ({ request, params }) => {
    try {

        const cookies = cookie.parse(request.headers.get('cookie') || '');
        const sessionId = cookies['sessionId'];
        const userId = params.userId;
        const allLearningPaths = await getAllLearningPaths(sessionId);
        return {
            sessionId,
            userId,
            allLearningPaths,
        };
    }
    catch (error) {
        console.log(error.stack)
        console.error(`Error retrieving data related to user's courses: ${error.message}`);
        return {
            location: `/sign-in`,
        };
    }
};
