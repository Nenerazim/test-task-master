export class String {
	public static subString(string: string, symbols_number: number): string {
		if (string?.length > symbols_number) {
			return string.substring(0, symbols_number) + '...';
		}
		return string;
	}
}