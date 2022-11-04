import type { RequestEvent } from "@sveltejs/kit";
import { searchUsersByName } from "../../../services/user";

//////////////////////////////////////////////////////////////

export const GET = async (event: RequestEvent) => {
    const sessionId = event.cookies.get('sessionId');
    const text = event.url.searchParams.get('text');
	try {
		console.log('Search other users to chat...');
		const response = await searchUsersByName(
			sessionId,
            text
		);
        //console.log(`text = ${text}`);
        const results = response.Patients?.Items;
        //console.log(`text = ${JSON.stringify(results, null, 2)}`);
        let users = [];
        if (results.length > 0) {
            users = results.map(x => {
                return {
                    userId: x.UserId,
                    displayName: x.DisplayName,
                    firstName: x.FirstName,
                    lastName: x.LastName,
                    profileImage: x.profileImage,
                }
            });
        }
		return new Response(JSON.stringify(users));
	} catch (err) {
		console.error(`Search users to start conversation: ${err.message}`);
		return new Response(err.message);
	}
};
