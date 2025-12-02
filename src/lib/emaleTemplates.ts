import { render } from "@react-email/render";
import { NotificationEmail } from "@/components/email/me-email-template";
import { SenderEmailTemplate } from "@/components/email/sender-template";

export function renderSenderEmail(name: string) {
  return render(SenderEmailTemplate({ name }));
}

export function renderNotificationEmail(data: { name: string, email: string, message: string }) {
  return render(NotificationEmail(data));
}
