export default function Emergency() {
  const handleEmergency = () => {
    const confirmCall = confirm("Are you sure you want help?");
    if (confirmCall) {
      alert("Contacting emergency help...");
    }
  };

  return (
    <section style={styles.container}>
      <h1>Emergency</h1>

      <button style={styles.button} onClick={handleEmergency}>
        HELP
      </button>

      <p>Tap to contact your emergency support</p>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
  button: {
    marginTop: "30px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    fontSize: "20px",
    border: "none",
  },
};