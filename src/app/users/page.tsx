type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1>The list of users</h1>
      <div className="grid grid-cols-2 px-4">
        {users &&
          users.map((user: User) => {
            return (
              <div key={user.id} className="shadow">
                <h3>{user.username}</h3>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UsersPage;
