import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Row, Col } from 'reactstrap';

import Page from 'components/Page';
import { feedItems } from 'demos/feedPage';

const FeedPage = () => {

  return (
    <Page
      className="FeedPage"
      title="Feed"
      breadcrumbs={[{ name: 'feed', active: true }]}
    >
      <VerticalTimeline layout="1-column">
        {feedItems.map((feed) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: feed.textBackgroundColor, color: '#fff' }}
              contentArrowStyle={{ borderRight: feed.textBackgroundColor }}
              date={feed.date}
              iconStyle={{ background: feed.iconBackgroundColor, color: '#fff' }}
              icon={feed.icon}
            >
              <h4 className="vertical-timeline-element-title">{feed.title}</h4>
              <p>{feed.body}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </Page>
  );
};

export default FeedPage;
