export default function Emergency() {
  const handleEmergency = () => {
    const confirmHelp = confirm("Are you sure you want to contact help?");
    if (confirmHelp) {
      alert("Contacting emergency support...");
    }
  };

  return (
    <section>
      <h1>Emergency</h1>
      <button className="emergency-button" onClick={handleEmergency}>
        HELP
      </button>
      <p>Tap for emergency support.</p>
    </section>
  );
}