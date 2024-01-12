import {usersList} from "~/lib/mock/users";

export default defineEventHandler(async (event) => {
	const user = usersList.find((user) => user.id === Number(getRouterParam(event, 'id')));

	if (user) {
		return user;
	}

	setResponseStatus(event, 404);
});