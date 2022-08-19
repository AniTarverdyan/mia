import { Checkbox } from "@mui/material";
import "./style.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Home = () => {
  return (
    <div className="home-content">
      <h2>ДОБРО ПОЖАЛОВАТЬ</h2>
      <p>в отель для кошек и собак «Mia» в Казани!</p>
      <div className="underline"></div>
      <div className="about-hotel">
        <p>
          «Mia» — это дом для четвероногих членов Вашей семьи. Работая над
          открытием, мы учли опыт европейских и американских отелей для домашних
          животных. Как только Ваш питомец сделает первые шаги в нашем отеле, он
          окажется в атмосфере уюта и комфорта, познакомится с персоналом,
          горячо любящим всех четвероногих, а Вы сможете выбрать своему любимцу
          номер для передержки с учетом его характера, предпочтений и привычек.
        </p>
      </div>
      <div>
        <div className="hotel-privileges">
          <Checkbox checked color="success" />
          <p>Просторное помещение</p>
        </div>
        <div className="hotel-privileges">
          <Checkbox checked color="success" />
          <p>Видеонаблюдение в каждом номере</p>
        </div>
        <div className="hotel-privileges">
          <Checkbox checked color="success" />
          <p>Естественное освещение</p>
        </div>
        <div className="hotel-privileges">
          <Checkbox checked color="success" />
          <p>Звукоизоляция номеров у собак</p>
        </div>
      </div>
      <div className="home-content-part2">

      </div>
    </div>
  );
};

export default Home;
