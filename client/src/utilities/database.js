import {useState, useEffect} from "react";

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
async function create(content, path) {

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...content };

    await fetch((process.env.REACT_APP_SERVER_URL || "http://localhost:5000") + path, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
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

export {create, useForm, remove, useDatabase}