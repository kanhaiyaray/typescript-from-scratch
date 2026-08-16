async function fetchTemperature(): Promise<number> {
  return 29.5;
}

type Temperature = Awaited<
  ReturnType<typeof fetchTemperature>
>;

async function displayTemperature(): Promise<void> {
  const temperature: Temperature =
    await fetchTemperature();

  console.log("Temperature:", temperature);
}

displayTemperature();
