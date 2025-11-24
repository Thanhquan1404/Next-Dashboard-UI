//************************************************ CUSTOMER PAGE ****************************************************/

import { subjectsData } from "./data";

interface ActivityType {
  subject: string, 
  verb: string, 
  object: string,
  date: string,
}

interface CustomerSequenceActivityType {
  customerID: string,
  sequenceActivities: ActivityType[],
}

export const customerSequenceActivity: CustomerSequenceActivityType[] = [
  {
    customerID: "001",
    sequenceActivities: [
      {
        subject: "Santi Cazorla",
        verb: "was added to contacts",
        object: "contacts",
        date: "11:12AM - May 12, 2025",
      },
      {
        subject: "Santi Cazorla",
        verb: "was created by",
        object: "Nguyen Thanh Quan",
        date: "10:12AM - May 12, 2025",
      },
      {
        subject: "Santi Cazorla",
        verb: "was added to contacts",
        object: "contacts",
        date: "11:12AM - May 12, 2025",
      },
      {
        subject: "Santi Cazorla",
        verb: "was created by",
        object: "Nguyen Thanh Quan",
        date: "10:12AM - May 12, 2025",
      },
    ],
  },
]