/**
 * S5 component.
 * @module components/Sections/s5
 */

import React, { useState } from 'react';
import { Container, Header, Image, Button } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import moment from 'moment';
import CalendarIcon from 'volto-sevilla-imd-website/icons/calendar.png';
import ArrowRightYellowIcon from 'volto-sevilla-imd-website/icons/arrow-right-yellow.png';
import ArrowLeftYellowIcon from 'volto-sevilla-imd-website/icons/arrow-left-yellow.png';

const S5 = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Juegos Deportivos Municipales: 4ª y 5ª Jornada de Kárate',
      date: '2025-05-03',
      time: 'De 09:00 a 14:00 h.',
      image: '',
    },
    {
      id: 2,
      title: 'Juegos Deportivos Municipales: 4ª y 5ª Jornada de Kárate',
      date: '2025-05-03',
      time: 'De 09:00 a 14:00 h.',
      image: '',
    },
    {
      id: 3,
      title: 'Juegos Deportivos Municipales: 4ª y 5ª Jornada de Kárate',
      date: '2025-05-03',
      time: 'De 09:00 a 14:00 h.',
      image: '',
    },
  ];

  // Calendar navigation
  const navigateMonth = (direction) => {
    setCurrentDate(currentDate.clone().add(direction, 'month'));
  };

  // Generate calendar data
  const generateCalendar = () => {
    const startDay = currentDate.clone().startOf('month').startOf('week');
    const endDay = currentDate.clone().endOf('month').endOf('week');
    const calendar = [];
    const week = [];

    let day = startDay.clone();

    while (day.isSameOrBefore(endDay, 'day')) {
      week.push(day.clone());
      if (week.length === 7) {
        calendar.push(week.slice());
        week.length = 0;
      }
      day.add(1, 'day');
    }

    return calendar;
  };

  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <div className="section-s5">
      {/* <Container> */}
        {/* Title */}
        <div className="section-title">
          {/* <Header as="h2">
            Reserva en tu agenda
          </Header> */}
          <h2>Reserva en tu agenda</h2>
        </div>

        {/* Subtitle */}
        <div className="section-subtitle">
          <div className="icon">
            <Image src={CalendarIcon} alt="Eventos" />
          </div>
          <div className="text">
            Eventos
          </div>
        </div>

        {/* Events Container */}
        <div className="events-container">
          {/* Background Image */}
          <div className="background-image" />

          {/* Events List */}
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-content">
                  <div className="event-image">
                    <Image
                      src={event.image || DefaultImageSVG}
                      alt={event.title || 'Default Event Image'}
                    />
                  </div>
                  <div className="event-details">
                    <div className="event-date">
                      {moment(event.date).format('D [de] MMMM')}.{' '}
                      {event.time}
                    </div>
                    <div className="event-title">
                      {event.title}
                    </div>
                    <UniversalLink
                      href="#"
                      className="event-link"
                    >
                      <span>más información</span>
                      <Image src={ArrowRightYellowIcon} alt="Más información" />
                    </UniversalLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="calendar-container">
              <div className="calendar-header">
                <div className="month-year">
                  {currentDate.format('MMMM YYYY')}
                </div>
                <div className="navigation">
                  <button onClick={() => navigateMonth(-1)} aria-label="Mes anterior">
                    <Image src={ArrowLeftYellowIcon} alt="Anterior" />
                  </button>
                  <button onClick={() => navigateMonth(1)} aria-label="Mes siguiente">
                    <Image src={ArrowRightYellowIcon} alt="Siguiente" />
                  </button>
                </div>
              </div>

              <div className="calendar-grid">
                <div className="weekdays">
                  {weekDays.map((day) => (
                    <div key={day} className="weekday">{day}</div>
                  ))}
                </div>

                <div className="days">
                  {generateCalendar().flat().map((day, index) => (
                    <div
                      key={index}
                      className={`day ${
                        day.isSame(currentDate, 'month')
                          ? 'current-month'
                          : 'other-month'
                      } ${day.isSame(moment(), 'day') ? 'active' : ''}`}
                    >
                      {day.format('D')}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Events Button */}
        <div className="more-events-button">
          <Button className="more-events">
            MÁS EVENTOS
          </Button>
        </div>
      {/* </Container> */}
    </div>
  );
};

export default S5;
