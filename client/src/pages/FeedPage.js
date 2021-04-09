import Page from "components/Page";
import React, { useEffect, useState }  from "react";
import { FaAddressBook, FaCalendar, FaGlassCheers, FaHandshake } from 'react-icons/fa';
import {
  getFeedItems,
  getColorFromType,
  getIconFromType,
  getDescriptionFromType
} from "components/feedComponents/FeedFunctions";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { getColor } from 'utils/colors';
import { formatDate } from 'utils/date';


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
      res.forEach((connection) => {
        const followedUser = connection.followedId;
        const notificationsForUser = followedUser.feed; // [] or [{description: '...'}, ...]
        setFeedItems(feedItems.concat(notificationsForUser));
      })
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
                background: getColorFromType(feed.type),
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: `7px solid ${getColorFromType(feed.type)}` }}
              date={formatDate(feed.createdAt)}
              iconStyle={{
                background: getColorFromType(feed.type),
                color: "#fff",
              }}
              icon={getIconFromType(feed.type)}
            >
              <h4 className="vertical-timeline-element-title">{feed.company}</h4>
              <p>{getDescriptionFromType(feed.type, feed.name, feed.company)}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Page>
  );
};

export default FeedPage;
