import {ticketsList} from "~/lib/mock/tickets";

export default defineEventHandler(async (event) => {
	return ticketsList.filter((ticket) => ticket.user_id === Number(getRouterParam(event, 'id')));
});