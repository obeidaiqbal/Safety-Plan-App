export default function Home({ setPage }) {
  return (
    <section>
      <h1>Safety Plan App</h1>
      <p>How are you feeling right now?</p>

      <button onClick={() => setPage("coping")}>
        Overwhelmed
      </button>

      <button onClick={() => setPage("coping")}>
        Stressed
      </button>

      <button onClick={() => setPage("safety")}>
        Low
      </button>

      <button onClick={() => setPage("emergency")}>
        Crisis
      </button>
    </section>
  );
}