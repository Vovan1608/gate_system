import NotificationType from "../interfaces/NotificationType";

class Notification implements NotificationType {
	private text: string;

	get generateNotification(): string {
		return this.text;
	};

	set generateNotification(value: string) {
		this.text = value;
	}
}