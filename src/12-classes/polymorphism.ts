abstract class NotificationChannel {
  abstract send(message: string): void;
}

class EmailChannel extends NotificationChannel {
  send(message: string): void {
    console.log("Email notification:", message);
  }
}

class SmsChannel extends NotificationChannel {
  send(message: string): void {
    console.log("SMS notification:", message);
  }
}

function notify(channel: NotificationChannel, message: string): void {
  channel.send(message);
}

const email = new EmailChannel();
const sms = new SmsChannel();

notify(email, "Your report is ready.");
notify(sms, "Your verification code is available.");
