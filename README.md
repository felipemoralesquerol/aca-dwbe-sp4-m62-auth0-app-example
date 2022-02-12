# aca-dwbe-sp4-m62-auth0-app-example

Basada en Express OpenID Connect.


### Instalación 

Ejecutar en primer lugar el siguiente comando:

```npm install```


### Ejecución

Ejecutar utilizando:

```node index.js```

---

_Nota del autor:
Prestar atención con el mensaje de error Using 'form_post' for response_mode may cause issues for you logging in over http, see https://github.com/auth0/express-openid-connect/blob/master/FAQ.md para ello puede utilizar caddy de la siguiente manera ```sudo ~/Descargas/caddy_linux_amd64 reverse-proxy --from localhost:443 --to localhost:3000```_



_Esta implementación fue desarrollada a titulo personal y solamente a los efectos de contar con una alternativa de la posible implementación de lo requerido.
Cualquier comentario será bienvenido!_