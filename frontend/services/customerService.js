const BASE_URL = "http://localhost:8081/api/v1/customer";

export async function saveCustomer(customer) {
  const res = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });
  return res.text();
}

export async function updateCustomer(customerUpdate) {
  const res = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customerUpdate),
  });
  return res.text();
}

export async function searchCustomer(id) {
  const res = await fetch(`${BASE_URL}/search?id=${id}`);
  return res.json();
}
