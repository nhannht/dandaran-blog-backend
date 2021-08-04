
export interface CustomResponse {
  status: (statusnum: number) => {
    send: { (msg?: string): any };
    json: {
      (msg?: {
        status: JSON|string|undefined;
      }):any
    };
  }
  redirect: (url:string) => void,
  render:Function,
}
