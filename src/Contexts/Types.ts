export interface IUser {
    id: string
    name: string
    email: string
    course_module: string
    bio: string
    contact: string
    techs: Tech[]
    works: Work[]
    created_at: string
    updated_at: string
    avatar_url: string
  }
  
  export interface Tech {
    id: string
    title: string
    status: string
    created_at: string
    updated_at: string
  }
  
  export interface Work {
    id: string
    title: string
    description: string
    deploy_url: string
    created_at: string
    updated_at: string
  }