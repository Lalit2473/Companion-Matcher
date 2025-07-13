const API_URL = "http://localhost:5000/api";

export const createUser = async (user) => {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const getMatches = async (username) => {
  const res = await fetch(`${API_URL}/matches/${username}`);
  return res.json();
};

export const shortlistUser = async (username, target) => {
  const res = await fetch(`${API_URL}/shortlist/${username}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ target }),
  });
  return res.json();
};