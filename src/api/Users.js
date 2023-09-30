const fetchUsers = async (quantity) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${quantity}`
  );
  const users = await response.json();
  return users;
};
export default fetchUsers;
