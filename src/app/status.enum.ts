export class Status {
  public static OPEN = new Status();
  public static CLOSED = new Status();
  public static UNKNOWN = new Status();
  public static statuses = [
    Status.OPEN,
    Status.CLOSED,
    Status.UNKNOWN
  ]
  /**
   * 
   */
  get value(): string {
    switch (this) {
      case Status.OPEN: return 'open';
      case Status.CLOSED: return 'closed';
    }
    return 'unknown';
    // console.log(`
    //   jmintal
    //   ${JSON.stringify(Object.prototype.keys(this))} 
    // `);
    // for (const status of Object.getOwnPropertyNames(this)){
    //   console.log(`
    //     status ${status}
    //   `);
    //   if (Status[status] === this) { return status.toLocaleLowerCase(); }
    // }
    // return 'unknown';
  }
  get cssClass(): string {
    return 'item-' + this.value.toLocaleLowerCase();
  }
}
