interface BrowserTab {
  title: string;
}

const openTabs: BrowserTab[] = [
  { title: "Dashboard" },
  { title: "Settings" },
  { title: "Reports" }
];

const selectedTab: BrowserTab | undefined = openTabs.find(
  (tab) => tab.title === "Settings"
);

if (selectedTab) {
  console.log("Selected tab:", selectedTab.title);
}

const guaranteedTab = openTabs[1]!;

console.log("Guaranteed tab:", guaranteedTab.title);
