export class WishlistItem {
  public id: number;
  public title: string;
  public info: string;
  public url: string;
  public date: Date;
  public price: number;

  constructor() {
    this.id = Date.now();
    this.date = new Date();
  }
}
