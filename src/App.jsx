import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Smart Flood Water-Level Alert System</h1>
        <p>Assisted with Machine Learning</p>
      </section>

      <section className="problem">
        <h2>About Floods</h2>
        <p>
          Floods are one of the most common natural disasters. They happen when
          too much water covers land that is usually dry. Floods can be caused
          by heavy rainfall, river overflow, storms, or dam failure.Many areas do not have early warning systems, which leads to loss of
          life and property. People often receive flood warnings too late.
        </p>
        <p>
          Our website helps monitor water levels and predict possible floods
          so that people can stay safe and take early precautions.
        </p>
        <img src="data:image/jpeg;base64,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" alt="Flood disasters" />    </section>

      <section id="section">
        <h2>Solution</h2>
        <ul className="solution-points">
          <li>✔ Smart Flood Water-Level Alert System monitors water levels automatically.</li>
          <li>✔ ESP32 microcontroller controls the entire system.</li>
          <li>✔ Ultrasonic sensor measures real-time water level.</li>
          <li>✔ Rain sensor detects rainfall intensity.</li>
          <li>✔ Machine Learning analyzes data to predict possible floods.</li>
          <li>✔ GSM module sends SMS alerts to nearby people and authorities.</li>
        </ul>
      </section>

      <section id="features-section">
        <div className="container">
          <div className="image-box">
            <img
              src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs12040-023-02172-4/MediaObjects/12040_2023_2172_Fig4_HTML.png"
              alt="Flood water level monitoring"
            />
            <h3>Real Time Water Level</h3>
            <p>Separate colors categorize water level during increases</p>
          </div>

          <div className="features-box">
            <h1>Features</h1>
            <div className="box"><span>💧📏</span><p>Real-time water level monitoring</p></div>
            <div className="box"><span>🌧</span><p>Rainfall detection using rain sensor</p></div>
            <div className="box"><span>📱⚠</span><p>SMS alert using GSM module</p></div>
            <div className="box"><span>🧠</span><p>Machine learning flood prediction</p></div>
            <div className="box"><span>💲</span><p>Low cost and easy to install</p></div>
            <div className="box"><span>🔔</span><p>Automatic alert using buzzer and LED</p></div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <h1 className="title">Solution Advantages</h1>
          <div className="features">
            <div className="feature">
              <div className="icon"><i className="fa-solid fa-bell"></i></div>
              <div className="text">
                <h2>Early Warning System</h2>
                <p>Buzzer provides an audible warning and LED gives a visual alert.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon"><i className="fa-solid fa-water"></i></div>
              <div className="text">
                <h2>Real-Time Water Level Monitoring</h2>
                <p>Ultrasonic sensor continuously measures water level.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon"><i className="fa-solid fa-mobile-screen"></i></div>
              <div className="text">
                <h2>SMS Alert System</h2>
                <p>GSM module sends SMS alerts instantly.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon"><i className="fa-solid fa-cloud-rain"></i></div>
              <div className="text">
                <h2>Rainfall Detection</h2>
                <p>Rain sensors detect heavy rainfall.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon"><i className="fa-solid fa-brain"></i></div>
              <div className="text">
                <h2>Machine Learning Prediction</h2>
                <p>ML predicts flood situations.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon"><i className="fa-solid fa-laptop"></i></div>
              <div className="text">
                <h2>Web Dashboard</h2>
                <p>Monitor flood conditions remotely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Dashboard() {
  const [floodData, setFloodData] = useState({
    distance: "No Echo",
    rainStatus: "Unknown",
    risk: "SAFE"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/flood-data'); 
        const data = await response.json();
        setFloodData(data);
      } catch (error) {
        console.error("Backend server offline. Run 'node server.js'", error);
      }
    };

   
    const interval = setInterval(fetchData, 1500);
    return () => clearInterval(interval);
  }, []);

  const isDanger = floodData.risk === "DANGER" || floodData.rainStatus === "Rain";
  const statusColor = isDanger ? "#d32f2f" : "#2e7d32";
  const cardBg = isDanger ? "#ffebee" : "#e8f5e9";

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f5f7fb',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '450px',
        padding: '30px',
        textAlign: 'center',
        borderTop: `8px solid ${statusColor}`,
        transition: 'all 0.4s ease'
      }}>
        <h1 style={{ color: '#1e293b', fontSize: '1.75rem', marginBottom: '8px', marginTop: 0 }}>
          🌊 IoT Flood Monitor
        </h1>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px' }}>
          Live Hardware Telemetry Stream
        </p>

        <div style={{
          backgroundColor: cardBg,
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '24px',
          transition: 'background-color 0.4s ease'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748b', letterSpacing: '0.05em' }}>
            RISK ASSESSMENT
          </span>
          <h2 style={{ color: statusColor, fontSize: '2.2rem', margin: '5px 0 0 0', fontWeight: '800' }}>
            {floodData.risk}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div style={{ border: '1px solid #e2e8f0', padding: '15px', borderRadius: '10px', backgroundColor: '#fafafa' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>
              {floodData.rainStatus === "Rain" ? "🌧️" : "☀️"}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>WEATHER</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#334155', marginTop: '4px' }}>
              {floodData.rainStatus === "Rain" ? "Raining" : "No Rain"}
            </div>
          </div>

          <div style={{ border: '1px solid #e2e8f0', padding: '15px', borderRadius: '10px', backgroundColor: '#fafafa' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>📏</div>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '600' }}>WATER DISTANCE</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#334155', marginTop: '4px' }}>
              {typeof floodData.distance === 'number' ? `${floodData.distance} cm` : floodData.distance}
            </div>
          </div>
        </div>

        {isDanger && (
          <div className="blink-alert" style={{
            backgroundColor: '#d32f2f',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            boxShadow: '0 4px 12px rgba(211,47,47,0.3)',
            animation: 'pulse 1.5s infinite'
          }}>
            ⚠️ EVACUATION ALERT / SMS TRANSMITTED
          </div>
        )}
      </div>
    </div>
  );
}

function Alerts() {
  const [alertHistory, setAlertHistory] = useState([
    { id: 1, time: "10:30 AM", level: "8.9 cm", type: "Danger", status: "Buzzer Active" },
    { id: 2, time: "10:15 AM", level: "5.4 cm", type: "Warning", status: "LED Alert" },
    { id: 3, time: "09:45 AM", level: "3.2 cm", type: "Safe", status: "Monitoring" },
  ]);

  const [dangerCount, setDangerCount] = useState(12);

  useEffect(() => {
    const monitorSystem = () => {
      const simulatedLevel = (Math.random() * 10).toFixed(1);
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      let newEntry = null;

      if (simulatedLevel >= 8.5) {
        newEntry = {
          id: Date.now(),
          time: currentTime,
          level: `${simulatedLevel} cm`,
          type: "Danger",
          status: "Buzzer Active"
        };
        setDangerCount(prev => prev + 1);
      } else if (simulatedLevel > 5) {
        newEntry = {
          id: Date.now(),
          time: currentTime,
          level: `${simulatedLevel} cm`,
          type: "Warning",
          status: "LED Alert"
        };
      }

      if (newEntry) {
        setAlertHistory(prevHistory => [newEntry, ...prevHistory].slice(0, 10));
      }
    };

    const interval = setInterval(monitorSystem, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="alerts-section">
      <div className="alerts-header">
        <h1>
          <span role="img" aria-label="notification bell">🔔</span> Alert History Log
        </h1>
        <p>Detailed record of water level thresholds and ML system triggers.</p>
      </div>

      <div className="stats-container">
        <div className="stat-card danger-stat">
          <h4>Total Danger Events</h4>
          <div className="stat-number">{dangerCount}</div>
        </div>
        <div className="stat-card uptime-stat">
          <h4>System Status</h4>
          <div className="stat-number" style={{ color: "#10b981" }}>ONLINE</div>
        </div>
      </div>

      <div className="table-responsive-wrapper">
        <table className="alerts-table">
          <thead>
            <tr>
              <th>Time Stamp</th>
              <th>Water Level</th>
              <th>ML Risk Level</th>
              <th>Action Taken</th>
            </tr>
          </thead>
          <tbody>
            {alertHistory.map((alert) => (
              <tr key={alert.id} className={`row-${alert.type.toLowerCase()}`}>
                <td style={{ color: "#6b7280" }}>{alert.time}</td>
                <td style={{ fontWeight: "700" }}>{alert.level}</td>
                <td>
                  <span className={`badge badge-${alert.type.toLowerCase()}`}>
                    {alert.type}
                  </span>
                </td>
                <td style={{ fontStyle: "italic", color: "#4b5563" }}>
                  {alert.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="protocol-box">
        <h3>
          <span role="img" aria-label="shield protection">🛡️</span> Smart Protocol Info
        </h3>
        <ul>
          <li><strong>Danger:</strong> Triggered when Level &ge; 8.5cm. Buzzer + SMS Alert sent.</li>
          <li><strong>Warning:</strong> Triggered when Rain is detected or Level &gt; 5cm. Red LED active.</li>
          <li><strong>Safe:</strong> System in monitoring mode. Green LED active.</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    msgtype: "Sensor/Hardware Issue",
    message: ""
  });

  const [status, setStatus] = useState({ message: "", isError: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.message) {
      setStatus({ message: "❌ Please fill out all required fields.", isError: true });
      return;
    }

    console.log("Form payload dispatched successfully:", formData);
    setStatus({ 
      message: "🚀 Report submitted successfully! The engineering team has been notified.", 
      isError: false 
    });

    setFormData({
      fullname: "",
      email: "",
      msgtype: "Sensor/Hardware Issue",
      message: ""
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>
          <span role="img" aria-label="ocean wave">🌊</span> Contact & Support Center
        </h1>
        <p>Smart Flood Water Level Detection & ML Alert System</p>
      </div>

      <div className="contact-grid">
        <div>
          <div className="contact-card">
            <h3>🚨 Emergency Helplines (24/7)</h3>
            <p><strong>Disaster Management:</strong> <span className="text-danger" style={{ fontWeight: "700" }}>108</span></p>
            <p><strong>Police:</strong> 100 | <strong>Fire:</strong> 101</p>
            <hr />
            <h3>👨‍💻 Project Team</h3>
            <p><strong>Email:</strong> floodalert@gmail.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Location:</strong> River Monitoring Area, Himachal Pradesh</p>
          </div>

          <div className="contact-card support-accent">
            <h3>🕒 Availability & Support</h3>
            <ul>
              <li>Real-time ML alerts: <strong>Active 24/7</strong></li>
              <li>Technical support: 9 AM - 6 PM</li>
              <li>Sensor malfunction reporting</li>
              <li>Data accuracy verification</li>
            </ul>
          </div>
        </div>

        <div className="contact-card">
          <h3>✉ Send us a Message</h3>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "20px" }}>
            Report technical issues or request system access.
          </p>
          
          {status.message && (
            <div className={`form-status ${status.isError ? "status-box-error" : "status-box-success"}`}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input id="fullname" type="text" placeholder="Enter your name" className="contact-input" value={formData.fullname} onChange={handleChange} />
            
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="email@example.com" className="contact-input" value={formData.email} onChange={handleChange} />
            
            <label htmlFor="msgtype">Message Type</label>
            <select id="msgtype" className="contact-input" value={formData.msgtype} onChange={handleChange}>
              <option>Sensor/Hardware Issue</option>
              <option>ML Prediction Feedback</option>
              <option>Subscription/Alert Issues</option>
              <option>Other</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Describe the issue or feedback..." className="contact-input" style={{ height: "130px", resize: "none" }} value={formData.message} onChange={handleChange} />
            
            <button type="submit" className="btn-submit">Submit Report</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <div className="logo">Flood Detection</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Live Data</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <p>© 2026 Flood Detection System</p>
      </footer>
    </Router>
  );
}