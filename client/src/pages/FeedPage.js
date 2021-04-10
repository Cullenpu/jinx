import {
  getColorFromType,
  getDescriptionFromType,
  getFeedItems,
  getIconFromType,
} from "components/feedComponents/FeedFunctions";
import Page from "components/Page";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { formatDate } from "utils/date";

const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedItems, setFeedItems] = useState([]);
  useEffect(() => {
    getFeedItems().then((res) => {
      res.forEach((connection) => {
        const followedUser = connection.followedId;
        const notificationsForUser = followedUser.feed; // [] or [{description: '...'}, ...]
        setFeedItems(feedItems.concat(notificationsForUser));
      });
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
              contentArrowStyle={{
                borderRight: `7px solid ${getColorFromType(feed.type)}`,
              }}
              date={formatDate(feed.createdAt)}
              iconStyle={{
                background: getColorFromType(feed.type),
                color: "#fff",
              }}
              icon={getIconFromType(feed.type)}
            >
              <h4 className="vertical-timeline-element-title">
                {feed.company}
              </h4>
              <p>
                {getDescriptionFromType(feed.type, feed.name, feed.company)}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Page>
  );
};

export default FeedPage;
