"use client";

import { useRouter } from "next/router";

const Login = () => {
  

  const usersData = async (): Promise<
    { username: string; password: string }[]
  > => {
    const response = await fetch("http://localhost:4000/users");
    const users = await response.json();
    return users;
  };
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const usernameInput = (event.target as HTMLFormElement).username;
    const passwordInput = (event.target as HTMLFormElement).password;

    const username = usernameInput.value;
    const password = passwordInput.value;

    const users = await usersData();
    const userFound = users.find(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );

    if (userFound) {
      alert("Usuario verificado");
      router.push("/profile");
    } else {
      alert("Usuario no verificado");
    }

    usernameInput.value = "";
    passwordInput.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" /> {}
        <input type="password" name="password" placeholder="Password" /> {}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
