// UserProps.ts
export type userInfo {
    loggedIn: boolean;
    profile: profile | null;
  }
  
  export type profile {
    username: string;
    email: string;
    role: string;
  }