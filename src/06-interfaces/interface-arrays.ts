interface DeliveryAgent {
  agentId: string;
  profile: {
    fullName: string;
    zone: string;
  };
  vehicle: {
    type: "Bike" | "Scooter" | "Van";
    registrationNumber: string;
  };
  activeOrders: number;
  rating: number;
  isAvailable?: boolean;
  getStatus(): string;
}

const deliveryAgents: DeliveryAgent[] = [
  {
    agentId: "AG-501",
    profile: {
      fullName: "Rohan Malhotra",
      zone: "North Zone"
    },
    vehicle: {
      type: "Bike",
      registrationNumber: "DL-8C-X4210"
    },
    activeOrders: 3,
    rating: 4.8,
    isAvailable: true,

    getStatus(): string {
      return this.isAvailable ? "Available for delivery" : "Currently busy";
    }
  },

  {
    agentId: "AG-502",
    profile: {
      fullName: "Ishita Kapoor",
      zone: "Central Zone"
    },
    vehicle: {
      type: "Van",
      registrationNumber: "MH-12-KP9087"
    },
    activeOrders: 7,
    rating: 4.6,

    getStatus(): string {
      return this.isAvailable ? "Available for delivery" : "Currently busy";
    }
  },

  {
    agentId: "AG-503",
    profile: {
      fullName: "Devansh Rao",
      zone: "West Zone"
    },
    vehicle: {
      type: "Scooter",
      registrationNumber: "KA-05-ZM3142"
    },
    activeOrders: 1,
    rating: 4.9,
    isAvailable: true,

    getStatus(): string {
      return this.isAvailable ? "Available for delivery" : "Currently busy";
    }
  }
];

deliveryAgents.forEach((agent) => {
  console.log("Agent ID:", agent.agentId);
  console.log("Name:", agent.profile.fullName);
  console.log("Zone:", agent.profile.zone);
  console.log("Vehicle:", agent.vehicle.type);
  console.log("Registration:", agent.vehicle.registrationNumber);
  console.log("Active Orders:", agent.activeOrders);
  console.log("Rating:", agent.rating);
  console.log("Status:", agent.getStatus());
  console.log("-----------------------------");
});