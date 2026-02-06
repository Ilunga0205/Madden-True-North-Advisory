const availability = {
  name: 'availability',
  title: 'Booking Availability',
  type: 'document',
  fields: [
    {
      name: 'workDays',
      title: 'Available Days',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Monday', value: 'Monday'},
          {title: 'Tuesday', value: 'Tuesday'},
          {title: 'Wednesday', value: 'Wednesday'},
          {title: 'Thursday', value: 'Thursday'},
          {title: 'Friday', value: 'Friday'},
          {title: 'Saturday', value: 'Saturday'},
          {title: 'Sunday', value: 'Sunday'},
        ],
        layout: 'grid'
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      options: {
        list: [
          {title: '06:00 AM', value: '06:00'},
          {title: '06:30 AM', value: '06:30'},
          {title: '07:00 AM', value: '07:00'},
          {title: '07:30 AM', value: '07:30'},
          {title: '08:00 AM', value: '08:00'},
          {title: '08:30 AM', value: '08:30'},
          {title: '09:00 AM', value: '09:00'},
          {title: '09:30 AM', value: '09:30'},
          {title: '10:00 AM', value: '10:00'},
          {title: '10:30 AM', value: '10:30'},
          {title: '11:00 AM', value: '11:00'},
          {title: '11:30 AM', value: '11:30'},
          {title: '12:00 PM', value: '12:00'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      options: {
        list: [
          {title: '12:00 PM', value: '12:00'},
          {title: '12:30 PM', value: '12:30'},
          {title: '01:00 PM', value: '13:00'},
          {title: '01:30 PM', value: '13:30'},
          {title: '02:00 PM', value: '14:00'},
          {title: '02:30 PM', value: '14:30'},
          {title: '03:00 PM', value: '15:00'},
          {title: '03:30 PM', value: '15:30'},
          {title: '04:00 PM', value: '16:00'},
          {title: '04:30 PM', value: '16:30'},
          {title: '05:00 PM', value: '17:00'},
          {title: '05:30 PM', value: '17:30'},
          {title: '06:00 PM', value: '18:00'},
          {title: '06:30 PM', value: '18:30'},
          {title: '07:00 PM', value: '19:00'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'slotDuration',
      title: 'Meeting Duration (minutes)',
      type: 'number',
      options: {
        list: [
          {title: '30 minutes', value: 30},
          {title: '45 minutes', value: 45},
          {title: '60 minutes', value: 60},
          {title: '90 minutes', value: 90},
          {title: '120 minutes', value: 120},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'bufferTime',
      title: 'Buffer Between Meetings (minutes)',
      type: 'number',
      options: {
        list: [
          {title: 'No buffer', value: 0},
          {title: '15 minutes', value: 15},
          {title: '30 minutes', value: 30},
          {title: '45 minutes', value: 45},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      options: {
        list: [
          {title: 'South Africa (SAST)', value: 'Africa/Johannesburg'},
          {title: 'Eastern Time (ET)', value: 'America/New_York'},
          {title: 'Central Time (CT)', value: 'America/Chicago'},
          {title: 'Mountain Time (MT)', value: 'America/Denver'},
          {title: 'Pacific Time (PT)', value: 'America/Los_Angeles'},
          {title: 'London (GMT/BST)', value: 'Europe/London'},
        ]
      },
      initialValue: 'Africa/Johannesburg'
    },
    {
      name: 'blockedDates',
      title: 'Blocked Dates (Vacations, Holidays)',
      type: 'array',
      of: [{type: 'date'}],
      description: 'Select dates when you are not available for consultations'
    },
    {
      name: 'maxAdvanceBookingDays',
      title: 'How far in advance can clients book? (days)',
      type: 'number',
      initialValue: 90,
      validation: Rule => Rule.required().min(1).max(365)
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Booking Availability Settings'
      }
    }
  }
}

export default availability