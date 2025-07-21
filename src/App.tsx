import './App.css';
import photo from './assets/img/01.jpg';

export default function PoliceRecord() {
  return (
    <>
      <div className="caution-overlay"></div>
      <div className="caution-overlay-2"></div>
      <div className="caution-overlay-3"></div>
      <div className="caution-overlay-4"></div>

      <div className="container">
        <h1>POLICE RECORD</h1>
        <div className="profile-content">
          <div className="record-text">
            <div className="record-tag">CASE NUMBER: ABM-029811-22/CL</div>
            <p><strong>Full Name:</strong> Anca Bosa Murusan</p>
            <p><strong>Date of Birth:</strong> JANUARY</p>
            <p><strong>Place of Birth:</strong> ROMANIA</p>
            <p><strong>Alias:</strong> "The Crazy Blonde"</p>
            <p><strong>Case Status:</strong> ACTIVE WITH HOPE FOR REHABILITATION</p>
            <p><strong>Danger Level:</strong> Moderate (except when hungry or angry)</p>

            <h2>Chronological Incident Log</h2>
            <ul>
              <li><strong>Age 5:</strong> Domestic rebellion. Refused to pick up toys, claiming they had the right to freedom. Punishment: no dessert.</li>
              <li><strong>Age 6:</strong> Cookie theft. Shared with the cat, an uncooperative accomplice. Punishment: pantry access revoked.</li>
              <li><strong>Age 7:</strong> Wall graffiti with crayons. Signed it "By Anca". Punishment: forced artistic cleanup.</li>
              <li><strong>Age 8:</strong> Gum trafficking at school. Nickname: Crazy Candy Lady. Punishment: recess cancelled.</li>
              <li><strong>Age 9:</strong> Schoolwork fraud by homework exchange. Punishment: red warning.</li>
              <li><strong>Age 10:</strong> Symptom forgery. Faked the flu. Punishment: diagnosed with dramatic syndrome.</li>
              <li><strong>Age 11:</strong> Verbal aggression towards objects. Yelled at the remote control. Punishment: remote confiscated.</li>
              <li><strong>Age 12:</strong> Diva-level kitchen demands. Punishment: mandatory cold milk.</li>
              <li><strong>Age 13:</strong> Illegal meme circulation in class. Punishment: phone confiscated.</li>
              <li><strong>Age 14:</strong> Classic teenager. "I'm grown up" + "Can I have money?" Punishment: reality check.</li>
              <li><strong>Age 15:</strong> Botanical homicide. Cactus forgotten. Punishment: caring for a decorative rock.</li>
              <li><strong>Age 16:</strong> Unlimited sarcasm. Punishment: diagnosed with chronic irony.</li>
              <li><strong>Age 17:</strong> Fashion crimes. Green Crocs with socks. Punishment: social censorship.</li>
              <li><strong>Age 18:</strong> Selective independence. Adult only when convenient. Punishment: assembling IKEA furniture alone.</li>
              <li><strong>Age 19:</strong> Double life on social media. Busted by mom. Punishment: digital trauma.</li>
              <li><strong>Age 20:</strong> Premature nostalgia. Complains about adulthood while paying for WiFi. Punishment: childhood flashback.</li>
              <li><strong>Age 21:</strong> Uprising against alarms. Sabotaged all phone alarms. Punishment: mandatory unsweetened coffee.</li>
              <li><strong>Age 22:</strong> Routine rebellion. Refused to exercise, claiming "enough is enough". Punishment: forced walk in the park.</li>
              <li><strong>Age 23:</strong> Nap activism. Convinced friends napping is a human right. Punishment: mandatory 30-minute nap.</li>
              <li><strong>Age 24:</strong> Pizza activism. Organized a protest demanding free pizza every Friday. Punishment: pineapple pizza only.</li>
              <li><strong>Age 25:</strong> Diet rebellion. Ate chocolate cake at 3 a.m. Punishment: healthy breakfast required.</li>
              <li><strong>Age 26:</strong> Meme activism. Created a viral meme: "Life is short, laugh while you can." Punishment: temporary social media block.</li>
              <li><strong>Age 27:</strong> Alarm rebellion 2.0. Woke everyone up with party music at 6 a.m. Punishment: alarm confiscated.</li>
              <li><strong>Age 28:</strong> Coffee activism. Convinced coworkers that coffee is a human right. Punishment: decaf for a week.</li>
              <li><strong>Age 29:</strong> Monday rebellion. Refused to work Monday, claiming it's a universal rest day. Punishment: extra tasks every Monday.</li>
              <li><strong>Age 30:</strong> Laughter activism. Organized an event to laugh at life problems. Punishment: mandatory 10-minute laughter daily.</li>
            </ul>

            <h2>Final Observations</h2>
            <p>
              Constant monitoring is recommended. Her mischief record is extensive and growing. High risk of contagious laughter in her environment.
            </p>
          </div>

          <div className="record-photo">
            <img src={photo} alt="Photo of Anca Bosa Murusan" />
          </div>
        </div>
      </div>
    </>
  );
}
