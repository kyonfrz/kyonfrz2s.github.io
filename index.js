const secrets = [
  "Updating the information collected by the database...",
  "Majestic 12 (MJ-12) — a ////// secret committee of scientists, military leaders, and government officials formed in 1947.",
  "July 14, 1954 — classified documents reference unauthorized aerial activity near Roswell.",
  "nasajim108 was right (unknown status)",
  "Teutates was right (Presumed dead 2023-????? with 4 informational videos found on his channel)",
  "Pentagon denies existence of ‘Yankee Blue’ covert surveillance project.",
  "FAA logs show 'Black Cube' sightings over Wright-Patterson AFB remain unexplained.",
  "What if the government could change people’s moral beliefs or stop political dissent through remote control of the brain?",
  "NROL-32: mission name and motto — *Annuit Coeptis*",
  "Don't call my name. It hears you.",
  "Patent US20030171688A1: Remote behavior modification via electromagnetic pulses.",
  "OnlyFans is the modern altar of the Sex Kitten Project — a global theater of sexual programming where thousands line up as willing sacrifices. Here, the body is no longer human; it's engineered bait for mass mental control. Every video doesn’t arouse — it conditions. Every subscription doesn’t support — it enslaves. This platform doesn’t empower you; it strips you down into programmable flesh. You’re not selling content. You’re selling your will. And the worst part is... you think it was your choice.",
  "The food you consume is designed to slowly poison you with chemicals and additives that create dependency and weaken your body. Health systems, disguised as protection, turn you into just another record, increasing surveillance and pharmaceutical dependency to control your body and mind. Meanwhile, social media programs you with notifications and algorithms that reinforce fear, consumerism, and addiction, destroying your mental freedom and turning you into a docile slave of a system controlling every part of your life. Wake up, reject their food, their medicine, and their digital manipulation before it's too late.",
  "Education is being silently destroyed so you don’t think for yourself. They want you to be a distracted consumer, repeating without questioning, and believing false hopes of becoming rich without studying or effort. They sell you the easy dream so you stop learning and settle for empty entertainment. They take away critical thinking and fill you with digital distractions to keep you controlled and docile. Only through education and knowledge can you break free from their manipulation.",
  "The Stargate project was almost completed",
  "Behind every screen, every pill, and every cheap meal lies a calculated design: governments and corporations collaborate to keep the population in a chronic state of apathy and depression. Chemicals in food, addictive algorithms, and psychological campaigns aren’t meant to inform or entertain you, but to kill your will, drain your energy, and turn you into a docile consumer incapable of rebellion.",
  "Project Blue Beam is already unfolding before our eyes. This isn’t a future plan — it’s happening right now. Satellites, 5G and AI platforms are already synchronizing images, sounds and messages across social media, news outlets and apps to induce fear, guilt and submission. We’re watching in real time as ‘accidental’ leaks, lights in the sky and ‘urgent’ news are crafted to break our perception of reality and push us to accept manufactured truths. It’s cold, deliberate and happening today: Project Blue Beam is active now, and most people don’t even notice.",
  "While humanity fights over ideologies, flags and causes, nobody looks at who’s pulling the strings. Social networks, news outlets and ‘spontaneous’ leaders repeat messages designed to polarize and sow hatred. It’s no coincidence we’re more divided than ever: according to leaks, this is the psychological phase of Project Blue Beam — a massive experiment to fracture societies and make them manageable. Every fight we see on the street or online doesn’t arise on its own: it’s a programmed spark to distract us while reality is rewritten right in front of our eyes.",
  "Hqg ri lqirupdwlrq.......... Orrn ehbrqg zkdw wkhb whoo brx"
];

const container = document.getElementById("secrets-container");
const button = document.getElementById("start-button");
const audio = document.getElementById("background-audio");

function start() {
  button.disabled = true; 

  
  audio.pause();
  audio.currentTime = 0;
  audio.play().catch(console.error);

  
  container.innerHTML = "";

  revealSecrets();
}

function revealSecrets() {
  let delay = 0;

  secrets.forEach((text, index) => {
    setTimeout(() => {
      typeText(text);

      
      if (index === secrets.length - 1) {
        const totalTime = text.length * 50;
        setTimeout(() => {
          button.disabled = false;
        }, totalTime + 200);
      }
    }, delay);

    delay += text.length * 50 + 500;
  });
}

function typeText(text) {
  const div = document.createElement("div");
  div.classList.add("secret");
  container.appendChild(div);

  let i = 0;
  const interval = setInterval(() => {
    div.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, 50);
}

function updateClockAndDate() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const date = document.getElementById('date');

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  date.textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();
