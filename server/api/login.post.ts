import {usersList} from "~/lib/mock/users";
import type {LoginRequest} from "~/lib/types/auth";

export default defineEventHandler(async (event) => {
	const authData: LoginRequest = await readBody(event);
	const user = usersList.find((user) => user.login === authData.login && user.password === authData.password);

	if (user) {
		setCookie(event, 'session', user.token, {path: '/'});
		return {success: true, token: user.token};
	}

	setResponseStatus(event, 401);
	return {success: false, token: null};
});