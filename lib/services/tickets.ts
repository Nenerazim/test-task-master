import {String} from "~/lib/helpers/string";
import type {SingleTicket} from "~/lib/types/ticket";
import type {TableColumn} from "~/lib/types/service";

export class Tickets {
	public static columns: TableColumn<SingleTicket>[] = [
		{title: 'ID', key: 'id'},
		{title: 'Заголовок', key: 'title'},
		{title: 'Сообщение', key: 'message', format: (row) => String.subString(row.message, 30)},
		{title: 'Дата создания', key: 'created_at'},
		{title: 'Автор', key: 'user_id'}
	];

	public async findByUser(id: number | null = null): Promise<SingleTicket[]> {
		if (id) {
			const {data, error} = await useFetch(`/api/tickets/by-user/${id}`);
			return data.value ?? [];
		}
		return [];
	}
}