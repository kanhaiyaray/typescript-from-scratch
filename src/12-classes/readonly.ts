class MuseumArtifact {
  readonly catalogId: string;
  readonly discoveryYear: number;

  constructor(id: string, year: number) {
    this.catalogId = id;
    this.discoveryYear = year;
  }

  display(): void {
    console.log("Catalog ID:", this.catalogId);
    console.log("Discovery year:", this.discoveryYear);
  }
}

const artifact = new MuseumArtifact("ART-1908", 1924);

artifact.display();
