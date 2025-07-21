import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import boy from "./images/boy.png";
import bad from "./images/bad.png";
import girl from "./images/girl.png";
import car1 from "./images/car1.png";
import car2 from "./images/car2.png";

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: "'Noto Sans JP', sans-serif",
    background: "linear-gradient(to bottom, #000000, #302b63, #ff0080)",
    color: "white",
    minHeight: "100vh",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "40px",
    gap: "30px",
    flexWrap: "wrap",
  },
  characterCard: {
    width: "400px",
    textAlign: "center",
    
  },
  characterImage: {
    width: "100%",
  },
  characterName: {
    marginTop: "12px",
    fontFamily: "'Bangers', cursive",
    fontSize: "24px",
    color: "#ff6ec7",
  },
  center: {
    flex: 1,
    padding: "0 60px",
    textAlign: "center",
    minWidth: "300px",
  },
  middleCharacter: {
    height: "250px",
    marginBottom: "20px",
  },
  infoHeader: {
    fontSize: "32px",
    fontFamily: "'Bangers', cursive",
    color: "#ffffff",
  },
  infoText: {
    fontSize: "18px",
    color: "#ccc",
  },
  iframe: {
    marginTop: "20px",
    borderRadius: "15px",
    boxShadow: "0 0 15px #ff6ec7",
    width: "100%",
    maxWidth: "560px",
    height: "315px",
  },
  carLeft: {
    position: "absolute",
    bottom: "350px",
    left: "0px",
    width: "420px",
    zIndex: 2, // Arttırıldı
  },
  carRight: {
    position: "absolute",
    bottom: "340px",
    right: "-10px",
    width: "460px",
    zIndex: 2, // Arttırıldı
  }
  
};

const addGoogleFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@500&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

function App() {
  React.useEffect(() => {
    addGoogleFonts();
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={styles.body}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: false },
            collisions: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: {
              value: { min: 0.3, max: 0.6 },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.1,
                sync: false,
                startValue: "random",
              },
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 0.5, max: 1.2 },
              animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div style={styles.container}>
        <div style={styles.characterCard}>
          <img src={boy} alt="İyi Karakter" style={styles.characterImage} />
          <h3 style={styles.characterName}></h3>
        </div>

        <div style={styles.center}>
          <img src={girl} alt="Yardımcı Kız" style={styles.middleCharacter} />
          <div className="info-section">
            <h2 style={styles.infoHeader}>STORY</h2>
            <p style={styles.infoText}>
            In Tokyo’s night streets, every turn is a challenge,
every drift sends a message,
and every victory brings you one step closer to the reckoning.
            </p>
          </div>
          <div className="trailer">
            <h2 style={styles.infoHeader}>TRAILER</h2>
            <iframe
              style={styles.iframe}
              src="link"
              title="TRAILER"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div style={styles.characterCard}>
          <img src={bad} alt="Kötü Karakter" style={styles.characterImage} />
          <h3 style={styles.characterName}></h3>
        </div>
      </div>

      {/* Arabalar */}
      <img src={car2} alt="Sol Araba" style={styles.carLeft} />
      <img src={car1} alt="Sağ Araba" style={styles.carRight} />
    </div>
  );
}

export default App;
