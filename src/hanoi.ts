export class Hanoi {
  A: Array<number> = [];
  B: Array<number> = [];
  C: Array<number> = [];

  constructor() {
    // add disks to rod A
    this.A = [5, 4, 3, 2, 1];
  }

  /*
        n: number of disks at the specific hanoi call
        a1: source rod 
        a2: destination rod
        a3: auxillary rod
    */
  hanoi(n: number, a1: Array<number>, a2: Array<number>, a3: Array<number>) {
    if (n === 1) {
      this.moveLastDiskFrom(a1, a2); // final disk moved from source array to destination
      return;
    }

    /*
            if not last disk, means there are a lot of disks
            then
            move n-1 disks by hanoi from a1 to a3 (auxillary rod)
            then move last remaining disk
            then, move the previous n-1 disks from a3 to a2 keeping a1 as auxillary
        */
    this.hanoi(n - 1, a1, a3, a2);
    this.moveLastDiskFrom(a1, a2);
    this.hanoi(n - 1, a3, a2, a1);
  }

  /*
        moved the last disk (largest) from source array to destination array
    */
  moveLastDiskFrom(b1: Array<number>, b2: Array<number>) {
    let topDisk: number = b1.pop() as number;
    b2.push(topDisk);
  }

  getLength() {
    return this.A.length;
  }

  /*
        get source rod
    */
  getA() {
    return this.A;
  }

  /*
        get destination rod
    */
  getB() {
    return this.B;
  }

  /*
        get auxillary rod
    */
  getC() {
    return this.C;
  }

  /*
        get source rod
    */
  printA() {
    console.log("source: " + this.A);
  }

  /*
        get destination rod
    */
  printB() {
    console.log("destination: " + this.B);
  }
}
