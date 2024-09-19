// UserProps.ts
export type userInfo {
    loggedIn: boolean;
    profile: profile | null;
  }
  
  export type profile {
    name: string;
    role: string;
    profilepic: string;
    linkedin: string;
  }