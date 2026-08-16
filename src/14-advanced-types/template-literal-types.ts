type EventName = "open" | "close" | "pause";

type EventHandlerName = `on${Capitalize<EventName>}`;

const openHandler: EventHandlerName = "onOpen";
const closeHandler: EventHandlerName = "onClose";
const pauseHandler: EventHandlerName = "onPause";

console.log(openHandler);
console.log(closeHandler);
console.log(pauseHandler);
