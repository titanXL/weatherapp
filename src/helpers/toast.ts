import { makeUuid } from "../utils/uuid";

interface ToastType {
  id: string;
}

export class Toast implements ToastType {
  private _id: string;
  constructor(public message: string) {
    this._id = makeUuid();
  }

  public get id() {
    return this._id;
  }
}
