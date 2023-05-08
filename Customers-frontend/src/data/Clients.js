const url = import.meta.env.VITE_API_URL;

export async function getClients() {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getClientById(id) {
    const response = await fetch(`${url}/${id}`);
    const result = await response.json();
  
    return result
  }

export async function addClient(data) {
  try {
    const response = await fetch(`${url}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateClientById(id, data){
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClientById(id){
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}