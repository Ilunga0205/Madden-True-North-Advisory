const insight = {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Leadership', value: 'Leadership'},
          {title: 'Strategy', value: 'Strategy'},
          {title: 'Governance', value: 'Governance'},
          {title: 'Finance', value: 'Finance'},
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Article', value: 'article'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Publish Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'e.g., "8 min read"',
      hidden: ({document}) => document?.type === 'video'
    },
    {
      name: 'duration',
      title: 'Video Duration',
      type: 'string',
      description: 'e.g., "12 min"',
      hidden: ({document}) => document?.type === 'article'
    },
    // NEW: Video source type
    {
      name: 'videoSource',
      title: 'Video Source',
      type: 'string',
      options: {
        list: [
          {title: 'YouTube Link', value: 'youtube'},
          {title: 'Upload Video File', value: 'upload'},
        ],
        layout: 'radio'
      },
      hidden: ({document}) => document?.type === 'article',
      validation: Rule => Rule.custom((videoSource, context) => {
        if (context.document?.type === 'video' && !videoSource) {
          return 'Please select a video source'
        }
        return true
      })
    },
    // YouTube URL field
    {
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
      description: 'Paste the full YouTube URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
      hidden: ({document}) => document?.type === 'article' || document?.videoSource !== 'youtube',
      validation: Rule => Rule.custom((url, context) => {
        if (context.document?.type === 'video' && context.document?.videoSource === 'youtube' && !url) {
          return 'YouTube URL is required when using YouTube as video source'
        }
        if (url && !url.includes('youtube.com') && !url.includes('youtu.be')) {
          return 'Please enter a valid YouTube URL'
        }
        return true
      })
    },
    // NEW: Video file upload field
    {
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      description: 'Upload a video file (MP4, WebM, etc.)',
      options: {
        accept: 'video/*'
      },
      hidden: ({document}) => document?.type === 'article' || document?.videoSource !== 'upload',
      validation: Rule => Rule.custom((file, context) => {
        if (context.document?.type === 'video' && context.document?.videoSource === 'upload' && !file) {
          return 'Video file is required when using upload as video source'
        }
        return true
      })
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true}
        }
      ],
      hidden: ({document}) => document?.type === 'video'
    },
    {
      name: 'isFeatured',
      title: 'Featured Content',
      type: 'boolean',
      description: 'Show this as the featured insight on the page',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
      type: 'type',
      videoSource: 'videoSource'
    },
    prepare(selection) {
      const {title, category, media, type, videoSource} = selection
      const subtitle = type === 'video' 
        ? `${category} • ${type} (${videoSource || 'N/A'})`
        : `${category} • ${type}`
      return {
        title: title,
        subtitle: subtitle,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Publish Date, Newest',
      name: 'dateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}

export default insight