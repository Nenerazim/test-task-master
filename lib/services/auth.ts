import type {LoginRequest} from "~/lib/types/auth";

export class Auth {
	public async login(data: LoginRequest) {
		await $fetch('/api/login', {method: 'POST', body: data}).then(async () => {
			await navigateTo('/');
		}).catch(() => Promise.reject({
			login: 'Логин или пароль введены неверно',
			password: 'Логин или пароль введены неверно'
		}));
	}

	public async logout() {
		useCookie('session', {path: '/'}).value = null;
		await navigateTo('/login');
	}
}