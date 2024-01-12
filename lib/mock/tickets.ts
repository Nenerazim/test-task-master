import type {SingleTicket} from "~/lib/types/ticket";

export const ticketsList: SingleTicket[] = [
	{
		id: 1,
		title: 'Заголовок 1',
		message: 'Какое то сообщение по тикету',
		created_at:  '10.12.2023',
		user_id: 1
	},
	{
		id: 2,
		title: 'Заголовок тикета 2',
		message: 'Здравствуйте я хочу обратиться по определенному случае и так далее',
		created_at:  '11.11.2023',
		user_id: 1
	},
	{
		id: 3,
		title: 'Заголовок тикета 3',
		message: 'Lorem ipsum dolor sit amet',
		created_at:  '01.10.2023',
		user_id: 1
	},
	{
		id: 4,
		title: 'Заголовок тикета 4',
		message: 'Lorem ipsum dolor sit amet 2',
		created_at:  '02.03.2022',
		user_id: 1
	}
];