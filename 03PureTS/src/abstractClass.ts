abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class Instragram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Sepia');
  }
}

const st = new Instragram('test', 'test', 3);
st.getReelTime();