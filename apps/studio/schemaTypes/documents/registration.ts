import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'registration',
  title: 'Registration',
  type: 'document',

  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Better than day/month/year
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),

    // ✅ Optional: status for admin workflow
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Approved', value: 'approved' },
        ],
      },
    }),
  ],

  // ✅ Fix "Untitled" problem
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'email',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'No Name',
        subtitle: subtitle,
      }
    },
  },
})