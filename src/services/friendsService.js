import axios from "axios";

const friendServiceURL ={
  endPoint: "https://api.remotebootcamp.dev/api/friends/"}

const getAllPaginated = (pageIndex, pageSize) => {

  const config = {
    method: "GET",
    url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=10",
    data: pageIndex, pageSize,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

const updateById = (id, payload) => {

  const config = {
    method: "PUT",
    url: `${friendServiceURL.endPoint}/${id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};

const getBySearch = (pageIndex, pageSize, query) => {

  const config = {
    method: "GET",
    url: `${friendServiceURL.endPoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    data: pageIndex, pageSize, query,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config)
}

const getBySlug = (slug) => {

    const config = {
      method: "GET",
      url: `${friendServiceURL.endPoint}/${slug}`,
      data: slug,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    }
    return axios(config)
  } 

const getById = (id) => {

    const config = {
      method: "GET",
      url: `${friendServiceURL.endPoint} ${id}`,
      data: id,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    }
    return axios(config)
  }

const deleteFriend = async (id) => {
// console.log("on delete success", id)
  const config = {
    method: "DELETE",
    url: `${friendServiceURL.endPoint} ${id}`,
    data: id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  await axios(config);
  return id;
}

const addFriend = (payload) => {

  const config = {
    method: "POST",
    url: friendServiceURL.endPoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  }
  return axios(config)
}


// export { UserLogin, UserRegister, GetCurrentUser}
export { addFriend, updateById, getBySearch, getBySlug, getById, deleteFriend, getAllPaginated }; // export all your calls here

// if you had three functions to export 
// const usersService = { logIn, register, thirdFunction }
// export default usersService;