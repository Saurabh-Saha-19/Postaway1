class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static signIn(email, password) {
    const userMatch = users.find((u) => {
      return u.email === email && u.password === password;
    });

    return userMatch;
  }
}

let users = [
  new UserModel(1, "Saurabh", "saurabh@gmail.com", "123"),
  new UserModel(2, "Vivek", "vivek@gmail.com", "456"),
];

export default UserModel;
