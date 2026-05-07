// Archivo de pruebas: test_api.js
// Ejecuta estos snippets en la consola del navegador (abre http://127.0.0.1:8000 en una pestaña)
// o en un archivo JS en tu frontend React.

// Función helper para mostrar respuestas
function logResponse(response, data) {
  console.log(`Status: ${response.status}`);
  console.log('Data:', data);
}

// 1. Login correcto
fetch('https://fundaci0n-backend-63ij.onrender.com/api/token/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'testuser',
    password: 'password123'
  })
})
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// 2. Login incorrecto
fetch('https://fundaci0n-backend-63ij.onrender.com/api/token/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'wronguser',
    password: 'wrongpass'
  })
})
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// 3. Acceso a endpoint protegido SIN token
fetch('https://fundaci0n-backend-63ij.onrender.com/api/users/me/')
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// 4. Acceso con token válido (reemplaza 'TU_ACCESS_TOKEN_AQUI' con el token real del paso 1)
fetch('https://fundaci0n-backend-63ij.onrender.com/api/users/me/', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TU_ACCESS_TOKEN_AQUI'
  }
})
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// 5. Acceso con token inválido
fetch('https://fundaci0n-backend-63ij.onrender.com/api/users/me/', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer invalidtoken123'
  }
})
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// 6. Refresh token (reemplaza 'TU_REFRESH_TOKEN_AQUI' con el token real)
fetch('https://fundaci0n-backend-63ij.onrender.com/api/token/refresh/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    refresh: 'TU_REFRESH_TOKEN_AQUI'
  })
})
.then(response => response.json().then(data => logResponse(response, data)))
.catch(error => console.error('Error:', error));

// Después del refresh, usa el nuevo access token en el paso 4.