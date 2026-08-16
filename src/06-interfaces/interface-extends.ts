interface Account {
  accountId: string;
  owner: {
    name: string;
    email: string;
  };
}

interface SecurityFeatures {
  twoFactorEnabled: boolean;
  lastLogin: Date;
}

interface PremiumAccount extends Account, SecurityFeatures {
  plan: "Silver" | "Gold" | "Platinum";
  storageLimitGB: number;
  activeDevices: number;
  getAccountSummary(): string;
}

const premiumUser: PremiumAccount = {
  accountId: "ACC-7842",

  owner: {
    name: "Ananya Sharma",
    email: "ananya@example.com"
  },

  twoFactorEnabled: true,
  lastLogin: new Date("2026-08-16T18:30:00"),

  plan: "Platinum",
  storageLimitGB: 2048,
  activeDevices: 4,

  getAccountSummary(): string {
    return `${this.owner.name} has a ${this.plan} account with ${this.storageLimitGB}GB storage.`;
  }
};

console.log("Account ID:", premiumUser.accountId);
console.log("Owner:", premiumUser.owner.name);
console.log("Email:", premiumUser.owner.email);
console.log("Plan:", premiumUser.plan);
console.log("Storage:", premiumUser.storageLimitGB, "GB");
console.log("Active Devices:", premiumUser.activeDevices);
console.log("2FA Enabled:", premiumUser.twoFactorEnabled);
console.log("Last Login:", premiumUser.lastLogin.toLocaleString());
console.log("Summary:", premiumUser.getAccountSummary());