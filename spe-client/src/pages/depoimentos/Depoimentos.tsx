import Depoimento from "./Depoimento"
import { depoimentos } from '../depoimentos/depoimentos.json'
import '../../styles/local/depoimentos.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Depoimentos = () => {
  return (
    <section className="content-section depoimentos" id="depoimentos">
      <h1 className="depoimentos-title">O que dizem nossas alunas?</h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {depoimentos.map((depoimento) => (
          <SwiperSlide key={depoimento.nome}>
            <Depoimento
              nome={depoimento.nome}
              text={depoimento.text}
              date={depoimento.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Depoimentos;