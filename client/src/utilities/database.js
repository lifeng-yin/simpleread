import {useState, useEffect, useContext} from "react";
import TokenContext from "../components/signin/TokenContext/TokenContext"

async function useFetch(path, payload={}) {
    const {token, setToken} = useContext(TokenContext)
    
    async function fetchContent() {
        return await fetch((process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + path, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "x-access-token": token
            },
            body: payload
        })
        .then((res) => res.json())
    }
    
    let data = await fetchContent()
    
    if (!data.isLoggedIn) {
        let newToken = await getToken()
        
        if (!newToken.isLoggedIn) return {failed: true, message: newToken.message}
        else {
            setToken(newToken.token)
            return await fetchContent()
        }
    }
    else {
        return data
    }
}

async function getToken() {
    return await fetch((process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + "/user/getToken", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include"
        })
        .then((res) => res.json())
}

function useDatabase(path) {
    const [local, setLocal] = useState([])
    
    useEffect(() => {
        async function getRecords() {
            const response = await fetch((process.env.REACT_APP_SERVER_URL || `http://localhost:5000`) + path);
        
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
 
 return [form, setForm, updateForm]
}

 // This function will handle the submission.
async function create(content, path, credentials="same-origin") {

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...content };

    return await fetch((process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + path, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: credentials,
        body: JSON.stringify(newPerson),
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        window.alert(error);
        return;
    });
}

async function remove(id, path) {
   await fetch(`${process.env.REACT_APP_SERVER_URL || "http://localhost:5000"}${path}/${id}`, {
     method: "DELETE"
   });
}



export {create, useForm, remove, useDatabase, useFetch, getToken}