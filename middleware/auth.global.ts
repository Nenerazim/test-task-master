import {User} from "~/lib/services/user";

export default defineNuxtRouteMiddleware(async (to) => {
	if (to.path !== '/login') {
		const user = new User();
		if (await user.getCurrent()) {
			return;
		}
		return navigateTo('/login');
	}
});