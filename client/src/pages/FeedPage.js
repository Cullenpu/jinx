import Page from "components/Page";
import React, { useEffect, useState }  from "react";
import { FaAddressBook, FaCalendar, FaGlassCheers, FaHandshake } from 'react-icons/fa';
import {
  getFeedItems,
  sortFeedItems
} from "components/feedComponents/FeedFunctions";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getColor } from 'utils/colors';
import axios from "axios";

const feedItems = [{
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

const FeedPage = ({ app }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedItems, setFeedItems] = useState([]);
  useEffect(() => {
    getFeedItems().then((res) => {
      const sortedFeedItems = sortFeedItems(res);
      setFeedItems(sortedFeedItems);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Page
      className="FeedPage"
      title="Feed"
      breadcrumbs={[{ name: "feed", active: true }]}
    >
      <VerticalTimeline layout="1-column">
        {feedItems.map((feed, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: feed.textBackgroundColor,
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: feed.textBackgroundColor }}
              date={feed.date}
              iconStyle={{
                background: feed.iconBackgroundColor,
                color: "#fff",
              }}
              icon={feed.icon}
            >
              <h4 className="vertical-timeline-element-title">{feed.title}</h4>
              <p>{feed.body}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Page>
  );
};

export default FeedPage;
