class ResearchLab {
  protected laboratoryCode: string;

  constructor(code: string) {
    this.laboratoryCode = code;
  }
}

class BiologyLab extends ResearchLab {
  showLabCode(): void {
    console.log("Biology laboratory:", this.laboratoryCode);
  }
}

const lab = new BiologyLab("BIO-742");

lab.showLabCode();
