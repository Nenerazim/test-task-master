import type {SingleUser} from "~/lib/types/user";

export class User {
	public current = useState<SingleUser | null>('user', () => null);

	public async getCurrent(): Promise<SingleUser | null> {
		const {data, error} = await useFetch('/api/user/current');
		this.current.value = error.value ? null : data.value;
		return this.current.value;
	}

	public async findById(id: number) {
		const {data, error} = await useFetch(`/api/user/${id}`);
		return data.value;
	}
}