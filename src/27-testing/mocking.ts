interface UserService {
  getUsername(): string;
}

class MockUserService implements UserService {
  getUsername(): string {
    return "Mock User";
  }
}

const service = new MockUserService();

console.log("Mocked username:", service.getUsername());
