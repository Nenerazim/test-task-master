import {usersList} from "~/lib/mock/users";

export default defineEventHandler(async (event) => {
	const token = getCookie(event, 'session');
	if (token) {
		const user = usersList.find((user) => user.token === token);

		if (user) {
			return user;
		}
	}

	setResponseStatus(event, 401);
});