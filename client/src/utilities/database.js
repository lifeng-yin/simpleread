import { useState, useEffect, useContext } from "react";
import TokenContext from "../components/signin/TokenContext/TokenContext";

/**
 * Used to fetch things with the token, and refresh if it is expired
 * @returns A function {@link secureFetch} to fetch things with the token
 */
async function useFetch() {
  const { token, setToken } = useContext(TokenContext);

  async function fetchContent(path, payload = undefined, method = undefined) {
    return await fetch(
      (process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + path,
      {
        method: method || payload ? "POST" : "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        credentials: "include",
        // only does payload if payload exists
        // ...(payload ? { body: payload } : {}),
        body: JSON.stringify(payload),
      }
    ).then((res) => res.json());
  }

  /**
   * Fetch something with the JWT
   * @param {string} path - The path on the server you want to access
   * @param {Object} [payload=undefined] - The stuff you give to the server (if POST request)
   * @param {string} [method=undefined] - The method (POST, GET, DELETE, etc)
   * @returns response of server
   */
  async function secureFetch(path, payload = undefined, method = undefined) {
    let data = await fetchContent(path, payload, method);
    if (!data.isLoggedIn) {
      let newToken = await getToken();

      if (!newToken.isLoggedIn)
        return { failed: true, message: newToken.message };
      else {
        setToken(newToken.token);
        return await fetchContent(path, payload, method);
      }
    } else {
      return data;
    }
  }

  return secureFetch;
}

async function getToken() {
  return await fetch(
    (process.env.REACT_APP_SERVER_URL || "http://localhost:5000") +
      "/user/getToken",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  ).then((res) => res.json());
}

function useDatabase(path) {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        (process.env.REACT_APP_SERVER_URL || `http://localhost:5000`) + path
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setLocal(records);
    }

    getRecords();

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [local.length]);

  return [local, setLocal];
}

function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return [form, setForm, updateForm];
}

// This function will handle the submission.
async function create(content, path, credentials = "same-origin") {
  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...content };

  return await fetch(
    (process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + path,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: credentials,
      body: JSON.stringify(newPerson),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      window.alert(error);
      return;
    });
}

async function remove(id, path) {
  await fetch(
    `${
      process.env.REACT_APP_SERVER_URL || "http://localhost:5000"
    }${path}/${id}`,
    {
      method: "DELETE",
    }
  );
}

export { create, useForm, remove, useDatabase, useFetch, getToken };
