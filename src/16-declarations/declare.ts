interface Agent {
  id: number;
  name: string;
}

declare function createAgent(id: number, name: string): Agent;

const Agent: Agent = {
  id: 101,
  name: "Aman"
};

console.log("Declared Agent structure:", Agent);
