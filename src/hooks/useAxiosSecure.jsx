import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL:
    "https://find-job-server-lxnesn19j-akibul-islams-projects.vercel.app/api",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("api response error status", error.status);
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              // redirect to the login page
              navigate("/signIn");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;

/**
 * axios: get, post, put/patch, delete --> easier
 * interceptor: client ----------|---------------> server
 * client <------------------|------------------Server
 * in the interceptor for response == needs two function
 *
 * 
 * 
 * 
 *  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("api response error status", error.status);
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              // redirect to the login page
              navigate("/signIn");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, []);

 */
