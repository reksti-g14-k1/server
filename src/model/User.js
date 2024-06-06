class User {
    constructor(username, password, role) {
      this.username = username;
      this.password = password;
      this.role = role;
      this.createdAt = Date.now();
      this.updatedAt = Date.now();
    }

    toPlainObject() {
      return {
          username: this.username,
          password: this.password,
          role: this.role,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt
      };
  }
  }
  
  export default User;