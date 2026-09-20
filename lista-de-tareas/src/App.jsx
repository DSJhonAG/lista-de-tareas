import { useState } from 'react'

// Estado inicial de ejemplo. Los datos viven solo en memoria (useState):
// se pierden al recargar la página, tal como pide el taller.
const tareasIniciales = [
  { id: 1, texto: 'Instalar Node.js y crear el proyecto con Vite', completada: true },
  { id: 2, texto: 'Explicar el código fuente en el video', completada: false },
  { id: 3, texto: 'Publicar el proyecto en GitHub Pages', completada: false },
]

function App() {
  const [tareas, setTareas] = useState(tareasIniciales)
  const [texto, setTexto] = useState('')
  const [siguienteId, setSiguienteId] = useState(4)

  const pendientes = tareas.filter((t) => !t.completada).length
  const completadas = tareas.length - pendientes

  // 2. Agregar tareas
  function agregarTarea(e) {
    e.preventDefault()
    const limpio = texto.trim()
    if (!limpio) return

    const nueva = {
      id: siguienteId,
      texto: limpio,
      completada: false,
    }

    setTareas((prev) => [nueva, ...prev])
    setSiguienteId((id) => id + 1)
    setTexto('')
  }

  // 3. Marcar una tarea como terminada (o volver a marcarla como pendiente)
  function alternarCompletada(id) {
    setTareas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t,
      ),
    )
  }

  // 4. Borrar tareas
  function eliminarTarea(id) {
    setTareas((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__mark">✓</div>
        <div className="hero__text">
          <h1>Lista de Tareas</h1>
          <p className="hero__sub">Aplicación en React — datos en memoria</p>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>Pendientes</dt>
            <dd>{pendientes}</dd>
          </div>
          <div>
            <dt>Completadas</dt>
            <dd>{completadas}</dd>
          </div>
        </dl>
      </header>

      <main className="layout">
        <section className="panel panel--form" aria-labelledby="form-title">
          <h2 id="form-title">Agregar tarea</h2>
          <form onSubmit={agregarTarea}>
            <label htmlFor="texto">Descripción</label>
            <input
              id="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Escribe una nueva tarea..."
              autoComplete="off"
            />

            <button type="submit">Agregar</button>
          </form>
        </section>

        {/* 1. Mostrar las tareas */}
        <section className="panel panel--ledger" aria-labelledby="ledger-title">
          <h2 id="ledger-title">Mis tareas</h2>

          {tareas.length === 0 ? (
            <p className="empty">
              No hay tareas todavía. Agrega la primera desde el formulario.
            </p>
          ) : (
            <ul className="ledger">
              {tareas.map((t) => (
                <li
                  key={t.id}
                  className={`ledger__row ${t.completada ? 'estado-completada' : 'estado-pendiente'}`}
                >
                  <div className="ledger__main">
                    <label className="ledger__check">
                      <input
                        type="checkbox"
                        checked={t.completada}
                        onChange={() => alternarCompletada(t.id)}
                      />
                      <span className={t.completada ? 'ledger__texto tachado' : 'ledger__texto'}>
                        {t.texto}
                      </span>
                    </label>
                  </div>

                  <div className="ledger__actions">
                    <span className="tag">
                      {t.completada ? 'Completada' : 'Pendiente'}
                    </span>
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => eliminarTarea(t.id)}
                      aria-label={`Eliminar tarea ${t.texto}`}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer">
        Los datos de esta demostración se guardan en memoria y se reinician al recargar la página.
      </footer>
    </div>
  )
}

export default App
