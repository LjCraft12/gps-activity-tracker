import { IActivity } from './activity.model'

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    "id": 1,
    "name": "Main bike trails",
    "date": new Date('08/01/2017'),
    "distance": 6.5,
    "comments": "Nice cool early morning run",
    "gpxData": '../../assets/gpx/2672259.gpx'
  },

  {
    "id": 1,
    "name": "Favorite running trails",
    "date": new Date('07/28/2017'),
    "distance": 5.6,
    "comments": "Nice cool early morning run",
    "gpxData": '../../assets/gpx/3258624.gpx'
  },

  {
    "id": 1,
    "name": "Stroll through the park",
    "date": new Date('07/18/2017'),
    "distance": 6.5,
    "comments": "Wonderful walk through the park",
    "gpxData": '../../assets/gpx/3259817.gpx'
  }
];
