# Aula Clara

Aula Clara es una plataforma educativa web gratuita, calmada y sostenible. La base del proyecto sigue `CODEX_BRIEF_AULA_CLARA.md`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM

## Instalacion

```bash
npm install
```

## Configuracion local de PostgreSQL

Necesitas una base de datos local llamada `aula_clara` y un archivo `.env` en la raiz del proyecto.

### Opcion A: usando pgAdmin

1. Abre pgAdmin.
2. Conectate al servidor local de PostgreSQL.
3. Crea una base de datos llamada `aula_clara`.
4. Confirma estos datos de conexion:
   - Usuario, normalmente `postgres`.
   - Host, normalmente `localhost`.
   - Puerto, normalmente `5432`.
   - Contrasena real de tu usuario PostgreSQL.
5. Copia `.env.example` a `.env`.
6. Ajusta `DATABASE_URL` con tu contrasena real.

Ejemplo:

```env
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/aula_clara?schema=public"
```

`TU_PASSWORD` debe cambiarse por la contrasena real de PostgreSQL.

### Opcion B: usando psql

Si `createdb` esta disponible en tu terminal:

```bash
createdb aula_clara
```

Si necesitas entrar con el usuario `postgres`:

```bash
psql -U postgres
```

Dentro de `psql`:

```sql
CREATE DATABASE aula_clara;
\q
```

Despues copia `.env.example` a `.env` y ajusta la contrasena:

```bash
cp .env.example .env
```

En Windows PowerShell tambien puedes usar:

```powershell
Copy-Item .env.example .env
```

## Variables de entorno

El archivo `.env` no se versiona. Debe existir en la raiz de `aula-clara/` para que Prisma pueda conectar con PostgreSQL.

Ejemplo:

```env
DATABASE_URL="postgresql://postgres:TU_PASSWORD@localhost:5432/aula_clara?schema=public"
```

Si tu usuario, host o puerto son distintos, ajusta la URL.

## Comandos Prisma

Genera el cliente Prisma usado por la app:

```bash
npm run prisma:generate
```

Crea y aplica la migracion inicial en PostgreSQL:

```bash
npm run prisma:migrate
```

Carga datos iniciales de Aula Clara:

```bash
npm run prisma:seed
```

Abre Prisma Studio para inspeccionar datos:

```bash
npm run prisma:studio
```

Reset de desarrollo. Borra datos y vuelve a aplicar migraciones, usalo solo si estas trabajando localmente y no necesitas conservar datos:

```bash
npm run prisma:reset
```

## Arrancar el proyecto

```bash
npm run dev
```

Despues abre:

```txt
http://127.0.0.1:3000
```

## Modelo de acceso

### Rutas publicas

- `/`
- `/topics`
- `/topics/sql`
- `/support`
- `/sustainability`

### Rutas que seran privadas en el futuro

- `/dashboard`
- `/profile`
- `/assistant`
- `/learn/sql`
- `/learn/sql/step/*`

De momento no se bloquean con login real porque Aula Clara sigue en fase de build/MVP. Las rutas de aprendizaje estan abiertas como demo para validar la experiencia.

## Autenticacion basica

La autenticacion usa:

- API routes en `/api/auth/register`, `/api/auth/login`, `/api/auth/logout` y `/api/auth/session`.
- Passwords hasheadas con `bcryptjs`.
- Cookie HTTP-only llamada `aula_clara_session`.
- Tabla `Session` en Prisma.

Rutas disponibles:

- `/register`: crear cuenta.
- `/login`: iniciar sesion.
- `/dashboard`: panel protegido.

## Progreso de aprendizaje

El progreso de la ruta SQL usa `UserProgress` y requiere sesion.

- `GET /api/progress`: devuelve el progreso del usuario actual.
- `POST /api/progress`: guarda un paso con `stepSlug` y `status`.

Las lecciones siguen abiertas como demo para visitantes. Si una persona no ha iniciado sesion e intenta marcar un paso como entendido, la interfaz muestra un mensaje suave con enlace a login.

Si cambias `prisma/schema.prisma`, ejecuta:

```bash
npm run prisma:migrate
npm run prisma:generate
npm run prisma:seed
```

## Verificacion

```bash
npm run lint
npm run build
npm run prisma:generate
```

## Datos del seed

El seed crea:

- Usuario admin demo: `admin@aulaclara.local`
- Tema publicado: `SQL sin miedo`
- Ruta inicial de SQL
- Pasos `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, `JOIN` y repaso
- Recursos placeholder pendientes de revisar

## Credenciales de prueba

Estas credenciales se crean con el seed y sirven para probar el login local.

```txt
Usuario: admin@aulaclara.local
Contrasena: AulaClaraDemo2026!
Rol: ADMIN
Plan: SUPPORT
```

No uses esta contrasena en produccion. El seed la guarda hasheada con `bcryptjs`, pero sigue siendo una credencial demo.

## Estado

Version navegable con primera capa de datos preparada mediante Prisma y PostgreSQL. Las paginas `/topics` y `/topics/sql` mantienen fallback estatico si la base de datos no esta disponible, asi que la UI sigue funcionando aunque falte configurar PostgreSQL. Todavia no hay autenticacion real, pagos reales, IA real ni progreso persistente complejo.
