//Script para salvar o login do usuário
const formulario = document.getElementById('form-login');
const user = JSON.parse(localStorage.getItem("user"));

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = formulario.email.value;
    const password = formulario.password.value;

    const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    window.location.href = "/";
});
