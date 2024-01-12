export type LoginRequest = {
	login: string;
	password: string;
};

export type LoginResponse = {
	success: boolean;
	token: string | null;
};