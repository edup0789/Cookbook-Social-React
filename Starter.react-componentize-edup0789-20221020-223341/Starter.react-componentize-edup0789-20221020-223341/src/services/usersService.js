import axios from "axios";

const UserServiceURL ={
  endPoint: "https://api.remotebootcamp.dev/api/users/"
}
const UserLogin = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/login",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

const UserRegister = (payload) => {

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

const GetCurrentUser = (payload) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/current",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

const GetCurrentById = (id) => {

  const config = {
    method: "GET",
    url: `${UserServiceURL.endPoint} ${id}`,
    data: id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config)
}

const Logout = () => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/users/logout",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config)
}

// export { UserLogin, UserRegister, GetCurrentUser}
export { UserRegister, UserLogin, GetCurrentUser, GetCurrentById, Logout}; // export all your calls here

// if you had three functions to export 
// const usersService = { logIn, register, thirdFunction }
// export default usersService;