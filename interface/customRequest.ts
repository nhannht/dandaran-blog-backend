export interface CustomRequest {
  params: {
    userId?: String,
    postId?: String,
  }
  body:{
    username?:String,
    password?:String,
  },
  session: {
    User: unknown,
    destroy:Function,
    userId:string,
  },
  files:{
    image:unknown,
  },

}

