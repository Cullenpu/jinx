import React from 'react';
import { getColor } from 'utils/colors';
import { FaGlassCheers, FaCalendar, FaHandshake, FaAddressBook } from 'react-icons/fa';

export const feedItems = [{
  title: 'Cullen got hired at Amazon!',
  date: 'Mar 2, 2021',
  body: 'Reach out and congratulate him!',
  textBackgroundColor: getColor('primary'),
  iconBackgroundColor: getColor('primary'),
  icon: <FaGlassCheers />
},
{
  title: 'Henry also has an interview with Google.',
  date: 'Mar 2, 2021',
  body: 'His interview time is: Mar 21, 2021',
  textBackgroundColor: getColor('danger'),
  iconBackgroundColor: getColor('danger'),
  icon: <FaCalendar />
},
{
  title: 'You and Yitian applied to the same 35 companies!',
  date: 'Mar 2, 2021',
  body: 'Reach out and compare notes!',
  textBackgroundColor: getColor('success'),
  iconBackgroundColor: getColor('success'),
  icon: <FaAddressBook />
},
{
  title: 'A recruiter from Facebook wants to reach out!',
  date: 'Mar 2, 2021',
  body: 'See what your next steps are!',
  textBackgroundColor: getColor('info'),
  iconBackgroundColor: getColor('info'),
  icon: <FaHandshake />
},
{
  title: 'Windsor got hired at Facebook!',
  date: 'Mar 1, 2021',
  body: 'Reach out and congratulate him!',
  textBackgroundColor: getColor('primary'),
  iconBackgroundColor: getColor('primary'),
  icon: <FaGlassCheers />
},
];